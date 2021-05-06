import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { FC, useMemo } from 'react'

const API: FC = ({ children }) => {
  const uri = process.env.REACT_APP_API_URL ?? '/graphql'
  const client = useMemo(
    () =>
      new ApolloClient({
        uri,
        cache: new InMemoryCache({ addTypename: true }),
        connectToDevTools: process.env.NODE_ENV !== 'production',
      }),
    [uri],
  )

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export { API }
