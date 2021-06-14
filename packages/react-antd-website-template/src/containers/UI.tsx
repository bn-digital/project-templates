import { FC } from 'react'
import { ConfigProvider } from 'antd'
import './UI.less'
const UI: FC = ({ children }) => <ConfigProvider>{children}</ConfigProvider>

export { UI }
