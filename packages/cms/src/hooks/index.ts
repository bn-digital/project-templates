import { join } from 'node:path'

import packageMetadata from '../../package.json'
import { generateSecret } from './config'
const env: Strapi.App.Env = {
  isDev() {
    return this.mode === 'development'
  },
  isProd() {
    return this.mode === 'production'
  },
  isTest() {
    return this.mode === 'staging'
  },
  mode: process.env.NODE_ENV as Strapi.App.Mode,
}
const name = `${process.env.APP_NAME ?? packageMetadata.name.split('/')?.[0].replace('@', '')}` as const
const dnsZone = `bndigital.dev` as const

const app: Strapi.App.Metadata = {
  workingDir: `${process.cwd()}`,
  name: process.env.APP_NAME ?? packageMetadata.name.split('/')?.[0].replace('@', ''),
  version: process.env.APP_VERSION ?? 'latest',
  domain: process.env.DOMAIN ?? `${name}.${dnsZone}`,
  env,
  dnsZone,
}

function appInfo(strapi: Strapi.Strapi) {
  strapi.log.info(`[app] Application: ${app.name}, version: ${app.version}`)
  strapi.log.info(`[app] Production domain: ${app.domain}`)
  strapi.log.info(`[app] Database Engine: ${process.env.DATABASE_CLIENT}`)

  return app
}

const resolvePath = (...workingDirRelative: string[]): string => {
  return join(app.workingDir, ...workingDirRelative)
}

const randomSecret = (name: string): string => generateSecret(name, app.name)

export { appInfo, app as default, randomSecret, resolvePath }
export { cspDirectives } from './config'
export { generateTypeDefinitions } from './typescript'
