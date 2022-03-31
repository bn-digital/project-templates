import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from 'src/components/app'

const element = document.querySelector('#root')
element &&
  createRoot(element).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
