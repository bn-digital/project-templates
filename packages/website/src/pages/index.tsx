import { FC, lazy } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

import { DefaultLayout } from '../components/layout'
import { Loader } from '../components/layout/Loader'

const Home = lazy<FC>(() => import('./home'))
const NotFound = lazy<FC>(() => import('./not-found'))

const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    loader: Loader,
    path: '',
    children: [
      {
        element: <Home />,
        path: '',
        index: true,
      },
      {
        element: <NotFound />,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}
export default router
