import {
  type ApolloClientOptions,
  type NormalizedCacheObject,
  type ServerError,
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { type ApolloProviderProps } from '@apollo/client/react/context'
import { type FC, type PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useLocalStorage, useNetworkState, useToggle } from 'react-use'

import introspection from '../../graphql'
import router from '../../pages'
import { withAuth } from './Auth'

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

const ProtectedPages: FC = withAuth(() => <RouterProvider router={router} />)

const ApiProvider: FC<Partial<ApolloProviderProps<NormalizedCacheObject>>> = ({ children }) => {
  const { online } = useNetworkState()
  const [offline, setOffline] = useState<boolean>(!online)
  useEffect(() => {
    fetch(apiUrl, { method: 'POST', body: JSON.stringify({ query: '{__typename}' }), headers: { 'Content-Type': 'application/json' } })
      .then(response => setOffline(!response.ok))
      .catch(() => setOffline(true))
  }, [])
  return (
    <ContextProvider app={{ api: !offline }}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </ContextProvider>
  )
}

const App: FC = () => (
  <ApiProvider>
    <ContextProvider {...defaultValue}>
      <ProtectedPages />
    </ContextProvider>
  </ApiProvider>
)

const useApp = () => useContext(Context)

export { App, ContextProvider, useApp }

export default App
