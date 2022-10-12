import { Col, Row, Typography } from 'antd'
import { FC } from 'react'

const HeroSection: FC<CardFragment> = ({ title = '', description = '', subtitle = '' }) => (
  <Row align={'middle'} justify={'center'}>
    <Col span={24}>
      <Typography.Title level={2}>{title}</Typography.Title>
    </Col>
    <Col span={24}>
      <Typography.Title level={4}>{subtitle}</Typography.Title>
    </Col>
    <Col span={24}>
      {description?.split('\n').map((it, index) => (
        <Typography.Paragraph key={index}>{it}</Typography.Paragraph>
      ))}
    </Col>
  </Row>
)

export { HeroSection }
