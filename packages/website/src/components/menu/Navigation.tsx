import { VFC } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { LinkFragment, Maybe } from '../../graphql'

type NavigationProps = { links: Maybe<LinkFragment>[] }

const Navigation: VFC<Partial<NavigationProps>> = ({ links = [] }) => (
  <Menu style={{ borderBottom: 0 }} theme={'light'} mode='horizontal'>
    {links?.map(
      it =>
        it && (
          <Menu.Item key={it.url}>
            <NavLink to={it.url}>{it.text}</NavLink>
          </Menu.Item>
        ),
    )}
  </Menu>
)

export { Navigation }
