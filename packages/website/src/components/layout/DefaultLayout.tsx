import './DefaultLayout.less'

import { Drawer, Layout, Spin } from 'antd'
import { FC, Suspense } from 'react'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router-dom'
import { AppContext } from 'src/components/app'
import { WebsiteComponent } from 'src/graphql'

import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

const PageLoader: FC = () => (
  <Content>
    <Spin size={'small'} />
  </Content>
)

type ContentProps = ComponentPageContactUs | ComponentPageHome

const menu: LinkFragment[] = [
  { id: '1', title: 'Home', url: '/' },
  { id: '2', title: 'Contact Us', url: '/contact-us' },
]

const DefaultLayout: FC = () => {
  const { pathname } = useLocation()

  function filterByPathname<T extends ContentProps>(data: T[] = []): T | null {
    return data.find(it => it?.pathname === pathname) ?? null
  }

  return (
    <AppContext.Consumer>
      {({ burger: { opened, toggle } }) => (
        <Layout>
          <WebsiteComponent>
            {({ data }) => (
              <>
                <Layout.Header>
                  <Content>
                    <Header menu={menu} />
                  </Content>
                </Layout.Header>
                <Layout.Content>
                  <Suspense fallback={<PageLoader />}>
                    <Outlet context={filterByPathname(data?.website?.data?.attributes?.content as ContentProps[])} />
                  </Suspense>
                </Layout.Content>
                <Layout.Footer>
                  <Content>
                    <Footer />
                  </Content>
                </Layout.Footer>
              </>
            )}
          </WebsiteComponent>
          <Drawer width={'50%'} height={'100%'} onClose={toggle} visible={opened} />
        </Layout>
      )}
    </AppContext.Consumer>
  )
}

export { DefaultLayout }
