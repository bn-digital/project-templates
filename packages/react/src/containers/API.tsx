import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { FC, useMemo } from 'react'
import { setContext } from '@apollo/client/link/context'

function useApolloClient(): ApolloClient<NormalizedCacheObject> {
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
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({ addTypename: true }),
    connectToDevTools: process.env.NODE_ENV !== 'production',
  })
}

const API: FC = ({ children }) => {
  const client = useMemo(useApolloClient, [])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export { API }
