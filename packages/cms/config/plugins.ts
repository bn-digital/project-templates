import { domain, generateSecret, name } from './index'

export default ({ env }: { env: EnvFunction }): Strapi.PluginsConfig => ({
  'entity-notes': {
    enabled: true,
  },
  'seo': {
    enabled: true,
  },
  'strapi-prometheus': {
    enabled: true,
    config: {
      prefix: name,
      fullURL: false,
      includeQuery: false,
      defaultMetrics: true,
    },
  },
  'graphql': {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      subscriptions: false,
      playgroundAlways: env('NODE_ENV', 'development') === 'development',
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', generateSecret('users-permissions.jwt-secret')),
    },
  },
  'upload': {
    enabled: true,
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('S3_ACCESS_KEY_ID'),
        secretAccessKey: env('S3_SECRET_ACCESS_KEY'),
        endpoint: env('S3_ENDPOINT'),
        params: {
          Bucket: `${env('S3_BUCKET', `bn-dev/${name}`)}/uploads`,
        },
      },
    },
  },
  'email': {
    enabled: true,
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'bndigital.dev'),
        port: env('SMTP_PORT', 1025),
        auth: {
          user: env('SMTP_USERNAME', ''),
          pass: env('SMTP_PASSWORD', ''),
        },
      },
      settings: {
        defaultFrom: env('SMTP_MAIL_FROM', `no-reply@${domain}`),
        defaultReplyTo: env('SMTP_MAIL_TO', `no-reply@${domain}`),
      },
    },
  },
})
