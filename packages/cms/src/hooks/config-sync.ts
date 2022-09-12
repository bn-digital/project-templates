function getConfigSyncPlugin(strapi: Global['strapi']): Strapi.ConfigSync.Plugin {
  return strapi.plugin('config-sync')
}

function getConfigSyncMainService(strapi: Global['strapi']) {
  return getConfigSyncPlugin(strapi).service<Strapi.ConfigSync.MainService>('main')
}

function exportConfigs(strapi: Global['strapi']): void {
  getConfigSyncMainService(strapi).exportAllConfig()
  strapi.log.info(`[config-sync] Configurations were persisted into files`)
}

function importConfigs(strapi: Global['strapi']): void {
  getConfigSyncMainService(strapi).importAllConfig()
  strapi.log.info(`[config-sync] Configurations were imported into database`)
}

export { exportConfigs, importConfigs }
