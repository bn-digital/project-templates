/**
 * Name is generated from package scope name, defined in package.json, i.e. leading chunk before slash (@app/cms - app)
 * @type {string}
 */
import * as fs from 'fs'
import * as path from 'path'
const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8'))
const name: string = packageJson.name.split('/')[0].toString().replace('@', '')

export { name }
