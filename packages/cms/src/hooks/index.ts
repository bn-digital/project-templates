import { join } from 'node:path'

import packageMetadata from '../../package.json'
import { generateSecret } from './config'

const name = `${process.env.APP_NAME ?? packageMetadata.name.split('/')?.[0].replace('@', '')}` as const
const dnsZone = `bndigital.dev` as const
const app: Strapi.App.Metadata = {
  workingDir: `${process.cwd()}`,
  name: process.env.APP_NAME ?? packageMetadata.name.split('/')?.[0].replace('@', ''),
  version: process.env.APP_VERSION ?? 'latest',
  domain: process.env.DOMAIN ?? `${name}.${dnsZone}`,
  dnsZone,
}
function appInfo({ domain, name, version, database }: Strapi.App.Metadata) {
  strapi.log.info(`[app] Application: ${name}, version: ${version}`)
  strapi.log.info(`[app] Production domain: ${domain}`)
  strapi.log.info(`[app] Database Engine: ${database}`)
}

const resolvePath = (...workingDirRelative: string[]): string => {
  return join(app.workingDir, ...workingDirRelative)
}

const randomSecret = (name: string): string => generateSecret(name, app.name)

export { appInfo, app as default, randomSecret, resolvePath }
export { cspDirectives } from './config'
export { exportConfigs, importConfigs } from './config-sync'
export { generateTypeDefinitions } from './typescript'
