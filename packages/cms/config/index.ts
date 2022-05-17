/**
 * Name is generated from package scope name, defined in package.json, i.e. leading chunk before slash (@app/cms - app)
 * @type {string}
 */
import * as fs from 'fs'
import * as path from 'path'
import { v5 } from 'uuid'

const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8'))

const name = packageJson.name.split('/')[0].toString().replace('@', '')

const namespace = '11de21c0-4ff6-4df3-b7aa-15ed356e2463' as const

const domain = process.env.DOMAIN ?? (`${name}.bndigital.dev` as const)

const workingDir = process.cwd()

function generateSecret(secretName: string) {
  return v5(`${name}::${secretName}`, namespace)
}

export { domain, generateSecret, name, workingDir }
