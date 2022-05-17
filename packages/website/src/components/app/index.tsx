import './index.less'

import { ClientProvider } from '@bn-digital/graphql-client'
import { ConfigProvider } from 'antd'
import type { Locale } from 'antd/es/locale-provider'
import locale from 'antd/lib/locale/en_US'
import { createContext, Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction, useContext, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import { useToggle } from 'react-use'
import Pages from 'src/pages'
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
    <ClientProvider production={import.meta.env.PROD}>
      <Context.Consumer>
        {({ i18n }) => (
          <ConfigProvider locale={i18n.locale}>
            <IntlProvider locale={i18n.locale.locale} defaultLocale={defaultValue.i18n.locale.locale} messages={{}}>
              <BrowserRouter>
                <Pages />
              </BrowserRouter>
            </IntlProvider>
          </ConfigProvider>
        )}
      </Context.Consumer>
    </ClientProvider>
  </ContextProvider>
)

const useApp = () => useContext<AppProps>(Context)

export { App, Context as AppContext, useApp }
