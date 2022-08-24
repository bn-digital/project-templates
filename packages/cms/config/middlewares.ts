export default ({ env }: Strapi.Env) => {
  const bucket = env('S3_BUCKET', 'bn-dev')
  const region = env('S3_REGION', 'fra1')
  const host = env('HOST', '127.0.0.1')
  const port = env.int('PORT', 1337)
  return [
    'strapi::errors',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'script-src': ["'self'", "'unsafe-inline'"],
            'connect-src': ["'self'", 'https:'],
            'img-src': [
              "'self'",
              'data:',
              'blob:',
              `https://dl.airtable.com`,
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
    'strapi::logger',
    'strapi::query',
    'strapi::session',
    {
      name: 'strapi::body',
      config: {
        jsonLimit: '5mb',
      },
    },
    'strapi::public',
    'strapi::favicon',
    {
      name: 'global::proxies',
      config: {
        proxies: {
          self: `http://${host}:${port}`,
        },
      },
    },
  ]
}