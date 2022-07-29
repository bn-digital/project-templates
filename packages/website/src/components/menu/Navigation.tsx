import './Navigation.less'

import { Menu, MenuProps } from 'antd'
import { FC, useMemo } from 'react'
import { FormattedMessage } from 'react-intl'
import { NavLink } from 'react-router-dom'
import { useMenuQuery } from 'src/graphql'

const Navigation: FC<MenuProps & { type: string }> = ({ type, ...props }) => {
  const { data } = useMenuQuery({ variables: { filters: { slug: { eq: type } } } })
  const items: MenuProps['items'] = useMemo(
    () =>
      (data?.menusMenus?.data.flatMap(it => it.attributes?.items?.data) ?? [])?.map(it => ({
        key: `${it?.attributes?.url}`,
        label: (
          <NavLink to={`${it?.attributes?.url}`}>
            <FormattedMessage id={it?.attributes?.title as string} />
          </NavLink>
        ),
      })),
    [data?.menusMenus?.data],
  )

  return <Menu theme={'light'} mode={'horizontal'} items={items} {...props} />
}

export { Navigation }
