import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client"
import { ConfigProvider } from "antd"
import { createContext, memo, useContext, type FC, type PropsWithChildren } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { version } from "../../../package.json"
import introspection from "../../graphql"
import routes from "../../pages"
import theme from "../../themes"

type ContextProps = {
  app: { version: string }
}

const app: ContextProps["app"] = { version }

const Context = createContext({ app })

const ContextProvider: FC<PropsWithChildren<ContextProps>> = ({ children, ...props }) => {
  return <Context.Provider value={{ ...props }}>{children}</Context.Provider>
}

const useApp: () => ContextProps = () => useContext(Context)

const client = new ApolloClient({
  link: createHttpLink({
    uri: `${import.meta.env.WEBSITE_API_URL ?? "/graphql"}`,
    credentials: "same-origin",
  }),
  connectToDevTools: import.meta.env.DEV,
  queryDeduplication: true,
  assumeImmutableResults: true,
  cache: new InMemoryCache({
    resultCaching: import.meta.env.PROD,
    possibleTypes: introspection.possibleTypes,
  }),
})

const router = createBrowserRouter(routes)

const App: FC = memo(() => (
  <ApolloProvider client={client}>
    <ContextProvider app={app}>
      <ConfigProvider theme={theme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </ContextProvider>
  </ApolloProvider>
))

export { useApp }

export default App
