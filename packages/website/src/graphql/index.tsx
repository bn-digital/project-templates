import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
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
  /** Input type for dynamic zone sections of Website */
  WebsiteSectionsDynamicZoneInput: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** A time string with format: HH:mm:ss.SSS */
  Time: any
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `Long` scalar type represents 52-bit integers */
  Long: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  id: Scalars['ID']
  username: Scalars['String']
  email: Scalars['String']
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<UsersPermissionsMeRole>
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  id: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsRegisterInput = {
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Maybe<Scalars['String']>
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type ContactFormRequest = {
  __typename?: 'ContactFormRequest'
  id: Scalars['ID']
  email: Scalars['String']
  subject?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
}

export type ContactFormRequestConnection = {
  __typename?: 'ContactFormRequestConnection'
  values?: Maybe<Array<Maybe<ContactFormRequest>>>
  groupBy?: Maybe<ContactFormRequestGroupBy>
  aggregate?: Maybe<ContactFormRequestAggregator>
}

export type ContactFormRequestAggregator = {
  __typename?: 'ContactFormRequestAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type ContactFormRequestGroupBy = {
  __typename?: 'ContactFormRequestGroupBy'
  id?: Maybe<Array<Maybe<ContactFormRequestConnectionId>>>
  email?: Maybe<Array<Maybe<ContactFormRequestConnectionEmail>>>
  subject?: Maybe<Array<Maybe<ContactFormRequestConnectionSubject>>>
  name?: Maybe<Array<Maybe<ContactFormRequestConnectionName>>>
  message?: Maybe<Array<Maybe<ContactFormRequestConnectionMessage>>>
}

export type ContactFormRequestConnectionId = {
  __typename?: 'ContactFormRequestConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ContactFormRequestConnection>
}

export type ContactFormRequestConnectionEmail = {
  __typename?: 'ContactFormRequestConnectionEmail'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ContactFormRequestConnection>
}

export type ContactFormRequestConnectionSubject = {
  __typename?: 'ContactFormRequestConnectionSubject'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ContactFormRequestConnection>
}

export type ContactFormRequestConnectionName = {
  __typename?: 'ContactFormRequestConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ContactFormRequestConnection>
}

export type ContactFormRequestConnectionMessage = {
  __typename?: 'ContactFormRequestConnectionMessage'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ContactFormRequestConnection>
}

export type ContactFormRequestInput = {
  email: Scalars['String']
  subject?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditContactFormRequestInput = {
  email?: Maybe<Scalars['String']>
  subject?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type CreateContactFormRequestInput = {
  data?: Maybe<ContactFormRequestInput>
}

export type CreateContactFormRequestPayload = {
  __typename?: 'createContactFormRequestPayload'
  contactFormRequest?: Maybe<ContactFormRequest>
}

export type UpdateContactFormRequestInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditContactFormRequestInput>
}

export type UpdateContactFormRequestPayload = {
  __typename?: 'updateContactFormRequestPayload'
  contactFormRequest?: Maybe<ContactFormRequest>
}

export type DeleteContactFormRequestInput = {
  where?: Maybe<InputId>
}

export type DeleteContactFormRequestPayload = {
  __typename?: 'deleteContactFormRequestPayload'
  contactFormRequest?: Maybe<ContactFormRequest>
}

export type WebsiteSectionsDynamicZone =
  | ComponentOrganismsCallToAction
  | ComponentOrganismsHero
  | ComponentOrganismsArticle

export type Website = {
  __typename?: 'Website'
  id: Scalars['ID']
  sections?: Maybe<Array<Maybe<WebsiteSectionsDynamicZone>>>
  navigation?: Maybe<Array<Maybe<ComponentMoleculesMenu>>>
  pages?: Maybe<Array<Maybe<ComponentOrganismsPage>>>
  slides?: Maybe<Array<Maybe<ComponentMoleculesSlider>>>
}

export type WebsiteInput = {
  sections?: Maybe<Array<Scalars['WebsiteSectionsDynamicZoneInput']>>
  navigation?: Maybe<Array<Maybe<ComponentMoleculesMenuInput>>>
  pages?: Maybe<Array<Maybe<ComponentOrganismsPageInput>>>
  slides?: Maybe<Array<Maybe<ComponentMoleculesSliderInput>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditWebsiteInput = {
  sections?: Maybe<Array<Scalars['WebsiteSectionsDynamicZoneInput']>>
  navigation?: Maybe<Array<Maybe<EditComponentMoleculesMenuInput>>>
  pages?: Maybe<Array<Maybe<EditComponentOrganismsPageInput>>>
  slides?: Maybe<Array<Maybe<EditComponentMoleculesSliderInput>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UpdateWebsiteInput = {
  data?: Maybe<EditWebsiteInput>
}

export type UpdateWebsitePayload = {
  __typename?: 'updateWebsitePayload'
  website?: Maybe<Website>
}

export type DeleteWebsitePayload = {
  __typename?: 'deleteWebsitePayload'
  website?: Maybe<Website>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name: Scalars['String']
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  ext?: Maybe<Scalars['String']>
  mime: Scalars['String']
  size: Scalars['Float']
  url: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Morph>>>
}

export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection'
  values?: Maybe<Array<Maybe<UploadFile>>>
  groupBy?: Maybe<UploadFileGroupBy>
  aggregate?: Maybe<UploadFileAggregator>
}

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
  sum?: Maybe<UploadFileAggregatorSum>
  avg?: Maybe<UploadFileAggregatorAvg>
  min?: Maybe<UploadFileAggregatorMin>
  max?: Maybe<UploadFileAggregatorMax>
}

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy'
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>
}

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats'
  key?: Maybe<Scalars['JSON']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize'
  key?: Maybe<Scalars['Float']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata'
  key?: Maybe<Scalars['JSON']>
  connection?: Maybe<UploadFileConnection>
}

export type FileInput = {
  name: Scalars['String']
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  ext?: Maybe<Scalars['String']>
  mime: Scalars['String']
  size: Scalars['Float']
  url: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditFileInput = {
  name?: Maybe<Scalars['String']>
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash?: Maybe<Scalars['String']>
  ext?: Maybe<Scalars['String']>
  mime?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  url?: Maybe<Scalars['String']>
  previewUrl?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type DeleteFileInput = {
  where?: Maybe<InputId>
}

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload'
  file?: Maybe<UploadFile>
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  id: Scalars['ID']
  type: Scalars['String']
  controller: Scalars['String']
  action: Scalars['String']
  enabled: Scalars['Boolean']
  policy?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRole>
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  id: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection'
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>
  aggregate?: Maybe<UsersPermissionsRoleAggregator>
}

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy'
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>
}

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type RoleInput = {
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
  users?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
  users?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type CreateRoleInput = {
  data?: Maybe<RoleInput>
}

export type CreateRolePayload = {
  __typename?: 'createRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type UpdateRoleInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditRoleInput>
}

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type DeleteRoleInput = {
  where?: Maybe<InputId>
}

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  username: Scalars['String']
  email: Scalars['String']
  role?: Maybe<UsersPermissionsRole>
  firstName: Scalars['String']
  lastName: Scalars['String']
}

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection'
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  groupBy?: Maybe<UsersPermissionsUserGroupBy>
  aggregate?: Maybe<UsersPermissionsUserAggregator>
}

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy'
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>
  firstName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionFirstName>>>
  lastName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionLastName>>>
}

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionFirstName = {
  __typename?: 'UsersPermissionsUserConnectionFirstName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionLastName = {
  __typename?: 'UsersPermissionsUserConnectionLastName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UserInput = {
  username: Scalars['String']
  password?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  confirmationToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['ID']>
  firstName: Scalars['String']
  lastName: Scalars['String']
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditUserInput = {
  username?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  confirmationToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['ID']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type CreateUserInput = {
  data?: Maybe<UserInput>
}

export type CreateUserPayload = {
  __typename?: 'createUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type UpdateUserInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditUserInput>
}

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type DeleteUserInput = {
  where?: Maybe<InputId>
}

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type ComponentAtomsAddress = {
  __typename?: 'ComponentAtomsAddress'
  id: Scalars['ID']
  lines?: Maybe<Array<Maybe<ComponentAtomsText>>>
  type?: Maybe<ComponentAtomsType>
}

export type ComponentAtomsAddressInput = {
  lines?: Maybe<Array<Maybe<ComponentAtomsTextInput>>>
  type: ComponentAtomsTypeInput
}

export type EditComponentAtomsAddressInput = {
  id?: Maybe<Scalars['ID']>
  lines?: Maybe<Array<Maybe<EditComponentAtomsTextInput>>>
  type?: Maybe<EditComponentAtomsTypeInput>
}

export type ComponentAtomsButton = {
  __typename?: 'ComponentAtomsButton'
  id: Scalars['ID']
  title: Scalars['String']
  url?: Maybe<Scalars['String']>
}

export type ComponentAtomsButtonInput = {
  title: Scalars['String']
  url?: Maybe<Scalars['String']>
}

export type EditComponentAtomsButtonInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type ComponentAtomsEmail = {
  __typename?: 'ComponentAtomsEmail'
  id: Scalars['ID']
  address: Scalars['String']
  type?: Maybe<ComponentAtomsType>
}

export type ComponentAtomsEmailInput = {
  address: Scalars['String']
  type: ComponentAtomsTypeInput
}

export type EditComponentAtomsEmailInput = {
  id?: Maybe<Scalars['ID']>
  address?: Maybe<Scalars['String']>
  type?: Maybe<EditComponentAtomsTypeInput>
}

/** Key-Value entry */
export type ComponentAtomsEntry = {
  __typename?: 'ComponentAtomsEntry'
  id: Scalars['ID']
  key: Scalars['String']
  value?: Maybe<Scalars['String']>
}

export type ComponentAtomsEntryInput = {
  key: Scalars['String']
  value?: Maybe<Scalars['String']>
}

export type EditComponentAtomsEntryInput = {
  id?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type ComponentAtomsImage = {
  __typename?: 'ComponentAtomsImage'
  id: Scalars['ID']
  image?: Maybe<UploadFile>
  background?: Maybe<Scalars['String']>
}

export type ComponentAtomsImageInput = {
  image?: Maybe<Scalars['ID']>
  background?: Maybe<Scalars['String']>
}

export type EditComponentAtomsImageInput = {
  id?: Maybe<Scalars['ID']>
  image?: Maybe<Scalars['ID']>
  background?: Maybe<Scalars['String']>
}

export type ComponentAtomsLink = {
  __typename?: 'ComponentAtomsLink'
  id: Scalars['ID']
  title: Scalars['String']
  url?: Maybe<Scalars['String']>
  icon?: Maybe<Array<Maybe<ComponentAtomsImage>>>
}

export type ComponentAtomsLinkInput = {
  title: Scalars['String']
  url?: Maybe<Scalars['String']>
  icon?: Maybe<Array<Maybe<ComponentAtomsImageInput>>>
}

export type EditComponentAtomsLinkInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  icon?: Maybe<Array<Maybe<EditComponentAtomsImageInput>>>
}

export type ComponentAtomsMarkdown = {
  __typename?: 'ComponentAtomsMarkdown'
  id: Scalars['ID']
  value?: Maybe<Scalars['String']>
  properties?: Maybe<Scalars['JSON']>
}

export type ComponentAtomsMarkdownInput = {
  value?: Maybe<Scalars['String']>
  properties?: Maybe<Scalars['JSON']>
}

export type EditComponentAtomsMarkdownInput = {
  id?: Maybe<Scalars['ID']>
  value?: Maybe<Scalars['String']>
  properties?: Maybe<Scalars['JSON']>
}

export type ComponentAtomsMedia = {
  __typename?: 'ComponentAtomsMedia'
  id: Scalars['ID']
  properties?: Maybe<Scalars['JSON']>
  media?: Maybe<Array<Maybe<UploadFile>>>
}

export type ComponentAtomsMediaMediaArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ComponentAtomsMediaInput = {
  media?: Maybe<Array<Maybe<Scalars['ID']>>>
  properties?: Maybe<Scalars['JSON']>
}

export type EditComponentAtomsMediaInput = {
  id?: Maybe<Scalars['ID']>
  media?: Maybe<Array<Maybe<Scalars['ID']>>>
  properties?: Maybe<Scalars['JSON']>
}

export type ComponentAtomsNumeric = {
  __typename?: 'ComponentAtomsNumeric'
  id: Scalars['ID']
  value: Scalars['Float']
  unit?: Maybe<Scalars['String']>
}

export type ComponentAtomsNumericInput = {
  value: Scalars['Float']
  unit?: Maybe<Scalars['String']>
}

export type EditComponentAtomsNumericInput = {
  id?: Maybe<Scalars['ID']>
  value?: Maybe<Scalars['Float']>
  unit?: Maybe<Scalars['String']>
}

export type ComponentAtomsParagraph = {
  __typename?: 'ComponentAtomsParagraph'
  id: Scalars['ID']
  children?: Maybe<Array<Maybe<ComponentAtomsText>>>
}

export type ComponentAtomsParagraphInput = {
  children?: Maybe<Array<Maybe<ComponentAtomsTextInput>>>
}

export type EditComponentAtomsParagraphInput = {
  id?: Maybe<Scalars['ID']>
  children?: Maybe<Array<Maybe<EditComponentAtomsTextInput>>>
}

export type ComponentAtomsPhone = {
  __typename?: 'ComponentAtomsPhone'
  id: Scalars['ID']
  number: Scalars['String']
  type?: Maybe<ComponentAtomsType>
}

export type ComponentAtomsPhoneInput = {
  number: Scalars['String']
  type: ComponentAtomsTypeInput
}

export type EditComponentAtomsPhoneInput = {
  id?: Maybe<Scalars['ID']>
  number?: Maybe<Scalars['String']>
  type?: Maybe<EditComponentAtomsTypeInput>
}

/** Text node */
export type ComponentAtomsText = {
  __typename?: 'ComponentAtomsText'
  id: Scalars['ID']
  value: Scalars['String']
  properties?: Maybe<Scalars['JSON']>
}

export type ComponentAtomsTextInput = {
  value: Scalars['String']
  properties?: Maybe<Scalars['JSON']>
}

export type EditComponentAtomsTextInput = {
  id?: Maybe<Scalars['ID']>
  value?: Maybe<Scalars['String']>
  properties?: Maybe<Scalars['JSON']>
}

export enum ContactType {
  BusinessEmail = 'BusinessEmail',
  PersonalEmail = 'PersonalEmail',
  ContactEmail = 'ContactEmail',
  CareersEmail = 'CareersEmail',
  BusinessAddress = 'BusinessAddress',
  PersonalAddress = 'PersonalAddress',
  MobilePhone = 'MobilePhone',
  PersonalPhone = 'PersonalPhone',
  BusinessPhone = 'BusinessPhone',
}

export type ComponentAtomsType = {
  __typename?: 'ComponentAtomsType'
  id: Scalars['ID']
  contact?: Maybe<ContactType>
}

export type ComponentAtomsTypeInput = {
  contact?: Maybe<ContactType>
}

export type EditComponentAtomsTypeInput = {
  id?: Maybe<Scalars['ID']>
  contact?: Maybe<ContactType>
}

export type ComponentAtomsValue = {
  __typename?: 'ComponentAtomsValue'
  id: Scalars['ID']
  value: Scalars['String']
  type?: Maybe<ComponentAtomsType>
}

export type ComponentAtomsValueInput = {
  value: Scalars['String']
  type?: Maybe<ComponentAtomsTypeInput>
}

export type EditComponentAtomsValueInput = {
  id?: Maybe<Scalars['ID']>
  value?: Maybe<Scalars['String']>
  type?: Maybe<EditComponentAtomsTypeInput>
}

export type ComponentMoleculesCard = {
  __typename?: 'ComponentMoleculesCard'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<ComponentAtomsImage>
}

export type ComponentMoleculesCardInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<ComponentAtomsImageInput>
}

export type EditComponentMoleculesCardInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<EditComponentAtomsImageInput>
}

/** Collection<Entry> */
export type ComponentMoleculesMap = {
  __typename?: 'ComponentMoleculesMap'
  id: Scalars['ID']
  children?: Maybe<Array<Maybe<ComponentAtomsEntry>>>
}

export type ComponentMoleculesMapInput = {
  children?: Maybe<Array<Maybe<ComponentAtomsEntryInput>>>
}

export type EditComponentMoleculesMapInput = {
  id?: Maybe<Scalars['ID']>
  children?: Maybe<Array<Maybe<EditComponentAtomsEntryInput>>>
}

export type ComponentMoleculesMenu = {
  __typename?: 'ComponentMoleculesMenu'
  id: Scalars['ID']
  links?: Maybe<Array<Maybe<ComponentAtomsLink>>>
  slug: Scalars['String']
}

export type ComponentMoleculesMenuInput = {
  links?: Maybe<Array<Maybe<ComponentAtomsLinkInput>>>
  slug: Scalars['String']
}

export type EditComponentMoleculesMenuInput = {
  id?: Maybe<Scalars['ID']>
  links?: Maybe<Array<Maybe<EditComponentAtomsLinkInput>>>
  slug?: Maybe<Scalars['String']>
}

export type ComponentMoleculesSlider = {
  __typename?: 'ComponentMoleculesSlider'
  id: Scalars['ID']
  slides?: Maybe<Array<Maybe<ComponentMoleculesCard>>>
  slug: Scalars['String']
  hidden?: Maybe<Scalars['Boolean']>
}

export type ComponentMoleculesSliderInput = {
  slides?: Maybe<Array<Maybe<ComponentMoleculesCardInput>>>
  slug: Scalars['String']
  hidden?: Maybe<Scalars['Boolean']>
}

export type EditComponentMoleculesSliderInput = {
  id?: Maybe<Scalars['ID']>
  slides?: Maybe<Array<Maybe<EditComponentMoleculesCardInput>>>
  slug?: Maybe<Scalars['String']>
  hidden?: Maybe<Scalars['Boolean']>
}

export type ComponentOrganismsArticle = {
  __typename?: 'ComponentOrganismsArticle'
  id: Scalars['ID']
  parent?: Maybe<ComponentOrganismsSection>
}

export type ComponentOrganismsArticleInput = {
  parent?: Maybe<ComponentOrganismsSectionInput>
}

export type EditComponentOrganismsArticleInput = {
  id?: Maybe<Scalars['ID']>
  parent?: Maybe<EditComponentOrganismsSectionInput>
}

export type ComponentOrganismsCallToAction = {
  __typename?: 'ComponentOrganismsCallToAction'
  id: Scalars['ID']
  parent?: Maybe<ComponentOrganismsSection>
  button?: Maybe<ComponentAtomsButton>
}

export type ComponentOrganismsCallToActionInput = {
  parent: ComponentOrganismsSectionInput
  button: ComponentAtomsButtonInput
}

export type EditComponentOrganismsCallToActionInput = {
  id?: Maybe<Scalars['ID']>
  parent?: Maybe<EditComponentOrganismsSectionInput>
  button?: Maybe<EditComponentAtomsButtonInput>
}

export type ComponentOrganismsHero = {
  __typename?: 'ComponentOrganismsHero'
  id: Scalars['ID']
  parent?: Maybe<ComponentOrganismsSection>
  button?: Maybe<ComponentAtomsButton>
  cover?: Maybe<Array<Maybe<ComponentAtomsMedia>>>
}

export type ComponentOrganismsHeroInput = {
  parent: ComponentOrganismsSectionInput
  button?: Maybe<ComponentAtomsButtonInput>
  cover?: Maybe<Array<ComponentAtomsMediaInput>>
}

export type EditComponentOrganismsHeroInput = {
  id?: Maybe<Scalars['ID']>
  parent?: Maybe<EditComponentOrganismsSectionInput>
  button?: Maybe<EditComponentAtomsButtonInput>
  cover?: Maybe<Array<Maybe<EditComponentAtomsMediaInput>>>
}

export type ComponentOrganismsMetric = {
  __typename?: 'ComponentOrganismsMetric'
  id: Scalars['ID']
  value?: Maybe<ComponentAtomsNumeric>
  entry?: Maybe<ComponentAtomsEntry>
}

export type ComponentOrganismsMetricInput = {
  value: ComponentAtomsNumericInput
  entry: ComponentAtomsEntryInput
}

export type EditComponentOrganismsMetricInput = {
  id?: Maybe<Scalars['ID']>
  value?: Maybe<EditComponentAtomsNumericInput>
  entry?: Maybe<EditComponentAtomsEntryInput>
}

export type ComponentOrganismsPage = {
  __typename?: 'ComponentOrganismsPage'
  id: Scalars['ID']
  meta?: Maybe<Array<Maybe<ComponentAtomsEntry>>>
  hidden?: Maybe<Scalars['Boolean']>
  slug: Scalars['String']
}

export type ComponentOrganismsPageInput = {
  meta?: Maybe<Array<Maybe<ComponentAtomsEntryInput>>>
  hidden?: Maybe<Scalars['Boolean']>
  slug: Scalars['String']
}

export type EditComponentOrganismsPageInput = {
  id?: Maybe<Scalars['ID']>
  meta?: Maybe<Array<Maybe<EditComponentAtomsEntryInput>>>
  hidden?: Maybe<Scalars['Boolean']>
  slug?: Maybe<Scalars['String']>
}

export type ComponentOrganismsSection = {
  __typename?: 'ComponentOrganismsSection'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  subTitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  hidden?: Maybe<Scalars['Boolean']>
  slug: Scalars['String']
}

export type ComponentOrganismsSectionInput = {
  title?: Maybe<Scalars['String']>
  subTitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  hidden?: Maybe<Scalars['Boolean']>
  slug: Scalars['String']
}

export type EditComponentOrganismsSectionInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  subTitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  hidden?: Maybe<Scalars['Boolean']>
  slug?: Maybe<Scalars['String']>
}

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
  | ContactFormRequest
  | ContactFormRequestConnection
  | ContactFormRequestAggregator
  | ContactFormRequestGroupBy
  | ContactFormRequestConnectionId
  | ContactFormRequestConnectionEmail
  | ContactFormRequestConnectionSubject
  | ContactFormRequestConnectionName
  | ContactFormRequestConnectionMessage
  | CreateContactFormRequestPayload
  | UpdateContactFormRequestPayload
  | DeleteContactFormRequestPayload
  | Website
  | UpdateWebsitePayload
  | DeleteWebsitePayload
  | UploadFile
  | UploadFileConnection
  | UploadFileAggregator
  | UploadFileAggregatorSum
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMin
  | UploadFileAggregatorMax
  | UploadFileGroupBy
  | UploadFileConnectionId
  | UploadFileConnectionCreated_At
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionName
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionWidth
  | UploadFileConnectionHeight
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionExt
  | UploadFileConnectionMime
  | UploadFileConnectionSize
  | UploadFileConnectionUrl
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | DeleteFilePayload
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionType
  | CreateRolePayload
  | UpdateRolePayload
  | DeleteRolePayload
  | UsersPermissionsUser
  | UsersPermissionsUserConnection
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserGroupBy
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionFirstName
  | UsersPermissionsUserConnectionLastName
  | CreateUserPayload
  | UpdateUserPayload
  | DeleteUserPayload
  | ComponentAtomsAddress
  | ComponentAtomsButton
  | ComponentAtomsEmail
  | ComponentAtomsEntry
  | ComponentAtomsImage
  | ComponentAtomsLink
  | ComponentAtomsMarkdown
  | ComponentAtomsMedia
  | ComponentAtomsNumeric
  | ComponentAtomsParagraph
  | ComponentAtomsPhone
  | ComponentAtomsText
  | ComponentAtomsType
  | ComponentAtomsValue
  | ComponentMoleculesCard
  | ComponentMoleculesMap
  | ComponentMoleculesMenu
  | ComponentMoleculesSlider
  | ComponentOrganismsArticle
  | ComponentOrganismsCallToAction
  | ComponentOrganismsHero
  | ComponentOrganismsMetric
  | ComponentOrganismsPage
  | ComponentOrganismsSection

export type InputId = {
  id: Scalars['ID']
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type AdminUser = {
  __typename?: 'AdminUser'
  id: Scalars['ID']
  username?: Maybe<Scalars['String']>
  firstname: Scalars['String']
  lastname: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  contactFormRequest?: Maybe<ContactFormRequest>
  contactFormRequests?: Maybe<Array<Maybe<ContactFormRequest>>>
  contactFormRequestsConnection?: Maybe<ContactFormRequestConnection>
  website?: Maybe<Website>
  files?: Maybe<Array<Maybe<UploadFile>>>
  filesConnection?: Maybe<UploadFileConnection>
  role?: Maybe<UsersPermissionsRole>
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>
  user?: Maybe<UsersPermissionsUser>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  usersConnection?: Maybe<UsersPermissionsUserConnection>
  me?: Maybe<UsersPermissionsMe>
}

export type QueryContactFormRequestArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryContactFormRequestsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryContactFormRequestsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryWebsiteArgs = {
  publicationState?: Maybe<PublicationState>
}

export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryRoleArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryUserArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createContactFormRequest?: Maybe<CreateContactFormRequestPayload>
  updateContactFormRequest?: Maybe<UpdateContactFormRequestPayload>
  deleteContactFormRequest?: Maybe<DeleteContactFormRequestPayload>
  updateWebsite?: Maybe<UpdateWebsitePayload>
  deleteWebsite?: Maybe<DeleteWebsitePayload>
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>
  upload: UploadFile
  multipleUpload: Array<Maybe<UploadFile>>
  updateFileInfo: UploadFile
  login: UsersPermissionsLoginPayload
  register: UsersPermissionsLoginPayload
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
}

export type MutationCreateContactFormRequestArgs = {
  input?: Maybe<CreateContactFormRequestInput>
}

export type MutationUpdateContactFormRequestArgs = {
  input?: Maybe<UpdateContactFormRequestInput>
}

export type MutationDeleteContactFormRequestArgs = {
  input?: Maybe<DeleteContactFormRequestInput>
}

export type MutationUpdateWebsiteArgs = {
  input?: Maybe<UpdateWebsiteInput>
}

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>
}

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>
}

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>
}

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>
}

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>
}

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>
}

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>
}

export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>
  ref?: Maybe<Scalars['String']>
  field?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  info?: Maybe<FileInfoInput>
  file: Scalars['Upload']
}

export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>
  ref?: Maybe<Scalars['String']>
  field?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  files: Array<Maybe<Scalars['Upload']>>
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info: FileInfoInput
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationResetPasswordArgs = {
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
  code: Scalars['String']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export type ButtonFragment = { __typename?: 'ComponentAtomsButton' } & Pick<
  ComponentAtomsButton,
  'id' | 'title' | 'url'
>

export type CardFragment = { __typename?: 'ComponentMoleculesCard' } & Pick<
  ComponentMoleculesCard,
  'id' | 'title' | 'description'
> & {
    image?: Maybe<
      { __typename?: 'ComponentAtomsImage' } & Pick<ComponentAtomsImage, 'id' | 'background'> & {
          image?: Maybe<
            { __typename?: 'UploadFile' } & Pick<UploadFile, 'id' | 'url' | 'alternativeText' | 'caption' | 'name'>
          >
        }
    >
  }

export type SectionFragment = { __typename?: 'ComponentOrganismsSection' } & Pick<
  ComponentOrganismsSection,
  'id' | 'slug' | 'title' | 'subTitle' | 'description' | 'hidden'
>

export type SliderFragment = { __typename?: 'ComponentMoleculesSlider' } & Pick<
  ComponentMoleculesSlider,
  'id' | 'hidden' | 'slug'
> & { slides?: Maybe<Array<Maybe<{ __typename?: 'ComponentMoleculesCard' } & CardFragment>>> }

export type CreateContactFormRequestMutationVariables = Exact<{
  input?: Maybe<CreateContactFormRequestInput>
}>

export type CreateContactFormRequestMutation = { __typename?: 'Mutation' } & {
  createContactFormRequest?: Maybe<
    { __typename?: 'createContactFormRequestPayload' } & {
      contactFormRequest?: Maybe<
        { __typename?: 'ContactFormRequest' } & Pick<ContactFormRequest, 'id' | 'name' | 'message'>
      >
    }
  >
}

export type GetContentQueryVariables = Exact<{ [key: string]: never }>

export type GetContentQuery = { __typename?: 'Query' } & {
  website?: Maybe<
    { __typename?: 'Website' } & Pick<Website, 'id'> & {
        pages?: Maybe<Array<Maybe<{ __typename?: 'ComponentOrganismsPage' } & Pick<ComponentOrganismsPage, 'id'>>>>
        slides?: Maybe<Array<Maybe<{ __typename?: 'ComponentMoleculesSlider' } & SliderFragment>>>
        sections?: Maybe<
          Array<
            Maybe<
              | ({ __typename?: 'ComponentOrganismsCallToAction' } & Pick<ComponentOrganismsCallToAction, 'id'> & {
                    button?: Maybe<{ __typename?: 'ComponentAtomsButton' } & ButtonFragment>
                    parent?: Maybe<{ __typename?: 'ComponentOrganismsSection' } & SectionFragment>
                  })
              | ({ __typename?: 'ComponentOrganismsHero' } & Pick<ComponentOrganismsHero, 'id'> & {
                    button?: Maybe<{ __typename?: 'ComponentAtomsButton' } & ButtonFragment>
                    parent?: Maybe<{ __typename?: 'ComponentOrganismsSection' } & SectionFragment>
                  })
              | ({ __typename?: 'ComponentOrganismsArticle' } & Pick<ComponentOrganismsArticle, 'id'> & {
                    parent?: Maybe<{ __typename?: 'ComponentOrganismsSection' } & SectionFragment>
                  })
            >
          >
        >
        navigation?: Maybe<
          Array<
            Maybe<
              { __typename?: 'ComponentMoleculesMenu' } & Pick<ComponentMoleculesMenu, 'id' | 'slug'> & {
                  links?: Maybe<
                    Array<
                      Maybe<{ __typename?: 'ComponentAtomsLink' } & Pick<ComponentAtomsLink, 'id' | 'title' | 'url'>>
                    >
                  >
                }
            >
          >
        >
      }
  >
}

export const ButtonFragmentDoc = gql`
  fragment Button on ComponentAtomsButton {
    id
    title
    url
  }
`
export const SectionFragmentDoc = gql`
  fragment Section on ComponentOrganismsSection {
    id
    slug
    title
    subTitle
    description
    hidden
  }
`
export const CardFragmentDoc = gql`
  fragment Card on ComponentMoleculesCard {
    id
    title
    description
    image {
      id
      image {
        id
        url
        alternativeText
        caption
        name
      }
      background
    }
  }
`
export const SliderFragmentDoc = gql`
  fragment Slider on ComponentMoleculesSlider {
    id
    hidden
    slug
    slides {
      ...Card
    }
  }
  ${CardFragmentDoc}
`
export const CreateContactFormRequestDocument = gql`
  mutation createContactFormRequest($input: createContactFormRequestInput) {
    createContactFormRequest(input: $input) {
      contactFormRequest {
        id
        name
        message
      }
    }
  }
`
export type CreateContactFormRequestMutationFn = Apollo.MutationFunction<
  CreateContactFormRequestMutation,
  CreateContactFormRequestMutationVariables
>

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
export const GetContentDocument = gql`
  query getContent {
    website {
      id
      pages {
        id
      }
      slides {
        ...Slider
      }
      sections {
        ... on ComponentOrganismsArticle {
          id
          parent {
            ...Section
          }
        }
        ... on ComponentOrganismsHero {
          id
          button {
            ...Button
          }
          parent {
            ...Section
          }
        }
        ... on ComponentOrganismsCallToAction {
          id
          button {
            ...Button
          }
          parent {
            ...Section
          }
        }
      }
      navigation {
        id
        slug
        links {
          id
          title
          url
        }
      }
    }
  }
  ${SliderFragmentDoc}
  ${SectionFragmentDoc}
  ${ButtonFragmentDoc}
`

/**
 * __useGetContentQuery__
 *
 * To run a query within a React component, call `useGetContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContentQuery(baseOptions?: Apollo.QueryHookOptions<GetContentQuery, GetContentQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetContentQuery, GetContentQueryVariables>(GetContentDocument, options)
}
export function useGetContentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetContentQuery, GetContentQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetContentQuery, GetContentQueryVariables>(GetContentDocument, options)
}
export type GetContentQueryHookResult = ReturnType<typeof useGetContentQuery>
export type GetContentLazyQueryHookResult = ReturnType<typeof useGetContentLazyQuery>
export type GetContentQueryResult = Apollo.QueryResult<GetContentQuery, GetContentQueryVariables>
