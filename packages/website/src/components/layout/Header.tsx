import { UnorderedListOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { FC } from 'react'
import { useApp } from 'src/components/app'
import { Logo } from 'src/components/logo/Logo'
import { Navigation } from 'src/components/menu/Navigation'

const BurgerMenu: FC = () => {
  const { burger } = useApp()
  return <UnorderedListOutlined onClick={burger.toggle} />
}

const Header: FC = () => (
  <Row align={'middle'} justify={'space-between'} wrap={false}>
    <Col flex={'100px'}>
      <Logo />
    </Col>
    <Col flex={'none'}>
      <Row justify={'end'} align={'middle'}>
        <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
          <Navigation data={[{ title: 'Home', url: '/', id: '0' }]} />
        </Col>
        <Col xs={1} sm={1} md={1} lg={0} xl={0} xxl={0}>
          <BurgerMenu />
        </Col>
      </Row>
    </Col>
  </Row>
)

export { Header }
