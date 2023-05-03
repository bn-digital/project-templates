import "./Navigation.less"

import { Menu, MenuProps } from "antd"
import { FC } from "react"

const Navigation: FC<MenuProps> = ({ theme = "light", ...props }) => {
  return <Menu theme={theme} {...props} />
}

export default Navigation
