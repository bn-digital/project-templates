import { lazy } from 'react'
import { DefaultLayout } from '../components/layout'

const Home = lazy(() => import('./home'))

const NotFound = lazy(() => import('./not-found'))

/**
 * fixed in ENG-123
 */
const pages = {
  '': {
    element: <DefaultLayout />,
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Home />,
        path: '/contact-us',
      },
      {
        element: <NotFound />,
        path: '*',
      },
    ],
  },
}

export { pages as default }
