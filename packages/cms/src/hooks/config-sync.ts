function getConfigSyncPlugin(strapi: Strapi.Strapi): Strapi.ConfigSync.Plugin {
  return strapi.plugin('config-sync')
}

function getConfigSyncMainService(strapi: Strapi.Strapi) {
  return getConfigSyncPlugin(strapi).service<Strapi.ConfigSync.MainService>('main')
}

function exportConfigs(strapi: Strapi.Strapi): void {
  getConfigSyncMainService(strapi).exportAllConfig()
  strapi.log.info(`[config-sync] Configurations were persisted into files`)
}

function importConfigs(strapi: Strapi.Strapi): void {
  getConfigSyncMainService(strapi).importAllConfig()
  strapi.log.info(`[config-sync] Configurations were imported into database`)
}

export { exportConfigs, importConfigs }
