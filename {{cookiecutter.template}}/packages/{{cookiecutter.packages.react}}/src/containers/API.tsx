import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { FC, useMemo } from 'react'
import { setContext } from '@apollo/client/link/context'

const API: FC = ({ children }) => {
  const httpLink = createHttpLink({
    uri: `${process.env.REACT_APP_API_URL ?? ''}/graphql`,
  })
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')
    return {
      headers: {
        ...headers,
        ...(token ? { authorization: token ? `Bearer ${token}` : '' } : {}),
      },
    }
  })
  const client = useMemo(
    () =>
      new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache({ addTypename: true }),
        connectToDevTools: process.env.NODE_ENV !== 'production',
      }),
    [httpLink],
  )

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export { API }
