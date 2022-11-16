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
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
import { sha256 } from 'crypto-hash'
import { createContext, FC, memo, PropsWithChildren, useContext } from 'react'
import { useLocalStorage, useToggle } from 'react-use'

import introspection from '../../graphql'
import Pages from '../../pages'
import { withAuth } from './Auth'
import { LocaleProvider } from './Locale'

type AppProps = {
  burger: { opened: boolean; toggle: VoidFunction }
  user: { authenticated: boolean | null; role: string | null }
}

const defaultValue: AppProps = {
  burger: { opened: false, toggle: () => ({}) },
  user: { authenticated: null, role: null },
}

const Context = createContext<AppProps>(defaultValue)

type ContextProviderProps<T = JSX.IntrinsicAttributes> = PropsWithChildren<T>

const ContextProvider: FC<ContextProviderProps> = ({ children, ...props }) => {
  const [opened, toggle] = useToggle(false)
  const [token] = useLocalStorage('jwtToken')

  return (
    <Context.Provider value={{ ...defaultValue, user: { authenticated: !!token, role: 'USER' }, burger: { opened, toggle } }} {...props}>
      {children}
    </Context.Provider>
  )
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log(graphQLErrors)
  console.log(networkError)
  if ((networkError as ServerError).statusCode === 401) {
    localStorage.removeItem('jwtToken')
  }
})
const link: ApolloLink = ApolloLink.from([
  errorLink,
  createHttpLink({
    uri: import.meta.env.WEBSITE_API_URL ?? '/graphql',
    headers: localStorage.getItem('jwtToken')
      ? {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        }
      : {},
  }),
  createPersistedQueryLink({ sha256 }),
])

const clientOptions: ApolloClientOptions<NormalizedCacheObject> = {
  link,
  connectToDevTools: import.meta.env.DEV,
  queryDeduplication: true,
  assumeImmutableResults: true,
  cache: new InMemoryCache({
    resultCaching: import.meta.env.PROD,
    possibleTypes: introspection.possibleTypes,
  }),
}

const client = new ApolloClient(clientOptions)

const LocalizedApp: FC = () => {
  return (
    <ApolloProvider client={client}>
      <LocaleProvider>
        <ContextProvider>
          <ProtectedPages />
        </ContextProvider>
      </LocaleProvider>
    </ApolloProvider>
  )
}

const ProtectedPages: FC = withAuth(Pages)

const App: FC = () => (
  <ApolloProvider client={client}>
    <ContextProvider>
      <ProtectedPages />
    </ContextProvider>
  </ApolloProvider>
)

const useApp = () => useContext<AppProps>(Context)

export { App, ContextProvider, LocalizedApp, useApp }

export default memo(App)
