import { generateSecret } from '../src/hooks'

export default ({ env }: Strapi.Env): Strapi.Config.Admin => ({
  auth: {
    secret: env('AUTH_SECRET', generateSecret('AUTH_SECRET')),
  },
  apiToken: { salt: env('API_TOKEN_SALT', generateSecret('API_TOKEN_SALT')) },
  watchIgnoreFiles: ['**/graphql/**/*.graphql*', '**/config/sync/**', '**/types/**/*.d.ts', '**/database/data.sqlite*'],
})
