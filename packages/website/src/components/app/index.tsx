import './index.less'

import { ClientProvider } from '@bn-digital/graphql-client'
import locale from 'antd/es/locale/en_US'
import type { Locale } from 'antd/es/locale-provider'
import { createContext, Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction, useContext, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { DataBrowserRouter } from 'react-router-dom'
import { useToggle } from 'react-use'

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
  i18n: { locale, setLocale: () => undefined },
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

const App: FC = () => (
  <ContextProvider>
    <ErrorBoundary>
      <ClientProvider production={import.meta.env.PROD}>
        <Context.Consumer>
          {({ i18n }) => (
            <IntlProvider locale={i18n.locale.locale} defaultLocale={defaultValue.i18n.locale.locale} messages={{}}>
              <DataBrowserRouter routes={routes} fallbackElement={<Loader />} />
            </IntlProvider>
          )}
        </Context.Consumer>
      </ClientProvider>
    </ErrorBoundary>
  </ContextProvider>
)

const useApp = () => useContext<AppProps>(Context)

export { App, Context as AppContext, useApp }
