import './DefaultLayout.less'

import { Drawer, Layout } from 'antd'
import { FC, Suspense, useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { useWebsiteQuery } from '../../graphql'
import { useApp } from '../app'
import { Navigation } from '../menu/Navigation'
import { Footer } from './Footer'
import { Header } from './Header'

type ContentProps = ContactUsFragment | HomeFragment

function filterByPathname<T extends ContentProps>(pathname = '/', data: (T | null)[] = []): T | null {
  return data?.find(it => it?.pathname === pathname) ?? null
}

const Page = () => {
  const { data } = useWebsiteQuery()
  const { pathname } = useLocation()

  const context = useMemo(
    () => (data?.website?.data?.attributes?.content ? filterByPathname(pathname, data?.website?.data.attributes?.content as ContentProps[]) : null),
    [data?.website?.data?.attributes?.content, pathname],
  )

  return <Outlet context={context} />
}

const DefaultLayout: FC = () => {
  const { burger } = useApp()

  return (
    <Layout>
      <Layout.Header>
        <Header renderMenu={() => <Navigation mode={'horizontal'} type={'header'} />} />
      </Layout.Header>
      <Layout.Content>
        <Suspense fallback={null}>
          <Page />
        </Suspense>
      </Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
      <Drawer width={'75%'} height={'100%'} onClose={burger.toggle} open={burger.opened}>
        <Navigation mode={'vertical'} type={'header'} />
      </Drawer>
    </Layout>
  )
}

export { DefaultLayout }
