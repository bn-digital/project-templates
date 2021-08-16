import { hydrate } from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { init } from '@sentry/react'
import { StrictMode, FC } from 'react'
import { ApiProvider, RoutingProvider, ViewProvider, MetaProvider } from './components/app'
import { routeMap } from './pages'

const dsn = process.env.REACT_APP_SENTRY_DSN ?? undefined
dsn &&
  init({
    enabled: process.env.NODE_ENV === 'production',
    dsn: process.env.REACT_APP_SENTRY_DSN,
  })

const App: FC = ({ children }) => (
  <StrictMode>
    <ApiProvider>
      <MetaProvider>
        <ViewProvider>
          <RoutingProvider routeMap={routeMap}>{children}</RoutingProvider>
        </ViewProvider>
      </MetaProvider>
    </ApiProvider>
  </StrictMode>
)

const element = <App />
const container = window.document.getElementById('root')
if (container) {
  hydrate(element, container)
  reportWebVitals()
} else {
  console.error('Failed to find root element <div id="root"></div> in DOM tree.')
}
