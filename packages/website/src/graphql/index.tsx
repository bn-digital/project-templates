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
  firstname: Scalars['String']
  id: Scalars['ID']
  lastname: Scalars['String']
  username?: Maybe<Scalars['String']>
}

export type CategoryInput = {
  children?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  name: Scalars['String']
  pages?: Maybe<Array<Maybe<Scalars['ID']>>>
  parent?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  updated_by?: Maybe<Scalars['ID']>
}

export type CmsCategory = {
  __typename?: 'CmsCategory'
  children?: Maybe<Array<Maybe<CmsCategory>>>
  id: Scalars['ID']
  name: Scalars['String']
  pages?: Maybe<Array<Maybe<CmsPage>>>
  parent?: Maybe<Array<Maybe<CmsCategory>>>
  slug: Scalars['String']
}

export type CmsCategoryChildrenArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type CmsCategoryPagesArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type CmsCategoryParentArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
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
  aggregate?: Maybe<CmsCategoryAggregator>
  groupBy?: Maybe<CmsCategoryGroupBy>
  values?: Maybe<Array<Maybe<CmsCategory>>>
}

export type CmsCategoryConnectionId = {
  __typename?: 'CmsCategoryConnectionId'
  connection?: Maybe<CmsCategoryConnection>
  key?: Maybe<Scalars['ID']>
}

export type CmsCategoryConnectionName = {
  __typename?: 'CmsCategoryConnectionName'
  connection?: Maybe<CmsCategoryConnection>
  key?: Maybe<Scalars['String']>
}

export type CmsCategoryConnectionSlug = {
  __typename?: 'CmsCategoryConnectionSlug'
  connection?: Maybe<CmsCategoryConnection>
  key?: Maybe<Scalars['String']>
}

export type CmsCategoryGroupBy = {
  __typename?: 'CmsCategoryGroupBy'
  id?: Maybe<Array<Maybe<CmsCategoryConnectionId>>>
  name?: Maybe<Array<Maybe<CmsCategoryConnectionName>>>
  slug?: Maybe<Array<Maybe<CmsCategoryConnectionSlug>>>
}

export type CmsMeta = {
  __typename?: 'CmsMeta'
  created_at: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  keywords?: Maybe<Scalars['String']>
  slug: Scalars['String']
  title?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
}

export type CmsMetaAggregator = {
  __typename?: 'CmsMetaAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type CmsMetaConnection = {
  __typename?: 'CmsMetaConnection'
  aggregate?: Maybe<CmsMetaAggregator>
  groupBy?: Maybe<CmsMetaGroupBy>
  values?: Maybe<Array<Maybe<CmsMeta>>>
}

export type CmsMetaConnectionCreated_At = {
  __typename?: 'CmsMetaConnectionCreated_at'
  connection?: Maybe<CmsMetaConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type CmsMetaConnectionDescription = {
  __typename?: 'CmsMetaConnectionDescription'
  connection?: Maybe<CmsMetaConnection>
  key?: Maybe<Scalars['String']>
}

export type CmsMetaConnectionId = {
  __typename?: 'CmsMetaConnectionId'
  connection?: Maybe<CmsMetaConnection>
  key?: Maybe<Scalars['ID']>
}

export type CmsMetaConnectionKeywords = {
  __typename?: 'CmsMetaConnectionKeywords'
  connection?: Maybe<CmsMetaConnection>
  key?: Maybe<Scalars['String']>
}

export type CmsMetaConnectionSlug = {
  __typename?: 'CmsMetaConnectionSlug'
  connection?: Maybe<CmsMetaConnection>
  key?: Maybe<Scalars['String']>
}

export type CmsMetaConnectionTitle = {
  __typename?: 'CmsMetaConnectionTitle'
  connection?: Maybe<CmsMetaConnection>
  key?: Maybe<Scalars['String']>
}

export type CmsMetaConnectionUpdated_At = {
  __typename?: 'CmsMetaConnectionUpdated_at'
  connection?: Maybe<CmsMetaConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type CmsMetaGroupBy = {
  __typename?: 'CmsMetaGroupBy'
  created_at?: Maybe<Array<Maybe<CmsMetaConnectionCreated_At>>>
  description?: Maybe<Array<Maybe<CmsMetaConnectionDescription>>>
  id?: Maybe<Array<Maybe<CmsMetaConnectionId>>>
  keywords?: Maybe<Array<Maybe<CmsMetaConnectionKeywords>>>
  slug?: Maybe<Array<Maybe<CmsMetaConnectionSlug>>>
  title?: Maybe<Array<Maybe<CmsMetaConnectionTitle>>>
  updated_at?: Maybe<Array<Maybe<CmsMetaConnectionUpdated_At>>>
}

export type CmsPage = {
  __typename?: 'CmsPage'
  categories?: Maybe<Array<Maybe<CmsCategory>>>
  cover?: Maybe<Array<Maybe<UploadFile>>>
  id: Scalars['ID']
  meta?: Maybe<ComponentOrganismsMeta>
  name: Scalars['String']
  slug: Scalars['String']
  text: Scalars['String']
}

export type CmsPageCategoriesArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type CmsPageCoverArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
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
  aggregate?: Maybe<CmsPageAggregator>
  groupBy?: Maybe<CmsPageGroupBy>
  values?: Maybe<Array<Maybe<CmsPage>>>
}

export type CmsPageConnectionId = {
  __typename?: 'CmsPageConnectionId'
  connection?: Maybe<CmsPageConnection>
  key?: Maybe<Scalars['ID']>
}

export type CmsPageConnectionMeta = {
  __typename?: 'CmsPageConnectionMeta'
  connection?: Maybe<CmsPageConnection>
  key?: Maybe<Scalars['ID']>
}

export type CmsPageConnectionName = {
  __typename?: 'CmsPageConnectionName'
  connection?: Maybe<CmsPageConnection>
  key?: Maybe<Scalars['String']>
}

export type CmsPageConnectionSlug = {
  __typename?: 'CmsPageConnectionSlug'
  connection?: Maybe<CmsPageConnection>
  key?: Maybe<Scalars['String']>
}

export type CmsPageConnectionText = {
  __typename?: 'CmsPageConnectionText'
  connection?: Maybe<CmsPageConnection>
  key?: Maybe<Scalars['String']>
}

export type CmsPageGroupBy = {
  __typename?: 'CmsPageGroupBy'
  id?: Maybe<Array<Maybe<CmsPageConnectionId>>>
  meta?: Maybe<Array<Maybe<CmsPageConnectionMeta>>>
  name?: Maybe<Array<Maybe<CmsPageConnectionName>>>
  slug?: Maybe<Array<Maybe<CmsPageConnectionSlug>>>
  text?: Maybe<Array<Maybe<CmsPageConnectionText>>>
}

export type CmsSection = {
  __typename?: 'CmsSection'
  card?: Maybe<ComponentOrganismsCard>
  cards?: Maybe<Array<Maybe<ComponentOrganismsCard>>>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  records?: Maybe<Array<Maybe<ComponentMoleculesRecord>>>
  slug: Scalars['String']
  title: Scalars['String']
}

export type CmsSectionAggregator = {
  __typename?: 'CmsSectionAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type CmsSectionConnection = {
  __typename?: 'CmsSectionConnection'
  aggregate?: Maybe<CmsSectionAggregator>
  groupBy?: Maybe<CmsSectionGroupBy>
  values?: Maybe<Array<Maybe<CmsSection>>>
}

export type CmsSectionConnectionDescription = {
  __typename?: 'CmsSectionConnectionDescription'
  connection?: Maybe<CmsSectionConnection>
  key?: Maybe<Scalars['String']>
}

export type CmsSectionConnectionId = {
  __typename?: 'CmsSectionConnectionId'
  connection?: Maybe<CmsSectionConnection>
  key?: Maybe<Scalars['ID']>
}

export type CmsSectionConnectionSlug = {
  __typename?: 'CmsSectionConnectionSlug'
  connection?: Maybe<CmsSectionConnection>
  key?: Maybe<Scalars['String']>
}

export type CmsSectionConnectionTitle = {
  __typename?: 'CmsSectionConnectionTitle'
  connection?: Maybe<CmsSectionConnection>
  key?: Maybe<Scalars['String']>
}

export type CmsSectionGroupBy = {
  __typename?: 'CmsSectionGroupBy'
  description?: Maybe<Array<Maybe<CmsSectionConnectionDescription>>>
  id?: Maybe<Array<Maybe<CmsSectionConnectionId>>>
  slug?: Maybe<Array<Maybe<CmsSectionConnectionSlug>>>
  title?: Maybe<Array<Maybe<CmsSectionConnectionTitle>>>
}

export type CmsWebsite = {
  __typename?: 'CmsWebsite'
  googleAnalyticsCode?: Maybe<Scalars['String']>
  googleTagManagerCode?: Maybe<Scalars['String']>
  id: Scalars['ID']
  logo?: Maybe<UploadFile>
  menu?: Maybe<Array<Maybe<ComponentMoleculesMenu>>>
  name?: Maybe<Scalars['String']>
  slug: Scalars['String']
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
  extra?: Maybe<Scalars['String']>
  id: Scalars['ID']
  text?: Maybe<Scalars['String']>
  url: Scalars['String']
}

export type ComponentAtomsLinkInput = {
  extra?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  url: Scalars['String']
}

export type ComponentAtomsNumeric = {
  __typename?: 'ComponentAtomsNumeric'
  id: Scalars['ID']
  max: Scalars['Float']
  min: Scalars['Float']
  unit?: Maybe<Scalars['String']>
  value: Scalars['Float']
}

export type ComponentAtomsNumericInput = {
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  unit?: Maybe<Scalars['String']>
  value: Scalars['Float']
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
  entries?: Maybe<Array<Maybe<ComponentAtomsEntry>>>
  id: Scalars['ID']
  slug: Scalars['String']
}

export type ComponentMoleculesRecordInput = {
  entries?: Maybe<Array<ComponentAtomsEntryInput>>
  slug?: Maybe<Scalars['String']>
}

export type ComponentOrganismsCard = {
  __typename?: 'ComponentOrganismsCard'
  active?: Maybe<Scalars['Boolean']>
  backgroundColor?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  extra?: Maybe<Scalars['String']>
  id: Scalars['ID']
  link?: Maybe<ComponentAtomsLink>
  media?: Maybe<UploadFile>
  slug?: Maybe<Scalars['String']>
  subTitle?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type ComponentOrganismsCardInput = {
  active?: Maybe<Scalars['Boolean']>
  backgroundColor?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  extra?: Maybe<Scalars['String']>
  link?: Maybe<ComponentAtomsLinkInput>
  media?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
  subTitle?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type ComponentOrganismsMeta = {
  __typename?: 'ComponentOrganismsMeta'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  keywords?: Maybe<Array<Maybe<ComponentAtomsText>>>
  title?: Maybe<Scalars['String']>
}

export type ComponentOrganismsMetaInput = {
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<ComponentAtomsTextInput>>>
  title?: Maybe<Scalars['String']>
}

export type ContactInput = {
  created_by?: Maybe<Scalars['ID']>
  email: Scalars['String']
  message?: Maybe<Scalars['String']>
  name: Scalars['String']
  subject?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EmailDesignerEmailTemplate = {
  __typename?: 'EmailDesignerEmailTemplate'
  bodyHtml?: Maybe<Scalars['String']>
  bodyText?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  design?: Maybe<Scalars['JSON']>
  enabled?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  sourceCodeToTemplateId?: Maybe<Scalars['Int']>
  subject?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['JSON']>
  updated_at: Scalars['DateTime']
}

export type EmailTemplateInput = {
  bodyHtml?: Maybe<Scalars['String']>
  bodyText?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  design?: Maybe<Scalars['JSON']>
  enabled?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  sourceCodeToTemplateId?: Maybe<Scalars['Int']>
  subject?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['JSON']>
  updated_by?: Maybe<Scalars['ID']>
}

export type FeedbackContact = {
  __typename?: 'FeedbackContact'
  email: Scalars['String']
  id: Scalars['ID']
  message?: Maybe<Scalars['String']>
  name: Scalars['String']
  subject?: Maybe<Scalars['String']>
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

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
}

export type InputId = {
  id: Scalars['ID']
}

export type LocaleInput = {
  code?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type MetaInput = {
  created_by?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Morph =
  | CmsCategory
  | CmsCategoryAggregator
  | CmsCategoryConnection
  | CmsCategoryConnectionId
  | CmsCategoryConnectionName
  | CmsCategoryConnectionSlug
  | CmsCategoryGroupBy
  | CmsMeta
  | CmsMetaAggregator
  | CmsMetaConnection
  | CmsMetaConnectionCreated_At
  | CmsMetaConnectionDescription
  | CmsMetaConnectionId
  | CmsMetaConnectionKeywords
  | CmsMetaConnectionSlug
  | CmsMetaConnectionTitle
  | CmsMetaConnectionUpdated_At
  | CmsMetaGroupBy
  | CmsPage
  | CmsPageAggregator
  | CmsPageConnection
  | CmsPageConnectionId
  | CmsPageConnectionMeta
  | CmsPageConnectionName
  | CmsPageConnectionSlug
  | CmsPageConnectionText
  | CmsPageGroupBy
  | CmsSection
  | CmsSectionAggregator
  | CmsSectionConnection
  | CmsSectionConnectionDescription
  | CmsSectionConnectionId
  | CmsSectionConnectionSlug
  | CmsSectionConnectionTitle
  | CmsSectionGroupBy
  | CmsWebsite
  | ComponentAtomsEntry
  | ComponentAtomsLink
  | ComponentAtomsNumeric
  | ComponentAtomsText
  | ComponentMoleculesMenu
  | ComponentMoleculesRecord
  | ComponentOrganismsCard
  | ComponentOrganismsMeta
  | EmailDesignerEmailTemplate
  | FeedbackContact
  | I18NLocale
  | UploadFile
  | UploadFileAggregator
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMax
  | UploadFileAggregatorMin
  | UploadFileAggregatorSum
  | UploadFileConnection
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionCreated_At
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
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionUrl
  | UploadFileConnectionWidth
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
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsUser
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserConnection
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionFirstName
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionLastName
  | UsersPermissionsUserConnectionPhoto
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserGroupBy
  | CreateContactPayload
  | CreateRolePayload
  | CreateUserPayload
  | DeleteFilePayload
  | DeleteRolePayload
  | DeleteUserPayload
  | UpdateRolePayload
  | UpdateUserPayload

export type Mutation = {
  __typename?: 'Mutation'
  createContact?: Maybe<CreateContactPayload>
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>
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
  updateFileInfo: UploadFile
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>
  upload: UploadFile
}

export type MutationCreateContactArgs = {
  input?: Maybe<CreateContactInput>
}

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>
}

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>
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

export type PageInput = {
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>
  cover?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  meta?: Maybe<ComponentOrganismsMetaInput>
  name: Scalars['String']
  published_at?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  text: Scalars['String']
  updated_by?: Maybe<Scalars['ID']>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query'
  categories?: Maybe<Array<Maybe<CmsCategory>>>
  categoriesConnection?: Maybe<CmsCategoryConnection>
  category?: Maybe<CmsCategory>
  files?: Maybe<Array<Maybe<UploadFile>>>
  filesConnection?: Maybe<UploadFileConnection>
  me?: Maybe<UsersPermissionsMe>
  meta?: Maybe<CmsMeta>
  metas?: Maybe<Array<Maybe<CmsMeta>>>
  metasConnection?: Maybe<CmsMetaConnection>
  page?: Maybe<CmsPage>
  pages?: Maybe<Array<Maybe<CmsPage>>>
  pagesConnection?: Maybe<CmsPageConnection>
  role?: Maybe<UsersPermissionsRole>
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>
  section?: Maybe<CmsSection>
  sections?: Maybe<Array<Maybe<CmsSection>>>
  sectionsConnection?: Maybe<CmsSectionConnection>
  user?: Maybe<UsersPermissionsUser>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  usersConnection?: Maybe<UsersPermissionsUserConnection>
  website?: Maybe<CmsWebsite>
}

export type QueryCategoriesArgs = {
  limit?: Maybe<Scalars['Int']>
  publicationState?: Maybe<PublicationState>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryCategoriesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryCategoryArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
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

export type QueryMetaArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryMetasArgs = {
  limit?: Maybe<Scalars['Int']>
  publicationState?: Maybe<PublicationState>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryMetasConnectionArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryPageArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryPagesArgs = {
  limit?: Maybe<Scalars['Int']>
  publicationState?: Maybe<PublicationState>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryPagesConnectionArgs = {
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

export type QuerySectionArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QuerySectionsArgs = {
  limit?: Maybe<Scalars['Int']>
  publicationState?: Maybe<PublicationState>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QuerySectionsConnectionArgs = {
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

export type QueryWebsiteArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
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

export type SectionInput = {
  cards?: Maybe<Array<Maybe<ComponentOrganismsCardInput>>>
  created_by?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  records?: Maybe<Array<Maybe<ComponentMoleculesRecordInput>>>
  slug: Scalars['String']
  title?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
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
  updated_at: Scalars['DateTime']
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
  __typename?: 'UploadFileAggregator'
  avg?: Maybe<UploadFileAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<UploadFileAggregatorMax>
  min?: Maybe<UploadFileAggregatorMin>
  sum?: Maybe<UploadFileAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg'
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax'
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin'
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum'
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection'
  aggregate?: Maybe<UploadFileAggregator>
  groupBy?: Maybe<UploadFileGroupBy>
  values?: Maybe<Array<Maybe<UploadFile>>>
}

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['JSON']>
}

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['Int']>
}

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['ID']>
}

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['JSON']>
}

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['Float']>
}

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['Int']>
}

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy'
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>
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
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>
}

export type UserInput = {
  blocked?: Maybe<Scalars['Boolean']>
  confirmationToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  created_by?: Maybe<Scalars['ID']>
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['ID']>
  provider?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
  username: Scalars['String']
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
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  email: Scalars['String']
  id: Scalars['ID']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']
  controller: Scalars['String']
  enabled: Scalars['Boolean']
  id: Scalars['ID']
  policy?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRole>
  type: Scalars['String']
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
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
  __typename?: 'UsersPermissionsRoleAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection'
  aggregate?: Maybe<UsersPermissionsRoleAggregator>
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>
}

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription'
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId'
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName'
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType'
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy'
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  lastName?: Maybe<Scalars['String']>
  photo?: Maybe<UploadFile>
  role?: Maybe<UsersPermissionsRole>
  username: Scalars['String']
}

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection'
  aggregate?: Maybe<UsersPermissionsUserAggregator>
  groupBy?: Maybe<UsersPermissionsUserGroupBy>
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserConnectionFirstName = {
  __typename?: 'UsersPermissionsUserConnectionFirstName'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserConnectionLastName = {
  __typename?: 'UsersPermissionsUserConnectionLastName'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserConnectionPhoto = {
  __typename?: 'UsersPermissionsUserConnectionPhoto'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy'
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>
  firstName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionFirstName>>>
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>
  lastName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionLastName>>>
  photo?: Maybe<Array<Maybe<UsersPermissionsUserConnectionPhoto>>>
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>
}

export type WebsiteInput = {
  created_by?: Maybe<Scalars['ID']>
  googleAnalyticsCode?: Maybe<Scalars['String']>
  googleTagManagerCode?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['ID']>
  menu?: Maybe<Array<Maybe<ComponentMoleculesMenuInput>>>
  name?: Maybe<Scalars['String']>
  slug: Scalars['String']
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
  children?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  pages?: Maybe<Array<Maybe<Scalars['ID']>>>
  parent?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditComponentAtomsEntryInput = {
  id?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type EditComponentAtomsLinkInput = {
  extra?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  text?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type EditComponentAtomsNumericInput = {
  id?: Maybe<Scalars['ID']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  unit?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['Float']>
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
  entries?: Maybe<Array<Maybe<EditComponentAtomsEntryInput>>>
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type EditComponentOrganismsCardInput = {
  active?: Maybe<Scalars['Boolean']>
  backgroundColor?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  extra?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  link?: Maybe<EditComponentAtomsLinkInput>
  media?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
  subTitle?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type EditComponentOrganismsMetaInput = {
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  keywords?: Maybe<Array<Maybe<EditComponentAtomsTextInput>>>
  title?: Maybe<Scalars['String']>
}

export type EditContactInput = {
  created_by?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  subject?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditEmailTemplateInput = {
  bodyHtml?: Maybe<Scalars['String']>
  bodyText?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  design?: Maybe<Scalars['JSON']>
  enabled?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  sourceCodeToTemplateId?: Maybe<Scalars['Int']>
  subject?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['JSON']>
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

export type EditLocaleInput = {
  code?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditMetaInput = {
  created_by?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditPageInput = {
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>
  cover?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  meta?: Maybe<EditComponentOrganismsMetaInput>
  name?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
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

export type EditSectionInput = {
  cards?: Maybe<Array<Maybe<EditComponentOrganismsCardInput>>>
  created_by?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  records?: Maybe<Array<Maybe<EditComponentMoleculesRecordInput>>>
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
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
  photo?: Maybe<Scalars['ID']>
  provider?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
  username?: Maybe<Scalars['String']>
}

export type EditWebsiteInput = {
  created_by?: Maybe<Scalars['ID']>
  googleAnalyticsCode?: Maybe<Scalars['String']>
  googleTagManagerCode?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['ID']>
  menu?: Maybe<Array<Maybe<EditComponentMoleculesMenuInput>>>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>
  where?: Maybe<InputId>
}

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>
  where?: Maybe<InputId>
}

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type CardFragment = {
  __typename?: 'ComponentOrganismsCard'
  id: string
  active?: boolean | null | undefined
  title?: string | null | undefined
  subTitle?: string | null | undefined
  description?: string | null | undefined
  extra?: string | null | undefined
  text?: string | null | undefined
  link?:
    | { __typename?: 'ComponentAtomsLink'; id: string; text?: string | null | undefined; extra?: string | null | undefined; url: string }
    | null
    | undefined
  media?:
    | {
        __typename?: 'UploadFile'
        id: string
        alternativeText?: string | null | undefined
        caption?: string | null | undefined
        name: string
        previewUrl?: string | null | undefined
        size: number
        url: string
        height?: number | null | undefined
        width?: number | null | undefined
      }
    | null
    | undefined
}

export type CategoryFragment = {
  __typename?: 'CmsCategory'
  id: string
  slug: string
  name: string
  pages?:
    | Array<
        | {
            __typename?: 'CmsPage'
            id: string
            slug: string
            name: string
            cover?:
              | Array<
                  | {
                      __typename?: 'UploadFile'
                      id: string
                      alternativeText?: string | null | undefined
                      caption?: string | null | undefined
                      name: string
                      previewUrl?: string | null | undefined
                      size: number
                      url: string
                      height?: number | null | undefined
                      width?: number | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type EntryFragment = { __typename?: 'ComponentAtomsEntry'; id: string; key: string; value?: string | null | undefined }

export type FileFragment = {
  __typename?: 'UploadFile'
  id: string
  alternativeText?: string | null | undefined
  caption?: string | null | undefined
  name: string
  previewUrl?: string | null | undefined
  size: number
  url: string
  height?: number | null | undefined
  width?: number | null | undefined
}

export type LinkFragment = {
  __typename?: 'ComponentAtomsLink'
  id: string
  text?: string | null | undefined
  extra?: string | null | undefined
  url: string
}

export type MenuFragment = {
  __typename?: 'ComponentMoleculesMenu'
  id: string
  slug: string
  links?:
    | Array<
        | {
            __typename?: 'ComponentAtomsLink'
            id: string
            text?: string | null | undefined
            extra?: string | null | undefined
            url: string
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type MetaFragment = {
  __typename?: 'CmsMeta'
  id: string
  slug: string
  title?: string | null | undefined
  description?: string | null | undefined
  keywords?: string | null | undefined
}

export type NumericFragment = {
  __typename?: 'ComponentAtomsNumeric'
  id: string
  value: number
  min: number
  max: number
  unit?: string | null | undefined
}

export type PageFragment = {
  __typename?: 'CmsPage'
  id: string
  slug: string
  name: string
  cover?:
    | Array<
        | {
            __typename?: 'UploadFile'
            id: string
            alternativeText?: string | null | undefined
            caption?: string | null | undefined
            name: string
            previewUrl?: string | null | undefined
            size: number
            url: string
            height?: number | null | undefined
            width?: number | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type RecordFragment = {
  __typename?: 'ComponentMoleculesRecord'
  id: string
  slug: string
  entries?:
    | Array<{ __typename?: 'ComponentAtomsEntry'; id: string; key: string; value?: string | null | undefined } | null | undefined>
    | null
    | undefined
}

export type SectionFragment = {
  __typename?: 'CmsSection'
  id: string
  title: string
  description?: string | null | undefined
  slug: string
  card?:
    | {
        __typename?: 'ComponentOrganismsCard'
        id: string
        active?: boolean | null | undefined
        title?: string | null | undefined
        subTitle?: string | null | undefined
        description?: string | null | undefined
        extra?: string | null | undefined
        text?: string | null | undefined
        link?:
          | {
              __typename?: 'ComponentAtomsLink'
              id: string
              text?: string | null | undefined
              extra?: string | null | undefined
              url: string
            }
          | null
          | undefined
        media?:
          | {
              __typename?: 'UploadFile'
              id: string
              alternativeText?: string | null | undefined
              caption?: string | null | undefined
              name: string
              previewUrl?: string | null | undefined
              size: number
              url: string
              height?: number | null | undefined
              width?: number | null | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
  cards?:
    | Array<
        | {
            __typename?: 'ComponentOrganismsCard'
            id: string
            active?: boolean | null | undefined
            title?: string | null | undefined
            subTitle?: string | null | undefined
            description?: string | null | undefined
            extra?: string | null | undefined
            text?: string | null | undefined
            link?:
              | {
                  __typename?: 'ComponentAtomsLink'
                  id: string
                  text?: string | null | undefined
                  extra?: string | null | undefined
                  url: string
                }
              | null
              | undefined
            media?:
              | {
                  __typename?: 'UploadFile'
                  id: string
                  alternativeText?: string | null | undefined
                  caption?: string | null | undefined
                  name: string
                  previewUrl?: string | null | undefined
                  size: number
                  url: string
                  height?: number | null | undefined
                  width?: number | null | undefined
                }
              | null
              | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
  records?:
    | Array<
        | {
            __typename?: 'ComponentMoleculesRecord'
            id: string
            slug: string
            entries?:
              | Array<{ __typename?: 'ComponentAtomsEntry'; id: string; key: string; value?: string | null | undefined } | null | undefined>
              | null
              | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type TextFragment = { __typename?: 'ComponentAtomsText'; id: string; value: string }

export type WebsiteFragment = {
  __typename?: 'CmsWebsite'
  id: string
  googleAnalyticsCode?: string | null | undefined
  googleTagManagerCode?: string | null | undefined
  name?: string | null | undefined
  logo?:
    | {
        __typename?: 'UploadFile'
        id: string
        alternativeText?: string | null | undefined
        caption?: string | null | undefined
        name: string
        previewUrl?: string | null | undefined
        size: number
        url: string
        height?: number | null | undefined
        width?: number | null | undefined
      }
    | null
    | undefined
  menu?:
    | Array<
        | {
            __typename?: 'ComponentMoleculesMenu'
            id: string
            slug: string
            links?:
              | Array<
                  | {
                      __typename?: 'ComponentAtomsLink'
                      id: string
                      text?: string | null | undefined
                      extra?: string | null | undefined
                      url: string
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type ContactMutationVariables = Exact<{
  input?: Maybe<CreateContactInput>
}>

export type ContactMutation = {
  __typename?: 'Mutation'
  createContact?:
    | {
        __typename?: 'createContactPayload'
        contact?: { __typename?: 'FeedbackContact'; id: string; name: string; email: string } | null | undefined
      }
    | null
    | undefined
}

export type LoginMutationVariables = Exact<{
  credentials: UsersPermissionsLoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'UsersPermissionsLoginPayload'
    jwt?: string | null | undefined
    user: {
      __typename?: 'UsersPermissionsMe'
      id: string
      email: string
      role?: { __typename?: 'UsersPermissionsMeRole'; id: string; type?: string | null | undefined } | null | undefined
    }
  }
}

export type CategoriesQueryVariables = Exact<{
  where?: Maybe<Scalars['JSON']>
}>

export type CategoriesQuery = {
  __typename?: 'Query'
  categories?:
    | Array<
        | {
            __typename?: 'CmsCategory'
            id: string
            slug: string
            name: string
            children?:
              | Array<
                  | {
                      __typename?: 'CmsCategory'
                      id: string
                      slug: string
                      name: string
                      pages?:
                        | Array<
                            | {
                                __typename?: 'CmsPage'
                                id: string
                                slug: string
                                name: string
                                cover?:
                                  | Array<
                                      | {
                                          __typename?: 'UploadFile'
                                          id: string
                                          alternativeText?: string | null | undefined
                                          caption?: string | null | undefined
                                          name: string
                                          previewUrl?: string | null | undefined
                                          size: number
                                          url: string
                                          height?: number | null | undefined
                                          width?: number | null | undefined
                                        }
                                      | null
                                      | undefined
                                    >
                                  | null
                                  | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
            pages?:
              | Array<
                  | {
                      __typename?: 'CmsPage'
                      id: string
                      slug: string
                      name: string
                      cover?:
                        | Array<
                            | {
                                __typename?: 'UploadFile'
                                id: string
                                alternativeText?: string | null | undefined
                                caption?: string | null | undefined
                                name: string
                                previewUrl?: string | null | undefined
                                size: number
                                url: string
                                height?: number | null | undefined
                                width?: number | null | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type CategoryQueryVariables = Exact<{
  slug: Scalars['ID']
}>

export type CategoryQuery = {
  __typename?: 'Query'
  category?:
    | {
        __typename?: 'CmsCategory'
        id: string
        slug: string
        name: string
        children?:
          | Array<
              | {
                  __typename?: 'CmsCategory'
                  id: string
                  slug: string
                  name: string
                  pages?:
                    | Array<
                        | {
                            __typename?: 'CmsPage'
                            id: string
                            slug: string
                            name: string
                            cover?:
                              | Array<
                                  | {
                                      __typename?: 'UploadFile'
                                      id: string
                                      alternativeText?: string | null | undefined
                                      caption?: string | null | undefined
                                      name: string
                                      previewUrl?: string | null | undefined
                                      size: number
                                      url: string
                                      height?: number | null | undefined
                                      width?: number | null | undefined
                                    }
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
        pages?:
          | Array<
              | {
                  __typename?: 'CmsPage'
                  id: string
                  slug: string
                  name: string
                  cover?:
                    | Array<
                        | {
                            __typename?: 'UploadFile'
                            id: string
                            alternativeText?: string | null | undefined
                            caption?: string | null | undefined
                            name: string
                            previewUrl?: string | null | undefined
                            size: number
                            url: string
                            height?: number | null | undefined
                            width?: number | null | undefined
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
      }
    | null
    | undefined
}

export type MetaQueryVariables = Exact<{
  slug: Scalars['ID']
}>

export type MetaQuery = {
  __typename?: 'Query'
  meta?:
    | {
        __typename?: 'CmsMeta'
        id: string
        slug: string
        title?: string | null | undefined
        description?: string | null | undefined
        keywords?: string | null | undefined
      }
    | null
    | undefined
}

export type MetasQueryVariables = Exact<{
  where?: Maybe<Scalars['JSON']>
}>

export type MetasQuery = {
  __typename?: 'Query'
  metas?:
    | Array<
        | {
            __typename?: 'CmsMeta'
            id: string
            slug: string
            title?: string | null | undefined
            description?: string | null | undefined
            keywords?: string | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type PageQueryVariables = Exact<{
  slug: Scalars['ID']
}>

export type PageQuery = {
  __typename?: 'Query'
  page?:
    | {
        __typename?: 'CmsPage'
        id: string
        slug: string
        name: string
        categories?:
          | Array<
              | {
                  __typename?: 'CmsCategory'
                  id: string
                  slug: string
                  name: string
                  pages?:
                    | Array<
                        | {
                            __typename?: 'CmsPage'
                            id: string
                            slug: string
                            name: string
                            cover?:
                              | Array<
                                  | {
                                      __typename?: 'UploadFile'
                                      id: string
                                      alternativeText?: string | null | undefined
                                      caption?: string | null | undefined
                                      name: string
                                      previewUrl?: string | null | undefined
                                      size: number
                                      url: string
                                      height?: number | null | undefined
                                      width?: number | null | undefined
                                    }
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
        cover?:
          | Array<
              | {
                  __typename?: 'UploadFile'
                  id: string
                  alternativeText?: string | null | undefined
                  caption?: string | null | undefined
                  name: string
                  previewUrl?: string | null | undefined
                  size: number
                  url: string
                  height?: number | null | undefined
                  width?: number | null | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
      }
    | null
    | undefined
}

export type PagesQueryVariables = Exact<{
  where?: Maybe<Scalars['JSON']>
}>

export type PagesQuery = {
  __typename?: 'Query'
  pages?:
    | Array<
        | {
            __typename?: 'CmsPage'
            id: string
            slug: string
            name: string
            categories?:
              | Array<
                  | {
                      __typename?: 'CmsCategory'
                      id: string
                      slug: string
                      name: string
                      pages?:
                        | Array<
                            | {
                                __typename?: 'CmsPage'
                                id: string
                                slug: string
                                name: string
                                cover?:
                                  | Array<
                                      | {
                                          __typename?: 'UploadFile'
                                          id: string
                                          alternativeText?: string | null | undefined
                                          caption?: string | null | undefined
                                          name: string
                                          previewUrl?: string | null | undefined
                                          size: number
                                          url: string
                                          height?: number | null | undefined
                                          width?: number | null | undefined
                                        }
                                      | null
                                      | undefined
                                    >
                                  | null
                                  | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
            cover?:
              | Array<
                  | {
                      __typename?: 'UploadFile'
                      id: string
                      alternativeText?: string | null | undefined
                      caption?: string | null | undefined
                      name: string
                      previewUrl?: string | null | undefined
                      size: number
                      url: string
                      height?: number | null | undefined
                      width?: number | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type SectionQueryVariables = Exact<{
  slug: Scalars['ID']
}>

export type SectionQuery = {
  __typename?: 'Query'
  section?:
    | {
        __typename?: 'CmsSection'
        id: string
        title: string
        description?: string | null | undefined
        slug: string
        card?:
          | {
              __typename?: 'ComponentOrganismsCard'
              id: string
              active?: boolean | null | undefined
              title?: string | null | undefined
              subTitle?: string | null | undefined
              description?: string | null | undefined
              extra?: string | null | undefined
              text?: string | null | undefined
              link?:
                | {
                    __typename?: 'ComponentAtomsLink'
                    id: string
                    text?: string | null | undefined
                    extra?: string | null | undefined
                    url: string
                  }
                | null
                | undefined
              media?:
                | {
                    __typename?: 'UploadFile'
                    id: string
                    alternativeText?: string | null | undefined
                    caption?: string | null | undefined
                    name: string
                    previewUrl?: string | null | undefined
                    size: number
                    url: string
                    height?: number | null | undefined
                    width?: number | null | undefined
                  }
                | null
                | undefined
            }
          | null
          | undefined
        cards?:
          | Array<
              | {
                  __typename?: 'ComponentOrganismsCard'
                  id: string
                  active?: boolean | null | undefined
                  title?: string | null | undefined
                  subTitle?: string | null | undefined
                  description?: string | null | undefined
                  extra?: string | null | undefined
                  text?: string | null | undefined
                  link?:
                    | {
                        __typename?: 'ComponentAtomsLink'
                        id: string
                        text?: string | null | undefined
                        extra?: string | null | undefined
                        url: string
                      }
                    | null
                    | undefined
                  media?:
                    | {
                        __typename?: 'UploadFile'
                        id: string
                        alternativeText?: string | null | undefined
                        caption?: string | null | undefined
                        name: string
                        previewUrl?: string | null | undefined
                        size: number
                        url: string
                        height?: number | null | undefined
                        width?: number | null | undefined
                      }
                    | null
                    | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
        records?:
          | Array<
              | {
                  __typename?: 'ComponentMoleculesRecord'
                  id: string
                  slug: string
                  entries?:
                    | Array<
                        | { __typename?: 'ComponentAtomsEntry'; id: string; key: string; value?: string | null | undefined }
                        | null
                        | undefined
                      >
                    | null
                    | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
      }
    | null
    | undefined
}

export type SectionsQueryVariables = Exact<{
  where?: Maybe<Scalars['JSON']>
}>

export type SectionsQuery = {
  __typename?: 'Query'
  sections?:
    | Array<
        | {
            __typename?: 'CmsSection'
            id: string
            title: string
            description?: string | null | undefined
            slug: string
            card?:
              | {
                  __typename?: 'ComponentOrganismsCard'
                  id: string
                  active?: boolean | null | undefined
                  title?: string | null | undefined
                  subTitle?: string | null | undefined
                  description?: string | null | undefined
                  extra?: string | null | undefined
                  text?: string | null | undefined
                  link?:
                    | {
                        __typename?: 'ComponentAtomsLink'
                        id: string
                        text?: string | null | undefined
                        extra?: string | null | undefined
                        url: string
                      }
                    | null
                    | undefined
                  media?:
                    | {
                        __typename?: 'UploadFile'
                        id: string
                        alternativeText?: string | null | undefined
                        caption?: string | null | undefined
                        name: string
                        previewUrl?: string | null | undefined
                        size: number
                        url: string
                        height?: number | null | undefined
                        width?: number | null | undefined
                      }
                    | null
                    | undefined
                }
              | null
              | undefined
            cards?:
              | Array<
                  | {
                      __typename?: 'ComponentOrganismsCard'
                      id: string
                      active?: boolean | null | undefined
                      title?: string | null | undefined
                      subTitle?: string | null | undefined
                      description?: string | null | undefined
                      extra?: string | null | undefined
                      text?: string | null | undefined
                      link?:
                        | {
                            __typename?: 'ComponentAtomsLink'
                            id: string
                            text?: string | null | undefined
                            extra?: string | null | undefined
                            url: string
                          }
                        | null
                        | undefined
                      media?:
                        | {
                            __typename?: 'UploadFile'
                            id: string
                            alternativeText?: string | null | undefined
                            caption?: string | null | undefined
                            name: string
                            previewUrl?: string | null | undefined
                            size: number
                            url: string
                            height?: number | null | undefined
                            width?: number | null | undefined
                          }
                        | null
                        | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
            records?:
              | Array<
                  | {
                      __typename?: 'ComponentMoleculesRecord'
                      id: string
                      slug: string
                      entries?:
                        | Array<
                            | { __typename?: 'ComponentAtomsEntry'; id: string; key: string; value?: string | null | undefined }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type WebsiteQueryVariables = Exact<{
  slug: Scalars['ID']
}>

export type WebsiteQuery = {
  __typename?: 'Query'
  website?:
    | {
        __typename?: 'CmsWebsite'
        id: string
        googleAnalyticsCode?: string | null | undefined
        googleTagManagerCode?: string | null | undefined
        name?: string | null | undefined
        logo?:
          | {
              __typename?: 'UploadFile'
              id: string
              alternativeText?: string | null | undefined
              caption?: string | null | undefined
              name: string
              previewUrl?: string | null | undefined
              size: number
              url: string
              height?: number | null | undefined
              width?: number | null | undefined
            }
          | null
          | undefined
        menu?:
          | Array<
              | {
                  __typename?: 'ComponentMoleculesMenu'
                  id: string
                  slug: string
                  links?:
                    | Array<
                        | {
                            __typename?: 'ComponentAtomsLink'
                            id: string
                            text?: string | null | undefined
                            extra?: string | null | undefined
                            url: string
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
      }
    | null
    | undefined
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
