import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client"
import { createContext, memo, useContext, type FC, type PropsWithChildren } from "react"

import introspection from "../../graphql"
import PageProvider from "../../pages"

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

const apiUrl = `${import.meta.env.WEBSITE_API_URL ?? "/graphql"}` as const

const clientOptions: ConstructorParameters<typeof ApolloClient>[0] = {
  link: createHttpLink({
    uri: apiUrl,
    credentials: "same-origin",
  }),
  connectToDevTools: import.meta.env.DEV,
  queryDeduplication: true,
  cache: new InMemoryCache({
    resultCaching: import.meta.env.PROD,
    possibleTypes: introspection.possibleTypes,
  }),
}

const apolloClient = new ApolloClient(clientOptions)

const App: FC = () => (
  <ApolloProvider client={apolloClient}>
    <ContextProvider>
      <PageProvider />
    </ContextProvider>
  </ApolloProvider>
)

const useApp = () => useContext(Context)

export { ContextProvider, useApp }

export default memo(App)
