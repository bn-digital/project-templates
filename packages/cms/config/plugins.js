const name = require('./name')

module.exports = ({ env }) => ({
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: env('NODE_ENV', 'development') === 'development',
    depthLimit: 7,
    amountLimit: 100,
    apolloServer: {
      tracing: env('NODE_ENV', 'development') !== 'production',
    },
  },
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('S3_ACCESS_KEY_ID'),
      secretAccessKey: env('S3_SECRET_ACCESS_KEY'),
      region: env('S3_REGION', 'fra1'),
      endpoint: env('S3_ENDPOINT', `${env('S3_REGION')}.digitaloceanspaces.com`),
      params: {
        Bucket: `${env('S3_BUCKET', `bn-dev/${name}`)}/uploads`,
      },
    },
  },
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST'),
      port: env('SMTP_PORT'),
      auth: {
        user: env('SMTP_USERNAME', 'bn-digital'),
        pass: env('SMTP_PASSWORD'),
      },
    },
    settings: {
      defaultFrom: env('MAIL_FROM', `no-reply@${env('DOMAIN', `${name}.bndigital.dev`)}`),
      defaultReplyTo: env('MAIL_TO', `no-reply@${env('DOMAIN', `${name}.bndigital.dev`)}`),
    },
  },
})
