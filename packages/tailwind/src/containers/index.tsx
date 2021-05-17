import { StrictMode, Suspense, FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routing } from './Routing'

const Loader: FC = () => <>Loading...</>

const App: FC = ({ children }) => (
  <StrictMode>
    <Router>
      <Suspense fallback={<Loader />}>
        <Routing>{children}</Routing>
      </Suspense>
    </Router>
  </StrictMode>
)

export { App }
