import { FC } from 'react'
import { Layout } from 'antd'
import { HeroSection } from 'src/components/section'
import { withHomepage } from 'src/graphql'
import { Page } from 'src/components/page'

const Home: FC<Maybe<HomepageFragment>> = ({ hero }) => (
  <Layout.Content>
    <HeroSection {...hero} />
  </Layout.Content>
)

export default withHomepage()(({ data }) => {
  if (data?.loading) return null
  return <Page seo={data?.homepage?.data?.attributes?.seo} {...data?.homepage?.data?.attributes} />
})
