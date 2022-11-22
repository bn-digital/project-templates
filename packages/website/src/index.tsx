import { DevSupport } from '@react-buddy/ide-toolbox'
import Client from 'react-dom/client'

import App from './components/app'
import { ComponentPreviews, useInitial } from './dev'

const rootElement = document.querySelector('#root') as HTMLElement
Client.createRoot(rootElement).render(
  <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
    <App />
  </DevSupport>,
)
