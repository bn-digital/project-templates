import { url } from './upload-file'
import { changePassword, me } from './user'

const Query = {
  me,
}
const Mutation = {
  changePassword,
}
const UploadFile = {
  url,
}

export const resolversConfig: Strapi.Graphql.ResolverConfig = {
  'Mutation.changePassword': {
    auth: true,
  },
  'Query.me': {
    auth: true,
  },
}

export default { Query, Mutation, UploadFile }
