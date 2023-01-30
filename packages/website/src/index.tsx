import { createRoot } from 'react-dom/client'

import App from './components/app'

const rootElement = document.querySelector('#root') as HTMLElement

createRoot(rootElement).render(<App />)
