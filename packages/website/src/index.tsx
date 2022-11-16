import { initMarker, reportWebVitals } from '@bn-digital/sdk'
import { DevSupport } from '@react-buddy/ide-toolbox'
import ReactDOM from 'react-dom'

import App from './components/app'
import { ComponentPreviews, useInitial } from './dev'

if (import.meta.env.PROD) {
  initMarker({ enabled: import.meta.env.PROD, destination: import.meta.env.WEBSITE_MARKER_ID }).then()
}

const rootElement = document.querySelector('#root') as HTMLElement
ReactDOM.render(
  <DevSupport devmode={true} ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
    <App />
  </DevSupport>,
  rootElement,
)
reportWebVitals()
