import { initMarker, reportWebVitals } from '@bn-digital/sdk'
import { createRoot } from 'react-dom/client'

import { default as App } from './components/app'

initMarker({ enabled: import.meta.env.PROD, destination: import.meta.env.WEBSITE_MARKER_ID }).then()

const rootElement = window.document.querySelector('#root')
const root = createRoot(rootElement as HTMLElement)
root.render(<App />)
reportWebVitals()
