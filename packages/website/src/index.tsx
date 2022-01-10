import { VFC } from 'react'
import { renderApp, RoutingProvider } from '@bn-digital/react'
import UIProvider from '@bn-digital/antd'
import { ClientProvider } from '@bn-digital/graphql-client'
import I18nProvider from '@bn-digital/react-i18n'
import pages from './pages'

const Root: VFC = () => (
  <ClientProvider production={import.meta.env.PROD}>
    <I18nProvider>
      <UIProvider>
        <RoutingProvider routes={pages} />
      </UIProvider>
    </I18nProvider>
  </ClientProvider>
)

renderApp(<Root />, { strict: true })
