import { domain, generateSecret, name } from './index'

export default ({ env }: Strapi.Env): Strapi.PluginsConfig => ({
  'import-export-entries': {
    enabled: true,
    config: {
      serverPublicHostname: env('S3_PUBLIC_URL', `https://${env('S3_BUCKET')}.${env('S3_ENDPOINT')}`),
    },
  },
  'graphql': {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      subscriptions: true,
      playgroundAlways: true,
      apolloServer: {
        cache: 'bounded',
        persistedQueries: {
          ttl: 3600,
        },
      },
    },
  },
  'users-permissions': {
    enabled: true,
    config: {
      jwtSecret: env('JWT_SECRET', generateSecret('JWT_SECRET')),
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
          Bucket: `${env('S3_BUCKET', 'bn-dev')}/${name}/uploads`,
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
        port: env.int('SMTP_PORT', 1025),
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
