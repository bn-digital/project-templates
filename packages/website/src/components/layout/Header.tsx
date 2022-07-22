import { UnorderedListOutlined } from '@ant-design/icons'
import { Col, Row, Select } from 'antd'
import { FC } from 'react'
import { useApp } from 'src/components/app'
import { useLocale } from 'src/components/app/Locale'
import { Logo } from 'src/components/logo/Logo'
import { useBreakpoints } from 'src/components/screen'

const BurgerMenu: FC = () => {
  const { burger } = useApp()
  return <UnorderedListOutlined onClick={burger.toggle} />
}

const Header: FC<{ renderMenu: FC }> = ({ renderMenu: MenuComponent }) => {
  const { locale, setLocale } = useLocale()
  const { isMobile } = useBreakpoints()
  return (
    <Row align={'middle'} justify={'space-between'}>
      <Col span={4}>
        <Logo />
      </Col>
      <Col span={20}>
        <Row justify={'end'} wrap={false} align={'middle'}>
          <Col xs={0} sm={0} md={0} lg={22} xl={22} xxl={22}>
            <MenuComponent />
          </Col>
          <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}>
            <Select
              defaultValue={locale}
              options={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Español' },
              ]}
              onSelect={setLocale}
            />
          </Col>
          <Col xs={1} sm={1} md={1} lg={0} xl={0} xxl={0}>
            {isMobile && <BurgerMenu />}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { Header }
