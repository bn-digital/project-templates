import { Layout } from "antd"
import { FC } from "react"
import { useOutletContext } from "react-router-dom"

import { HeroSection } from "../../components/section"

const Home: FC = () => {
  const props = useOutletContext<{ hero: ComponentUiCard }>()
  return <Layout.Content>{props?.hero && <HeroSection {...props.hero} />}</Layout.Content>
}

export { Home as default }
