import { generators } from '@strapi/typescript-utils'
import path from 'path'

import { workingDir } from '../../config'

function getSchemaGenerator(): Strapi.TypeScript.Generator {
  return generators
}

function generateTypeDefinitions(strapi: Strapi.Strapi): void {
  getSchemaGenerator()
    .generateSchemasDefinitions({ strapi, file: 'schema.d.ts', outDir: path.join(workingDir, 'src', 'types') })
    .then(() => strapi.log.info('[typescript] Type definitions were generated'))
}

export { generateTypeDefinitions }
