import { Col, Layout, Row } from 'antd'
import { Logo } from '../logo/Logo'
import { Navigation } from '../menu/Navigation'
import { Outlet } from 'react-router'
import { Suspense, VFC } from 'react'
import './DefaultLayout.less'

const DefaultLayout: VFC = () => (
  <Layout>
    <Layout.Header>
      <Layout.Content className={'fixed'}>
        <Row align={'middle'} wrap={false}>
          <Col>
            <Logo />
          </Col>
          <Col flex={'auto'}>
            <Navigation />
          </Col>
        </Row>
      </Layout.Content>
    </Layout.Header>
    <Layout.Content className={'fixed'}>
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </Layout.Content>
    <Layout.Footer style={{ textAlign: 'center' }}>App ©{new Date().getFullYear()}</Layout.Footer>
  </Layout>
)

export { DefaultLayout }
