import { FC } from 'react'
import { ConfigProvider } from 'antd'
import './UI.less'
const UI: FC = ({ children }) => <ConfigProvider prefixCls={'app'}>{children}</ConfigProvider>

export { UI }
