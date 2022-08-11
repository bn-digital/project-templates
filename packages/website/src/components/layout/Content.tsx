import './Content.less'

import { Layout } from 'antd'
import { FC, PropsWithChildren } from 'react'

type ContentProps = { fixed: boolean }

const Content: FC<PropsWithChildren<Partial<ContentProps>>> = ({ fixed = true, children }) => (
  <Layout.Content className={fixed ? 'ant-layout-content-fixed' : undefined}>{children}</Layout.Content>
)

export { Content }
