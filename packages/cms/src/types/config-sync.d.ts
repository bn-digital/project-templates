namespace Strapi {
  namespace ConfigSync {
    type Plugin = {
      service<T>(name: 'main'): T
    }
    type MainService = {
      importAllConfig(): void
      exportAllConfig(): void
    }
  }
}
