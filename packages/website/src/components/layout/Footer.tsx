import { Col, Row, Typography } from "antd"
import { FC } from "react"
import { Link } from "react-router-dom"
import { useApp } from "../app"

const Footer: FC = () => {
  const { app } = useApp()
  return (
    <Row justify={"space-between"}>
      <Col>
        <Link to={"/"}>{window.location.hostname}</Link>
      </Col>
      <Col>
        <Typography.Text type={"secondary"}>Version: {app.version}</Typography.Text>
      </Col>
    </Row>
  )
}

export { Footer }
