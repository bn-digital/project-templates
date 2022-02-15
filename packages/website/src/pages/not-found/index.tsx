import { Result } from 'antd'
import { FC } from 'react'

const NotFound: FC = () => <Result status={'404'} title={'Requested page not found'} />

export { NotFound as default }
