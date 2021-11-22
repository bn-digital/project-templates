import { Col, Layout, Row } from 'antd'
import { Logo } from '../logo/Logo'
import { Navigation } from '../menu/Navigation'
import { Outlet } from 'react-router'
import styles from './DefaultLayout.module.less'
import { ContentComponent, withContent } from '../app/Content'

const DefaultLayout: ContentComponent = ({ menu }) => (
  <Layout className={styles.layout}>
    <Layout.Header>
      <Layout.Content className={styles.fixedContainer}>
        <Row align={'middle'} wrap={false}>
          <Col>
            <Logo />
          </Col>
          <Col flex={'auto'}>
            <Navigation data={menu.header} />
          </Col>
        </Row>
      </Layout.Content>
    </Layout.Header>
    <Layout.Content className={styles.fixedContainer}>
      <Outlet />
    </Layout.Content>
    <Layout.Footer style={{ textAlign: 'center' }}>App ©{new Date().getFullYear()}</Layout.Footer>
  </Layout>
)

export default withContent(DefaultLayout, () => ({ pathname: '/' }))
