import { FC, lazy } from "react"
import { Outlet, RouteObject } from "react-router-dom"

import DefaultLayout, { Loader } from "../components/layout"

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

export default routes
