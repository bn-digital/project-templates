import { Space } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as LogoImage } from './Logo.svg'

const Logo: FC = () => {
  const navigate = useNavigate()
  return (
    <Space direction={'horizontal'} align={'center'}>
      <LogoImage onClick={() => navigate('/')} />
    </Space>
  )
}

export { Logo }
