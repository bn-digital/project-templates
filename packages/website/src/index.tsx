import { reportWebVitals } from '@bn-digital/sdk'
import { createRoot } from 'react-dom/client'

import { App } from './components/app'

const rootElement = document.querySelector('#root')
const root = createRoot(rootElement as HTMLElement)
root.render(<App />)
reportWebVitals()
