import './Navigation.less'

import { Menu, MenuProps } from 'antd'
import { FC, useMemo } from 'react'
import { NavLink } from 'react-router-dom'

import { useMenuQuery } from '../../graphql'

const Navigation: FC<MenuProps & { type: string }> = ({ type, ...props }) => {
  const { data } = useMenuQuery({ variables: { filters: { slug: { eq: type } } } })
  const rootMenu = data?.menusMenus?.data?.flatMap(it => it?.attributes?.items?.data?.map(it => it?.attributes))?.filter(it => !it?.parent?.data)
  const items: MenuProps['items'] = useMemo(
    () =>
      rootMenu?.map(it => ({
        key: `${it?.url}`,
        label: <NavLink to={`${it?.url as string}`}>{it?.title}</NavLink>,
      })) ?? [],
    [rootMenu],
  )

  return <Menu theme={'light'} mode={'horizontal'} items={items} {...props} />
}

export { Navigation }
