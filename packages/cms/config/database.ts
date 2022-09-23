/* eslint-disable */
import path from 'path'
import { workingDir } from '.'
import { name } from './'

const Client = require('knex/lib/dialects/postgres')
const Formatter = require('knex/lib/formatter')

/**
 * Overrides default Strapi + Knex ORM field name strategy, enforcing snake_case instead of direct property name mapping
 * @param {string} value
 * @return {string}
 */
const wrapIdentifier = (value: string) => {
  if (value === '*') return value
  const matched = value.match(/(.*?)(\[\d])/)
  if (matched) return Client.prototype.wrapIdentifier.wrapIdentifier(matched[1]) + matched[2]
  return `"${value.replace(/([A-Z])/g, (_, s) => `_${s.toLowerCase()}`).replace(/"/g, '""')}"`
}

Client.prototype.wrapIdentifier = wrapIdentifier

Formatter.prototype.wrapAsIdentifier = (value: any) => `"${(value || '').replace(/"/g, '""')}"`

/**
 *
 * @param {(key: string, defaultValue?: string)=> string} env
 */
export default ({ env }: Strapi.Env): Strapi.Database.Config => {
  const client = env<Strapi.Database.Client>('DATABASE_CLIENT', 'sqlite')
  return {
    connection: {
      client,
      connection:
        client === 'postgres' || client === 'mysql'
          ? {
              charset: 'utf8',
              user: env('DATABASE_USERNAME', 'postgres'),
              password: env('DATABASE_PASSWORD', ''),
              database: env('DATABASE_NAME', name),
              ssl: env.bool('DATABASE_SSL', false),
              host: env('DATABASE_HOST', 'localhost'),
              port: env.int('DATABASE_PORT', 5432),
              decimalNumbers: true,
            }
          : {
              filename: path.join(workingDir, env<string>('DATABASE_FILENAME', path.join('database', 'data.sqlite'))),
            },
      useNullAsDefault: true,
    },
  }
}
