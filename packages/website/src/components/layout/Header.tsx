import { Col, Row } from "antd"
import { FC } from "react"

import { Logo } from "../logo"
import { HeaderMenu } from "../menu"

const Header: FC<{ renderMenu?: FC }> = ({ renderMenu: HorizontalMenu = HeaderMenu }) => {
  return (
    <Row align={"middle"} justify={"start"}>
      <Col>
        <Logo />
      </Col>
      <Col>
        <HorizontalMenu />
      </Col>
    </Row>
  )
}

export { Header }
