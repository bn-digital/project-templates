import { UnorderedListOutlined } from '@ant-design/icons'
import { Col, Row, Select } from 'antd'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import { useApp } from 'src/components/app'
import { Logo } from 'src/components/logo/Logo'
import { Navigation } from 'src/components/menu/Navigation'

const BurgerMenu: FC = () => {
  const { burger } = useApp()
  return <UnorderedListOutlined onClick={burger.toggle} />
}

const Header: FC<{ menu: Maybe<Maybe<LinkFragment>[]> }> = ({ menu = [] }) => {
  const {
    i18n: { setLocale },
  } = useApp()
  const navigate = useNavigate()
  const { formatMessage } = useIntl()
  return (
    <Row align={'middle'} justify={'space-between'}>
      <Col span={4}>
        <Logo />
      </Col>
      <Col span={20}>
        <Row justify={'end'} wrap={false} align={'middle'}>
          <Col xs={0} sm={0} md={0} lg={22} xl={22} xxl={22}>
            <Navigation
              data={menu?.map(it => ({
                key: it?.url as string,
                label: formatMessage({ id: it?.title as string }),
                onClick: () => it?.url && navigate(it?.url),
              }))}
            />
          </Col>
          <Col span={2}>
            <Select
              defaultValue={'en-US'}
              options={[
                { value: 'en-US', label: 'English' },
                { value: 'es-ES', label: 'Español' },
              ]}
              onSelect={(value: string) => setLocale(prevState => ({ ...prevState, locale: value }))}
            ></Select>
          </Col>
          <Col xs={1} sm={1} md={1} lg={0} xl={0} xxl={0}>
            <BurgerMenu />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { Header }
