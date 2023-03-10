import app, { cspDirectives } from '../src/hooks'

export default (): Strapi.Middleware.Definition[] => {
  return [
    { name: 'strapi::errors' },
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: false,
          directives: {
            upgradeInsecureRequests: null,
            ...cspDirectives,
          } as typeof cspDirectives,
        },
      },
    },
    { name: 'strapi::logger' },
    { name: 'strapi::cors' },
    { name: 'strapi::query' },
    {
      name: 'strapi::body',
      config: { jsonLimit: '5mb' },
    },
    { name: 'strapi::favicon' },
    { name: 'global::website' },
    { name: 'strapi::public' },
  ]
}
