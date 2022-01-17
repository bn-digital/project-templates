const path = require('path')
const name = require('./name')

/**
 *
 * @param {(key: string, defaultValue?: string)=> string} env
 * @returns {{connection: import("knex").Knex.Config}}
 */
module.exports = ({ env }) => ({
  connection: {
    client: env('NODE_ENV') === 'production' ? env('DATABASE_CLIENT', 'sqlite') : 'sqlite',
    connection:
      env('DATABASE_CLIENT') === 'postgres' || env('DATABASE_CLIENT') === 'postgresql' || env('DATABASE_CLIENT') === 'pg' || env('DATABASE_CLIENT') === 'mysql'
        ? {
            pool: { min: 0, max: 5 },
            charset: 'utf-8',
            decimalNumbers: true,
            parseJSON: true,
            supportBigNumbers: true,
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD', ''),
            database: env('DATABASE_NAME', name),
            schema: env('DATABASE_SCHEMA', 'public'),
            host: env('DATABASE_HOST', 'postgresql'),
            port: Number.parseInt(env('DATABASE_PORT', '5432')),
          }
        : {
            filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
          },
    useNullAsDefault: true,
  },
})
