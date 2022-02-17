import { FC } from 'react'
import { Layout } from 'antd'
import { useOutletContext } from 'react-router-dom'
import { HeroSection } from 'src/components/section'

const Home: FC = () => {
  const props = useOutletContext<HomeFragment>()
  return <Layout.Content>{props && <HeroSection {...props.hero} />}</Layout.Content>
}

export { Home as default }
