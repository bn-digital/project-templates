import { ConfigProvider } from 'antd'
import enUS from 'antd/es/locale/en_US'
import esES from 'antd/es/locale/es_ES'
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useMemo, useState } from 'react'
import { IntlProvider } from 'react-intl'

import { useWebsiteQuery } from '../../graphql'

const defaultLocale = 'en'

type Locale = typeof defaultLocale | string

type ContextProps = { locale: Locale; setLocale: Dispatch<SetStateAction<Locale>> }

const Context = createContext<ContextProps>({ locale: defaultLocale, setLocale: value => value })

const LocaleProvider: FC<PropsWithChildren> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const { data, loading } = useWebsiteQuery()
  const messages = useMemo(() => {
    let messagesData: Maybe<EntryFragment>[] = []
    if (data?.website?.data?.attributes?.translations) {
      messagesData =
        locale !== defaultLocale
          ? data.website.data.attributes.localizations?.data?.find(it => it?.attributes?.locale === locale)?.attributes?.translations ??
            data.website.data.attributes.translations
          : data.website.data.attributes.translations
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
  }, [data?.website?.data?.attributes, locale])

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
