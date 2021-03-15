import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import * as ApolloReactHoc from '@apollo/client/react/hoc'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: Record<string, any>
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date
  /** A time string with format: HH:mm:ss.SSS */
  Time: Date
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: Date
  /** The `Long` scalar type represents 52-bit integers */
  Long: number
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export type Morph =
  | ComponentAtomsCover
  | ComponentAtomsEntry
  | ComponentAtomsMarkdown
  | ComponentAtomsText
  | ComponentMoleculesLink
  | ComponentMoleculesMap
  | ComponentMoleculesParagraph
  | ContactFormRequest
  | ContactFormRequestAggregator
  | ContactFormRequestConnection
  | ContactFormRequestConnectionCreatedAt
  | ContactFormRequestConnectionEmail
  | ContactFormRequestConnectionId
  | ContactFormRequestConnectionMessage
  | ContactFormRequestConnectionName
  | ContactFormRequestConnectionUpdatedAt
  | ContactFormRequestConnection_Id
  | ContactFormRequestGroupBy
  | UploadFile
  | UploadFileAggregator
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMax
  | UploadFileAggregatorMin
  | UploadFileAggregatorSum
  | UploadFileConnection
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionCreatedAt
  | UploadFileConnectionExt
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionHeight
  | UploadFileConnectionId
  | UploadFileConnectionMime
  | UploadFileConnectionName
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | UploadFileConnectionSize
  | UploadFileConnectionUpdatedAt
  | UploadFileConnectionUrl
  | UploadFileConnectionWidth
  | UploadFileConnection_Id
  | UploadFileGroupBy
  | UserPermissionsPasswordPayload
  | UsersPermissionsLoginPayload
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleConnection_Id
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsUser
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserConnection
  | UsersPermissionsUserConnectionCreatedAt
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionFirstName
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionLastName
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionUpdatedAt
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnection_Id
  | UsersPermissionsUserGroupBy
  | CreateContactFormRequestPayload
  | CreateRolePayload
  | CreateUserPayload
  | DeleteContactFormRequestPayload
  | DeleteFilePayload
  | DeleteRolePayload
  | DeleteUserPayload
  | UpdateContactFormRequestPayload
  | UpdateRolePayload
  | UpdateUserPayload

export type AdminUser = {
  firstname: Scalars['String']
  id: Scalars['ID']
  lastname: Scalars['String']
  username?: Maybe<Scalars['String']>
}

export type ComponentAtomsCover = {
  _id: Scalars['ID']
  backgroundColor: Scalars['String']
  id: Scalars['ID']
  image?: Maybe<UploadFile>
}

/** Key-Value entry */
export type ComponentAtomsEntry = {
  _id: Scalars['ID']
  id: Scalars['ID']
  key: Scalars['String']
  value: Scalars['String']
}

export type ComponentAtomsMarkdown = {
  _id: Scalars['ID']
  id: Scalars['ID']
  properties?: Maybe<Scalars['JSON']>
  value?: Maybe<Scalars['String']>
}

/** Text node */
export type ComponentAtomsText = {
  _id: Scalars['ID']
  id: Scalars['ID']
  properties?: Maybe<Scalars['JSON']>
  title: Scalars['String']
}

export type ComponentMoleculesLink = {
  _id: Scalars['ID']
  icon?: Maybe<UploadFile>
  id: Scalars['ID']
  role?: Maybe<Enum_Componentmoleculeslink_Role>
  title?: Maybe<ComponentAtomsText>
  url: Scalars['String']
}

/** Collection<Entry> */
export type ComponentMoleculesMap = {
  _id: Scalars['ID']
  children?: Maybe<Array<Maybe<ComponentAtomsEntry>>>
  id: Scalars['ID']
}

export type ComponentMoleculesParagraph = {
  _id: Scalars['ID']
  children?: Maybe<Array<Maybe<ComponentAtomsText>>>
  id: Scalars['ID']
}

export type ContactFormRequest = {
  _id: Scalars['ID']
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  id: Scalars['ID']
  message?: Maybe<Scalars['String']>
  name: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ContactFormRequestAggregator = {
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type ContactFormRequestConnection = {
  aggregate?: Maybe<ContactFormRequestAggregator>
  groupBy?: Maybe<ContactFormRequestGroupBy>
  values?: Maybe<Array<Maybe<ContactFormRequest>>>
}

export type ContactFormRequestConnectionCreatedAt = {
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type ContactFormRequestConnectionEmail = {
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['String']>
}

export type ContactFormRequestConnectionId = {
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['ID']>
}

export type ContactFormRequestConnectionMessage = {
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['String']>
}

export type ContactFormRequestConnectionName = {
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['String']>
}

export type ContactFormRequestConnectionUpdatedAt = {
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type ContactFormRequestConnection_Id = {
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['ID']>
}

export type ContactFormRequestGroupBy = {
  _id?: Maybe<Array<Maybe<ContactFormRequestConnection_Id>>>
  createdAt?: Maybe<Array<Maybe<ContactFormRequestConnectionCreatedAt>>>
  email?: Maybe<Array<Maybe<ContactFormRequestConnectionEmail>>>
  id?: Maybe<Array<Maybe<ContactFormRequestConnectionId>>>
  message?: Maybe<Array<Maybe<ContactFormRequestConnectionMessage>>>
  name?: Maybe<Array<Maybe<ContactFormRequestConnectionName>>>
  updatedAt?: Maybe<Array<Maybe<ContactFormRequestConnectionUpdatedAt>>>
}

export type Mutation = {
  createContactFormRequest?: Maybe<CreateContactFormRequestPayload>
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>
  deleteContactFormRequest?: Maybe<DeleteContactFormRequestPayload>
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFile>>
  register: UsersPermissionsLoginPayload
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateContactFormRequest?: Maybe<UpdateContactFormRequestPayload>
  updateFileInfo: UploadFile
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>
  upload: UploadFile
}

export type MutationCreateContactFormRequestArgs = {
  input?: Maybe<CreateContactFormRequestInput>
}

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>
}

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>
}

export type MutationDeleteContactFormRequestArgs = {
  input?: Maybe<DeleteContactFormRequestInput>
}

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>
}

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>
}

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: Maybe<Scalars['String']>
  files: Array<Maybe<Scalars['Upload']>>
  ref?: Maybe<Scalars['String']>
  refId?: Maybe<Scalars['ID']>
  source?: Maybe<Scalars['String']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationUpdateContactFormRequestArgs = {
  input?: Maybe<UpdateContactFormRequestInput>
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info: FileInfoInput
}

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>
}

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>
}

export type MutationUploadArgs = {
  field?: Maybe<Scalars['String']>
  file: Scalars['Upload']
  info?: Maybe<FileInfoInput>
  ref?: Maybe<Scalars['String']>
  refId?: Maybe<Scalars['ID']>
  source?: Maybe<Scalars['String']>
}

export type Query = {
  contactFormRequest?: Maybe<ContactFormRequest>
  contactFormRequests?: Maybe<Array<Maybe<ContactFormRequest>>>
  contactFormRequestsConnection?: Maybe<ContactFormRequestConnection>
  files?: Maybe<Array<Maybe<UploadFile>>>
  filesConnection?: Maybe<UploadFileConnection>
  me?: Maybe<UsersPermissionsMe>
  role?: Maybe<UsersPermissionsRole>
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>
  user?: Maybe<UsersPermissionsUser>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  usersConnection?: Maybe<UsersPermissionsUserConnection>
}

export type QueryContactFormRequestArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryContactFormRequestsArgs = {
  limit?: Maybe<Scalars['Int']>
  publicationState?: Maybe<PublicationState>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryContactFormRequestsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryFilesArgs = {
  limit?: Maybe<Scalars['Int']>
  publicationState?: Maybe<PublicationState>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryFilesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryRoleArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>
  publicationState?: Maybe<PublicationState>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryRolesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryUserArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>
  publicationState?: Maybe<PublicationState>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryUsersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UploadFile = {
  _id: Scalars['ID']
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Morph>>>
  size: Scalars['Float']
  updatedAt: Scalars['DateTime']
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UploadFileAggregator = {
  avg?: Maybe<UploadFileAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<UploadFileAggregatorMax>
  min?: Maybe<UploadFileAggregatorMin>
  sum?: Maybe<UploadFileAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type UploadFileAggregatorAvg = {
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMax = {
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMin = {
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorSum = {
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileConnection = {
  aggregate?: Maybe<UploadFileAggregator>
  groupBy?: Maybe<UploadFileGroupBy>
  values?: Maybe<Array<Maybe<UploadFile>>>
}

export type UploadFileConnectionAlternativeText = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionCaption = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionCreatedAt = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UploadFileConnectionExt = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionFormats = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['JSON']>
}

export type UploadFileConnectionHash = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionHeight = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['Int']>
}

export type UploadFileConnectionId = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['ID']>
}

export type UploadFileConnectionMime = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionName = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionPreviewUrl = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionProvider = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionProvider_Metadata = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['JSON']>
}

export type UploadFileConnectionSize = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['Float']>
}

export type UploadFileConnectionUpdatedAt = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UploadFileConnectionUrl = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionWidth = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['Int']>
}

export type UploadFileConnection_Id = {
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['ID']>
}

export type UploadFileGroupBy = {
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>
}

export type UserPermissionsPasswordPayload = {
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  email: Scalars['String']
  id: Scalars['ID']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']
}

export type UsersPermissionsMeRole = {
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPermission = {
  _id: Scalars['ID']
  action: Scalars['String']
  controller: Scalars['String']
  enabled: Scalars['Boolean']
  id: Scalars['ID']
  policy?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRole>
  type: Scalars['String']
}

export type UsersPermissionsRole = {
  _id: Scalars['ID']
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>
  type?: Maybe<Scalars['String']>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleAggregator = {
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsRoleConnection = {
  aggregate?: Maybe<UsersPermissionsRoleAggregator>
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>
}

export type UsersPermissionsRoleConnectionDescription = {
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsRoleConnectionId = {
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsRoleConnectionName = {
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsRoleConnectionType = {
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsRoleConnection_Id = {
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsRoleGroupBy = {
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>
}

export type UsersPermissionsUser = {
  _id: Scalars['ID']
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  firstName: Scalars['String']
  id: Scalars['ID']
  lastName: Scalars['String']
  role?: Maybe<UsersPermissionsRole>
  updatedAt: Scalars['DateTime']
  username: Scalars['String']
}

export type UsersPermissionsUserAggregator = {
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsUserConnection = {
  aggregate?: Maybe<UsersPermissionsUserAggregator>
  groupBy?: Maybe<UsersPermissionsUserGroupBy>
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsUserConnectionCreatedAt = {
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsUserConnectionEmail = {
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserConnectionFirstName = {
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserConnectionId = {
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserConnectionLastName = {
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserConnectionRole = {
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserConnectionUpdatedAt = {
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsUserConnectionUsername = {
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserConnection_Id = {
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserGroupBy = {
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>
  firstName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionFirstName>>>
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>
  lastName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionLastName>>>
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>
}

export type CreateContactFormRequestPayload = {
  contactFormRequest?: Maybe<ContactFormRequest>
}

export type CreateRolePayload = {
  role?: Maybe<UsersPermissionsRole>
}

export type CreateUserPayload = {
  user?: Maybe<UsersPermissionsUser>
}

export type DeleteContactFormRequestPayload = {
  contactFormRequest?: Maybe<ContactFormRequest>
}

export type DeleteFilePayload = {
  file?: Maybe<UploadFile>
}

export type DeleteRolePayload = {
  role?: Maybe<UsersPermissionsRole>
}

export type DeleteUserPayload = {
  user?: Maybe<UsersPermissionsUser>
}

export type UpdateContactFormRequestPayload = {
  contactFormRequest?: Maybe<ContactFormRequest>
}

export type UpdateRolePayload = {
  role?: Maybe<UsersPermissionsRole>
}

export type UpdateUserPayload = {
  user?: Maybe<UsersPermissionsUser>
}

export type Enum_Componentmoleculeslink_Role = 'BugTracker' | 'DesignSystem' | 'SourceCode'

export type PublicationState = 'LIVE' | 'PREVIEW'

export type ComponentAtomsCoverInput = {
  backgroundColor: Scalars['String']
  image?: Maybe<Scalars['ID']>
}

export type ComponentAtomsEntryInput = {
  key: Scalars['String']
  value: Scalars['String']
}

export type ComponentAtomsMarkdownInput = {
  properties?: Maybe<Scalars['JSON']>
  value?: Maybe<Scalars['String']>
}

export type ComponentAtomsTextInput = {
  properties?: Maybe<Scalars['JSON']>
  title: Scalars['String']
}

export type ComponentMoleculesLinkInput = {
  icon?: Maybe<Scalars['ID']>
  role?: Maybe<Enum_Componentmoleculeslink_Role>
  title?: Maybe<ComponentAtomsTextInput>
  url: Scalars['String']
}

export type ComponentMoleculesMapInput = {
  children?: Maybe<Array<Maybe<ComponentAtomsEntryInput>>>
}

export type ComponentMoleculesParagraphInput = {
  children?: Maybe<Array<Maybe<ComponentAtomsTextInput>>>
}

export type ContactFormRequestInput = {
  created_by?: Maybe<Scalars['ID']>
  email: Scalars['String']
  message?: Maybe<Scalars['String']>
  name: Scalars['String']
  updated_by?: Maybe<Scalars['ID']>
}

export type FileInfoInput = {
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type FileInput = {
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: Maybe<Scalars['Int']>
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Scalars['ID']>>>
  size: Scalars['Float']
  updated_by?: Maybe<Scalars['ID']>
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

export type InputId = {
  id: Scalars['ID']
}

export type RoleInput = {
  created_by?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
  type?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
  users?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type UserInput = {
  blocked?: Maybe<Scalars['Boolean']>
  confirmationToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  created_by?: Maybe<Scalars['ID']>
  email: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  password?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
  username: Scalars['String']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Maybe<Scalars['String']>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type CreateContactFormRequestInput = {
  data?: Maybe<ContactFormRequestInput>
}

export type CreateRoleInput = {
  data?: Maybe<RoleInput>
}

export type CreateUserInput = {
  data?: Maybe<UserInput>
}

export type DeleteContactFormRequestInput = {
  where?: Maybe<InputId>
}

export type DeleteFileInput = {
  where?: Maybe<InputId>
}

export type DeleteRoleInput = {
  where?: Maybe<InputId>
}

export type DeleteUserInput = {
  where?: Maybe<InputId>
}

export type EditComponentAtomsCoverInput = {
  backgroundColor?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  image?: Maybe<Scalars['ID']>
}

export type EditComponentAtomsEntryInput = {
  id?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type EditComponentAtomsMarkdownInput = {
  id?: Maybe<Scalars['ID']>
  properties?: Maybe<Scalars['JSON']>
  value?: Maybe<Scalars['String']>
}

export type EditComponentAtomsTextInput = {
  id?: Maybe<Scalars['ID']>
  properties?: Maybe<Scalars['JSON']>
  title?: Maybe<Scalars['String']>
}

export type EditComponentMoleculesLinkInput = {
  icon?: Maybe<Scalars['ID']>
  id?: Maybe<Scalars['ID']>
  role?: Maybe<Enum_Componentmoleculeslink_Role>
  title?: Maybe<EditComponentAtomsTextInput>
  url?: Maybe<Scalars['String']>
}

export type EditComponentMoleculesMapInput = {
  children?: Maybe<Array<Maybe<EditComponentAtomsEntryInput>>>
  id?: Maybe<Scalars['ID']>
}

export type EditComponentMoleculesParagraphInput = {
  children?: Maybe<Array<Maybe<EditComponentAtomsTextInput>>>
  id?: Maybe<Scalars['ID']>
}

export type EditContactFormRequestInput = {
  created_by?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditFileInput = {
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Scalars['JSON']>
  hash?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Int']>
  mime?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  previewUrl?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Scalars['ID']>>>
  size?: Maybe<Scalars['Float']>
  updated_by?: Maybe<Scalars['ID']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

export type EditRoleInput = {
  created_by?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
  type?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
  users?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type EditUserInput = {
  blocked?: Maybe<Scalars['Boolean']>
  confirmationToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  created_by?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
  username?: Maybe<Scalars['String']>
}

export type UpdateContactFormRequestInput = {
  data?: Maybe<EditContactFormRequestInput>
  where?: Maybe<InputId>
}

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>
  where?: Maybe<InputId>
}

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>
  where?: Maybe<InputId>
}

export type CreateContactFormRequestMutationVariables = Exact<{
  input: Maybe<CreateContactFormRequestInput>
}>

export type CreateContactFormRequestMutation = {
  createContactFormRequest: Maybe<{
    contactFormRequest: Maybe<Pick<ContactFormRequest, 'id' | 'name' | 'message' | 'createdAt'>>
  }>
}

export const CreateContactFormRequestDocument = gql`
  mutation createContactFormRequest($input: createContactFormRequestInput) {
    createContactFormRequest(input: $input) {
      contactFormRequest {
        id
        name
        message
        createdAt
      }
    }
  }
`
export type CreateContactFormRequestMutationFn = Apollo.MutationFunction<
  CreateContactFormRequestMutation,
  CreateContactFormRequestMutationVariables
>
export type CreateContactFormRequestProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<
    CreateContactFormRequestMutation,
    CreateContactFormRequestMutationVariables
  >
} &
  TChildProps
export function withCreateContactFormRequest<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateContactFormRequestMutation,
    CreateContactFormRequestMutationVariables,
    CreateContactFormRequestProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateContactFormRequestMutation,
    CreateContactFormRequestMutationVariables,
    CreateContactFormRequestProps<TChildProps, TDataName>
  >(CreateContactFormRequestDocument, {
    alias: 'createContactFormRequest',
    ...operationOptions,
  })
}

/**
 * __useCreateContactFormRequestMutation__
 *
 * To run a mutation, you first call `useCreateContactFormRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContactFormRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContactFormRequestMutation, { data, loading, error }] = useCreateContactFormRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateContactFormRequestMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables>(
    CreateContactFormRequestDocument,
    options,
  )
}
export type CreateContactFormRequestMutationHookResult = ReturnType<typeof useCreateContactFormRequestMutation>
export type CreateContactFormRequestMutationResult = Apollo.MutationResult<CreateContactFormRequestMutation>
export type CreateContactFormRequestMutationOptions = Apollo.BaseMutationOptions<
  CreateContactFormRequestMutation,
  CreateContactFormRequestMutationVariables
>
