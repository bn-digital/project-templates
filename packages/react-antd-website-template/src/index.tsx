import { render } from 'react-dom'
import App from './containers'
import reportWebVitals from './reportWebVitals'
import { init } from '@sentry/react'

const dsn = process.env.REACT_APP_SENTRY_DSN ?? undefined
dsn &&
  init({
    enabled: process.env.NODE_ENV === 'production',
    dsn: process.env.REACT_APP_SENTRY_DSN,
  })

const rootElement = window.document.getElementById('root')
render(<App />, rootElement)
reportWebVitals()
