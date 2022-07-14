import './index.less'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import locale from 'antd/es/locale/en_US'
import type { Locale } from 'antd/es/locale-provider'
import { createContext, Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction, useContext, useState } from 'react'
import { DataBrowserRouter } from 'react-router-dom'
import { useToggle } from 'react-use'
import { LocaleProvider } from 'src/components/app/Locale'

import introspection from '../../graphql'
import routes from '../../pages'
import { Loader } from '../layout/Loader'
import { ErrorBoundary } from './ErrorBoundary'

type AppTheme = string | 'dark' | 'light' | 'default'

type Size = 'small' | 'middle' | 'large'

type AppProps = {
  i18n: { locale: Locale; setLocale: Dispatch<SetStateAction<Locale>> }
  burger: { opened: boolean; toggle: VoidFunction }
  ui: { theme: AppTheme; size: Size }
  user: { authenticated: boolean | null; role: string | null }
}
const defaultValue: AppProps = {
  i18n: { locale: locale, setLocale: () => undefined },
  burger: { opened: false, toggle: () => undefined },
  ui: { theme: 'default', size: 'middle' },
  user: { authenticated: null, role: null },
}

const Context = createContext<AppProps>(defaultValue)

const ContextProvider: FC<PropsWithChildren<Partial<ReactNode>>> = ({ children }) => {
  const [locale, setLocale] = useState(defaultValue.i18n.locale)
  const [opened, toggle] = useToggle(false)
  return <Context.Provider value={{ ...defaultValue, i18n: { locale, setLocale }, burger: { opened, toggle } }}>{children}</Context.Provider>
}

const client = new ApolloClient({
  uri: '/graphql',
  headers: { Authorization: localStorage.getItem('jwtToken') ? `Bearer ${localStorage.getItem('jwtToken')}` : '' },
  connectToDevTools: import.meta.env.DEV,
  queryDeduplication: true,
  cache: new InMemoryCache({
    resultCaching: import.meta.env.PROD,
    possibleTypes: introspection.possibleTypes,
    typePolicies: { Post: { keyFields: ['slug'] } },
  }),
})

const App: FC = () => (
  <ContextProvider>
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <LocaleProvider>
          <DataBrowserRouter routes={routes} fallbackElement={<Loader />} />
        </LocaleProvider>
      </ApolloProvider>
    </ErrorBoundary>
  </ContextProvider>
)

const useApp = () => useContext<AppProps>(Context)

export { App, Context as AppContext, useApp }
