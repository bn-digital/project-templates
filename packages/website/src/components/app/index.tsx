import {
  ApolloClient,
  ApolloClientOptions,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  ServerError,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { ApolloProviderProps } from '@apollo/client/react/context'
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useEffectOnce, useLocalStorage, useToggle } from 'react-use'

import introspection from '../../graphql'
import router from '../../pages'
import { withAuth } from './Auth'
import { LocaleProvider } from './Locale'

type AppProps = {
  burger: { opened: boolean; toggle: VoidFunction }
  user: { authenticated: boolean | null; role: string | null }
  app: { api: boolean }
}

const defaultValue: AppProps = {
  burger: { opened: false, toggle: () => ({}) },
  user: { authenticated: null, role: null },
  app: { api: false },
}

const Context = createContext(defaultValue)

type ContextProviderProps = PropsWithChildren<Partial<AppProps>>

const useToken = () => useLocalStorage('jwtToken')

const ContextProvider: FC<ContextProviderProps> = ({ children, ...props }) => {
  const [opened, toggle] = useToggle(false)
  const [token] = useToken()

  return (
    <Context.Provider value={{ ...defaultValue, ...props, burger: { opened, toggle }, user: { authenticated: !!token, role: 'USER' } }}>
      {children}
    </Context.Provider>
  )
}

const errorLink = onError(errorResponse => {
  if ((errorResponse?.networkError as ServerError)?.statusCode === 401) {
    localStorage.removeItem('jwtToken')
    window.location.reload()
  }
})

const apiUrl: string = import.meta.env.WEBSITE_API_URL ?? '/graphql'

const link: ApolloLink = ApolloLink.from([
  errorLink,
  createHttpLink({
    uri: apiUrl,
    headers: localStorage.getItem('jwtToken')
      ? {
          Authorization: ['Bearer', localStorage.getItem('jwtToken')].join(' '),
        }
      : {},
  }),
])

const clientOptions: ApolloClientOptions<NormalizedCacheObject> = {
  link,
  connectToDevTools: import.meta.env.DEV,
  queryDeduplication: true,
  cache: new InMemoryCache({
    resultCaching: import.meta.env.PROD,
    possibleTypes: introspection.possibleTypes,
  }),
}

const apolloClient = new ApolloClient(clientOptions)

const LocalizedApp: FC = () => {
  return (
    <ApiProvider>
      <LocaleProvider>
        <ContextProvider>
          <ProtectedPages />
        </ContextProvider>
      </LocaleProvider>
    </ApiProvider>
  )
}

const ProtectedPages: FC = withAuth(() => <RouterProvider router={router} />)

const ApiProvider: FC<Partial<ApolloProviderProps<NormalizedCacheObject>>> = ({ children }) => {
  const [offline, setOffline] = useState<boolean>()
  useEffectOnce(() => {
    fetch(apiUrl, { method: 'POST', body: JSON.stringify({ query: '{__typename}' }), headers: { 'Content-Type': 'application/json' } })
      .then(response => setOffline(!response.ok))
      .catch(() => setOffline(true))
  })
  if (typeof offline !== 'boolean') return null
  console.log('offline', offline)
  return (
    <ContextProvider app={{ api: !offline }}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>{' '}
    </ContextProvider>
  )
  // return !offline ? <ApolloProvider client={apolloClient}>{children}</ApolloProvider> : <Fragment>{children}</Fragment>
}

const App: FC = () => (
  <ContextProvider {...defaultValue}>
    <ApiProvider>
      <ProtectedPages />
    </ApiProvider>
  </ContextProvider>
)

const useApp = () => useContext<AppProps>(Context)

export { App, ContextProvider, LocalizedApp, useApp }

export default App
