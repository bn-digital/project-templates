import { VFC } from 'react'
import { Col, Row, Tabs } from 'antd'
import { HeroSection } from './HeroSection'

const TabSection: VFC<{ data?: (Maybe<TabFragment> | undefined)[] | undefined | null }> = ({ data = [] }) => (
  <Row>
    <Col span={24}>
      <Tabs tabPosition={'top'}>
        {data?.map(it => (
          <Tabs.TabPane tab={it?.name} key={it?.id}>
            <HeroSection {...it?.pane} />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </Col>
  </Row>
)

export { TabSection }
