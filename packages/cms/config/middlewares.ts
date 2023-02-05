import fs from 'fs'
import { Middleware } from 'koa'
import path from 'path'

import app from '../src/hooks'

type Scope = 'strapi' | 'global' | 'api' | 'plugin'

type MiddlewareUIDs = `${Scope}::${string}`

type MiddlewareType<ID = MiddlewareUIDs, T = unknown> = { config?: T; name: ID } | Middleware | ID
export default (): MiddlewareType[] => {
  const maxAge = 30 * 24 * 60 * 60 * 1000
  return [
    { name: 'strapi::errors' },
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: false,
          directives: {
            'default-src': ['*', "'self'", "'unsafe-inline'", "'unsafe-eval'"],
            'script-src': ['*', "'unsafe-inline'", "'unsafe-eval'"],
            'style-src': ['*', "'unsafe-inline'"],
            'connect-src': ['*', "'unsafe-inline'"],
            'img-src': ['*', 'data:', 'blob:', "'unsafe-inline'"],
            'frame-src': ['*'],
            'upgradeInsecureRequests': null,
          },
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
    {
      name: 'strapi::compression',
      config: { gzip: true },
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
