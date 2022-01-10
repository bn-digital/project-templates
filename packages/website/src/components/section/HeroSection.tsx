import { VFC } from 'react'
import { Col, Row, Typography } from 'antd'

const HeroSection: VFC<Partial<CardFragment>> = ({ title = '', description = '', subtitle = '' }) => (
  <Row align={'middle'} justify={'center'}>
    <Col span={24}>
      <Typography.Title level={2}>{title}</Typography.Title>
    </Col>
    <Col span={24}>
      <Typography.Paragraph>{subtitle}</Typography.Paragraph>
    </Col>
    <Col span={24}>
      <Typography.Paragraph>{description}</Typography.Paragraph>
    </Col>
  </Row>
)

export { HeroSection }
