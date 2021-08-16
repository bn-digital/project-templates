import { FC } from 'react'
import { ConfigProvider } from 'antd'
import { IntlProvider } from 'react-intl'
import { ConfigProviderProps } from 'antd/lib/config-provider'

type ViewProps = { locale: string }

function withLocale(Wrapped: FC<ConfigProviderProps>): FC<Partial<ViewProps>> {
  return ({ locale = 'en', children }) => (
    <IntlProvider locale={locale}>
      <Wrapped locale={{ locale }}>{children}</Wrapped>
    </IntlProvider>
  )
}
export default withLocale(ConfigProvider)
