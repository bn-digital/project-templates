import { FC, lazy, memo } from "react"
import { Outlet, RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom"

import { DefaultLayout } from "../components/layout"
import { Loader } from "../components/layout/Loader"

const Home = lazy<FC>(() => import("./home"))

const routes: RouteObject[] = [
  {
    Component: DefaultLayout,
    loader: () => <Loader spinning />,
    children: [
      {
        Component: Home,
        path: "",
        index: true,
      },
      {
        Component: Outlet,
        path: "*",
      },
    ],
  },
]

const router = createBrowserRouter(routes)

const PageProvider = memo(() => <RouterProvider router={router} />)

export default PageProvider
