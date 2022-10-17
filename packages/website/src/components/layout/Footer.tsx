import { Col, Row, Typography } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => (
  <Row justify={'space-between'}>
    <Col>
      <Link to={'/'}>{window.location.hostname}</Link>
    </Col>
    <Col>
      <Typography.Link target={'_blank'} href={'https://github.com/bn-digital/'}>
        {new Date().toUTCString()}
      </Typography.Link>
    </Col>
  </Row>
)

export { Footer }
