const path = require('path')
const name = require('./name')

/**
 *
 * @param {(key: string, defaultValue?: string)=> string} env
 * @returns {{connection: import("knex").Knex.Config}}
 */
module.exports = ({env}) => {
  function isPostgres(alias) {
    return alias === 'postgres' || alias === 'postgresql' || alias === 'pg'
  }

  const client = env('DATABASE_CLIENT', 'sqlite')

  return {
    connection: {
      client,
      connection:
        isPostgres(client) || env('DATABASE_CLIENT') === 'mysql'
          ? {
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
            driverName: "better-sqlite3",
            filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
          },
      useNullAsDefault: true,
    },
  }
}
