import { FC } from 'react'
import { ConfigProvider } from 'antd'
import { IntlProvider } from 'react-intl'
import './View.less'

type ViewProps = { locale: string }

const ViewProvider: FC<Partial<ViewProps>> = ({ locale = 'en', children }) => (
  <IntlProvider locale={locale}>
    <ConfigProvider locale={{ locale }}>{children}</ConfigProvider>
  </IntlProvider>
)

export { ViewProvider }
