import Icon, { AppstoreFilled } from '@ant-design/icons'
import { Space } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Logo: FC = () => {
  const navigate = useNavigate()
  return (
    <Space direction={'horizontal'} align={'center'}>
      <Icon component={() => <AppstoreFilled />} onClick={() => navigate('/')} />
    </Space>
  )
}

export { Logo }
