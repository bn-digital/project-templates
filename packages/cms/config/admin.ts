import { randomSecret } from '../src/hooks'

export default ({ env }: Strapi.Env) => ({
  auth: {
    secret: env('AUTH_SECRET', randomSecret('AUTH_SECRET')),
  },
  apiToken: { salt: env('API_TOKEN_SALT', randomSecret('API_TOKEN_SALT')) },
  transfer: { token: { salt: env('API_TOKEN_SALT', randomSecret('API_TOKEN_SALT')) } },
  watchIgnoreFiles: ['**/graphql/**/*.graphql*', '**/config/sync/**', '**/types/**/*.d.ts', '**/database/data.sqlite*'],
})
