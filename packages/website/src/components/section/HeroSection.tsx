import { VFC } from 'react'
import { Col, Image, Row, Space, Typography } from 'antd'

const HeroSection: VFC<Partial<CardFragment>> = ({ title = '', description = '', subtitle = '', media }) => (
  <Row justify={'center'}>
    <Col sm={24} lg={12}>
      <Space size={'small'} direction={'vertical'}>
        <Typography.Title level={2}>{title}</Typography.Title>
        <Typography.Paragraph>{subtitle}</Typography.Paragraph>
        <Typography.Paragraph>{description}</Typography.Paragraph>
      </Space>
    </Col>
    <Col sm={24} lg={12}>
      {media && <Image preview={false} src={media?.data?.attributes?.url} />}
    </Col>
  </Row>
)

export { HeroSection }
