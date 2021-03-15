import { FC } from 'react'
import { UI } from '@app/website/src/containers/UI'
import { BrowserRouter as Router } from 'react-router-dom'

const App: FC = ({ children }) => (
  <Router>
    <UI>{children}</UI>
  </Router>
)

export { App }
