import { render } from 'react-dom'
import { reportWebVitals } from './reportWebVitals'
import { FC, StrictMode } from 'react'
import { ApiProvider, MetaProvider, RoutingProvider, ViewProvider } from './components/app'
import { routeMap } from './pages'

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
const container = document.querySelector('#root')
if (container) {
  render(element, container)
  reportWebVitals()
} else {
  console.error('Failed to find root element <div id="root"></div> in DOM tree.')
}
