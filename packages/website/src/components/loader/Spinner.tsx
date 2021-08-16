import React, { FC } from 'react'
import { Row, Spin } from 'antd'

export const Spinner: FC = () => (
  <Row justify={'center'} style={{ minHeight: '100vh' }} align={'middle'}>
    <Spin />
  </Row>
)
