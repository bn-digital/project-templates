import { FC } from 'react'
import { Layout } from 'antd'
import { HeroSection } from '../../components/section'
import { withHomepage } from '../../graphql'
import { Helmet } from 'react-helmet'

const Home: FC<Maybe<HomepageFragment>> = ({ hero, meta }) => (
  <Layout.Content>
    <Helmet title={meta?.title ?? undefined} meta={[{ name: 'description', content: meta?.description ?? undefined }]} />
    <HeroSection {...hero} />
  </Layout.Content>
)

export default withHomepage()(({ data }) => <Home {...data?.homepage?.data?.attributes} />)
