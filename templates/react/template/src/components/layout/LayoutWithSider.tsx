import { Breadcrumb, Layout, Menu } from 'antd'
import { FC } from 'react'

const LayoutWithSider: FC = ({ children }) => (
  <Layout className='layout' style={{ minHeight: '100vh' }}>
    <Layout.Header>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
        <Menu.Item key='1'>nav 1</Menu.Item>
        <Menu.Item key='2'>nav 2</Menu.Item>
        <Menu.Item key='3'>nav 3</Menu.Item>
      </Menu>
    </Layout.Header>
    <Layout.Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className='site-layout-content'>{children}</div>
    </Layout.Content>
    <Layout.Footer style={{ textAlign: 'center' }}></Layout.Footer>
  </Layout>
)

export { LayoutWithSider }
