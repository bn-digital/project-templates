import packageMetadata from '../package.json'
import { run as aws } from './aws'
import { run as digitalocean } from './digitalocean'

const name = `${process.env.APP_NAME ?? packageMetadata.name.split('/')[0].replace('@', '')}` as const
const region = `${process.env.REGION ?? 'fra1'}` as const
const environment = `${process.env.APP_ENV ?? 'production'}` as const
const dnsZone = 'bndigital.ai'
const domain = `${process.env.APP_DOMAIN ?? [name, dnsZone].join('.')}` as const
const tags = ['provisioner:pulumi', `environment:${environment}`, `app:${name}`]

switch (process.env.CLOUD_PROVIDER) {
  case 'digitalocean':
    digitalocean({ name, domain, region, environment, tags })
    break
  case 'aws':
    aws(name)
    break
}
