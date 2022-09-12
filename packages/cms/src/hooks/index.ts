import { name, version } from '../../config'

function appInfo(strapi: Global['strapi']) {
  strapi.log.info(`[app] ${name}:${version}`)
}

export { appInfo }
