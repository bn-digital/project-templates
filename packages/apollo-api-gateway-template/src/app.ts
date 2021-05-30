import { ApolloServer, gql, IResolvers } from 'apollo-server'
import { buildFederatedSchema } from '@apollo/federation'
import { readFileSync } from 'fs'
import { InMemoryLRUCache } from 'apollo-server-caching'
import { StrapiEndpoint, TestEndpoint } from './endpoint'
import { context } from './context'
import { ApolloGateway } from '@apollo/gateway'
import { GraphQLResolverMap } from 'apollo-graphql'
import { v4 } from 'uuid'

const typeDefs = gql`
  ${readFileSync(__dirname + '/graphql/schema.graphql')}
`

const dataSources: () => {} = () => services

const services = {
  app: new TestEndpoint(process.env.APP_API_URL),
  strapi: new StrapiEndpoint({ url: process.env.CMS_API_URL }),
}

type Context = {
  dataSources: typeof services
}

const gateway = new ApolloGateway({
  serviceList: [{ name: 'faker', url: 'http://localhost:9002' }],
})

const resolvers: GraphQLResolverMap<any> = {
  Query: { cart: () => ({ id: v4(), total: 100.5 }) },
  Mutation: {},
}

const cache = new InMemoryLRUCache()

const server: ApolloServer = new ApolloServer({
  introspection: true,
  debug: true,
  playground: true,
  tracing: true,
  cacheControl: {
    defaultMaxAge: 0,
    stripFormattedExtensions: false,
  },
  cache,
  cors: true,
  engine: false,
  dataSources,
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context,
  persistedQueries: { cache },
})

const PORT = process.env.PORT || 4000

server.listen(PORT).then(info => {
  console.log(`🚀 Apollo Gateway ready at ${info.url}`)
})
