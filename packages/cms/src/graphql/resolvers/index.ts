import { changePassword, me } from './user'
import { url } from './upload-file'

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