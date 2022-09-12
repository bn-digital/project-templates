import { generators } from '@strapi/typescript-utils'
import path from 'path'

function getSchemaGenerator(): Strapi.TypeScript.Generator {
  return generators
}

function generateTypeDefinitions(strapi: Strapi.Strapi): void {
  getSchemaGenerator()
    .generateSchemasDefinitions({ strapi, file: 'api.d.ts', outDir: path.join(process.cwd(), 'src', 'types') })
    .then(() => strapi.log.info('[typescript] Type definitions were generated'))
}

export { generateTypeDefinitions }