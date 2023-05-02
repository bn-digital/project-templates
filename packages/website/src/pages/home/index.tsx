import { Button, Layout, PageHeader, Typography } from "antd"
import { FC } from "react"

import { HeroSection } from "../../components/section"
import { useHomeQuery } from "../../graphql"

const Home: FC = () => {
  const { data, loading } = useHomeQuery()
  if (loading) return null
  const props = data?.home?.data?.attributes?.hero
  return (
    <Layout.Content>
      <PageHeader
        title={<Typography.Title level={2}>Homepage</Typography.Title>}
        extra={
          <Button type={"primary"} href={props?.button?.url} target={`_${props?.button?.target ?? "self"}`}>
            {props?.button?.title}
          </Button>
        }
      />
      <Layout.Content>
        <HeroSection {...props?.heading} />
      </Layout.Content>
    </Layout.Content>
  )
}

export { Home as default }
