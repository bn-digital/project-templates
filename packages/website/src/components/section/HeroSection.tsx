import { Col, Row, Typography } from 'antd'
import { FC } from 'react'

const HeroSection: FC<CardFragment> = ({ title = '', description = '', subtitle = '' }) => {
  return (
    <Row align={'middle'} justify={'center'}>
      <Col span={24}>
        <Typography.Title level={2}>{title}</Typography.Title>
      </Col>
      <Col span={24}>
        <Typography.Title level={4}>{subtitle}</Typography.Title>
      </Col>
      <Col span={24}>
        <Typography.Paragraph>
          <Typography.Text>
            To edit this section, open
            <Typography.Link
              href={import.meta.url.replace(
                window.location.href,
                `http://localhost:63342/${import.meta.env.APP_NAME}/packages/website/`
              )}
            >
              Section.tsx
            </Typography.Link>{' '}
            file
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>{description}</Typography.Paragraph>
      </Col>
    </Row>
  )
}

export { HeroSection }
