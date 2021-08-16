import { RouteMap } from '../components/app/Routing'
import DefaultLayout from '../components/layout'
import { lazy } from 'react'

export const routeMap: RouteMap = {
  '/*': {
    layout: DefaultLayout,
    routes: {
      '/': lazy(() => import('./home')),
      '/contact-us': lazy(() => import('./contact-us')),
    },
  },
}
