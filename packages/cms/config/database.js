const path = require('path')
const name = require('./name')
const Client = require('knex/lib/dialects/postgres')
const Formatter = require('knex/lib/formatter')

/**
 * Overrides default Strapi + Knex ORM field name strategy, enforcing snake_case instead of direct property name mapping
 * @param value
 * @returns {string|*}
 */
Client.prototype.wrapIdentifier = value => {
  if (value === '*') return value
  const matched = value.match(/(.*?)(\[[0-9]\])/)
  if (matched) return Client.prototype.wrapIdentifier.wrapIdentifier(matched[1]) + matched[2]
  return `"${value.replace(/([A-Z])/g, (_, s) => `_${s.toLowerCase()}`).replace(/"/g, '""')}"`
}

Formatter.prototype.wrapAsIdentifier = value => `"${(value || '').replace(/"/g, '""')}"`

/**
 *
 * @param {(key: string, defaultValue?: string)=> string} env
 * @returns {{connection: import("knex").Knex.Config}}
 */
module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite')
  return {
    connection: {
      client,
      connection:
        client !== 'sqlite'
          ? {
              version: '14',
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
  }
}
