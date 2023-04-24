import path from "node:path"

import { generators } from "@strapi/typescript-utils"

import app from "./index"

function generateTypeDefinitions(strapi: Strapi.Strapi): void {
  generators
    .generateSchemasDefinitions({ strapi, file: "schema.d.ts", outDir: path.join(app.workingDir, "src", "types") })
    .then(() => strapi.log.info("[typescript] Type definitions were generated"))
    .catch(strapi.log.error)
}

export { generateTypeDefinitions }
