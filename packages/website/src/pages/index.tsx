import { FC, lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { DefaultLayout } from 'src/components/layout'

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

export { routes as default }
