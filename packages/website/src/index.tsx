// import { createRoot } from 'react-dom/client'
import { render } from 'react-dom'
import { App } from 'src/components/app'

const rootSelector = '#root' as const
const container = document.querySelector(rootSelector)

// TODO: Migrate to React 18 when Antd fix compatibility
// container && createRoot(container).render(<App />)

container && render(<App />, container)
