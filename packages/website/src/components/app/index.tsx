import { createContext, Dispatch, FC, SetStateAction, useContext, useState, VFC } from 'react'
import { ClientProvider } from '@bn-digital/graphql-client'
import I18nProvider from '@bn-digital/react-i18n'
import UIProvider from '@bn-digital/antd'
import { RoutingProvider } from '@bn-digital/react'
import pages from 'src/pages'
import { useToggle } from 'react-use'
import 'src/components/app/index.less'

type AppProps = { settings: { locale: string; setLocale: Dispatch<SetStateAction<string>> }; burger: { opened: boolean; toggle: VoidFunction } }

const defaultValue = { settings: { locale: 'en', setLocale: () => undefined }, burger: { opened: false, toggle: () => undefined } }

const Context = createContext<AppProps>(defaultValue)

const ContextProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState(defaultValue.settings.locale)
  const [opened, toggle] = useToggle(false)
  return <Context.Provider value={{ settings: { locale, setLocale }, burger: { opened, toggle } }}>{children}</Context.Provider>
}

const App: VFC = () => (
  <ContextProvider>
    <ClientProvider production={import.meta.env.PROD}>
      <Context.Consumer>
        {({ settings: { locale } }) => (
          <I18nProvider locale={locale}>
            <UIProvider locale={locale}>
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
