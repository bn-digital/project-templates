import { FC, Suspense } from 'react'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { Router } from './Router'
import { Spin } from 'antd'

const App: FC = ({ children }) => (
  <RouterProvider>
    <Suspense fallback={<Spin spinning />}>
      <Router>{children}</Router>
    </Suspense>
  </RouterProvider>
)

export { App }
