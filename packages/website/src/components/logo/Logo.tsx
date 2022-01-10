import { VFC } from 'react'
import { Link } from 'react-router-dom'
import { SvgIcon } from '../icon'
import { Space } from 'antd'

const Logo: VFC = () => (
  <Link to={'/'}>
    <Space direction={'horizontal'}>
      <SvgIcon fill={'#2F2E8B'} type={'strapi'} />
    </Space>
  </Link>
)

export { Logo }
