import { url } from "./upload-file"
import { me } from "./user"

const Query = {
  me,
}

const Mutation = {}

const UploadFile = {
  url,
}

export const resolversConfig: Graphql.ResolverConfig = {
  "Query.me": {
    auth: true,
  },
}

export default { Query, Mutation, UploadFile }
