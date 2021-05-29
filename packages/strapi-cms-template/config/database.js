module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('DATABASE_CLIENT') ? env('DATABASE_CLIENT') : 'sqlite',
        host: env('DATABASE_HOST', 'bndigital.dev'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'production'),
        schema: env('DATABASE_SCHEMA', 'bndigital'),
        username: env('DATABASE_USERNAME', 'bn'),
        password: env('DATABASE_PASSWORD'),
      },
      options: {
        ssl: env.bool('DATABASE_SSL', false),
        useNullAsDefault: true,
      },
    },
  },
})
