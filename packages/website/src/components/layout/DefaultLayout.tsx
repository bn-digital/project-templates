import './DefaultLayout.less'

import { Drawer, Layout } from 'antd'
import { FC, Suspense } from 'react'
import { Outlet } from 'react-router'
import { ScrollRestoration, useLocation } from 'react-router-dom'
import { AppContext } from 'src/components/app'
import { MenuComponent, WebsiteComponent } from 'src/graphql'

import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'
import { Loader } from './Loader'

type ContentProps = ComponentPageContactUs | ComponentPageHome

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
                    <MenuComponent variables={{ filters: { slug: { eq: 'header' } } }}>
                      {({ data }) => (
                        <Header
                          menu={(data?.menusMenus?.data?.flatMap(it => it.attributes?.items?.data) ?? []).map(it => ({
                            id: `${it?.id}`,
                            title: `${it?.attributes?.title}`,
                            url: `${it?.attributes?.url}`,
                          }))}
                        />
                      )}
                    </MenuComponent>
                  </Content>
                </Layout.Header>
                <Layout.Content>
                  <Suspense fallback={<Loader />}>
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
          <ScrollRestoration />
        </Layout>
      )}
    </AppContext.Consumer>
  )
}

export { DefaultLayout }
