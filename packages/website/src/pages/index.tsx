import { lazy } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

import { DefaultLayout } from '../components/layout'

const Home = lazy(() => import('./home'))
const NotFound = lazy(() => import('./not-found'))

/**
 * fixed in ENG-123
 */
const routes: RouteObject[] = [
  {
    path: '',
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
]
const Pages = () => useRoutes(routes)
export { Pages as default }
