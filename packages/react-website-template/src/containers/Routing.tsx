import { FC, lazy } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../components/layout/DefaultLayout'
import { RoutesProps } from 'react-router'

const Home: FC = lazy(() => import('./../pages/home'))

type RouteNavigationMap = {
  [key: string]: { component: FC; name: string }
}

const routeMap: RouteNavigationMap = {
  '/': {
    component: Home,
    name: 'Home',
  },
}

function withNavigation(Wrapped: FC): FC {
  return props => {
    return (
      <Wrapped {...props}>
        {Object.entries(routeMap).map(([path, { name }]) => (
          <li key={path}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </Wrapped>
    )
  }
}

function withRoutes(Wrapped: FC): FC<RoutesProps> {
  return props => (
    <Wrapped {...props}>
      {Object.entries(routeMap).map(([path, { component }]) => {
        const Page = component
        return <Route key={path} path={path} element={<Page />} />
      })}
    </Wrapped>
  )
}

const InnerRouter: FC = ({ children }) => (
  <Routes>
    <Route path={''} element={<DefaultLayout />}>
      {children}
    </Route>
  </Routes>
)
const Routing = withRoutes(InnerRouter)
export { Routing, withNavigation }
