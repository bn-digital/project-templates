import { Spin } from 'antd'
import { FC } from 'react'

const Loader: FC<typeof Spin.defaultProps> = props => <Spin size={'small'} {...props} />

export { Loader }
