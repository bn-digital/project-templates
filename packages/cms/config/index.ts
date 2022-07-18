/**
 * Name is generated from package scope name, defined in package.json, i.e. leading chunk before slash (@app/cms - app)
 * @type {string}
 */
import path from 'path'
import process from 'process'
import { v5 } from 'uuid'

const workingDir = path.join(__dirname, '..', '..')

const name = process.env.APP_NAME ?? path.basename(path.join(workingDir, '..', '..'))

const namespace = '85dacdac-285a-41e0-b2b7-50127c6f2871'

const domain = process.env.DOMAIN ?? (`${name}.bndigital.dev` as const)

const generateSecret = (secretName: string): string => v5(`${name}::${secretName}`, namespace)

export { domain, generateSecret, name, workingDir }
