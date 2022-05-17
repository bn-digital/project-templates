import { generateSecret } from './'
import * as tasks from './cron'

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: { autoOpen: false },
  cron: {
    enabled: true,
    tasks,
  },
  app: {
    keys: env.array('APP_KEYS', [generateSecret('app.keys')]),
  },
})
