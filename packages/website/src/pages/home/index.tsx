import { FC } from 'react'
import { Layout, Typography } from 'antd'
import { useContent } from '../../components/app/Content'

const Home: FC = ({ children }) => {
  const section = useContent('/#hero')
  return (
    <Layout>
      {section && (
        <Layout.Content>
          <Typography.Title>{section.title}</Typography.Title>
          <Typography.Paragraph>{section.description}</Typography.Paragraph>
        </Layout.Content>
      )}
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  )
}

export default Home
