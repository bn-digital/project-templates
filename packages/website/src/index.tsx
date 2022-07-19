import { createRoot } from 'react-dom/client'

import { App } from './components/app'

createRoot(document.querySelector('#root') as HTMLElement).render(<App />)
