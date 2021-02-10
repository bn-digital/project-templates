import React from 'react'
import ReactDOM from 'react-dom'
import { register, unregister } from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { App } from './containers/App'

ReactDOM.render(<App />, document.getElementById('root'))
process.env.NODE_ENV === 'production' ? register() : unregister()
reportWebVitals()
