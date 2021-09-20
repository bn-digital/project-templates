import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FC, ReactNode, Suspense } from 'react'
import { Spinner } from '../loader/Spinner'

export type RouteMap = { [key: string]: { layout: FC; routes: { [key: string]: FC } } }

type RoutingProviderProps = { routeMap: RouteMap }

/**
 * @param {RouteMap}
 */
const RoutingProvider: FC<RoutingProviderProps> = ({ routeMap }) => {
  const children = Object.entries(routeMap)
    .map(([baseUrl, { layout, routes }]) => {
      const LayoutOutlet = layout
      return {
        path: baseUrl,
        element: <LayoutOutlet />,
        children: Object.entries(routes).map(([path, Component]) => <Route key={path} path={path} element={<Component />} />),
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
  return ({ routeMap = {}, loader, children }) => (
    <BrowserRouter>
      <Suspense fallback={loader ?? <Spinner />}>
        <Wrapped routeMap={routeMap}>{children}</Wrapped>
      </Suspense>
    </BrowserRouter>
  )
}

export default withBrowserRouter(RoutingProvider)
