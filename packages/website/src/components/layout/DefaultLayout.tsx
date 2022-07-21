import './DefaultLayout.less'

import { Drawer, Layout } from 'antd'
import { FC, Suspense, useCallback } from 'react'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router-dom'
import { useApp } from 'src/components/app'
import { Loader } from 'src/components/layout/Loader'
import { useWebsiteQuery } from 'src/graphql'

import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

type ContentProps = ComponentPageContactUs | ComponentPageHome

type FilterCallback = <T extends ContentProps>(data: T[]) => T | null

const DefaultLayout: FC = () => {
  const { pathname } = useLocation()
  const { data } = useWebsiteQuery()
  const { burger } = useApp()
  const filterByPathname = useCallback<FilterCallback>((data = []) => data.find(it => it?.pathname === pathname) ?? null, [pathname])
  const context = filterByPathname(data?.website?.data?.attributes?.content as ContentProps[])

  return (
    <Layout>
      <Layout.Header>
        <Content>
          <Header />
        </Content>
      </Layout.Header>
      <Layout.Content>
        <Suspense fallback={<Loader />}>
          <Outlet context={context} />
        </Suspense>
      </Layout.Content>
      <Layout.Footer>
        <Content>
          <Footer />
        </Content>
      </Layout.Footer>
      <Drawer width={'75%'} height={'100%'} onClose={burger.toggle} visible={burger.opened} />
    </Layout>
  )
}

export { DefaultLayout }
