import { VFC } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { mapToRoutes } from '../components/app/Routing'
import { DefaultLayout } from '../components/layout'

const Routes: VFC = () =>
  useRoutes(
    mapToRoutes({
      '': {
        layout: DefaultLayout,
        routes: {
          '': () => import('./home'),
        },
      },
    }),
  )

const Pages = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export { Pages as default }
