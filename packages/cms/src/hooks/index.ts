export { exportConfigs, importConfigs } from './config-sync'
export { generateTypeDefinitions } from './typescript'

import { createHmac } from 'node:crypto'

import packageMetadata from '../../package.json'

const workingDir = process.cwd()

/**
 * Name is generated from package scope name, defined in package.json, i.e. leading chunk before slash (@app/cms - app)
 * @type {string}
 */
const name = process.env.APP_NAME ?? packageMetadata.name.split('/')?.[0].replace('@', '')

const version = process.env.APP_VERSION ?? 'latest'

const domain = process.env.DOMAIN ?? `${name}.bndigital.dev`

const generateSecret = (secretName: string): string => createHmac('sha3-256', name).update(secretName).digest('hex')

function appInfo(strapi: Strapi.Strapi) {
  strapi.log.info(`[app] ${name}:${version}`)
  strapi.log.info(`[app] Production domain: ${domain}`)
  strapi.log.info(`[database] Engine: ${strapi.config.database.connection.client}`)
}

const app = {
  workingDir,
  name,
  version,
  domain,
}
export { appInfo, app as default, generateSecret }
