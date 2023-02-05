import { generators } from '@strapi/typescript-utils'
import path from 'path'

import app from './index'

function getSchemaGenerator(): Strapi.TypeScript.Generator {
  return generators
}

function generateTypeDefinitions(strapi: Strapi.Strapi): void {
  getSchemaGenerator()
    .generateSchemasDefinitions({ strapi, file: 'schema.d.ts', outDir: path.join(app.workingDir, 'src', 'types') })
    .then(() => strapi.log.info('[typescript] Type definitions were generated'))
    .catch(strapi.log.error)
}

export { generateTypeDefinitions }
