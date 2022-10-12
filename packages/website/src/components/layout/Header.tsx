import { UnorderedListOutlined } from '@ant-design/icons'
import { Button, Col, Row, Select } from 'antd'
import { FC } from 'react'
import { useCookie, useLocalStorage, useToggle } from 'react-use'

import { useApp } from '../app'
import { useLocale } from '../app/Locale'
import { Logo } from '../logo/Logo'
import { AuthModal } from '../modal/AuthModal'
import { useBreakpoints } from '../screen'

const BurgerMenu: FC = () => {
  const { burger } = useApp()
  return <UnorderedListOutlined onClick={burger.toggle} />
}

const LanguageMenu: FC = () => {
  const { locale, setLocale } = useLocale()

  return (
    <Select
      defaultValue={locale}
      options={[
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
      ]}
      onSelect={setLocale}
    />
  )
}

const Header: FC<{ renderMenu: FC }> = ({ renderMenu: HorizontalMenu }) => {
  const { isMobile } = useBreakpoints()
  const [visible, toggle] = useToggle(false)
  const [token, setToken] = useLocalStorage('jwtToken')

  return (
    <>
      <Row wrap={false} align={'middle'} justify={'start'}>
        <Col>
          <Logo />
        </Col>
        <Col span={24}>
          <Row align={'middle'}>
            <Col xs={0} sm={0} md={0} lg={20} xl={20} xxl={20}>
              <HorizontalMenu />
            </Col>
            <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}>
              {!token && (
                <Button type={'ghost'} onClick={toggle}>
                  Login
                </Button>
              )}
            </Col>
            <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}>
              <LanguageMenu />
            </Col>
            <Col xs={1} sm={1} md={1} lg={0} xl={0} xxl={0}>
              {isMobile && <BurgerMenu />}
            </Col>
          </Row>
        </Col>
      </Row>
      {!token && <AuthModal open={visible} toggle={toggle} tokenDispatcher={setToken} />}
    </>
  )
}

export { Header }
