import { Col, Row, Typography } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => (
  <Row justify={'space-between'}>
    <Col>
      <Link to={'/'}>{window.location.hostname}</Link>
    </Col>
    <Col>
      <Typography.Text>All rights reserved © {new Date().getFullYear()}</Typography.Text>
    </Col>
  </Row>
)

export { Footer }
