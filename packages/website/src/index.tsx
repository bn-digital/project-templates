import ReactDOM from 'react-dom/client'

import App from './components/app'

const rootElement = document.querySelector('#root') as HTMLElement
ReactDOM.createRoot(rootElement).render(<App />)
