import { Drawer, Layout, Skeleton, Spin } from 'antd'
import { Outlet } from 'react-router'
import { Suspense, useCallback, useEffect, useState, VFC } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from 'src/components/app'
import { WebsiteComponent } from 'src/graphql'
import { Footer } from './Footer'
import { Content } from './Content'
import { Header } from './Header'
import './DefaultLayout.less'

const PageLoader: VFC = () => (
  <Content>
    <Spin size={'small'} />
  </Content>
)

type ContentProps = ComponentPageContactUs | ComponentPageHome

const DefaultLayout: VFC = () => {
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
                    <Header />
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
