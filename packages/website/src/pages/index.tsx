import { FC } from 'react'
import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom'
import { DefaultLayout } from 'src/components/layout'

import Home from './home'
import NotFound from './not-found'
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
        index: true,
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

function withBrowserRouter(Wrapped: FC): FC {
  return () => (
    <BrowserRouter>
      <Wrapped />
    </BrowserRouter>
  )
}

export default withBrowserRouter(Pages) as FC
