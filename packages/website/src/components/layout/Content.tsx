import { FC } from 'react'
import { Layout } from 'antd'
import './Content.less'
import classnames from 'classnames'

type ContentProps = { fixed: boolean }

const Content: FC<Partial<ContentProps>> = ({ fixed = true, children }) => (
  <Layout.Content className={classnames({ 'ant-layout-content-fixed': fixed })}>{children}</Layout.Content>
)

export { Content }
