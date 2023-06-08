import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox"
import { FC } from "react"
import { DefaultLayout, Footer, Header } from "../components/layout"
import { Logo } from "../components/logo"
import { PaletteTree } from "./PaletteTree"

const ComponentPreviews: FC = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path={"/PaletteTree"}>
        <PaletteTree />
      </ComponentPreview>
      <ComponentPreview path={"/Logo"}>
        <Logo />
      </ComponentPreview>
      <ComponentPreview path={"/Header"}>
        <Header />
      </ComponentPreview>
      <ComponentPreview path={"/Footer"}>
        <Footer />
      </ComponentPreview>
      <ComponentPreview path={"/DefaultLayout"}>
        <DefaultLayout />
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews
