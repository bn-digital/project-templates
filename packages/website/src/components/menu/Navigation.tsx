import { VFC } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import './Navigation.less'
import { NavigationComponent } from 'src/graphql'

type NavigationProps = { slug: string }

const Navigation: VFC<NavigationProps> = ({ slug }) => (
  <NavigationComponent variables={{ slug }}>
    {({ data, loading }) => {
      if (loading) return null
      return (
        <Menu theme={'light'} mode={'horizontal'}>
          {data?.renderNavigation?.map(
            it =>
              it?.path && (
                <Menu.Item key={it?.id}>
                  <NavLink to={it.path}>{it.title}</NavLink>
                </Menu.Item>
              ),
          )}
        </Menu>
      )
    }}
  </NavigationComponent>
)

export { Navigation }
