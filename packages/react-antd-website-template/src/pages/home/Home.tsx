import { FC } from 'react'
import { Layout, Typography } from 'antd'
import { useContentQuery } from '../../graphql'

const Home: FC = ({ children }) => {
  const { data, loading, error } = useContentQuery({ variables: { where: { slug: 'home-section' } } })
  const section = data?.contentBlocks?.[0]
  return !loading && section ? (
    <Layout>
      <Typography.Title>{section.title}</Typography.Title>
      <Typography.Paragraph>{section.description}</Typography.Paragraph>
    </Layout>
  ) : (
    <Layout>{children}</Layout>
  )
}

export { Home }
