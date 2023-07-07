import { FC } from "react"

import { NavLink, useLocation } from "react-router-dom"

import Navigation from "./Navigation"

const HeaderMenu: FC = () => {
  const { pathname } = useLocation()
  return (
    <Navigation
      mode={"horizontal"}
      activeKey={pathname}
      defaultActiveFirst
      items={[{ key: "/", label: <NavLink to={"/"}>Home</NavLink> }]}
    />
  )
}
1
export { HeaderMenu }
