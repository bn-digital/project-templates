import { RouteObject } from 'react-router'
import { FC, lazy, Suspense } from 'react'
import { Spinner } from '../loader/Spinner'
import { ContentProvider } from './Content'

type LazyImport = () => Promise<{ default: FC }>

type NestedRouteMap = { layout: FC; routes: { [key: string]: LazyImport } }

type RouteMap = { [key: string]: NestedRouteMap }

function entryToRouteObject(url: string, factory: LazyImport): RouteObject {
  const Page: FC = lazy(factory)
  return {
    path: url,
    index: url === '',
    element: (
      <Suspense fallback={<Spinner />}>
        <ContentProvider pathname={url?.startsWith('/') ? url : '/'.concat(url)}>
          <Page />
        </ContentProvider>
      </Suspense>
    ),
  }
}

function childrenToRouteObject(url: string, children: NestedRouteMap): RouteObject {
  const LayoutOutlet = children.layout
  return {
    path: url,
    element: <LayoutOutlet />,
    children: Object.entries(children.routes).map(([url, pathOrNested]) => entryToRouteObject(url, pathOrNested)),
  }
}

function mapToRoutes(entries: RouteMap): RouteObject[] {
  return Object.entries(entries).map(([url, pathOrNested]) => {
    if (typeof pathOrNested === 'object') {
      const LayoutOutlet = pathOrNested.layout
      return {
        path: url,
        element: <LayoutOutlet />,
        children: Object.entries(pathOrNested.routes).map(([url, pathOrNested]) =>
          typeof pathOrNested === 'object' ? childrenToRouteObject(url, pathOrNested) : entryToRouteObject(url, pathOrNested),
        ),
      }
    } else {
      return entryToRouteObject(url, pathOrNested)
    }
  })
}

function withRouter(Router: FC, Pages: FC): FC {
  return () => (
    <Router>
      <Pages />
    </Router>
  )
}

export { mapToRoutes, withRouter }
