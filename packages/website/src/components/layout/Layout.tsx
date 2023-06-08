import { Layout } from "antd"
import { FC, PropsWithChildren, Suspense } from "react"
import { Outlet } from "react-router-dom"

import { DevSupport } from "@react-buddy/ide-toolbox"
import { ComponentPreviews, useInitial } from "src/dev"
import { HeaderMenu } from "../menu"
import { Footer } from "./Footer"
import { Header } from "./Header"

const DefaultLayout: FC = () => (
  <Layout>
    <Layout.Header>
      <Header renderMenu={HeaderMenu} />
    </Layout.Header>
    <Layout style={{ padding: "0 48px" }}>
      <Suspense>
        <Outlet />
      </Suspense>
    </Layout>
    <Layout.Footer>
      <Footer />
    </Layout.Footer>
  </Layout>
)

function withDevSupport<T extends PropsWithChildren = PropsWithChildren>(Wrapped: FC<T>) {
  return (props: T) =>
    import.meta.env.PROD ? (
      <Wrapped {...props} />
    ) : (
      <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
        <Wrapped {...props} />
      </DevSupport>
    )
}

export default withDevSupport(DefaultLayout)
