import './DefaultLayout.less'

import { Drawer, Layout } from 'antd'
import { FC, Suspense, useMemo } from 'react'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router-dom'
import { useApp } from 'src/components/app'
import { Loader } from 'src/components/layout/Loader'
import { Navigation } from 'src/components/menu/Navigation'
import { useWebsiteQuery } from 'src/graphql'

import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

type ContentProps = ContactUsFragment | HomeFragment

function filterByPathname<T extends ContentProps>(pathname = '/', data: (T | null)[] = []): T | null {
  return data?.find(it => it?.pathname === pathname) ?? null
}

const DefaultLayout: FC = () => {
  const { pathname } = useLocation()
  const { data } = useWebsiteQuery()
  const { burger } = useApp()

  const context = useMemo(
    () => (data?.website?.data?.attributes?.content ? filterByPathname(pathname, data?.website?.data.attributes?.content as ContentProps[]) : null),
    [data?.website?.data?.attributes?.content, pathname],
  )

  return (
    <Layout>
      <Layout.Header>
        <Content>
          <Header renderMenu={() => <Navigation mode={'horizontal'} type={'header'} />} />
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
      <Drawer width={'75%'} height={'100%'} onClose={burger.toggle} visible={burger.opened}>
        <Navigation mode={'vertical'} type={'header'} />
      </Drawer>
    </Layout>
  )
}

export { DefaultLayout }
