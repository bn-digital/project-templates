import { Button, Col, Row, Skeleton } from "antd"
import { FC } from "react"

import { HeroSection } from "../../components/section"
import { useHomeQuery } from "../../graphql"

const Home: FC = () => {
  const { data, loading, error, client } = useHomeQuery()
  const props = data?.home?.data?.attributes?.hero
  return (
    <Skeleton loading={loading} avatar={false}>
      <Row>
        <Col span={24}>
          <HeroSection {...props?.heading} />
        </Col>
        <Col span={4}>
          {props?.button?.title && (
            <Button type={"primary"} block href={props?.button?.url} target={`_${props?.button?.target ?? "self"}`}>
              {props?.button?.title}
            </Button>
          )}
        </Col>
      </Row>
    </Skeleton>
  )
}

export default Home
