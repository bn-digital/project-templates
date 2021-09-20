import { VFC } from 'react'
import { Col, Layout, Row, Skeleton } from 'antd'
import { Logo } from '../logo/Logo'
import { Navigation } from '../menu/Navigation'
import { WebsiteComponent } from '../../graphql'
import { Outlet } from 'react-router'

const DefaultLayout: VFC = () => (
  <Layout style={{ minHeight: '100vh', width: '100%' }}>
    <WebsiteComponent variables={{ slug: window.location.hostname }}>
      {({ data, loading }) => (
        <Skeleton title={false} paragraph={false} avatar={false} loading={loading}>
          <Layout.Header>
            <Row align={'bottom'} wrap={false}>
              <Col>{data?.website?.logo && <Logo image={{ src: data.website.logo.url, title: data?.website?.name ?? '' }} />}</Col>
              <Col flex={'auto'}>
                <Navigation links={data?.website?.menu?.find(it => it?.slug === 'default')?.links ?? []} />
              </Col>
            </Row>
          </Layout.Header>
          <Layout.Content style={{ padding: 50 }}>
            <Outlet />
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>App ©{new Date().getFullYear()}</Layout.Footer>
        </Skeleton>
      )}
    </WebsiteComponent>
  </Layout>
)

export { DefaultLayout }
