import './DefaultLayout.less'

import { Drawer, Layout, MenuProps } from 'antd'
import { FC, Suspense, useMemo } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import { useWebsiteQuery } from '../../graphql'
import { useApp } from '../app'
import { Navigation } from '../menu/Navigation'
import { Footer } from './Footer'
import { Header } from './Header'

type ContentProps = Maybe<ContactUsFragment | HomeFragment>

function filterByPathname<T extends ContentProps>(pathname = '/', data: (T | null)[] = []): T | null {
  return data.find(it => it?.pathname === pathname) ?? null
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

const headerMenu: MenuProps['items'] = [{ key: '/', label: <NavLink to={'/'}>Home</NavLink> }]
const footerMenu: MenuProps['items'] = [{ key: '/', label: <NavLink to={'/'}>Home</NavLink> }]

const DefaultLayout: FC = () => {
  const { burger } = useApp()

  return (
    <Layout className={'default'}>
      <Layout.Header>
        <Header renderMenu={() => <Navigation mode={'horizontal'} items={headerMenu} />} />
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
        <Navigation mode={'vertical'} items={footerMenu} />
      </Drawer>
    </Layout>
  )
}

export { DefaultLayout }
