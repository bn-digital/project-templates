import { VFC } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import './Navigation.less'

type NavigationProps = { data: LinkFragment[] }

const Navigation: VFC<NavigationProps> = ({ data }) => (
  <Menu theme={'light'} mode={'horizontal'}>
    {data?.map(
      it =>
        it?.url && (
          <Menu.Item key={it?.url}>
            <NavLink to={it.url}>{it.title}</NavLink>
          </Menu.Item>
        ),
    )}
  </Menu>
)

export { Navigation }
