import { Fragment, VFC } from 'react'
import { Button, Col, Image, Row, Space, Typography } from 'antd'

type HeroProps = { data: Partial<ComponentUiCard & { button: ComponentUiLink }> }

const HeroSection: VFC<HeroProps> = ({ data: { id, title, description, subtitle, media, button } }) => (
  <Fragment key={id}>
    <Row justify={'center'}>
      <Col sm={24} lg={12}>
        <Space size={'small'} direction={'vertical'}>
          <Typography.Title level={2}>{title}</Typography.Title>
          <Typography.Paragraph>{subtitle}</Typography.Paragraph>
          <Typography.Paragraph>{description}</Typography.Paragraph>
          {button?.title && button?.url && (
            <Button type={'primary'} href={button.url}>
              {button.title}
            </Button>
          )}
        </Space>
      </Col>
      <Col sm={24} lg={12}>
        <Image preview={false} src={media?.data?.attributes?.url} />
      </Col>
    </Row>
  </Fragment>
)

export { HeroSection }
