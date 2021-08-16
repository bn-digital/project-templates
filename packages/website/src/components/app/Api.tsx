import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { FC, useMemo } from 'react'
import { ApolloProviderProps } from '@apollo/client/react/context'

type ApiProps = { uri: string }

function withApolloClient(Wrapped: FC<ApolloProviderProps<NormalizedCacheObject>>): FC<Partial<ApiProps>> {
  const createClient = (uri: string) =>
    new ApolloClient({
      uri,
      queryDeduplication: true,
      cache: new InMemoryCache({ addTypename: true, resultCaching: process.env.NODE_ENV === 'production' }),
      connectToDevTools: process.env.NODE_ENV !== 'production',
    })
  return ({ uri = '/graphql', children }) => {
    const client = useMemo(() => createClient(uri), [uri])
    return <Wrapped client={client}>{children}</Wrapped>
  }
}

export default withApolloClient(ApolloProvider)
