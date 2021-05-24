module.exports = ({ env }) => ({
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: env('NODE_ENV', 'development') === 'development',
    depthLimit: 7,
    amountLimit: 100,
    apolloServer: {
      tracing: env('NODE_ENV', 'development') === 'development',
    },
  },
  documentation: {
    servers: [
      {
        url: 'http://localhost:1337',
        description: 'Development server',
      },
      {
        url: 'https://bndigital.dev',
        description: 'Staging server',
      },
      {
        url: 'https://bndigital.co',
        description: 'Production server',
      },
    ],
  },
  upload: {
    provider: env('AWS_ACCESS_KEY_ID') && env('AWS_SECRET_ACCESS_KEY') ? 'aws-s3' : 'local',
    providerOptions:
      env('AWS_ACCESS_KEY_ID') && env('AWS_SECRET_ACCESS_KEY')
        ? {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            endpoint: env('AWS_S3_ENDPOINT'),
            params: {
              Bucket: env('AWS_BUCKET', 'bn-cdn/bndigital/uploads'),
            },
          }
        : {},
  },
  email: {
    provider: 'mailgun',
    providerOptions: {
      apiKey: env('MAILGUN_API_KEY'),
      domain: env('MAILGUN_DOMAIN'),
      host: env('MAILGUN_HOST', 'api.eu.mailgun.net'), //Optional. If domain region is Europe use 'api.eu.mailgun.net'
    },
    settings: {
      defaultFrom: 'info@bndigital.co',
      defaultReplyTo: env('MAILGUN_MAIL_TO', 'info@bndigital.co'),
      testAddress: env('TEST_MAIL_TO'),
    },
  },
})
