function getConfigSyncPlugin(strapi: Strapi): Strapi.ConfigSync.Plugin {
  return strapi.plugin('config-sync')
}

function getConfigSyncMainService(strapi: Strapi) {
  return getConfigSyncPlugin(strapi).service<Strapi.ConfigSync.MainService>('main')
}

function exportConfigs(strapi: Strapi): void {
  getConfigSyncMainService(strapi).exportAllConfig()
  strapi.log.info(`[config-sync] Configurations were persisted into files`)
}

function importConfigs(strapi: Strapi): void {
  getConfigSyncMainService(strapi).importAllConfig()
  strapi.log.info(`[config-sync] Configurations were imported into database`)
}

export { exportConfigs, importConfigs }
