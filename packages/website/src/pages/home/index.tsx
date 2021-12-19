import { FC } from 'react'
import { Layout } from 'antd'
import { HeroSection } from '../../components/section'
import { HomepageProps, withHomepage } from '../../graphql'
import { TabSection } from '../../components/section/TabSection'

const Home: FC<HomepageProps> = ({ data }) => {
  const content = data?.homepage?.data?.attributes
  return (
    <Layout.Content>
      <HeroSection {...content?.hero} />
      <TabSection data={content?.capabilities} />
    </Layout.Content>
  )
}

export default withHomepage()(Home)
