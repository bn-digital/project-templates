/* eslint-disable */
import * as path from 'path'
import { name } from './name'
import { Knex } from 'knex'
const Client = require('knex/lib/dialects/postgres')
const Formatter = require('knex/lib/formatter')

/**
 * Overrides default Strapi + Knex ORM field name strategy, enforcing snake_case instead of direct property name mapping
 * @param value
 * @returns {string|*}
 */
Client.prototype.wrapIdentifier = (value: string) => {
  if (value === '*') return value
  const matched = value.match(/(.*?)(\[\d])/)
  if (matched) return Client.prototype.wrapIdentifier.wrapIdentifier(matched[1]) + matched[2]
  return `"${value.replace(/([A-Z])/g, (_, s) => `_${s.toLowerCase()}`).replace(/"/g, '""')}"`
}

Formatter.prototype.wrapAsIdentifier = (value: any) => `"${(value || '').replace(/"/g, '""')}"`

/**
 *
 * @param {(key: string, defaultValue?: string)=> string} env
 */
export default ({ env }: { env: EnvFunction & TypedEnvFunction }): { connection: Knex.Config } => ({
  connection: {
    client: env<Strapi.Db.CLient>('DATABASE_CLIENT', 'sqlite'),
    connection:
      env('NODE_ENV') === 'production' || env<Strapi.Db.CLient>('DATABASE_CLIENT', 'sqlite') === 'postgres'
        ? {
            charset: 'utf8',
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD', ''),
            database: env('DATABASE_NAME', name),
            ssl: env.bool('DATABASE_SSL', false),
            host: env('DATABASE_HOST', 'localhost'),
            port: env.int('DATABASE_PORT', 5432),
          }
        : {
            filename: path.join(process.cwd(), env<string>('DATABASE_FILENAME', 'database/data.sqlite')),
          },
    useNullAsDefault: true,
  },
})
