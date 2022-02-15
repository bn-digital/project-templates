import { lazy } from 'react'
import { DefaultLayout } from '../components/layout'

const Home = lazy(() => import('./home'))
const NotFound = lazy(() => import('./not-found'))

const pages = {
  '': {
    element: <DefaultLayout />,
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <NotFound />,
        path: '*',
      },
    ],
  },
}

export { pages as default }
