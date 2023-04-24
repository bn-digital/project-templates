import { Col, Row } from "antd"
import { FC } from "react"

import { Logo } from "../logo"
const Header: FC<{ renderMenu: FC }> = ({ renderMenu: HorizontalMenu }) => {
  return (
    <Row wrap={false} align={"middle"} justify={"start"}>
      <Col>
        <Logo />
      </Col>
      <Col span={24}>
        <HorizontalMenu />
      </Col>
    </Row>
  )
}

export { Header }
