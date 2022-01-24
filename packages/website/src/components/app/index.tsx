import { ConfigProvider } from 'antd'
import { createContext, Dispatch, FC, SetStateAction, useContext, useState, VFC } from 'react'
import { ClientProvider } from '@bn-digital/graphql-client'
import I18nProvider from '@bn-digital/react-i18n'
import { UIProvider } from '@bn-digital/antd'
import { RoutingProvider } from '@bn-digital/react'
import pages from 'src/pages'
import { useToggle } from 'react-use'
import 'src/components/app/index.less'

type AppTheme = string | 'dark' | 'light' | 'default'

type Size = 'small' | 'middle' | 'large'

type AppProps = {
  i18n: { locale: string; setLocale: Dispatch<SetStateAction<string>> }
  burger: { opened: boolean; toggle: VoidFunction }
  ui: { theme: AppTheme; size: Size }
  user: { authenticated: boolean | null; role: string | null }
}

const defaultValue: AppProps = {
  i18n: { locale: 'en', setLocale: () => undefined },
  burger: { opened: false, toggle: () => undefined },
  ui: { theme: 'default', size: 'middle' },
  user: { authenticated: null, role: null },
}

const Context = createContext<AppProps>(defaultValue)

const ContextProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState(defaultValue.i18n.locale)
  const [opened, toggle] = useToggle(false)
  return <Context.Provider value={{ ...defaultValue, i18n: { locale, setLocale }, burger: { opened, toggle } }}>{children}</Context.Provider>
}

const App: VFC = () => (
  <ContextProvider>
    <ClientProvider production={import.meta.env.PROD}>
      <Context.Consumer>
        {({ i18n: { locale }, ui: { size } }) => (
          <I18nProvider locale={locale}>
            <UIProvider size={size} locale={locale}>
              <RoutingProvider routes={pages} />
            </UIProvider>
          </I18nProvider>
        )}
      </Context.Consumer>
    </ClientProvider>
  </ContextProvider>
)

const useApp = () => useContext<AppProps>(Context)

export { App, useApp, Context as AppContext }
