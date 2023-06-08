import { createRoot } from "react-dom/client"

import { StrictMode } from "react"
import App from "./components/app"

const rootElement = document.querySelector("#root") as HTMLElement

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
