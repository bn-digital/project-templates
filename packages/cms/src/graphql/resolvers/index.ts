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
export default { Query, Mutation, UploadFile }
