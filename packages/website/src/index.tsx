import { renderApp } from '@bn-digital/react'
import { initMarker, initSentry, reportWebVitals } from '@bn-digital/sdk'
import { App } from 'src/components/app'

await initMarker({ enabled: import.meta.env.PROD, destination: import.meta.env.WEBSITE_MARKER_ID })
initSentry({ enabled: import.meta.env.PROD, dsn: import.meta.env.WEBSITE_SENTRY_DSN })
renderApp(App, { strict: false })
reportWebVitals()
