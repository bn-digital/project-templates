import { Projects } from 'projen'
import { FullStackProjectOptions } from '@bn-digital/projen'

Projects.createProject({
  dir: `${__dirname}/app`,
  post: false,
  projectFqn: '@bn-digital/projen.FullStackProject',
  projectOptions: {
    ide: { editorconfig: true },
    linters: { prettier: true, eslint: true, stylelint: true },
    react: { version: '18.2.0', antd: true, router: true, graphql: true, i18n: false },
    graphql: { codegen: true },
    strapi: { database: { client: 'postgres' }, users: { enabled: true } },
  } as FullStackProjectOptions,
})
