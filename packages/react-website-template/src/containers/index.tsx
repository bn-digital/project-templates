import { Suspense, FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routing } from './Routing'
import { hot } from 'react-hot-loader/root'

const App: FC = ({ children }) => (
  <Router>
    <Suspense fallback={<></>}>
      <Routing>{children}</Routing>
    </Suspense>
  </Router>
)

export default hot(App)
