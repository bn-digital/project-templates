import { Drawer, Layout, Skeleton } from 'antd'
import { Outlet } from 'react-router'
import { Suspense, VFC } from 'react'
import { AppContext } from 'src/components/app'
import { Footer } from './Footer'
import { Content } from './Content'
import { Header } from './Header'
import './DefaultLayout.less'

const PageLoader: VFC = () => (
  <Content>
    <Skeleton />
  </Content>
)

const DefaultLayout: VFC = () => (
  <AppContext.Consumer>
    {({ burger: { opened, toggle } }) => (
      <Layout>
        <Layout.Header>
          <Content>
            <Header />
          </Content>
        </Layout.Header>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
        <Layout.Footer>
          <Content>
            <Footer />
          </Content>
        </Layout.Footer>
        <Drawer width={'50%'} height={'100%'} onClose={toggle} visible={opened} />
      </Layout>
    )}
  </AppContext.Consumer>
)

export { DefaultLayout }
