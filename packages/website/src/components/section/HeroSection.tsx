import { Col, Row, Typography } from "antd"
import { FC } from "react"

const HeroSection: FC<Partial<CardFragment>> = ({ title, description, subtitle }) => {
  return (
    <Row align={"middle"} justify={"center"}>
      <Col span={24}>
        <Typography.Title level={2}>{title}</Typography.Title>
      </Col>
      <Col span={24}>
        <Row justify={"space-between"}>
          <Col>
            <Typography.Title level={5}>{subtitle}</Typography.Title>
          </Col>
          <Col></Col>
        </Row>
      </Col>
      <Col span={24}>
        <Typography.Paragraph>{description}</Typography.Paragraph>
      </Col>
    </Row>
  )
}

export { HeroSection }
