import './index.less'

import { UIProvider } from '@bn-digital/antd'
import { ClientProvider } from '@bn-digital/graphql-client'
import { createContext, Dispatch, FC, SetStateAction, useContext, useState, VFC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useToggle } from 'react-use'
import Pages from 'src/pages'

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
      <UIProvider locale={'en'}>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </UIProvider>
    </ClientProvider>
  </ContextProvider>
)

const useApp = () => useContext<AppProps>(Context)

export { App, Context as AppContext, useApp }
