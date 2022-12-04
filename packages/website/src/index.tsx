import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/app'
import reportWebVitals from './web-vitals'

const rootElement = document.querySelector('#root') as HTMLElement

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

reportWebVitals()
