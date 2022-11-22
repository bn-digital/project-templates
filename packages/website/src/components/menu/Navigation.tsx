import './Navigation.less'

import { Menu, MenuProps } from 'antd'
import { FC } from 'react'

const Navigation: FC<MenuProps> = ({ ...props }) => {
  return <Menu theme={'light'} {...props} />
}

export { Navigation }
