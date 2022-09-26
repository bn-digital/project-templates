import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
import { sha256 } from 'crypto-hash'
import { createContext, FC, PropsWithChildren, ReactNode, useContext } from 'react'
import { useLocalStorage, useToggle } from 'react-use'

import introspection from '../../graphql'
import Pages from '../../pages'
import { ErrorBoundary } from './ErrorBoundary'
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

const ContextProvider: FC<PropsWithChildren<Partial<ReactNode>>> = ({ children }) => {
  const [opened, toggle] = useToggle(false)
  const [token] = useLocalStorage('jwtToken')

  return <Context.Provider value={{ ...defaultValue, user: { authenticated: !!token, role: 'USER' }, burger: { opened, toggle } }}>{children}</Context.Provider>
}

const client = new ApolloClient({
  link: createPersistedQueryLink({ sha256 }).concat(
    createHttpLink({
      uri: import.meta.env.WEBSITE_API_URL ?? '/graphql',
      headers: { Authorization: `Bearer  ${JSON.parse(localStorage.getItem('jwtToken') || '{}')}` },
    }),
  ),
  connectToDevTools: import.meta.env.DEV,
  queryDeduplication: true,
  cache: new InMemoryCache({
    resultCaching: import.meta.env.PROD,
    possibleTypes: introspection.possibleTypes,
  }),
})

const LocalizedApp: FC = () => {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <LocaleProvider>
          <ContextProvider>
            <Pages />
          </ContextProvider>
        </LocaleProvider>
      </ApolloProvider>
    </ErrorBoundary>
  )
}

const App: FC = () => (
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <ContextProvider>
        <Pages />
      </ContextProvider>
    </ApolloProvider>
  </ErrorBoundary>
)

const useApp = () => useContext<AppProps>(Context)

export default LocalizedApp

export { App, useApp }
