import { lazy, VFC } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { DefaultLayout } from '../components/layout'

const Home = lazy(() => import('./home'))
const Routes: VFC = () => useRoutes([{ element: <DefaultLayout />, children: [{ path: '/', element: <Home /> }] }])

const Pages = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export { Pages as default }
