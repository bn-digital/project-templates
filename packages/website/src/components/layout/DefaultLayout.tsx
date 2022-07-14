import './DefaultLayout.less'

import { Drawer, Layout } from 'antd'
import { FC, Suspense, useCallback } from 'react'
import { Outlet } from 'react-router'
import { ScrollRestoration, useLocation } from 'react-router-dom'
import { AppContext } from 'src/components/app'
import { Loader } from 'src/components/layout/Loader'
import { MenuComponent, WebsiteComponent } from 'src/graphql'

import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

type ContentProps = ComponentPageContactUs | ComponentPageHome

type FilterCallback = <T extends ContentProps>(data: T[]) => T | null

const DefaultLayout: FC = () => {
  const { pathname } = useLocation()

  const filterByPathname = useCallback<FilterCallback>((data = []) => data.find(it => it?.pathname === pathname) ?? null, [pathname])

  return (
    <AppContext.Consumer>
      {({ burger: { opened, toggle } }) => (
        <Layout>
          <WebsiteComponent>
            {({ data, loading }) =>
              !loading ? (
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
              ) : null
            }
          </WebsiteComponent>
          <Drawer width={'50%'} height={'100%'} onClose={toggle} visible={opened} />
          <ScrollRestoration />
        </Layout>
      )}
    </AppContext.Consumer>
  )
}

export { DefaultLayout }
