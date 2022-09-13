import Icon, { AppleOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Logo: FC = () => {
  const navigate = useNavigate()
  return (
    <Space direction={'horizontal'}>
      <Icon component={() => <AppleOutlined />} onClick={() => navigate('/')} />
    </Space>
  )
}

export { Logo }
