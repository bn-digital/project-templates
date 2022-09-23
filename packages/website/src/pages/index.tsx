import { FC, lazy, memo } from 'react'
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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

const Router = () => <RouterProvider router={createBrowserRouter(routes)} />

export default memo(Router)
