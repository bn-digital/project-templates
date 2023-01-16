import { UnorderedListOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { FC } from 'react'
import { useToggle } from 'react-use'

import { Logo } from '../logo'
import { useBreakpoints } from '../screen'

const Header: FC<{ renderMenu: FC }> = ({ renderMenu: HorizontalMenu }) => {
  const { isMobile } = useBreakpoints()
  const [, toggle] = useToggle(false)
  const BurgerMenu: FC = () => <UnorderedListOutlined onClick={toggle} />
  return (
    <>
      <Row wrap={false} align={'middle'} justify={'start'}>
        <Col>
          <Logo />
        </Col>
        <Col span={24}>
          <Row align={'middle'}>
            <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
              <HorizontalMenu />
            </Col>
            <Col xs={1} sm={1} md={1} lg={0} xl={0} xxl={0}>
              {isMobile && <BurgerMenu />}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export { Header }
