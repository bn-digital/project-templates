import { Space } from "antd"
import { FC } from "react"

import { ReactComponent as LogoImage } from "./Logo.svg"

const Logo: FC = () => {
  return (
    <Space direction={"horizontal"} align={"center"}>
      <LogoImage onClick={() => window.location.assign("/")} style={{ height: 32, width: 32, color: "#0000" }} />
    </Space>
  )
}

export { Logo }
