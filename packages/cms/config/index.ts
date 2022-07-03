/**
 * Name is generated from package scope name, defined in package.json, i.e. leading chunk before slash (@app/cms - app)
 * @type {string}
 */
import { readFileSync } from 'fs'
import path from 'path'
import process from 'process'
import { v5 } from 'uuid'

const workingDir = path.join(__dirname, '..', '..')

const packageJson = JSON.parse(readFileSync(path.join(workingDir, 'package.json'), 'utf-8'))

const name = packageJson.name.split('/')[0].toString().replace('@', '')

const namespace = packageJson.strapi.id

const domain = process.env.DOMAIN ?? (`${name}.bndigital.dev` as const)

const generateSecret = (secretName: string): string => v5(`${name}::${secretName}`, namespace)

export { domain, generateSecret, name, workingDir }
