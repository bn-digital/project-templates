import { UnorderedListOutlined } from '@ant-design/icons'
import { Col, Row, Select } from 'antd'
import { FC, useMemo } from 'react'
import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import { useApp } from 'src/components/app'
import { Logo } from 'src/components/logo/Logo'
import { Navigation } from 'src/components/menu/Navigation'
import { useMenuQuery } from 'src/graphql'

import { useLocale } from '../app/Locale'

const BurgerMenu: FC = () => {
  const { burger } = useApp()
  return <UnorderedListOutlined onClick={burger.toggle} />
}

const Header: FC = () => {
  const { locale, setLocale } = useLocale()
  const { data } = useMenuQuery({ variables: { filters: { slug: { eq: 'header' } } } })
  const navigate = useNavigate()
  const { formatMessage } = useIntl()

  const menuItems = useMemo(
    () =>
      (data?.menusMenus?.data?.flatMap(it => it.attributes?.items?.data) ?? []).map(it => ({
        id: `${it?.id}`,
        title: `${it?.attributes?.title}`,
        url: `${it?.attributes?.url}`,
      })),
    [data?.menusMenus?.data],
  )

  return (
    <Row align={'middle'} justify={'space-between'}>
      <Col span={4}>
        <Logo />
      </Col>
      <Col span={20}>
        <Row justify={'end'} wrap={false} align={'middle'}>
          <Col xs={0} sm={0} md={0} lg={22} xl={22} xxl={22}>
            {menuItems && (
              <Navigation
                data={menuItems?.map(it => ({
                  key: it.url,
                  label: formatMessage({ id: it.title }),
                  onClick: () => navigate(it.url),
                }))}
              />
            )}
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
            <BurgerMenu />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { Header }
