import { Projects } from 'projen'
import { FullStackProjectOptions } from '@bn-digital/projen'

Projects.createProject({
  dir: `${__dirname}/test`,
  post: false,
  projectFqn: '@bn-digital/projen.FullStackProject',
  projectOptions: {
    name: 'test',
    defaultReleaseBranch: 'latest',
    react: true,
    graphql: true,
    strapi: true,
  } as FullStackProjectOptions,
})
