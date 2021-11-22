import { StrictMode, VFC } from 'react'
import { render } from 'react-dom'
import { reportWebVitals } from './reportWebVitals'
import { register, unregister } from './serviceWorkerRegistration'
import App from './components/app'
import Pages from './pages'

const Root: VFC = () => (
  <StrictMode>
    <App>
      <Pages />
    </App>
  </StrictMode>
)

const container = document.querySelector('#root')

if (container) {
  render(<Root />, container)
  reportWebVitals()
  process.env.NODE_ENV === 'production' ? register() : unregister()
} else {
  console.error('Failed to find root element <div id="root"></div> in DOM tree.')
}
