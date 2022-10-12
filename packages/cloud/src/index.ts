import { config } from 'dotenv'

import { run } from './digitalocean'

config()

if (process.env.CLOUD_PROVIDER === 'digitalocean') {
  run(process.env.APP_NAME)
}
