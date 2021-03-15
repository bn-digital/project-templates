import { render } from 'react-dom'
import { App } from './containers'
import reportWebVitals from './reportWebVitals'

const rootElement = window.document.getElementById('root')

render(<App />, rootElement)
reportWebVitals()
