import { StrictMode, VFC } from 'react'
import { createRoot } from 'react-dom'
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
  const root = createRoot(container)
  root.render(<Root />)
}
