import { v5 } from 'uuid'
import { name } from './name'
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
    keys: env.array('SESSION_KEY', [v5(name, '22339ddd-8c29-4a86-822e-e1173c686e8d')]),
  },
})
