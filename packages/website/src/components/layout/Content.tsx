import './Content.less'

import { Layout } from 'antd'
import classnames from 'classnames'
import { FC, PropsWithChildren } from 'react'

type ContentProps = { fixed: boolean }

const Content: FC<PropsWithChildren<Partial<ContentProps>>> = ({ fixed = true, children }) => (
  <Layout.Content className={classnames({ 'ant-layout-content-fixed': fixed })}>{children}</Layout.Content>
)

export { Content }
