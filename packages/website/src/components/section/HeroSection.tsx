import { Col, Row, Typography } from "antd"
import { FC } from "react"

const HeroSection: FC<ComponentUiCard> = ({ title = "", description = "", subtitle = "" }) => {
  return (
    <Row align={"middle"} justify={"center"}>
      <Col span={24}>
        <Typography.Title level={2}>{title}</Typography.Title>
      </Col>
      <Col span={24}>
        <Typography.Title level={4}>{subtitle}</Typography.Title>
      </Col>
      <Col span={24}>
        <Typography.Paragraph>
          <Typography.Text>
            To edit this section, open <Typography.Link href={import.meta.url}>Section.tsx</Typography.Link> file
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>{description}</Typography.Paragraph>
      </Col>
    </Row>
  )
}

export { HeroSection }
