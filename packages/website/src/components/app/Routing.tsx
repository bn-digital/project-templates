import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { FC, ReactNode, Suspense } from 'react'
import { Spinner } from '../loader/Spinner'

export type RouteMap = { [key: string]: { layout: FC; routes: { [key: string]: FC } } }

type RoutingProviderProps = { routes: RouteMap }

/**
 * @param {RouteMap} children List of routes, require authentication
 */
const RoutingProvider: FC<RoutingProviderProps> = ({ routes = {} }) => {
  const children = Object.entries(routes)
    .map(([path, { layout, routes }]) => {
      const LayoutOutlet = layout
      return {
        path,
        element: <LayoutOutlet />,
        children: Object.entries(routes).map(([path, Component]) => (
          <Route key={path} path={path} element={<Component />} />
        )),
      }
    })
    .map(props => <Route key={props.path} {...props} />)
  return <Routes>{children}</Routes>
}

type BrowserRouterProps = { loader: ReactNode } & RoutingProviderProps

/**
 *
 * @param Wrapped
 * @return {FC}
 */
function withBrowserRouter(Wrapped: FC<RoutingProviderProps>): FC<Partial<BrowserRouterProps>> {
  return ({ routes = {}, loader, children }) => (
    <BrowserRouter>
      <Suspense fallback={loader ?? <Spinner />}>
        <Wrapped routes={routes}>{children}</Wrapped>
      </Suspense>
    </BrowserRouter>
  )
}

export default withBrowserRouter(RoutingProvider)
