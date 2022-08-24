import path from 'path'
import process from 'process'
import { v5 } from 'uuid'

import packageMetadata from '../package.json'

const workingDir = path.join(__dirname, '..', '..')

/**
 * Name is generated from package scope name, defined in package.json, i.e. leading chunk before slash (@app/cms - app)
 * @type {string}
 */
const name = process.env.APP_NAME ?? packageMetadata.name.split('/')?.[0].replace('@', '')

const namespace = '85dacdac-285a-41e0-b2b7-50127c6f2871'

const domain = process.env.DOMAIN ?? `${name}.bndigital.dev`

const generateSecret = (secretName: string): string => v5(`${name}::${secretName}`, namespace)

export { domain, generateSecret, name, workingDir }
