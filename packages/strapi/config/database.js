module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: process.env.NODE_ENV === 'production' ? 'pg' : 'sqlite',
        host: env('DATABASE_HOST', 'bndigital.dev'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'production'),
        schema: env('DATABASE_SCHEMA', 'app'),
        username: env('DATABASE_USERNAME', 'bn'),
        password: env('DATABASE_PASSWORD'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
})
