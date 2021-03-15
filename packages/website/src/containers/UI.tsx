import { FC } from 'react'
import './UI.less'
import { ConfigProvider } from 'antd'

const UI: FC = ({ children }) => <ConfigProvider prefixCls={'app'}>{children}</ConfigProvider>

export { UI }
