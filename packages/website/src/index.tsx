// import { createRoot } from 'react-dom/client'
import { initMarker } from '@bn-digital/sdk'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from 'src/components/app'

await initMarker({ enabled: import.meta.env.PROD, destination: import.meta.env.WEBSITE_MARKER_ID })
const rootSelector = '#root' as const
const container = document.querySelector(rootSelector)

// TODO: Migrate to React 18 when Antd fix compatibility
// container && createRoot(container).render(<App />)

container &&
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    container,
  )
