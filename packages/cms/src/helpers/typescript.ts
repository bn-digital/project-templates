import { generators } from '@strapi/typescript-utils'
import path from 'path'

function getSchemaGenerator(): Strapi.TypeScript.Generator {
  return generators
}

async function generateTypeDefinitions(strapi: Strapi.Strapi): Promise<void> {
  await getSchemaGenerator()
    .generateSchemasDefinitions({ strapi, file: 'api.d.ts', outDir: path.join(process.cwd(), 'src', 'types') })
    .then(() => strapi.log.info('[typescript] Type definitions were generated'))
}

export { generateTypeDefinitions }