import { lazy } from 'react'
import { DefaultLayout } from '../components/layout'

const Home = lazy(() => import('./home'))

const pages = {
  '': {
    element: <DefaultLayout />,
    children: [
      {
        element: <Home />,
        path: '/',
      },
    ],
  },
}

export { pages as default }
