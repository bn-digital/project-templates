import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createContext, FC, PropsWithChildren, ReactNode, useContext } from 'react'
import { DataBrowserRouter, ScrollRestoration } from 'react-router-dom'
import { useLocalStorage, useToggle } from 'react-use'

import introspection from '../../graphql'
import routes from '../../pages'
import { LocaleProvider } from '../app/Locale'
import { Loader } from '../layout/Loader'
import { ErrorBoundary } from './ErrorBoundary'

type AppTheme = string | 'dark' | 'light' | 'default'

type Size = 'small' | 'middle' | 'large'

type AppProps = {
  burger: { opened: boolean; toggle: VoidFunction }
  ui: { theme: AppTheme; size: Size }
  user: { authenticated: boolean | null; role: string | null }
}

const defaultValue: AppProps = {
  burger: { opened: false, toggle: () => undefined },
  ui: { theme: 'default', size: 'middle' },
  user: { authenticated: null, role: null },
}

const Context = createContext<AppProps>(defaultValue)

const ContextProvider: FC<PropsWithChildren<Partial<ReactNode>>> = ({ children }) => {
  const [opened, toggle] = useToggle(false)
  const [token] = useLocalStorage('jwtToken')

  return <Context.Provider value={{ ...defaultValue, user: { authenticated: !!token, role: 'USER' }, burger: { opened, toggle } }}>{children}</Context.Provider>
}

const client = new ApolloClient({
  uri: import.meta.env.WEBSITE_API_URL ?? '/graphql',
  headers: { Authorization: localStorage.getItem('jwtToken') ? `Bearer ${localStorage.getItem('jwtToken')}` : '' },
  connectToDevTools: import.meta.env.DEV,
  queryDeduplication: true,
  cache: new InMemoryCache({
    resultCaching: import.meta.env.PROD,
    possibleTypes: introspection.possibleTypes,
  }),
})

const App: FC = () => (
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <ContextProvider>
        <LocaleProvider>
          <DataBrowserRouter routes={routes} fallbackElement={<Loader />}>
            <ScrollRestoration />
          </DataBrowserRouter>
        </LocaleProvider>
      </ContextProvider>
    </ApolloProvider>
  </ErrorBoundary>
)

const useApp = () => useContext<AppProps>(Context)

export { App, useApp }
