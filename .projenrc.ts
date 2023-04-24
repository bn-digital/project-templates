import { FullStackProject } from "@bn-digital/projen"

const project = new FullStackProject({
  ide: { editorconfig: true },
  linters: { prettier: true, eslint: true, stylelint: true },
  react: {
    version: "18.2.0",
    antd: { enabled: true },
    router: { enabled: true },
    i18n: { enabled: false },
  },
  graphql: { codegen: true },
  strapi: { database: { client: "postgres" }, users: { enabled: true } },
})

project.synth()
