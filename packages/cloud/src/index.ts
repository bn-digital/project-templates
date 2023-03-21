import { Config } from '@pulumi/pulumi'
import { config as dotenv } from 'dotenv'

import { run as aws } from './aws'
import { run as digitalocean } from './digitalocean'

dotenv()

const provisioners = { aws, digitalocean }

const config = new Config()
const name = config.name
const provider = config.getObject<{ name: 'aws' | 'digitalocean' }>('provider')
const region = config.get('region')
const environment = `${process.env.APP_ENV ?? 'production'}` as const
const domain = `${process.env.DOMAIN ?? [name, 'bndigital.ai'].join('.')}` as const
const tags = {
  Name: name,
  Environment: 'production',
  Provisioner: 'pulumi',
}

let provisioner: VoidFunction = () => undefined

switch (provider?.name) {
  case 'digitalocean':
    provisioner = () =>
      provisioners.digitalocean({
        name,
        domain,
        region,
        environment,
        tags: Object.entries(tags).map(([key, value]) => `${key}=${value}`.toLowerCase()),
      })
    break
  case 'aws':
    provisioner = () => aws({ name, tags })
    break
  default:
    break
}

provisioner()
