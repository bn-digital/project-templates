import { generateSecret } from './'
import * as tasks from './cron'

export default ({ env }: Strapi.Env) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('CMS_PUBLIC_URL', ''),
  admin: { autoOpen: false },
  cron: {
    enabled: true,
    tasks,
  },
  app: {
    keys: env.array<string>('APP_KEYS', [generateSecret('app.keys')]),
  },
})
