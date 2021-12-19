const path = require('path')
const name = require('./name')

/**
 *
 * @param {(key: string, defaultValue?: string)=> string} env
 * @returns {{connection: import("knex").Knex.Config}}
 */
module.exports = ({ env }) => ({
  connection: {
    client: env('NODE_ENV') === 'production' ? 'postgres' : 'sqlite',
    connection:
      env('NODE_ENV') === 'production'
        ? {
            pool: { min: 0, max: 5 },
            charset: 'utf-8',
            decimalNumbers: true,
            parseJSON: true,
            supportBigNumbers: true,
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD'),
            database: env('DATABASE_NAME', name),
            schema: 'public',
            host: env('DATABASE_HOST', 'localhost'),
            port: Number.parseInt(env('DATABASE_PORT', '5432')),
          }
        : {
            filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
          },
    useNullAsDefault: true,
  }
})