import { generateSecret } from './'
import tasks from './cron'

export default ({ env }: Strapi.Env) => {
  const host = env('HOST', '127.0.0.1')
  const port = env.int('PORT', 1337)
  return {
    host,
    port,
    url: env('CMS_PUBLIC_URL', ''),
    admin: { autoOpen: false },
    cron: {
      enabled: true,
      tasks,
    },
    app: {
      keys: env.array<string>('APP_KEYS', [generateSecret('app.keys')]),
    },
  }
}