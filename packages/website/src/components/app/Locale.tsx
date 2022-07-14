import { FC, PropsWithChildren, useMemo } from 'react'
import { IntlProvider } from 'react-intl'
import { useTranslationsQuery } from 'src/graphql'

import { useApp } from '.'

const defaultLocale = 'en-US' as const

const LocaleProvider: FC<PropsWithChildren> = ({ children }) => {
  const {
    i18n: { locale },
  } = useApp()
  const { data } = useTranslationsQuery({ variables: locale.locale === defaultLocale ? {} : { locale: locale.locale } })
  const messages = useMemo(
    () =>
      data?.translation?.data?.attributes?.entry?.reduce(
        (all, one) => ({
          ...all,
          [one?.key as string]: one?.value as string,
        }),
        {},
      ),
    [data?.translation?.data?.attributes?.entry],
  )
  return (
    <IntlProvider locale={locale.locale} defaultLocale={defaultLocale} messages={messages}>
      {children}
    </IntlProvider>
  )
}

export { LocaleProvider }
