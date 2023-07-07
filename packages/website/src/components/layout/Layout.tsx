import { Layout as BaseLayout } from "antd"
import { FC, Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Footer, Header } from "."
import { HeaderMenu } from "../menu"

const Layout: FC = () => (
  <BaseLayout>
    <BaseLayout.Header>
      <Header renderMenu={HeaderMenu} />
    </BaseLayout.Header>
    <BaseLayout style={{ padding: "0 48px" }}>
      <Suspense>
        <Outlet />
      </Suspense>
    </BaseLayout>
    <BaseLayout.Footer>
      <Footer />
    </BaseLayout.Footer>
  </BaseLayout>
)

export { Layout }
