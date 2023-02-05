import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, type NormalizedCacheObject } from '@apollo/client'
import { type ApolloProviderProps } from '@apollo/client/react/context'
import { ConfigProvider } from 'antd'
import { createContext, type FC, memo, type PropsWithChildren, useContext, useEffect, useState } from 'react'
import { useNetworkState } from 'react-use'

import introspection from '../../graphql'
import PageProvider from '../../pages'

type AppProps = {
  app: { api: boolean }
}

const defaultValue: AppProps = {
  app: { api: false },
}

const Context = createContext(defaultValue)

type ContextProviderProps = PropsWithChildren<Partial<AppProps>>

const ContextProvider: FC<ContextProviderProps> = ({ children, ...props }) => {
  return <Context.Provider value={{ ...defaultValue, ...props }}>{children}</Context.Provider>
}

const apiUrl = `${import.meta.env.WEBSITE_API_URL ?? 'graphql'}` as const

const clientOptions: ConstructorParameters<typeof ApolloClient>[0] = {
  link: createHttpLink({
    uri: apiUrl,
    credentials: 'same-origin',
  }),
  connectToDevTools: import.meta.env.DEV,
  queryDeduplication: true,
  cache: new InMemoryCache({
    resultCaching: import.meta.env.PROD,
    possibleTypes: introspection.possibleTypes,
  }),
}

const apolloClient = new ApolloClient(clientOptions)

const ApiProvider: FC<Partial<ApolloProviderProps<NormalizedCacheObject>>> = ({ children }) => {
  const { online } = useNetworkState()
  const [offline, setOffline] = useState<boolean>(!online)
  useEffect(() => {
    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({ query: '{__typename}' }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => setOffline(!response.ok))
      .catch(() => setOffline(true))
  }, [])
  return (
    <ContextProvider app={{ api: !offline }}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </ContextProvider>
  )
}

const App: FC = () => (
  <ApiProvider>
    <ContextProvider>
      <ConfigProvider>
        <PageProvider />
      </ConfigProvider>
    </ContextProvider>
  </ApiProvider>
)

const useApp = () => useContext(Context)

export { ContextProvider, useApp }

export default memo(App)
