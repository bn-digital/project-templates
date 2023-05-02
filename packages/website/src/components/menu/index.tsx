import { FC } from "react"
import { NavLink } from "react-router-dom"

import Navigation from "./Navigation"

const HeaderMenu: FC = () => (
  <Navigation mode={"horizontal"} items={[{ key: "/", label: <NavLink to={"/"}>Home</NavLink> }]} />
)

export { HeaderMenu }
