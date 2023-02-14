import fs from 'fs'
import path from 'path'

import app, { cspDirectives } from '../src/hooks'

export default (): Strapi.Middleware.Definition[] => {
  const maxAge = 30 * 24 * 60 * 60 * 1000
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
    {
      name: 'strapi::public',
      config: fs.existsSync(path.join(app.workingDir, 'public', 'index.html'))
        ? { defer: true, index: 'index.html', maxAge }
        : {},
    },
  ]
}
