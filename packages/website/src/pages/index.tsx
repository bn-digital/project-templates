import { FC, lazy, memo } from 'react'
import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from 'react-router-dom'

import DefaultLayout from '../components/layout'
import { Loader } from '../components/layout/Loader'

const Home = lazy<FC>(() => import('./home'))

const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    loader: () => <Loader spinning />,
    path: '',
    children: [
      {
        element: <Home />,
        path: '',
        index: true,
      },
      {
        element: <Outlet />,
        path: '*',
      },
    ],
  },
]

const router = createBrowserRouter(routes)

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

const PageProvider = () => <RouterProvider router={router} />

export default memo(PageProvider)
