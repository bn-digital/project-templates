import Icon, { AppstoreFilled } from '@ant-design/icons'
import { Space, Typography } from 'antd'
import { FC } from 'react'

const Logo: FC = () => {
  return (
    <Space direction={'horizontal'} align={'center'}>
      <Typography.Link href={'/'}>
        <Icon component={() => <AppstoreFilled />} />
      </Typography.Link>
    </Space>
  )
}

export { Logo }
