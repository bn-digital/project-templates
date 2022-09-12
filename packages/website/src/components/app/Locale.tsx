import { ConfigProvider } from 'antd'
import enUS from 'antd/lib/locale/en_US'
import esES from 'antd/lib/locale/es_ES'
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useMemo, useState } from 'react'
import { IntlProvider } from 'react-intl'

import { useTranslationsQuery } from '../../graphql'

const defaultLocale = 'en'

type Locale = typeof defaultLocale | string

type ContextProps = { locale: Locale; setLocale: Dispatch<SetStateAction<Locale>> }

const Context = createContext<ContextProps>({ locale: defaultLocale, setLocale: value => value })

const LocaleProvider: FC<PropsWithChildren> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const { data, loading } = useTranslationsQuery()
  const messages = useMemo(() => {
    let messagesData: Maybe<EntryFragment>[] = []
    if (data?.translation?.data?.attributes) {
      messagesData =
        locale !== defaultLocale
          ? data?.translation.data.attributes.localizations?.data?.find(it => it?.attributes?.locale === locale)?.attributes?.entry ??
            data?.translation.data.attributes.entry
          : data?.translation.data.attributes.entry
    } else {
      messagesData = []
    }
    return (
      messagesData?.reduce(
        (all, one) => ({
          ...all,
          [one?.key as string]: one?.value as string,
        }),
        {},
      ) ?? {}
    )
  }, [data?.translation?.data?.attributes, locale])

  if (loading) return null

  return (
    <Context.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} timeZone={'Etc'} defaultLocale={defaultLocale} messages={messages}>
        <ConfigProvider locale={locale === 'en' ? enUS : esES}>{children}</ConfigProvider>
      </IntlProvider>
    </Context.Provider>
  )
}
const useLocale = () => useContext(Context)
export { LocaleProvider, useLocale }
