import { FC, lazy } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

import { DefaultLayout } from '../components/layout'

const Post = lazy<FC>(() => import('./post'))
const Home = lazy<FC>(() => import('./home'))
const NotFound = lazy<FC>(() => import('./not-found'))

const routes: RouteObject[] = [
  {
    path: '',
    element: <DefaultLayout />,

    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Post />,
        path: 'posts/:slug',
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

const router = createBrowserRouter(routes)

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}
export default router
