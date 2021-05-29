import { render } from 'react-dom'
import { App } from './containers'
import reportWebVitals from './reportWebVitals'
import './index.scss'

const element = <App />
const container = window.document.getElementById('root')

render(element, container)

reportWebVitals()
