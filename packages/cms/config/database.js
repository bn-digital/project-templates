module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('MONGODB_HOST', 'localhost'),
        srv: env.bool('MONGODB_SRV', false),
        port: env.int('MONGODB_PORT', 27017),
        database: env('MONGODB_DATABASE', 'strapi'),
        username: env('MONGODB_USERNAME'),
        password: env('MONGODB_PASSWORD'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
})
