import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { createContext, FC, PropsWithChildren, ReactNode, useContext } from 'react'
import { DataBrowserRouter, ScrollRestoration } from 'react-router-dom'
import { useLocalStorage, useToggle } from 'react-use'

import introspection from '../../graphql'
import routes from '../../pages'
import { ErrorBoundary } from './ErrorBoundary'
import { LocaleProvider } from './Locale'

type AppProps = {
  burger: { opened: boolean; toggle: VoidFunction }
  user: { authenticated: boolean | null; role: string | null }
}

const defaultValue: AppProps = {
  burger: { opened: false, toggle: () => undefined },
  user: { authenticated: null, role: null },
}

const Context = createContext<AppProps>(defaultValue)

const ContextProvider: FC<PropsWithChildren<Partial<ReactNode>>> = ({ children }) => {
  const [opened, toggle] = useToggle(false)
  const [token] = useLocalStorage('jwtToken')

  return <Context.Provider value={{ ...defaultValue, user: { authenticated: !!token, role: 'USER' }, burger: { opened, toggle } }}>{children}</Context.Provider>
}

const client = new ApolloClient({
  link: createHttpLink({
    uri: import.meta.env.WEBSITE_API_URL ?? '/graphql',
    headers: { Authorization: localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : '' },
  }),
  connectToDevTools: import.meta.env.DEV,
  queryDeduplication: true,
  cache: new InMemoryCache({
    resultCaching: import.meta.env.PROD,
    possibleTypes: introspection.possibleTypes,
  }),
})

function withLocalization(Wrapped: FC<PropsWithChildren>): FC<PropsWithChildren> {
  return props => (
    <LocaleProvider>
      <Wrapped {...props} />
    </LocaleProvider>
  )
}

const App: FC = () => (
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <ContextProvider>
        <DataBrowserRouter routes={routes} fallbackElement={null}>
          <ScrollRestoration />
        </DataBrowserRouter>
      </ContextProvider>
    </ApolloProvider>
  </ErrorBoundary>
)

const useApp = () => useContext<AppProps>(Context)

export default withLocalization(App)

export { App, useApp }
