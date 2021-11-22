import { VFC } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.less'

const Navigation: VFC<Partial<{ data: ComponentUiLink[] }>> = ({ data = [] }) => (
  <Menu className={styles.menu} theme={'light'} mode='horizontal'>
    {data?.map(
      it =>
        it && (
          <Menu.Item key={it.url}>
            <NavLink to={it?.url ?? ''}>{it.title}</NavLink>
          </Menu.Item>
        ),
    )}
  </Menu>
)

export { Navigation }
