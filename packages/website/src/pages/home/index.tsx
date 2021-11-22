import { FC } from 'react'
import { Layout } from 'antd'
import { HeroSection } from '../../components/section'
import { ContentProps, withContent } from '../../components/app/Content'

const Home: FC<ContentProps> = ({ section, menu }) => (
  <Layout.Content>
    <HeroSection data={{ ...section.hero?.[0], button: menu.cta?.[0] }} />
  </Layout.Content>
)

export default withContent(Home)