import { Category, Component, Palette, Variant } from "@react-buddy/ide-toolbox"
import { FC } from "react"
import { Footer, Header, Loader } from "../components/layout"
import { Logo } from "../components/logo"

export const PaletteTree: FC = () => (
  <Palette>
    <Category name={"App"}>
      <Component name={"Loader"}>
        <Variant>
          <Loader spinning />
        </Variant>
      </Component>
      <Component name={"Logo"}>
        <Variant>
          <Logo />
        </Variant>
      </Component>
      <Component name={"Header"}>
        <Variant>
          <Header />
        </Variant>
      </Component>
      <Component name={"Footer"}>
        <Variant>
          <Footer />
        </Variant>
      </Component>
    </Category>
  </Palette>
)
