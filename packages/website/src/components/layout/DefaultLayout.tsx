import "./DefaultLayout.less"

import { Layout } from "antd"
import { FC, Suspense } from "react"
import { Outlet } from "react-router-dom"

import { HeaderMenu } from "../menu"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const DefaultLayout: FC = () => (
  <Layout className={"default"}>
    <Layout.Header>
      <Header renderMenu={HeaderMenu} />
    </Layout.Header>
    <Layout.Content>
      <Suspense>
        <Outlet />
      </Suspense>
    </Layout.Content>
    <Layout.Footer>
      <Footer />
    </Layout.Footer>
  </Layout>
)
export default DefaultLayout
