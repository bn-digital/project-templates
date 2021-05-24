module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('NODE_ENV') === 'development' ? 'sqlite' : 'pg',
        host: env('DATABASE_HOST', 'bndigital.dev'),
        schema: env.bool('DATABASE_SCHEMA', 'bndigital'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'production'),
        username: env('DATABASE_USERNAME', 'bn'),
        password: env('DATABASE_PASSWORD'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
})
