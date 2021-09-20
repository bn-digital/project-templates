import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import * as React from 'react'
import * as ApolloReactComponents from '@apollo/client/react/components'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: Date
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: Record<string, unknown>
  /** The `Long` scalar type represents 52-bit integers */
  Long: number
  /** A time string with format: HH:mm:ss.SSS */
  Time: Date
  /** The `Upload` scalar type represents a file upload. */
  Upload: unknown
}

export type AdminUser = {
  __typename?: 'AdminUser'
  id: Scalars['ID']
  username?: Maybe<Scalars['String']>
  firstname: Scalars['String']
  lastname: Scalars['String']
}

export type CategoryInput = {
  name: Scalars['String']
  pages?: Maybe<Array<Maybe<Scalars['ID']>>>
  parent?: Maybe<Array<Maybe<Scalars['ID']>>>
  children?: Maybe<Array<Maybe<Scalars['ID']>>>
  slug: Scalars['String']
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type CmsCategory = {
  __typename?: 'CmsCategory'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  pages?: Maybe<Array<Maybe<CmsPage>>>
  parent?: Maybe<Array<Maybe<CmsCategory>>>
  children?: Maybe<Array<Maybe<CmsCategory>>>
}

export type CmsCategoryPagesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type CmsCategoryParentArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type CmsCategoryChildrenArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type CmsCategoryAggregator = {
  __typename?: 'CmsCategoryAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type CmsCategoryConnection = {
  __typename?: 'CmsCategoryConnection'
  values?: Maybe<Array<Maybe<CmsCategory>>>
  groupBy?: Maybe<CmsCategoryGroupBy>
  aggregate?: Maybe<CmsCategoryAggregator>
}

export type CmsCategoryConnectionId = {
  __typename?: 'CmsCategoryConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<CmsCategoryConnection>
}

export type CmsCategoryConnectionName = {
  __typename?: 'CmsCategoryConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CmsCategoryConnection>
}

export type CmsCategoryConnectionSlug = {
  __typename?: 'CmsCategoryConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CmsCategoryConnection>
}

export type CmsCategoryGroupBy = {
  __typename?: 'CmsCategoryGroupBy'
  id?: Maybe<Array<Maybe<CmsCategoryConnectionId>>>
  name?: Maybe<Array<Maybe<CmsCategoryConnectionName>>>
  slug?: Maybe<Array<Maybe<CmsCategoryConnectionSlug>>>
}

export type CmsMeta = {
  __typename?: 'CmsMeta'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  slug: Scalars['String']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Scalars['String']>
}

export type CmsMetaAggregator = {
  __typename?: 'CmsMetaAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type CmsMetaConnection = {
  __typename?: 'CmsMetaConnection'
  values?: Maybe<Array<Maybe<CmsMeta>>>
  groupBy?: Maybe<CmsMetaGroupBy>
  aggregate?: Maybe<CmsMetaAggregator>
}

export type CmsMetaConnectionCreated_At = {
  __typename?: 'CmsMetaConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<CmsMetaConnection>
}

export type CmsMetaConnectionDescription = {
  __typename?: 'CmsMetaConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CmsMetaConnection>
}

export type CmsMetaConnectionId = {
  __typename?: 'CmsMetaConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<CmsMetaConnection>
}

export type CmsMetaConnectionKeywords = {
  __typename?: 'CmsMetaConnectionKeywords'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CmsMetaConnection>
}

export type CmsMetaConnectionSlug = {
  __typename?: 'CmsMetaConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CmsMetaConnection>
}

export type CmsMetaConnectionTitle = {
  __typename?: 'CmsMetaConnectionTitle'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CmsMetaConnection>
}

export type CmsMetaConnectionUpdated_At = {
  __typename?: 'CmsMetaConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<CmsMetaConnection>
}

export type CmsMetaGroupBy = {
  __typename?: 'CmsMetaGroupBy'
  id?: Maybe<Array<Maybe<CmsMetaConnectionId>>>
  created_at?: Maybe<Array<Maybe<CmsMetaConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<CmsMetaConnectionUpdated_At>>>
  slug?: Maybe<Array<Maybe<CmsMetaConnectionSlug>>>
  title?: Maybe<Array<Maybe<CmsMetaConnectionTitle>>>
  description?: Maybe<Array<Maybe<CmsMetaConnectionDescription>>>
  keywords?: Maybe<Array<Maybe<CmsMetaConnectionKeywords>>>
}

export type CmsPage = {
  __typename?: 'CmsPage'
  id: Scalars['ID']
  name: Scalars['String']
  text: Scalars['String']
  slug: Scalars['String']
  meta?: Maybe<ComponentOrganismsMeta>
  cover?: Maybe<Array<Maybe<UploadFile>>>
  categories?: Maybe<Array<Maybe<CmsCategory>>>
}

export type CmsPageCoverArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type CmsPageCategoriesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type CmsPageAggregator = {
  __typename?: 'CmsPageAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type CmsPageConnection = {
  __typename?: 'CmsPageConnection'
  values?: Maybe<Array<Maybe<CmsPage>>>
  groupBy?: Maybe<CmsPageGroupBy>
  aggregate?: Maybe<CmsPageAggregator>
}

export type CmsPageConnectionId = {
  __typename?: 'CmsPageConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<CmsPageConnection>
}

export type CmsPageConnectionMeta = {
  __typename?: 'CmsPageConnectionMeta'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<CmsPageConnection>
}

export type CmsPageConnectionName = {
  __typename?: 'CmsPageConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CmsPageConnection>
}

export type CmsPageConnectionSlug = {
  __typename?: 'CmsPageConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CmsPageConnection>
}

export type CmsPageConnectionText = {
  __typename?: 'CmsPageConnectionText'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CmsPageConnection>
}

export type CmsPageGroupBy = {
  __typename?: 'CmsPageGroupBy'
  id?: Maybe<Array<Maybe<CmsPageConnectionId>>>
  name?: Maybe<Array<Maybe<CmsPageConnectionName>>>
  text?: Maybe<Array<Maybe<CmsPageConnectionText>>>
  slug?: Maybe<Array<Maybe<CmsPageConnectionSlug>>>
  meta?: Maybe<Array<Maybe<CmsPageConnectionMeta>>>
}

export type CmsSection = {
  __typename?: 'CmsSection'
  id: Scalars['ID']
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  slug: Scalars['String']
  cards?: Maybe<Array<Maybe<ComponentOrganismsCard>>>
  records?: Maybe<Array<Maybe<ComponentMoleculesRecord>>>
  card?: Maybe<ComponentOrganismsCard>
}

export type CmsSectionAggregator = {
  __typename?: 'CmsSectionAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type CmsSectionConnection = {
  __typename?: 'CmsSectionConnection'
  values?: Maybe<Array<Maybe<CmsSection>>>
  groupBy?: Maybe<CmsSectionGroupBy>
  aggregate?: Maybe<CmsSectionAggregator>
}

export type CmsSectionConnectionDescription = {
  __typename?: 'CmsSectionConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CmsSectionConnection>
}

export type CmsSectionConnectionId = {
  __typename?: 'CmsSectionConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<CmsSectionConnection>
}

export type CmsSectionConnectionSlug = {
  __typename?: 'CmsSectionConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CmsSectionConnection>
}

export type CmsSectionConnectionTitle = {
  __typename?: 'CmsSectionConnectionTitle'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CmsSectionConnection>
}

export type CmsSectionGroupBy = {
  __typename?: 'CmsSectionGroupBy'
  id?: Maybe<Array<Maybe<CmsSectionConnectionId>>>
  title?: Maybe<Array<Maybe<CmsSectionConnectionTitle>>>
  description?: Maybe<Array<Maybe<CmsSectionConnectionDescription>>>
  slug?: Maybe<Array<Maybe<CmsSectionConnectionSlug>>>
}

export type CmsWebsite = {
  __typename?: 'CmsWebsite'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  slug: Scalars['String']
  logo?: Maybe<UploadFile>
  googleAnalyticsCode?: Maybe<Scalars['String']>
  googleTagManagerCode?: Maybe<Scalars['String']>
  menu?: Maybe<Array<Maybe<ComponentMoleculesMenu>>>
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

export type ComponentAtomsLink = {
  __typename?: 'ComponentAtomsLink'
  id: Scalars['ID']
  text?: Maybe<Scalars['String']>
  url: Scalars['String']
  extra?: Maybe<Scalars['String']>
}

export type ComponentAtomsLinkInput = {
  text?: Maybe<Scalars['String']>
  url: Scalars['String']
  extra?: Maybe<Scalars['String']>
}

export type ComponentAtomsNumeric = {
  __typename?: 'ComponentAtomsNumeric'
  id: Scalars['ID']
  value: Scalars['Float']
  unit?: Maybe<Scalars['String']>
  min: Scalars['Float']
  max: Scalars['Float']
}

export type ComponentAtomsNumericInput = {
  value: Scalars['Float']
  unit?: Maybe<Scalars['String']>
  min?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
}

/** Text node */
export type ComponentAtomsText = {
  __typename?: 'ComponentAtomsText'
  id: Scalars['ID']
  value: Scalars['String']
}

export type ComponentAtomsTextInput = {
  value: Scalars['String']
}

export type ComponentMoleculesMenu = {
  __typename?: 'ComponentMoleculesMenu'
  id: Scalars['ID']
  links?: Maybe<Array<Maybe<ComponentAtomsLink>>>
  slug: Scalars['String']
}

export type ComponentMoleculesMenuInput = {
  links?: Maybe<Array<Maybe<ComponentAtomsLinkInput>>>
  slug?: Maybe<Scalars['String']>
}

export type ComponentMoleculesRecord = {
  __typename?: 'ComponentMoleculesRecord'
  id: Scalars['ID']
  entries?: Maybe<Array<Maybe<ComponentAtomsEntry>>>
  slug: Scalars['String']
}

export type ComponentMoleculesRecordInput = {
  entries?: Maybe<Array<ComponentAtomsEntryInput>>
  slug?: Maybe<Scalars['String']>
}

export type ComponentOrganismsCard = {
  __typename?: 'ComponentOrganismsCard'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  subTitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  extra?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  media?: Maybe<UploadFile>
  active?: Maybe<Scalars['Boolean']>
  backgroundColor?: Maybe<Scalars['String']>
  link?: Maybe<ComponentAtomsLink>
  slug?: Maybe<Scalars['String']>
}

export type ComponentOrganismsCardInput = {
  title?: Maybe<Scalars['String']>
  subTitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  extra?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  media?: Maybe<Scalars['ID']>
  active?: Maybe<Scalars['Boolean']>
  backgroundColor?: Maybe<Scalars['String']>
  link?: Maybe<ComponentAtomsLinkInput>
  slug?: Maybe<Scalars['String']>
}

export type ComponentOrganismsMeta = {
  __typename?: 'ComponentOrganismsMeta'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<ComponentAtomsText>>>
}

export type ComponentOrganismsMetaInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<ComponentAtomsTextInput>>>
}

export type ContactInput = {
  email: Scalars['String']
  name: Scalars['String']
  subject?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EmailDesignerEmailTemplate = {
  __typename?: 'EmailDesignerEmailTemplate'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  sourceCodeToTemplateId?: Maybe<Scalars['Int']>
  design?: Maybe<Scalars['JSON']>
  name?: Maybe<Scalars['String']>
  subject?: Maybe<Scalars['String']>
  bodyHtml?: Maybe<Scalars['String']>
  bodyText?: Maybe<Scalars['String']>
  enabled?: Maybe<Scalars['Boolean']>
  tags?: Maybe<Scalars['JSON']>
}

export type EmailTemplateInput = {
  sourceCodeToTemplateId?: Maybe<Scalars['Int']>
  design?: Maybe<Scalars['JSON']>
  name?: Maybe<Scalars['String']>
  subject?: Maybe<Scalars['String']>
  bodyHtml?: Maybe<Scalars['String']>
  bodyText?: Maybe<Scalars['String']>
  enabled?: Maybe<Scalars['Boolean']>
  tags?: Maybe<Scalars['JSON']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type FeedbackContact = {
  __typename?: 'FeedbackContact'
  id: Scalars['ID']
  email: Scalars['String']
  name: Scalars['String']
  subject?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
}

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
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

export type I18NLocale = {
  __typename?: 'I18NLocale'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
}

export type InputId = {
  id: Scalars['ID']
}

export type LocaleInput = {
  name?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type MetaInput = {
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
  | EmailDesignerEmailTemplate
  | I18NLocale
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
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionFirstName
  | UsersPermissionsUserConnectionLastName
  | UsersPermissionsUserConnectionPhoto
  | CreateUserPayload
  | UpdateUserPayload
  | DeleteUserPayload
  | CmsCategory
  | CmsCategoryConnection
  | CmsCategoryAggregator
  | CmsCategoryGroupBy
  | CmsCategoryConnectionId
  | CmsCategoryConnectionName
  | CmsCategoryConnectionSlug
  | CmsMeta
  | CmsMetaConnection
  | CmsMetaAggregator
  | CmsMetaGroupBy
  | CmsMetaConnectionId
  | CmsMetaConnectionCreated_At
  | CmsMetaConnectionUpdated_At
  | CmsMetaConnectionSlug
  | CmsMetaConnectionTitle
  | CmsMetaConnectionDescription
  | CmsMetaConnectionKeywords
  | CmsPage
  | CmsPageConnection
  | CmsPageAggregator
  | CmsPageGroupBy
  | CmsPageConnectionId
  | CmsPageConnectionName
  | CmsPageConnectionText
  | CmsPageConnectionSlug
  | CmsPageConnectionMeta
  | CmsSection
  | CmsSectionConnection
  | CmsSectionAggregator
  | CmsSectionGroupBy
  | CmsSectionConnectionId
  | CmsSectionConnectionTitle
  | CmsSectionConnectionDescription
  | CmsSectionConnectionSlug
  | CmsWebsite
  | FeedbackContact
  | CreateContactPayload
  | ComponentAtomsEntry
  | ComponentAtomsLink
  | ComponentAtomsNumeric
  | ComponentAtomsText
  | ComponentMoleculesMenu
  | ComponentMoleculesRecord
  | ComponentOrganismsCard
  | ComponentOrganismsMeta

export type Mutation = {
  __typename?: 'Mutation'
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
  createContact?: Maybe<CreateContactPayload>
  upload: UploadFile
  multipleUpload: Array<Maybe<UploadFile>>
  updateFileInfo: UploadFile
  login: UsersPermissionsLoginPayload
  register: UsersPermissionsLoginPayload
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
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

export type MutationCreateContactArgs = {
  input?: Maybe<CreateContactInput>
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

export type PageInput = {
  name: Scalars['String']
  text: Scalars['String']
  cover?: Maybe<Array<Maybe<Scalars['ID']>>>
  slug: Scalars['String']
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>
  meta?: Maybe<ComponentOrganismsMetaInput>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query'
  files?: Maybe<Array<Maybe<UploadFile>>>
  filesConnection?: Maybe<UploadFileConnection>
  role?: Maybe<UsersPermissionsRole>
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>
  user?: Maybe<UsersPermissionsUser>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  usersConnection?: Maybe<UsersPermissionsUserConnection>
  category?: Maybe<CmsCategory>
  categories?: Maybe<Array<Maybe<CmsCategory>>>
  categoriesConnection?: Maybe<CmsCategoryConnection>
  meta?: Maybe<CmsMeta>
  metas?: Maybe<Array<Maybe<CmsMeta>>>
  metasConnection?: Maybe<CmsMetaConnection>
  page?: Maybe<CmsPage>
  pages?: Maybe<Array<Maybe<CmsPage>>>
  pagesConnection?: Maybe<CmsPageConnection>
  section?: Maybe<CmsSection>
  sections?: Maybe<Array<Maybe<CmsSection>>>
  sectionsConnection?: Maybe<CmsSectionConnection>
  website?: Maybe<CmsWebsite>
  me?: Maybe<UsersPermissionsMe>
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

export type QueryCategoryArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryCategoriesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryMetaArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryMetasArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryMetasConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryPageArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryPagesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryPagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QuerySectionArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QuerySectionsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QuerySectionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryWebsiteArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
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

export type SectionInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  slug: Scalars['String']
  cards?: Maybe<Array<Maybe<ComponentOrganismsCardInput>>>
  records?: Maybe<Array<Maybe<ComponentMoleculesRecordInput>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
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

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
  sum?: Maybe<UploadFileAggregatorSum>
  avg?: Maybe<UploadFileAggregatorAvg>
  min?: Maybe<UploadFileAggregatorMin>
  max?: Maybe<UploadFileAggregatorMax>
}

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg'
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

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection'
  values?: Maybe<Array<Maybe<UploadFile>>>
  groupBy?: Maybe<UploadFileGroupBy>
  aggregate?: Maybe<UploadFileAggregator>
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

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt'
  key?: Maybe<Scalars['String']>
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

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName'
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

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize'
  key?: Maybe<Scalars['Float']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<UploadFileConnection>
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

export type UserInput = {
  username: Scalars['String']
  resetPasswordToken?: Maybe<Scalars['String']>
  confirmationToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  password?: Maybe<Scalars['String']>
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['ID']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload'
  ok: Scalars['Boolean']
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

export type UsersPermissionsRegisterInput = {
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
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

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection'
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>
  aggregate?: Maybe<UsersPermissionsRoleAggregator>
}

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
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

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy'
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  id: Scalars['ID']
  username: Scalars['String']
  email: Scalars['String']
  role?: Maybe<UsersPermissionsRole>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  photo?: Maybe<UploadFile>
}

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection'
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  groupBy?: Maybe<UsersPermissionsUserGroupBy>
  aggregate?: Maybe<UsersPermissionsUserAggregator>
}

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionFirstName = {
  __typename?: 'UsersPermissionsUserConnectionFirstName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionLastName = {
  __typename?: 'UsersPermissionsUserConnectionLastName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionPhoto = {
  __typename?: 'UsersPermissionsUserConnectionPhoto'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy'
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>
  firstName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionFirstName>>>
  lastName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionLastName>>>
  photo?: Maybe<Array<Maybe<UsersPermissionsUserConnectionPhoto>>>
}

export type WebsiteInput = {
  name?: Maybe<Scalars['String']>
  slug: Scalars['String']
  logo?: Maybe<Scalars['ID']>
  googleAnalyticsCode?: Maybe<Scalars['String']>
  googleTagManagerCode?: Maybe<Scalars['String']>
  menu?: Maybe<Array<Maybe<ComponentMoleculesMenuInput>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type CreateContactInput = {
  data?: Maybe<ContactInput>
}

export type CreateContactPayload = {
  __typename?: 'createContactPayload'
  contact?: Maybe<FeedbackContact>
}

export type CreateRoleInput = {
  data?: Maybe<RoleInput>
}

export type CreateRolePayload = {
  __typename?: 'createRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type CreateUserInput = {
  data?: Maybe<UserInput>
}

export type CreateUserPayload = {
  __typename?: 'createUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type DeleteFileInput = {
  where?: Maybe<InputId>
}

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload'
  file?: Maybe<UploadFile>
}

export type DeleteRoleInput = {
  where?: Maybe<InputId>
}

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type DeleteUserInput = {
  where?: Maybe<InputId>
}

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type EditCategoryInput = {
  name?: Maybe<Scalars['String']>
  pages?: Maybe<Array<Maybe<Scalars['ID']>>>
  parent?: Maybe<Array<Maybe<Scalars['ID']>>>
  children?: Maybe<Array<Maybe<Scalars['ID']>>>
  slug?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditComponentAtomsEntryInput = {
  id?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type EditComponentAtomsLinkInput = {
  id?: Maybe<Scalars['ID']>
  text?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  extra?: Maybe<Scalars['String']>
}

export type EditComponentAtomsNumericInput = {
  id?: Maybe<Scalars['ID']>
  value?: Maybe<Scalars['Float']>
  unit?: Maybe<Scalars['String']>
  min?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
}

export type EditComponentAtomsTextInput = {
  id?: Maybe<Scalars['ID']>
  value?: Maybe<Scalars['String']>
}

export type EditComponentMoleculesMenuInput = {
  id?: Maybe<Scalars['ID']>
  links?: Maybe<Array<Maybe<EditComponentAtomsLinkInput>>>
  slug?: Maybe<Scalars['String']>
}

export type EditComponentMoleculesRecordInput = {
  id?: Maybe<Scalars['ID']>
  entries?: Maybe<Array<Maybe<EditComponentAtomsEntryInput>>>
  slug?: Maybe<Scalars['String']>
}

export type EditComponentOrganismsCardInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  subTitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  extra?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  media?: Maybe<Scalars['ID']>
  active?: Maybe<Scalars['Boolean']>
  backgroundColor?: Maybe<Scalars['String']>
  link?: Maybe<EditComponentAtomsLinkInput>
  slug?: Maybe<Scalars['String']>
}

export type EditComponentOrganismsMetaInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<EditComponentAtomsTextInput>>>
}

export type EditContactInput = {
  email?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  subject?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditEmailTemplateInput = {
  sourceCodeToTemplateId?: Maybe<Scalars['Int']>
  design?: Maybe<Scalars['JSON']>
  name?: Maybe<Scalars['String']>
  subject?: Maybe<Scalars['String']>
  bodyHtml?: Maybe<Scalars['String']>
  bodyText?: Maybe<Scalars['String']>
  enabled?: Maybe<Scalars['Boolean']>
  tags?: Maybe<Scalars['JSON']>
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

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditMetaInput = {
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditPageInput = {
  name?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  cover?: Maybe<Array<Maybe<Scalars['ID']>>>
  slug?: Maybe<Scalars['String']>
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>
  meta?: Maybe<EditComponentOrganismsMetaInput>
  published_at?: Maybe<Scalars['DateTime']>
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

export type EditSectionInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  cards?: Maybe<Array<Maybe<EditComponentOrganismsCardInput>>>
  records?: Maybe<Array<Maybe<EditComponentMoleculesRecordInput>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditUserInput = {
  username?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  confirmationToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  password?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['ID']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditWebsiteInput = {
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['ID']>
  googleAnalyticsCode?: Maybe<Scalars['String']>
  googleTagManagerCode?: Maybe<Scalars['String']>
  menu?: Maybe<Array<Maybe<EditComponentMoleculesMenuInput>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UpdateRoleInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditRoleInput>
}

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type UpdateUserInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditUserInput>
}

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type CardFragment = {
  __typename?: 'ComponentOrganismsCard'
  id: string
  active?: Maybe<boolean>
  title?: Maybe<string>
  subTitle?: Maybe<string>
  description?: Maybe<string>
  extra?: Maybe<string>
  text?: Maybe<string>
  link?: Maybe<{ __typename?: 'ComponentAtomsLink'; id: string; text?: Maybe<string>; extra?: Maybe<string>; url: string }>
  media?: Maybe<{
    __typename?: 'UploadFile'
    id: string
    alternativeText?: Maybe<string>
    caption?: Maybe<string>
    name: string
    previewUrl?: Maybe<string>
    size: number
    url: string
    height?: Maybe<number>
    width?: Maybe<number>
  }>
}

export type CategoryFragment = {
  __typename?: 'CmsCategory'
  id: string
  slug: string
  name: string
  pages?: Maybe<
    Array<
      Maybe<{
        __typename?: 'CmsPage'
        id: string
        slug: string
        name: string
        cover?: Maybe<
          Array<
            Maybe<{
              __typename?: 'UploadFile'
              id: string
              alternativeText?: Maybe<string>
              caption?: Maybe<string>
              name: string
              previewUrl?: Maybe<string>
              size: number
              url: string
              height?: Maybe<number>
              width?: Maybe<number>
            }>
          >
        >
      }>
    >
  >
}

export type EntryFragment = { __typename?: 'ComponentAtomsEntry'; id: string; key: string; value?: Maybe<string> }

export type FileFragment = {
  __typename?: 'UploadFile'
  id: string
  alternativeText?: Maybe<string>
  caption?: Maybe<string>
  name: string
  previewUrl?: Maybe<string>
  size: number
  url: string
  height?: Maybe<number>
  width?: Maybe<number>
}

export type LinkFragment = { __typename?: 'ComponentAtomsLink'; id: string; text?: Maybe<string>; extra?: Maybe<string>; url: string }

export type MenuFragment = {
  __typename?: 'ComponentMoleculesMenu'
  id: string
  slug: string
  links?: Maybe<Array<Maybe<{ __typename?: 'ComponentAtomsLink'; id: string; text?: Maybe<string>; extra?: Maybe<string>; url: string }>>>
}

export type MetaFragment = {
  __typename?: 'CmsMeta'
  id: string
  slug: string
  title?: Maybe<string>
  description?: Maybe<string>
  keywords?: Maybe<string>
}

export type NumericFragment = {
  __typename?: 'ComponentAtomsNumeric'
  id: string
  value: number
  min: number
  max: number
  unit?: Maybe<string>
}

export type PageFragment = {
  __typename?: 'CmsPage'
  id: string
  slug: string
  name: string
  cover?: Maybe<
    Array<
      Maybe<{
        __typename?: 'UploadFile'
        id: string
        alternativeText?: Maybe<string>
        caption?: Maybe<string>
        name: string
        previewUrl?: Maybe<string>
        size: number
        url: string
        height?: Maybe<number>
        width?: Maybe<number>
      }>
    >
  >
}

export type RecordFragment = {
  __typename?: 'ComponentMoleculesRecord'
  id: string
  slug: string
  entries?: Maybe<Array<Maybe<{ __typename?: 'ComponentAtomsEntry'; id: string; key: string; value?: Maybe<string> }>>>
}

export type SectionFragment = {
  __typename?: 'CmsSection'
  id: string
  title: string
  description?: Maybe<string>
  slug: string
  card?: Maybe<{
    __typename?: 'ComponentOrganismsCard'
    id: string
    active?: Maybe<boolean>
    title?: Maybe<string>
    subTitle?: Maybe<string>
    description?: Maybe<string>
    extra?: Maybe<string>
    text?: Maybe<string>
    link?: Maybe<{ __typename?: 'ComponentAtomsLink'; id: string; text?: Maybe<string>; extra?: Maybe<string>; url: string }>
    media?: Maybe<{
      __typename?: 'UploadFile'
      id: string
      alternativeText?: Maybe<string>
      caption?: Maybe<string>
      name: string
      previewUrl?: Maybe<string>
      size: number
      url: string
      height?: Maybe<number>
      width?: Maybe<number>
    }>
  }>
  cards?: Maybe<
    Array<
      Maybe<{
        __typename?: 'ComponentOrganismsCard'
        id: string
        active?: Maybe<boolean>
        title?: Maybe<string>
        subTitle?: Maybe<string>
        description?: Maybe<string>
        extra?: Maybe<string>
        text?: Maybe<string>
        link?: Maybe<{ __typename?: 'ComponentAtomsLink'; id: string; text?: Maybe<string>; extra?: Maybe<string>; url: string }>
        media?: Maybe<{
          __typename?: 'UploadFile'
          id: string
          alternativeText?: Maybe<string>
          caption?: Maybe<string>
          name: string
          previewUrl?: Maybe<string>
          size: number
          url: string
          height?: Maybe<number>
          width?: Maybe<number>
        }>
      }>
    >
  >
  records?: Maybe<
    Array<
      Maybe<{
        __typename?: 'ComponentMoleculesRecord'
        id: string
        slug: string
        entries?: Maybe<Array<Maybe<{ __typename?: 'ComponentAtomsEntry'; id: string; key: string; value?: Maybe<string> }>>>
      }>
    >
  >
}

export type TextFragment = { __typename?: 'ComponentAtomsText'; id: string; value: string }

export type WebsiteFragment = {
  __typename?: 'CmsWebsite'
  id: string
  googleAnalyticsCode?: Maybe<string>
  googleTagManagerCode?: Maybe<string>
  name?: Maybe<string>
  logo?: Maybe<{
    __typename?: 'UploadFile'
    id: string
    alternativeText?: Maybe<string>
    caption?: Maybe<string>
    name: string
    previewUrl?: Maybe<string>
    size: number
    url: string
    height?: Maybe<number>
    width?: Maybe<number>
  }>
  menu?: Maybe<
    Array<
      Maybe<{
        __typename?: 'ComponentMoleculesMenu'
        id: string
        slug: string
        links?: Maybe<
          Array<Maybe<{ __typename?: 'ComponentAtomsLink'; id: string; text?: Maybe<string>; extra?: Maybe<string>; url: string }>>
        >
      }>
    >
  >
}

export type ContactMutationVariables = Exact<{
  input?: Maybe<CreateContactInput>
}>

export type ContactMutation = {
  __typename?: 'Mutation'
  createContact?: Maybe<{
    __typename?: 'createContactPayload'
    contact?: Maybe<{ __typename?: 'FeedbackContact'; id: string; name: string; email: string }>
  }>
}

export type LoginMutationVariables = Exact<{
  credentials: UsersPermissionsLoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'UsersPermissionsLoginPayload'
    jwt?: Maybe<string>
    user: {
      __typename?: 'UsersPermissionsMe'
      id: string
      email: string
      role?: Maybe<{ __typename?: 'UsersPermissionsMeRole'; id: string; type?: Maybe<string> }>
    }
  }
}

export type CategoriesQueryVariables = Exact<{
  where?: Maybe<Scalars['JSON']>
}>

export type CategoriesQuery = {
  __typename?: 'Query'
  categories?: Maybe<
    Array<
      Maybe<{
        __typename?: 'CmsCategory'
        id: string
        slug: string
        name: string
        children?: Maybe<
          Array<
            Maybe<{
              __typename?: 'CmsCategory'
              id: string
              slug: string
              name: string
              pages?: Maybe<
                Array<
                  Maybe<{
                    __typename?: 'CmsPage'
                    id: string
                    slug: string
                    name: string
                    cover?: Maybe<
                      Array<
                        Maybe<{
                          __typename?: 'UploadFile'
                          id: string
                          alternativeText?: Maybe<string>
                          caption?: Maybe<string>
                          name: string
                          previewUrl?: Maybe<string>
                          size: number
                          url: string
                          height?: Maybe<number>
                          width?: Maybe<number>
                        }>
                      >
                    >
                  }>
                >
              >
            }>
          >
        >
        pages?: Maybe<
          Array<
            Maybe<{
              __typename?: 'CmsPage'
              id: string
              slug: string
              name: string
              cover?: Maybe<
                Array<
                  Maybe<{
                    __typename?: 'UploadFile'
                    id: string
                    alternativeText?: Maybe<string>
                    caption?: Maybe<string>
                    name: string
                    previewUrl?: Maybe<string>
                    size: number
                    url: string
                    height?: Maybe<number>
                    width?: Maybe<number>
                  }>
                >
              >
            }>
          >
        >
      }>
    >
  >
}

export type CategoryQueryVariables = Exact<{
  slug: Scalars['ID']
}>

export type CategoryQuery = {
  __typename?: 'Query'
  category?: Maybe<{
    __typename?: 'CmsCategory'
    id: string
    slug: string
    name: string
    children?: Maybe<
      Array<
        Maybe<{
          __typename?: 'CmsCategory'
          id: string
          slug: string
          name: string
          pages?: Maybe<
            Array<
              Maybe<{
                __typename?: 'CmsPage'
                id: string
                slug: string
                name: string
                cover?: Maybe<
                  Array<
                    Maybe<{
                      __typename?: 'UploadFile'
                      id: string
                      alternativeText?: Maybe<string>
                      caption?: Maybe<string>
                      name: string
                      previewUrl?: Maybe<string>
                      size: number
                      url: string
                      height?: Maybe<number>
                      width?: Maybe<number>
                    }>
                  >
                >
              }>
            >
          >
        }>
      >
    >
    pages?: Maybe<
      Array<
        Maybe<{
          __typename?: 'CmsPage'
          id: string
          slug: string
          name: string
          cover?: Maybe<
            Array<
              Maybe<{
                __typename?: 'UploadFile'
                id: string
                alternativeText?: Maybe<string>
                caption?: Maybe<string>
                name: string
                previewUrl?: Maybe<string>
                size: number
                url: string
                height?: Maybe<number>
                width?: Maybe<number>
              }>
            >
          >
        }>
      >
    >
  }>
}

export type MetaQueryVariables = Exact<{
  slug: Scalars['ID']
}>

export type MetaQuery = {
  __typename?: 'Query'
  meta?: Maybe<{
    __typename?: 'CmsMeta'
    id: string
    slug: string
    title?: Maybe<string>
    description?: Maybe<string>
    keywords?: Maybe<string>
  }>
}

export type MetasQueryVariables = Exact<{
  where?: Maybe<Scalars['JSON']>
}>

export type MetasQuery = {
  __typename?: 'Query'
  metas?: Maybe<
    Array<
      Maybe<{
        __typename?: 'CmsMeta'
        id: string
        slug: string
        title?: Maybe<string>
        description?: Maybe<string>
        keywords?: Maybe<string>
      }>
    >
  >
}

export type PageQueryVariables = Exact<{
  slug: Scalars['ID']
}>

export type PageQuery = {
  __typename?: 'Query'
  page?: Maybe<{
    __typename?: 'CmsPage'
    id: string
    slug: string
    name: string
    categories?: Maybe<
      Array<
        Maybe<{
          __typename?: 'CmsCategory'
          id: string
          slug: string
          name: string
          pages?: Maybe<
            Array<
              Maybe<{
                __typename?: 'CmsPage'
                id: string
                slug: string
                name: string
                cover?: Maybe<
                  Array<
                    Maybe<{
                      __typename?: 'UploadFile'
                      id: string
                      alternativeText?: Maybe<string>
                      caption?: Maybe<string>
                      name: string
                      previewUrl?: Maybe<string>
                      size: number
                      url: string
                      height?: Maybe<number>
                      width?: Maybe<number>
                    }>
                  >
                >
              }>
            >
          >
        }>
      >
    >
    cover?: Maybe<
      Array<
        Maybe<{
          __typename?: 'UploadFile'
          id: string
          alternativeText?: Maybe<string>
          caption?: Maybe<string>
          name: string
          previewUrl?: Maybe<string>
          size: number
          url: string
          height?: Maybe<number>
          width?: Maybe<number>
        }>
      >
    >
  }>
}

export type PagesQueryVariables = Exact<{
  where?: Maybe<Scalars['JSON']>
}>

export type PagesQuery = {
  __typename?: 'Query'
  pages?: Maybe<
    Array<
      Maybe<{
        __typename?: 'CmsPage'
        id: string
        slug: string
        name: string
        categories?: Maybe<
          Array<
            Maybe<{
              __typename?: 'CmsCategory'
              id: string
              slug: string
              name: string
              pages?: Maybe<
                Array<
                  Maybe<{
                    __typename?: 'CmsPage'
                    id: string
                    slug: string
                    name: string
                    cover?: Maybe<
                      Array<
                        Maybe<{
                          __typename?: 'UploadFile'
                          id: string
                          alternativeText?: Maybe<string>
                          caption?: Maybe<string>
                          name: string
                          previewUrl?: Maybe<string>
                          size: number
                          url: string
                          height?: Maybe<number>
                          width?: Maybe<number>
                        }>
                      >
                    >
                  }>
                >
              >
            }>
          >
        >
        cover?: Maybe<
          Array<
            Maybe<{
              __typename?: 'UploadFile'
              id: string
              alternativeText?: Maybe<string>
              caption?: Maybe<string>
              name: string
              previewUrl?: Maybe<string>
              size: number
              url: string
              height?: Maybe<number>
              width?: Maybe<number>
            }>
          >
        >
      }>
    >
  >
}

export type SectionQueryVariables = Exact<{
  slug: Scalars['ID']
}>

export type SectionQuery = {
  __typename?: 'Query'
  section?: Maybe<{
    __typename?: 'CmsSection'
    id: string
    title: string
    description?: Maybe<string>
    slug: string
    card?: Maybe<{
      __typename?: 'ComponentOrganismsCard'
      id: string
      active?: Maybe<boolean>
      title?: Maybe<string>
      subTitle?: Maybe<string>
      description?: Maybe<string>
      extra?: Maybe<string>
      text?: Maybe<string>
      link?: Maybe<{ __typename?: 'ComponentAtomsLink'; id: string; text?: Maybe<string>; extra?: Maybe<string>; url: string }>
      media?: Maybe<{
        __typename?: 'UploadFile'
        id: string
        alternativeText?: Maybe<string>
        caption?: Maybe<string>
        name: string
        previewUrl?: Maybe<string>
        size: number
        url: string
        height?: Maybe<number>
        width?: Maybe<number>
      }>
    }>
    cards?: Maybe<
      Array<
        Maybe<{
          __typename?: 'ComponentOrganismsCard'
          id: string
          active?: Maybe<boolean>
          title?: Maybe<string>
          subTitle?: Maybe<string>
          description?: Maybe<string>
          extra?: Maybe<string>
          text?: Maybe<string>
          link?: Maybe<{ __typename?: 'ComponentAtomsLink'; id: string; text?: Maybe<string>; extra?: Maybe<string>; url: string }>
          media?: Maybe<{
            __typename?: 'UploadFile'
            id: string
            alternativeText?: Maybe<string>
            caption?: Maybe<string>
            name: string
            previewUrl?: Maybe<string>
            size: number
            url: string
            height?: Maybe<number>
            width?: Maybe<number>
          }>
        }>
      >
    >
    records?: Maybe<
      Array<
        Maybe<{
          __typename?: 'ComponentMoleculesRecord'
          id: string
          slug: string
          entries?: Maybe<Array<Maybe<{ __typename?: 'ComponentAtomsEntry'; id: string; key: string; value?: Maybe<string> }>>>
        }>
      >
    >
  }>
}

export type SectionsQueryVariables = Exact<{
  where?: Maybe<Scalars['JSON']>
}>

export type SectionsQuery = {
  __typename?: 'Query'
  sections?: Maybe<
    Array<
      Maybe<{
        __typename?: 'CmsSection'
        id: string
        title: string
        description?: Maybe<string>
        slug: string
        card?: Maybe<{
          __typename?: 'ComponentOrganismsCard'
          id: string
          active?: Maybe<boolean>
          title?: Maybe<string>
          subTitle?: Maybe<string>
          description?: Maybe<string>
          extra?: Maybe<string>
          text?: Maybe<string>
          link?: Maybe<{ __typename?: 'ComponentAtomsLink'; id: string; text?: Maybe<string>; extra?: Maybe<string>; url: string }>
          media?: Maybe<{
            __typename?: 'UploadFile'
            id: string
            alternativeText?: Maybe<string>
            caption?: Maybe<string>
            name: string
            previewUrl?: Maybe<string>
            size: number
            url: string
            height?: Maybe<number>
            width?: Maybe<number>
          }>
        }>
        cards?: Maybe<
          Array<
            Maybe<{
              __typename?: 'ComponentOrganismsCard'
              id: string
              active?: Maybe<boolean>
              title?: Maybe<string>
              subTitle?: Maybe<string>
              description?: Maybe<string>
              extra?: Maybe<string>
              text?: Maybe<string>
              link?: Maybe<{ __typename?: 'ComponentAtomsLink'; id: string; text?: Maybe<string>; extra?: Maybe<string>; url: string }>
              media?: Maybe<{
                __typename?: 'UploadFile'
                id: string
                alternativeText?: Maybe<string>
                caption?: Maybe<string>
                name: string
                previewUrl?: Maybe<string>
                size: number
                url: string
                height?: Maybe<number>
                width?: Maybe<number>
              }>
            }>
          >
        >
        records?: Maybe<
          Array<
            Maybe<{
              __typename?: 'ComponentMoleculesRecord'
              id: string
              slug: string
              entries?: Maybe<Array<Maybe<{ __typename?: 'ComponentAtomsEntry'; id: string; key: string; value?: Maybe<string> }>>>
            }>
          >
        >
      }>
    >
  >
}

export type WebsiteQueryVariables = Exact<{
  slug: Scalars['ID']
}>

export type WebsiteQuery = {
  __typename?: 'Query'
  website?: Maybe<{
    __typename?: 'CmsWebsite'
    id: string
    googleAnalyticsCode?: Maybe<string>
    googleTagManagerCode?: Maybe<string>
    name?: Maybe<string>
    logo?: Maybe<{
      __typename?: 'UploadFile'
      id: string
      alternativeText?: Maybe<string>
      caption?: Maybe<string>
      name: string
      previewUrl?: Maybe<string>
      size: number
      url: string
      height?: Maybe<number>
      width?: Maybe<number>
    }>
    menu?: Maybe<
      Array<
        Maybe<{
          __typename?: 'ComponentMoleculesMenu'
          id: string
          slug: string
          links?: Maybe<
            Array<Maybe<{ __typename?: 'ComponentAtomsLink'; id: string; text?: Maybe<string>; extra?: Maybe<string>; url: string }>>
          >
        }>
      >
    >
  }>
}

export const FileFragmentDoc = gql`
  fragment File on UploadFile {
    id
    alternativeText
    caption
    name
    previewUrl
    size
    url
    height
    width
  }
`
export const PageFragmentDoc = gql`
  fragment Page on CmsPage {
    id
    slug
    name
    cover {
      ...File
    }
  }
  ${FileFragmentDoc}
`
export const CategoryFragmentDoc = gql`
  fragment Category on CmsCategory {
    id
    slug
    name
    pages {
      ...Page
    }
  }
  ${PageFragmentDoc}
`
export const MetaFragmentDoc = gql`
  fragment Meta on CmsMeta {
    id
    slug
    title
    description
    keywords
  }
`
export const NumericFragmentDoc = gql`
  fragment Numeric on ComponentAtomsNumeric {
    id
    value
    min
    max
    unit
  }
`
export const LinkFragmentDoc = gql`
  fragment Link on ComponentAtomsLink {
    id
    text
    extra
    url
  }
`
export const CardFragmentDoc = gql`
  fragment Card on ComponentOrganismsCard {
    id
    active
    title
    subTitle
    description
    extra
    text
    link {
      ...Link
    }
    media {
      ...File
    }
  }
  ${LinkFragmentDoc}
  ${FileFragmentDoc}
`
export const EntryFragmentDoc = gql`
  fragment Entry on ComponentAtomsEntry {
    id
    key
    value
  }
`
export const RecordFragmentDoc = gql`
  fragment Record on ComponentMoleculesRecord {
    id
    slug
    entries {
      ...Entry
    }
  }
  ${EntryFragmentDoc}
`
export const SectionFragmentDoc = gql`
  fragment Section on CmsSection {
    id
    title
    description
    slug
    card {
      ...Card
    }
    cards {
      ...Card
    }
    records {
      ...Record
    }
  }
  ${CardFragmentDoc}
  ${RecordFragmentDoc}
`
export const TextFragmentDoc = gql`
  fragment Text on ComponentAtomsText {
    id
    value
  }
`
export const MenuFragmentDoc = gql`
  fragment Menu on ComponentMoleculesMenu {
    id
    slug
    links {
      ...Link
    }
  }
  ${LinkFragmentDoc}
`
export const WebsiteFragmentDoc = gql`
  fragment Website on CmsWebsite {
    id
    googleAnalyticsCode
    googleTagManagerCode
    name
    logo {
      ...File
    }
    menu {
      ...Menu
    }
  }
  ${FileFragmentDoc}
  ${MenuFragmentDoc}
`
export const ContactDocument = gql`
  mutation contact($input: createContactInput) {
    createContact(input: $input) {
      contact {
        id
        name
        email
      }
    }
  }
`
export type ContactMutationFn = Apollo.MutationFunction<ContactMutation, ContactMutationVariables>
export type ContactComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<ContactMutation, ContactMutationVariables>,
  'mutation'
>

export const ContactComponent = (props: ContactComponentProps) => (
  <ApolloReactComponents.Mutation<ContactMutation, ContactMutationVariables> mutation={ContactDocument} {...props} />
)

/**
 * __useContactMutation__
 *
 * To run a mutation, you first call `useContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactMutation, { data, loading, error }] = useContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContactMutation(baseOptions?: Apollo.MutationHookOptions<ContactMutation, ContactMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ContactMutation, ContactMutationVariables>(ContactDocument, options)
}
export type ContactMutationHookResult = ReturnType<typeof useContactMutation>
export type ContactMutationResult = Apollo.MutationResult<ContactMutation>
export type ContactMutationOptions = Apollo.BaseMutationOptions<ContactMutation, ContactMutationVariables>
export const LoginDocument = gql`
  mutation login($credentials: UsersPermissionsLoginInput!) {
    login(input: $credentials) {
      jwt
      user {
        id
        email
        role {
          id
          type
        }
      }
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>

export const LoginComponent = (props: LoginComponentProps) => (
  <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
)

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const CategoriesDocument = gql`
  query categories($where: JSON) {
    categories(where: $where, publicationState: LIVE) {
      ...Category
      children {
        ...Category
      }
    }
  }
  ${CategoryFragmentDoc}
`
export type CategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CategoriesQuery, CategoriesQueryVariables>, 'query'>

export const CategoriesComponent = (props: CategoriesComponentProps) => (
  <ApolloReactComponents.Query<CategoriesQuery, CategoriesQueryVariables> query={CategoriesDocument} {...props} />
)

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options)
}
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options)
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>
export const CategoryDocument = gql`
  query category($slug: ID!) {
    category(id: $slug, publicationState: LIVE) {
      ...Category
      children {
        ...Category
      }
    }
  }
  ${CategoryFragmentDoc}
`
export type CategoryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CategoryQuery, CategoryQueryVariables>, 'query'> &
  ({ variables: CategoryQueryVariables; skip?: boolean } | { skip: boolean })

export const CategoryComponent = (props: CategoryComponentProps) => (
  <ApolloReactComponents.Query<CategoryQuery, CategoryQueryVariables> query={CategoryDocument} {...props} />
)

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options)
}
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options)
}
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>
export const MetaDocument = gql`
  query meta($slug: ID!) {
    meta(id: $slug, publicationState: LIVE) {
      ...Meta
    }
  }
  ${MetaFragmentDoc}
`
export type MetaComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MetaQuery, MetaQueryVariables>, 'query'> &
  ({ variables: MetaQueryVariables; skip?: boolean } | { skip: boolean })

export const MetaComponent = (props: MetaComponentProps) => (
  <ApolloReactComponents.Query<MetaQuery, MetaQueryVariables> query={MetaDocument} {...props} />
)

/**
 * __useMetaQuery__
 *
 * To run a query within a React component, call `useMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMetaQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useMetaQuery(baseOptions: Apollo.QueryHookOptions<MetaQuery, MetaQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MetaQuery, MetaQueryVariables>(MetaDocument, options)
}
export function useMetaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MetaQuery, MetaQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MetaQuery, MetaQueryVariables>(MetaDocument, options)
}
export type MetaQueryHookResult = ReturnType<typeof useMetaQuery>
export type MetaLazyQueryHookResult = ReturnType<typeof useMetaLazyQuery>
export type MetaQueryResult = Apollo.QueryResult<MetaQuery, MetaQueryVariables>
export const MetasDocument = gql`
  query metas($where: JSON) {
    metas(where: $where, publicationState: LIVE) {
      ...Meta
    }
  }
  ${MetaFragmentDoc}
`
export type MetasComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MetasQuery, MetasQueryVariables>, 'query'>

export const MetasComponent = (props: MetasComponentProps) => (
  <ApolloReactComponents.Query<MetasQuery, MetasQueryVariables> query={MetasDocument} {...props} />
)

/**
 * __useMetasQuery__
 *
 * To run a query within a React component, call `useMetasQuery` and pass it any options that fit your needs.
 * When your component renders, `useMetasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMetasQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMetasQuery(baseOptions?: Apollo.QueryHookOptions<MetasQuery, MetasQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MetasQuery, MetasQueryVariables>(MetasDocument, options)
}
export function useMetasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MetasQuery, MetasQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MetasQuery, MetasQueryVariables>(MetasDocument, options)
}
export type MetasQueryHookResult = ReturnType<typeof useMetasQuery>
export type MetasLazyQueryHookResult = ReturnType<typeof useMetasLazyQuery>
export type MetasQueryResult = Apollo.QueryResult<MetasQuery, MetasQueryVariables>
export const PageDocument = gql`
  query page($slug: ID!) {
    page(id: $slug, publicationState: LIVE) {
      ...Page
      categories {
        ...Category
      }
    }
  }
  ${PageFragmentDoc}
  ${CategoryFragmentDoc}
`
export type PageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PageQuery, PageQueryVariables>, 'query'> &
  ({ variables: PageQueryVariables; skip?: boolean } | { skip: boolean })

export const PageComponent = (props: PageComponentProps) => (
  <ApolloReactComponents.Query<PageQuery, PageQueryVariables> query={PageDocument} {...props} />
)

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePageQuery(baseOptions: Apollo.QueryHookOptions<PageQuery, PageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageQuery, PageQueryVariables>(PageDocument, options)
}
export function usePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageQuery, PageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageQuery, PageQueryVariables>(PageDocument, options)
}
export type PageQueryHookResult = ReturnType<typeof usePageQuery>
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>
export const PagesDocument = gql`
  query pages($where: JSON) {
    pages(where: $where, publicationState: LIVE) {
      ...Page
      categories {
        ...Category
      }
    }
  }
  ${PageFragmentDoc}
  ${CategoryFragmentDoc}
`
export type PagesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PagesQuery, PagesQueryVariables>, 'query'>

export const PagesComponent = (props: PagesComponentProps) => (
  <ApolloReactComponents.Query<PagesQuery, PagesQueryVariables> query={PagesDocument} {...props} />
)

/**
 * __usePagesQuery__
 *
 * To run a query within a React component, call `usePagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePagesQuery(baseOptions?: Apollo.QueryHookOptions<PagesQuery, PagesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PagesQuery, PagesQueryVariables>(PagesDocument, options)
}
export function usePagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagesQuery, PagesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PagesQuery, PagesQueryVariables>(PagesDocument, options)
}
export type PagesQueryHookResult = ReturnType<typeof usePagesQuery>
export type PagesLazyQueryHookResult = ReturnType<typeof usePagesLazyQuery>
export type PagesQueryResult = Apollo.QueryResult<PagesQuery, PagesQueryVariables>
export const SectionDocument = gql`
  query section($slug: ID!) {
    section(id: $slug, publicationState: LIVE) {
      ...Section
    }
  }
  ${SectionFragmentDoc}
`
export type SectionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SectionQuery, SectionQueryVariables>, 'query'> &
  ({ variables: SectionQueryVariables; skip?: boolean } | { skip: boolean })

export const SectionComponent = (props: SectionComponentProps) => (
  <ApolloReactComponents.Query<SectionQuery, SectionQueryVariables> query={SectionDocument} {...props} />
)

/**
 * __useSectionQuery__
 *
 * To run a query within a React component, call `useSectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSectionQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useSectionQuery(baseOptions: Apollo.QueryHookOptions<SectionQuery, SectionQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SectionQuery, SectionQueryVariables>(SectionDocument, options)
}
export function useSectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SectionQuery, SectionQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SectionQuery, SectionQueryVariables>(SectionDocument, options)
}
export type SectionQueryHookResult = ReturnType<typeof useSectionQuery>
export type SectionLazyQueryHookResult = ReturnType<typeof useSectionLazyQuery>
export type SectionQueryResult = Apollo.QueryResult<SectionQuery, SectionQueryVariables>
export const SectionsDocument = gql`
  query sections($where: JSON) {
    sections(where: $where, publicationState: LIVE) {
      ...Section
    }
  }
  ${SectionFragmentDoc}
`
export type SectionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SectionsQuery, SectionsQueryVariables>, 'query'>

export const SectionsComponent = (props: SectionsComponentProps) => (
  <ApolloReactComponents.Query<SectionsQuery, SectionsQueryVariables> query={SectionsDocument} {...props} />
)

/**
 * __useSectionsQuery__
 *
 * To run a query within a React component, call `useSectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSectionsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSectionsQuery(baseOptions?: Apollo.QueryHookOptions<SectionsQuery, SectionsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SectionsQuery, SectionsQueryVariables>(SectionsDocument, options)
}
export function useSectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SectionsQuery, SectionsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SectionsQuery, SectionsQueryVariables>(SectionsDocument, options)
}
export type SectionsQueryHookResult = ReturnType<typeof useSectionsQuery>
export type SectionsLazyQueryHookResult = ReturnType<typeof useSectionsLazyQuery>
export type SectionsQueryResult = Apollo.QueryResult<SectionsQuery, SectionsQueryVariables>
export const WebsiteDocument = gql`
  query website($slug: ID!) {
    website(id: $slug, publicationState: LIVE) {
      ...Website
    }
  }
  ${WebsiteFragmentDoc}
`
export type WebsiteComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<WebsiteQuery, WebsiteQueryVariables>, 'query'> &
  ({ variables: WebsiteQueryVariables; skip?: boolean } | { skip: boolean })

export const WebsiteComponent = (props: WebsiteComponentProps) => (
  <ApolloReactComponents.Query<WebsiteQuery, WebsiteQueryVariables> query={WebsiteDocument} {...props} />
)

/**
 * __useWebsiteQuery__
 *
 * To run a query within a React component, call `useWebsiteQuery` and pass it any options that fit your needs.
 * When your component renders, `useWebsiteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWebsiteQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useWebsiteQuery(baseOptions: Apollo.QueryHookOptions<WebsiteQuery, WebsiteQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options)
}
export function useWebsiteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WebsiteQuery, WebsiteQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options)
}
export type WebsiteQueryHookResult = ReturnType<typeof useWebsiteQuery>
export type WebsiteLazyQueryHookResult = ReturnType<typeof useWebsiteLazyQuery>
export type WebsiteQueryResult = Apollo.QueryResult<WebsiteQuery, WebsiteQueryVariables>
