import introspection from '@/graphql';
import { isDevelopment, isProduction } from '@/utils/environment';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloClientOptions,
} from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const makeApolloDefaultConfig = (): Partial<ApolloClientOptions<NormalizedCacheObject>> => ({
  connectToDevTools: isDevelopment,
  queryDeduplication: true,
  assumeImmutableResults: true,
});

export const { getClient: apolloRSC } = registerApolloClient(() => new ApolloClient({
  ...makeApolloDefaultConfig(),
  cache: new InMemoryCache({
    resultCaching: isProduction,
    possibleTypes: introspection.possibleTypes,
  }),
  link: new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: process.env.NEXT_PUBLIC_API_URL,
  }),
}));
