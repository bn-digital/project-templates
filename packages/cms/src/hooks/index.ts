import { name, version } from '../../config'

export { exportConfigs, importConfigs } from './config-sync'
export { generateTypeDefinitions } from './typescript'

function appInfo(strapi: Strapi.Strapi) {
  strapi.log.info(`[app] ${name}:${version}`)
  strapi.log.info(`[database] Engine: ${strapi.config.database.connection.client}`)
}

export { appInfo }
