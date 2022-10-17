import { Col, Layout, Row } from 'antd'
import { FC } from 'react'
import { useOutletContext } from 'react-router-dom'

import { HeroSection } from '../../components/section'
import { Components } from './Components'

const Home: FC = () => {
  const props = useOutletContext<Maybe<HomeFragment>>()
  return (
    <Layout.Content>
      {props?.hero && <HeroSection {...props.hero} />}
      <Row>
        <Col span={24}>{props?.components && <Components style={{ textAlign: 'center' }} dataSource={props.components} />}</Col>
      </Row>
    </Layout.Content>
  )
}

export { Home as default }
