import { FC } from 'react'
import { Menu } from 'antd'
import { withNavigation } from '../../containers/Routing'

const TopMenu: FC = ({ children }) => (
  <Menu theme={'dark'} mode='horizontal'>
    {children}
  </Menu>
)

const TopNavigation = withNavigation(TopMenu)
export { TopNavigation }
