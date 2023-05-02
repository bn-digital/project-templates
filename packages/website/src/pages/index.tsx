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

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

const PageProvider = () => <RouterProvider router={router} />

export default memo(PageProvider)
