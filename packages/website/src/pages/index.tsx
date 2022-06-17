import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { DefaultLayout } from 'src/components/layout'

const Home = lazy(() => import('./home'))
const NotFound = lazy(() => import('./not-found'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Home />,
        path: 'contact-us',
      },
      {
        element: <NotFound />,
        path: '*',
      },
    ],
  },
]

export { routes as default }
