import { UnorderedListOutlined } from '@ant-design/icons'
import { Col, Row, Space } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from 'src/components/app'
import { Logo } from 'src/components/logo/Logo'
import { Navigation } from 'src/components/menu/Navigation'

const BurgerMenu: FC = () => {
  const { burger } = useApp()
  return <UnorderedListOutlined onClick={burger.toggle} />
}

const Header: FC<{ menu: Maybe<LinkFragment>[] }> = ({ menu = [] }) => {
  const navigate = useNavigate()
  return (
    <Row align={'middle'} justify={'space-between'}>
      <Col span={4}>
        <Logo />
      </Col>
      <Col span={20}>
        <Space align={'end'}>
          <Row justify={'end'} wrap={false} align={'middle'}>
            <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
              <Navigation data={menu?.map(it => it && { key: it?.url, label: it?.title, onClick: () => navigate(it.url) })} />
            </Col>
            <Col xs={1} sm={1} md={1} lg={0} xl={0} xxl={0}>
              <BurgerMenu />
            </Col>
          </Row>
        </Space>
      </Col>
    </Row>
  )
}

export { Header }
