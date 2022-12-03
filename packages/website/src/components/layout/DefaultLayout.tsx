import './DefaultLayout.less'

import { Layout, MenuProps } from 'antd'
import React, { FC, memo, Suspense, useMemo } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import { useWebsiteQuery } from '../../graphql'
import { useApp } from '../app'
import { default as Navigation } from '../menu/Navigation'
import { Footer } from './Footer'
import { Header } from './Header'

type ContentProps = Maybe<ContactUsFragment | HomeFragment>

function filterByPathname<T extends ContentProps>(pathname = '/', data: (T | null)[] = []): T | null {
  return data.find(it => it?.pathname === pathname) ?? null
}

const Page = () => {
  const { app } = useApp()
  const { pathname } = useLocation()

  const { data, loading } = useWebsiteQuery({ skip: !app.api })

  const context = useMemo(
    () => (pathname && data?.website?.data?.attributes?.content ? filterByPathname(pathname, data?.website?.data.attributes?.content as ContentProps[]) : null),
    [data?.website?.data?.attributes?.content, pathname],
  )
  return loading ? null : <Outlet context={context} />
}

const headerMenu: MenuProps['items'] = [{ key: '/', label: <NavLink to={'/'}>Home</NavLink> }]
const DefaultLayout: FC = () => (
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
  </Layout>
)

export default memo(DefaultLayout)
