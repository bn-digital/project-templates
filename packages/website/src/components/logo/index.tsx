import { Space, Typography } from 'antd'
import { FC } from 'react'

import { ReactComponent as LogoImage } from './Logo.svg'

const Logo: FC = () => {
  return (
    <Space direction={'horizontal'} align={'center'}>
      <Typography.Link href={'/'}>
        <LogoImage />
      </Typography.Link>
    </Space>
  )
}

export { Logo }
