import fs from 'fs'
import { Middleware } from 'koa'
import path from 'path'

import { workingDir } from './index'

type Scope = 'strapi' | 'global' | 'api' | 'plugin'

type MiddlewareUIDs = `${Scope}::${string}`

type MiddlewareType<ID = MiddlewareUIDs, T = unknown> = { config?: T; name: ID } | Middleware | ID
export default ({ env }: Strapi.Env): MiddlewareType[] => {
  const bucket = env('S3_BUCKET', 'bn-dev')
  const region = env('S3_REGION', 'fra1')
  const maxAge = 30 * 24 * 60 * 60 * 1000
  return [
    'strapi::errors',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'script-src': ["'self'", "'unsafe-inline'", `https://editor.unlayer.com`],
            'connect-src': ["'self'", 'https:'],
            'frame-src': [`https://editor.unlayer.com`],
            'img-src': [
              "'self'",
              'data:',
              'blob:',
              `https://dl.airtable.com`,
              `https://editor.unlayer.com`,
              `https://${bucket}.${region}.cdn.digitaloceanspaces.com`,
              `https://${bucket}.${region}.digitaloceanspaces.com`,
              `https://${bucket}.blob.core.windows.net`,
              `https://${bucket}.s3.amazonaws.com`,
              `https://storage.cloud.google.com`,
            ],
            'media-src': [
              "'self'",
              'data:',
              'blob:',
              `https://dl.airtable.com`,
              `https://editor.unlayer.com`,
              `https://${bucket}.${region}.cdn.digitaloceanspaces.com`,
              `https://${bucket}.${region}.digitaloceanspaces.com`,
              `https://${bucket}.blob.core.windows.net`,
              `https://${bucket}.s3.amazonaws.com`,
              `https://storage.cloud.google.com`,
            ],
            'upgradeInsecureRequests': null,
          },
        },
      },
    },
    'strapi::cors',
    'strapi::query',
    {
      name: 'strapi::body',
      config: {
        jsonLimit: '5mb',
      },
    },
    {
      name: 'strapi::compression',
      config: { gzip: true },
    },
    { name: 'strapi::favicon' },
    {
      name: 'strapi::public',
      config: fs.existsSync(path.join(workingDir, 'public', 'index.html'))
        ? { defer: true, index: 'index.html', maxAge }
        : {},
    },
  ]
}
