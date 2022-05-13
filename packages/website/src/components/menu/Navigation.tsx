import './Navigation.less'

import { Menu, MenuProps } from 'antd'
import { FC } from 'react'

type NavigationProps = { data: MenuProps['items'] }

const Navigation: FC<NavigationProps> = ({ data = [] }) => <Menu theme={'light'} mode={'horizontal'} items={data} />

export { Navigation }
