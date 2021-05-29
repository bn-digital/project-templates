import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const App: FC = ({ children }) => <Router>{children}</Router>

export { App }
