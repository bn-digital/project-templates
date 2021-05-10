import { gql } from '@apollo/client'
import * as React from 'react'
import * as Apollo from '@apollo/client'
import * as ApolloReactComponents from '@apollo/client/react/components'
import * as ApolloReactHoc from '@apollo/client/react/hoc'
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
  Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** The `Long` scalar type represents 52-bit integers */
  Long: any
  /** A time string with format: HH:mm:ss.SSS */
  Time: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
  /** Input type for dynamic zone sections of Website */
  WebsiteSectionsDynamicZoneInput: any
}

export type AdminUser = {
  __typename?: 'AdminUser'
  firstname: Scalars['String']
  id: Scalars['ID']
  lastname: Scalars['String']
  username?: Maybe<Scalars['String']>
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

export type ComponentAtomsEmail = {
  __typename?: 'ComponentAtomsEmail'
  address: Scalars['String']
  id: Scalars['ID']
  type?: Maybe<ComponentAtomsType>
}

export type ComponentAtomsEmailInput = {
  address: Scalars['String']
  type: ComponentAtomsTypeInput
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

export type ComponentAtomsImage = {
  __typename?: 'ComponentAtomsImage'
  background?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<UploadFile>
}

export type ComponentAtomsImageInput = {
  background?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
}

export type ComponentAtomsLink = {
  __typename?: 'ComponentAtomsLink'
  icon?: Maybe<Array<Maybe<ComponentAtomsImage>>>
  id: Scalars['ID']
  title: Scalars['String']
  url?: Maybe<Scalars['String']>
}

export type ComponentAtomsLinkInput = {
  icon?: Maybe<Array<Maybe<ComponentAtomsImageInput>>>
  title: Scalars['String']
  url?: Maybe<Scalars['String']>
}

export type ComponentAtomsMarkdown = {
  __typename?: 'ComponentAtomsMarkdown'
  id: Scalars['ID']
  properties?: Maybe<Scalars['JSON']>
  value?: Maybe<Scalars['String']>
}

export type ComponentAtomsMarkdownInput = {
  properties?: Maybe<Scalars['JSON']>
  value?: Maybe<Scalars['String']>
}

export type ComponentAtomsMedia = {
  __typename?: 'ComponentAtomsMedia'
  id: Scalars['ID']
  media?: Maybe<Array<Maybe<UploadFile>>>
  properties?: Maybe<Scalars['JSON']>
}

export type ComponentAtomsMediaMediaArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ComponentAtomsMediaInput = {
  media?: Maybe<Array<Maybe<Scalars['ID']>>>
  properties?: Maybe<Scalars['JSON']>
}

export type ComponentAtomsNumeric = {
  __typename?: 'ComponentAtomsNumeric'
  id: Scalars['ID']
  unit?: Maybe<Scalars['String']>
  value: Scalars['Float']
}

export type ComponentAtomsNumericInput = {
  unit?: Maybe<Scalars['String']>
  value: Scalars['Float']
}

export type ComponentAtomsParagraph = {
  __typename?: 'ComponentAtomsParagraph'
  children?: Maybe<Array<Maybe<ComponentAtomsText>>>
  id: Scalars['ID']
}

export type ComponentAtomsParagraphInput = {
  children?: Maybe<Array<Maybe<ComponentAtomsTextInput>>>
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

/** Text node */
export type ComponentAtomsText = {
  __typename?: 'ComponentAtomsText'
  id: Scalars['ID']
  properties?: Maybe<Scalars['JSON']>
  value: Scalars['String']
}

export type ComponentAtomsTextInput = {
  properties?: Maybe<Scalars['JSON']>
  value: Scalars['String']
}

export type ComponentAtomsType = {
  __typename?: 'ComponentAtomsType'
  contact?: Maybe<ContactType>
  id: Scalars['ID']
}

export type ComponentAtomsTypeInput = {
  contact?: Maybe<ContactType>
}

export type ComponentAtomsValue = {
  __typename?: 'ComponentAtomsValue'
  id: Scalars['ID']
  type?: Maybe<ComponentAtomsType>
  value: Scalars['String']
}

export type ComponentAtomsValueInput = {
  type?: Maybe<ComponentAtomsTypeInput>
  value: Scalars['String']
}

export type ComponentMoleculesCard = {
  __typename?: 'ComponentMoleculesCard'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<ComponentAtomsImage>
  title?: Maybe<Scalars['String']>
}

export type ComponentMoleculesCardInput = {
  description?: Maybe<Scalars['String']>
  image?: Maybe<ComponentAtomsImageInput>
  title?: Maybe<Scalars['String']>
}

/** Collection<Entry> */
export type ComponentMoleculesMap = {
  __typename?: 'ComponentMoleculesMap'
  children?: Maybe<Array<Maybe<ComponentAtomsEntry>>>
  id: Scalars['ID']
}

export type ComponentMoleculesMapInput = {
  children?: Maybe<Array<Maybe<ComponentAtomsEntryInput>>>
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

export type ComponentOrganismsArticle = {
  __typename?: 'ComponentOrganismsArticle'
  id: Scalars['ID']
  section?: Maybe<ComponentOrganismsSection>
}

export type ComponentOrganismsArticleInput = {
  section?: Maybe<ComponentOrganismsSectionInput>
}

export type ComponentOrganismsCallToAction = {
  __typename?: 'ComponentOrganismsCallToAction'
  button?: Maybe<ComponentAtomsButton>
  id: Scalars['ID']
  section?: Maybe<ComponentOrganismsSection>
}

export type ComponentOrganismsCallToActionInput = {
  button: ComponentAtomsButtonInput
  section: ComponentOrganismsSectionInput
}

export type ComponentOrganismsDeck = {
  __typename?: 'ComponentOrganismsDeck'
  active?: Maybe<Scalars['Boolean']>
  cards?: Maybe<Array<Maybe<ComponentMoleculesCard>>>
  id: Scalars['ID']
  section?: Maybe<ComponentOrganismsSection>
  slug: Scalars['String']
}

export type ComponentOrganismsDeckInput = {
  active?: Maybe<Scalars['Boolean']>
  cards?: Maybe<Array<Maybe<ComponentMoleculesCardInput>>>
  section?: Maybe<ComponentOrganismsSectionInput>
  slug: Scalars['String']
}

export type ComponentOrganismsHero = {
  __typename?: 'ComponentOrganismsHero'
  button?: Maybe<ComponentAtomsButton>
  id: Scalars['ID']
  media?: Maybe<Array<Maybe<UploadFile>>>
  section?: Maybe<ComponentOrganismsSection>
}

export type ComponentOrganismsHeroMediaArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ComponentOrganismsHeroInput = {
  button?: Maybe<ComponentAtomsButtonInput>
  media?: Maybe<Array<Maybe<Scalars['ID']>>>
  section: ComponentOrganismsSectionInput
}

export type ComponentOrganismsMetric = {
  __typename?: 'ComponentOrganismsMetric'
  entry?: Maybe<ComponentAtomsEntry>
  id: Scalars['ID']
  value?: Maybe<ComponentAtomsNumeric>
}

export type ComponentOrganismsMetricInput = {
  entry: ComponentAtomsEntryInput
  value: ComponentAtomsNumericInput
}

export type ComponentOrganismsPage = {
  __typename?: 'ComponentOrganismsPage'
  active?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  meta?: Maybe<Array<Maybe<ComponentAtomsEntry>>>
  slug: Scalars['String']
}

export type ComponentOrganismsPageInput = {
  active?: Maybe<Scalars['Boolean']>
  meta?: Maybe<Array<Maybe<ComponentAtomsEntryInput>>>
  slug: Scalars['String']
}

export type ComponentOrganismsSection = {
  __typename?: 'ComponentOrganismsSection'
  active?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  slug: Scalars['String']
  subTitle?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type ComponentOrganismsSectionInput = {
  active?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  slug: Scalars['String']
  subTitle?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type ContactFormRequest = {
  __typename?: 'ContactFormRequest'
  city: Scalars['String']
  country?: Maybe<Country>
  email: Scalars['String']
  firstName: Scalars['String']
  id: Scalars['ID']
  lastName: Scalars['String']
}

export type ContactFormRequestAggregator = {
  __typename?: 'ContactFormRequestAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type ContactFormRequestConnection = {
  __typename?: 'ContactFormRequestConnection'
  aggregate?: Maybe<ContactFormRequestAggregator>
  groupBy?: Maybe<ContactFormRequestGroupBy>
  values?: Maybe<Array<Maybe<ContactFormRequest>>>
}

export type ContactFormRequestConnectionCity = {
  __typename?: 'ContactFormRequestConnectionCity'
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['String']>
}

export type ContactFormRequestConnectionCountry = {
  __typename?: 'ContactFormRequestConnectionCountry'
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['ID']>
}

export type ContactFormRequestConnectionEmail = {
  __typename?: 'ContactFormRequestConnectionEmail'
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['String']>
}

export type ContactFormRequestConnectionFirstName = {
  __typename?: 'ContactFormRequestConnectionFirstName'
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['String']>
}

export type ContactFormRequestConnectionId = {
  __typename?: 'ContactFormRequestConnectionId'
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['ID']>
}

export type ContactFormRequestConnectionLastName = {
  __typename?: 'ContactFormRequestConnectionLastName'
  connection?: Maybe<ContactFormRequestConnection>
  key?: Maybe<Scalars['String']>
}

export type ContactFormRequestGroupBy = {
  __typename?: 'ContactFormRequestGroupBy'
  city?: Maybe<Array<Maybe<ContactFormRequestConnectionCity>>>
  country?: Maybe<Array<Maybe<ContactFormRequestConnectionCountry>>>
  email?: Maybe<Array<Maybe<ContactFormRequestConnectionEmail>>>
  firstName?: Maybe<Array<Maybe<ContactFormRequestConnectionFirstName>>>
  id?: Maybe<Array<Maybe<ContactFormRequestConnectionId>>>
  lastName?: Maybe<Array<Maybe<ContactFormRequestConnectionLastName>>>
}

export type ContactFormRequestInput = {
  city: Scalars['String']
  country?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  email: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  updated_by?: Maybe<Scalars['ID']>
}

export enum ContactType {
  BusinessAddress = 'BusinessAddress',
  BusinessEmail = 'BusinessEmail',
  BusinessPhone = 'BusinessPhone',
  CareersEmail = 'CareersEmail',
  ContactEmail = 'ContactEmail',
  MobilePhone = 'MobilePhone',
  PersonalAddress = 'PersonalAddress',
  PersonalEmail = 'PersonalEmail',
  PersonalPhone = 'PersonalPhone',
}

export type Country = {
  __typename?: 'Country'
  code: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
}

export type CountryAggregator = {
  __typename?: 'CountryAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type CountryConnection = {
  __typename?: 'CountryConnection'
  aggregate?: Maybe<CountryAggregator>
  groupBy?: Maybe<CountryGroupBy>
  values?: Maybe<Array<Maybe<Country>>>
}

export type CountryConnectionCode = {
  __typename?: 'CountryConnectionCode'
  connection?: Maybe<CountryConnection>
  key?: Maybe<Scalars['String']>
}

export type CountryConnectionId = {
  __typename?: 'CountryConnectionId'
  connection?: Maybe<CountryConnection>
  key?: Maybe<Scalars['ID']>
}

export type CountryConnectionName = {
  __typename?: 'CountryConnectionName'
  connection?: Maybe<CountryConnection>
  key?: Maybe<Scalars['String']>
}

export type CountryGroupBy = {
  __typename?: 'CountryGroupBy'
  code?: Maybe<Array<Maybe<CountryConnectionCode>>>
  id?: Maybe<Array<Maybe<CountryConnectionId>>>
  name?: Maybe<Array<Maybe<CountryConnectionName>>>
}

export type CountryInput = {
  code: Scalars['String']
  created_by?: Maybe<Scalars['ID']>
  name: Scalars['String']
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
  subject?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['JSON']>
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

export type Morph =
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
  | ComponentOrganismsArticle
  | ComponentOrganismsCallToAction
  | ComponentOrganismsDeck
  | ComponentOrganismsHero
  | ComponentOrganismsMetric
  | ComponentOrganismsPage
  | ComponentOrganismsSection
  | ContactFormRequest
  | ContactFormRequestAggregator
  | ContactFormRequestConnection
  | ContactFormRequestConnectionCity
  | ContactFormRequestConnectionCountry
  | ContactFormRequestConnectionEmail
  | ContactFormRequestConnectionFirstName
  | ContactFormRequestConnectionId
  | ContactFormRequestConnectionLastName
  | ContactFormRequestGroupBy
  | Country
  | CountryAggregator
  | CountryConnection
  | CountryConnectionCode
  | CountryConnectionId
  | CountryConnectionName
  | CountryGroupBy
  | EmailDesignerEmailTemplate
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
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionFirstName
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionLastName
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserGroupBy
  | Website
  | WebsiteAggregator
  | WebsiteConnection
  | WebsiteConnectionId
  | WebsiteConnectionSlug
  | WebsiteGroupBy
  | CreateContactFormRequestPayload
  | CreateCountryPayload
  | CreateRolePayload
  | CreateUserPayload
  | CreateWebsitePayload
  | DeleteContactFormRequestPayload
  | DeleteCountryPayload
  | DeleteFilePayload
  | DeleteRolePayload
  | DeleteUserPayload
  | DeleteWebsitePayload
  | UpdateContactFormRequestPayload
  | UpdateCountryPayload
  | UpdateRolePayload
  | UpdateUserPayload
  | UpdateWebsitePayload

export type Mutation = {
  __typename?: 'Mutation'
  createContactFormRequest?: Maybe<CreateContactFormRequestPayload>
  createCountry?: Maybe<CreateCountryPayload>
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>
  createWebsite?: Maybe<CreateWebsitePayload>
  deleteContactFormRequest?: Maybe<DeleteContactFormRequestPayload>
  deleteCountry?: Maybe<DeleteCountryPayload>
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>
  deleteWebsite?: Maybe<DeleteWebsitePayload>
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFile>>
  register: UsersPermissionsLoginPayload
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateContactFormRequest?: Maybe<UpdateContactFormRequestPayload>
  updateCountry?: Maybe<UpdateCountryPayload>
  updateFileInfo: UploadFile
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>
  updateWebsite?: Maybe<UpdateWebsitePayload>
  upload: UploadFile
}

export type MutationCreateContactFormRequestArgs = {
  input?: Maybe<CreateContactFormRequestInput>
}

export type MutationCreateCountryArgs = {
  input?: Maybe<CreateCountryInput>
}

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>
}

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>
}

export type MutationCreateWebsiteArgs = {
  input?: Maybe<CreateWebsiteInput>
}

export type MutationDeleteContactFormRequestArgs = {
  input?: Maybe<DeleteContactFormRequestInput>
}

export type MutationDeleteCountryArgs = {
  input?: Maybe<DeleteCountryInput>
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

export type MutationDeleteWebsiteArgs = {
  input?: Maybe<DeleteWebsiteInput>
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

export type MutationUpdateCountryArgs = {
  input?: Maybe<UpdateCountryInput>
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

export type MutationUpdateWebsiteArgs = {
  input?: Maybe<UpdateWebsiteInput>
}

export type MutationUploadArgs = {
  field?: Maybe<Scalars['String']>
  file: Scalars['Upload']
  info?: Maybe<FileInfoInput>
  ref?: Maybe<Scalars['String']>
  refId?: Maybe<Scalars['ID']>
  source?: Maybe<Scalars['String']>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query'
  contactFormRequest?: Maybe<ContactFormRequest>
  contactFormRequests?: Maybe<Array<Maybe<ContactFormRequest>>>
  contactFormRequestsConnection?: Maybe<ContactFormRequestConnection>
  countries?: Maybe<Array<Maybe<Country>>>
  countriesConnection?: Maybe<CountryConnection>
  country?: Maybe<Country>
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
  website?: Maybe<Website>
  websites?: Maybe<Array<Maybe<Website>>>
  websitesConnection?: Maybe<WebsiteConnection>
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

export type QueryCountriesArgs = {
  limit?: Maybe<Scalars['Int']>
  publicationState?: Maybe<PublicationState>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryCountriesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryCountryArgs = {
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

export type QueryWebsiteArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryWebsitesArgs = {
  limit?: Maybe<Scalars['Int']>
  publicationState?: Maybe<PublicationState>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryWebsitesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
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
  firstName: Scalars['String']
  lastName: Scalars['String']
  password?: Maybe<Scalars['String']>
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
  created_at: Scalars['DateTime']
  email: Scalars['String']
  firstName: Scalars['String']
  id: Scalars['ID']
  lastName: Scalars['String']
  role?: Maybe<UsersPermissionsRole>
  updated_at: Scalars['DateTime']
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

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['DateTime']>
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

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy'
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>
  firstName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionFirstName>>>
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>
  lastName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionLastName>>>
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>
}

export type Website = {
  __typename?: 'Website'
  id: Scalars['ID']
  navigation?: Maybe<Array<Maybe<ComponentMoleculesMenu>>>
  pages?: Maybe<Array<Maybe<ComponentOrganismsPage>>>
  sections?: Maybe<Array<Maybe<WebsiteSectionsDynamicZone>>>
  slug: Scalars['String']
}

export type WebsiteAggregator = {
  __typename?: 'WebsiteAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type WebsiteConnection = {
  __typename?: 'WebsiteConnection'
  aggregate?: Maybe<WebsiteAggregator>
  groupBy?: Maybe<WebsiteGroupBy>
  values?: Maybe<Array<Maybe<Website>>>
}

export type WebsiteConnectionId = {
  __typename?: 'WebsiteConnectionId'
  connection?: Maybe<WebsiteConnection>
  key?: Maybe<Scalars['ID']>
}

export type WebsiteConnectionSlug = {
  __typename?: 'WebsiteConnectionSlug'
  connection?: Maybe<WebsiteConnection>
  key?: Maybe<Scalars['String']>
}

export type WebsiteGroupBy = {
  __typename?: 'WebsiteGroupBy'
  id?: Maybe<Array<Maybe<WebsiteConnectionId>>>
  slug?: Maybe<Array<Maybe<WebsiteConnectionSlug>>>
}

export type WebsiteInput = {
  created_by?: Maybe<Scalars['ID']>
  navigation?: Maybe<Array<Maybe<ComponentMoleculesMenuInput>>>
  pages?: Maybe<Array<Maybe<ComponentOrganismsPageInput>>>
  sections?: Maybe<Array<Scalars['WebsiteSectionsDynamicZoneInput']>>
  slug: Scalars['String']
  updated_by?: Maybe<Scalars['ID']>
}

export type WebsiteSectionsDynamicZone =
  | ComponentOrganismsArticle
  | ComponentOrganismsCallToAction
  | ComponentOrganismsDeck
  | ComponentOrganismsHero

export type CreateContactFormRequestInput = {
  data?: Maybe<ContactFormRequestInput>
}

export type CreateContactFormRequestPayload = {
  __typename?: 'createContactFormRequestPayload'
  contactFormRequest?: Maybe<ContactFormRequest>
}

export type CreateCountryInput = {
  data?: Maybe<CountryInput>
}

export type CreateCountryPayload = {
  __typename?: 'createCountryPayload'
  country?: Maybe<Country>
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

export type CreateWebsiteInput = {
  data?: Maybe<WebsiteInput>
}

export type CreateWebsitePayload = {
  __typename?: 'createWebsitePayload'
  website?: Maybe<Website>
}

export type DeleteContactFormRequestInput = {
  where?: Maybe<InputId>
}

export type DeleteContactFormRequestPayload = {
  __typename?: 'deleteContactFormRequestPayload'
  contactFormRequest?: Maybe<ContactFormRequest>
}

export type DeleteCountryInput = {
  where?: Maybe<InputId>
}

export type DeleteCountryPayload = {
  __typename?: 'deleteCountryPayload'
  country?: Maybe<Country>
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

export type DeleteWebsiteInput = {
  where?: Maybe<InputId>
}

export type DeleteWebsitePayload = {
  __typename?: 'deleteWebsitePayload'
  website?: Maybe<Website>
}

export type EditComponentAtomsAddressInput = {
  id?: Maybe<Scalars['ID']>
  lines?: Maybe<Array<Maybe<EditComponentAtomsTextInput>>>
  type?: Maybe<EditComponentAtomsTypeInput>
}

export type EditComponentAtomsButtonInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type EditComponentAtomsEmailInput = {
  address?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  type?: Maybe<EditComponentAtomsTypeInput>
}

export type EditComponentAtomsEntryInput = {
  id?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type EditComponentAtomsImageInput = {
  background?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  image?: Maybe<Scalars['ID']>
}

export type EditComponentAtomsLinkInput = {
  icon?: Maybe<Array<Maybe<EditComponentAtomsImageInput>>>
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type EditComponentAtomsMarkdownInput = {
  id?: Maybe<Scalars['ID']>
  properties?: Maybe<Scalars['JSON']>
  value?: Maybe<Scalars['String']>
}

export type EditComponentAtomsMediaInput = {
  id?: Maybe<Scalars['ID']>
  media?: Maybe<Array<Maybe<Scalars['ID']>>>
  properties?: Maybe<Scalars['JSON']>
}

export type EditComponentAtomsNumericInput = {
  id?: Maybe<Scalars['ID']>
  unit?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['Float']>
}

export type EditComponentAtomsParagraphInput = {
  children?: Maybe<Array<Maybe<EditComponentAtomsTextInput>>>
  id?: Maybe<Scalars['ID']>
}

export type EditComponentAtomsPhoneInput = {
  id?: Maybe<Scalars['ID']>
  number?: Maybe<Scalars['String']>
  type?: Maybe<EditComponentAtomsTypeInput>
}

export type EditComponentAtomsTextInput = {
  id?: Maybe<Scalars['ID']>
  properties?: Maybe<Scalars['JSON']>
  value?: Maybe<Scalars['String']>
}

export type EditComponentAtomsTypeInput = {
  contact?: Maybe<ContactType>
  id?: Maybe<Scalars['ID']>
}

export type EditComponentAtomsValueInput = {
  id?: Maybe<Scalars['ID']>
  type?: Maybe<EditComponentAtomsTypeInput>
  value?: Maybe<Scalars['String']>
}

export type EditComponentMoleculesCardInput = {
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  image?: Maybe<EditComponentAtomsImageInput>
  title?: Maybe<Scalars['String']>
}

export type EditComponentMoleculesMapInput = {
  children?: Maybe<Array<Maybe<EditComponentAtomsEntryInput>>>
  id?: Maybe<Scalars['ID']>
}

export type EditComponentMoleculesMenuInput = {
  id?: Maybe<Scalars['ID']>
  links?: Maybe<Array<Maybe<EditComponentAtomsLinkInput>>>
  slug?: Maybe<Scalars['String']>
}

export type EditComponentOrganismsArticleInput = {
  id?: Maybe<Scalars['ID']>
  section?: Maybe<EditComponentOrganismsSectionInput>
}

export type EditComponentOrganismsCallToActionInput = {
  button?: Maybe<EditComponentAtomsButtonInput>
  id?: Maybe<Scalars['ID']>
  section?: Maybe<EditComponentOrganismsSectionInput>
}

export type EditComponentOrganismsDeckInput = {
  active?: Maybe<Scalars['Boolean']>
  cards?: Maybe<Array<Maybe<EditComponentMoleculesCardInput>>>
  id?: Maybe<Scalars['ID']>
  section?: Maybe<EditComponentOrganismsSectionInput>
  slug?: Maybe<Scalars['String']>
}

export type EditComponentOrganismsHeroInput = {
  button?: Maybe<EditComponentAtomsButtonInput>
  id?: Maybe<Scalars['ID']>
  media?: Maybe<Array<Maybe<Scalars['ID']>>>
  section?: Maybe<EditComponentOrganismsSectionInput>
}

export type EditComponentOrganismsMetricInput = {
  entry?: Maybe<EditComponentAtomsEntryInput>
  id?: Maybe<Scalars['ID']>
  value?: Maybe<EditComponentAtomsNumericInput>
}

export type EditComponentOrganismsPageInput = {
  active?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['ID']>
  meta?: Maybe<Array<Maybe<EditComponentAtomsEntryInput>>>
  slug?: Maybe<Scalars['String']>
}

export type EditComponentOrganismsSectionInput = {
  active?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
  subTitle?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type EditContactFormRequestInput = {
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditCountryInput = {
  code?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditEmailTemplateInput = {
  bodyHtml?: Maybe<Scalars['String']>
  bodyText?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  design?: Maybe<Scalars['JSON']>
  enabled?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
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

export type EditWebsiteInput = {
  created_by?: Maybe<Scalars['ID']>
  navigation?: Maybe<Array<Maybe<EditComponentMoleculesMenuInput>>>
  pages?: Maybe<Array<Maybe<EditComponentOrganismsPageInput>>>
  sections?: Maybe<Array<Scalars['WebsiteSectionsDynamicZoneInput']>>
  slug?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UpdateContactFormRequestInput = {
  data?: Maybe<EditContactFormRequestInput>
  where?: Maybe<InputId>
}

export type UpdateContactFormRequestPayload = {
  __typename?: 'updateContactFormRequestPayload'
  contactFormRequest?: Maybe<ContactFormRequest>
}

export type UpdateCountryInput = {
  data?: Maybe<EditCountryInput>
  where?: Maybe<InputId>
}

export type UpdateCountryPayload = {
  __typename?: 'updateCountryPayload'
  country?: Maybe<Country>
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

export type UpdateWebsiteInput = {
  data?: Maybe<EditWebsiteInput>
  where?: Maybe<InputId>
}

export type UpdateWebsitePayload = {
  __typename?: 'updateWebsitePayload'
  website?: Maybe<Website>
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

export type DeckFragment = { __typename?: 'ComponentOrganismsDeck' } & Pick<
  ComponentOrganismsDeck,
  'id' | 'active' | 'slug'
> & { cards?: Maybe<Array<Maybe<{ __typename?: 'ComponentMoleculesCard' } & CardFragment>>> }

export type SectionFragment = { __typename?: 'ComponentOrganismsSection' } & Pick<
  ComponentOrganismsSection,
  'id' | 'slug' | 'title' | 'subTitle' | 'description' | 'active'
>

export type ContentQueryVariables = Exact<{
  criteria: Scalars['JSON']
}>

export type ContentQuery = { __typename?: 'Query' } & {
  websites?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Website' } & Pick<Website, 'id'> & {
            pages?: Maybe<Array<Maybe<{ __typename?: 'ComponentOrganismsPage' } & Pick<ComponentOrganismsPage, 'id'>>>>
            sections?: Maybe<
              Array<
                Maybe<
                  | ({ __typename?: 'ComponentOrganismsArticle' } & Pick<ComponentOrganismsArticle, 'id'> & {
                        section?: Maybe<
                          { __typename?: 'ComponentOrganismsSection' } & SectionFragment & SectionFragment
                        >
                      })
                  | ({ __typename?: 'ComponentOrganismsCallToAction' } & Pick<ComponentOrganismsCallToAction, 'id'> & {
                        button?: Maybe<{ __typename?: 'ComponentAtomsButton' } & ButtonFragment>
                        section?: Maybe<{ __typename?: 'ComponentOrganismsSection' } & SectionFragment>
                      })
                  | ({ __typename?: 'ComponentOrganismsDeck' } & Pick<ComponentOrganismsDeck, 'id'> & {
                        cards?: Maybe<Array<Maybe<{ __typename?: 'ComponentMoleculesCard' } & CardFragment>>>
                      })
                  | ({ __typename?: 'ComponentOrganismsHero' } & Pick<ComponentOrganismsHero, 'id'> & {
                        button?: Maybe<{ __typename?: 'ComponentAtomsButton' } & ButtonFragment>
                        section?: Maybe<{ __typename?: 'ComponentOrganismsSection' } & SectionFragment>
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
                          Maybe<
                            { __typename?: 'ComponentAtomsLink' } & Pick<ComponentAtomsLink, 'id' | 'title' | 'url'>
                          >
                        >
                      >
                    }
                >
              >
            >
          }
      >
    >
  >
}

export type CreateContactFormRequestMutationVariables = Exact<{
  input?: Maybe<CreateContactFormRequestInput>
}>

export type CreateContactFormRequestMutation = { __typename?: 'Mutation' } & {
  createContactFormRequest?: Maybe<
    { __typename?: 'createContactFormRequestPayload' } & {
      contactFormRequest?: Maybe<
        { __typename?: 'ContactFormRequest' } & Pick<
          ContactFormRequest,
          'id' | 'email' | 'city' | 'firstName' | 'lastName'
        >
      >
    }
  >
}

export type LoginMutationVariables = Exact<{
  credentials: UsersPermissionsLoginInput
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'UsersPermissionsLoginPayload' } & Pick<UsersPermissionsLoginPayload, 'jwt'>
}

export type RegisterMutationVariables = Exact<{
  user: UsersPermissionsRegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register: { __typename?: 'UsersPermissionsLoginPayload' } & {
    user: { __typename?: 'UsersPermissionsMe' } & Pick<UsersPermissionsMe, 'id' | 'email' | 'username'>
  }
}

export const ButtonFragmentDoc = gql`
  fragment Button on ComponentAtomsButton {
    id
    title
    url
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
export const DeckFragmentDoc = gql`
  fragment Deck on ComponentOrganismsDeck {
    id
    active
    slug
    cards {
      ...Card
    }
  }
  ${CardFragmentDoc}
`
export const SectionFragmentDoc = gql`
  fragment Section on ComponentOrganismsSection {
    id
    slug
    title
    subTitle
    description
    active
  }
`
export const ContentDocument = gql`
  query content($criteria: JSON!) {
    websites(where: $criteria) {
      id
      pages {
        id
      }
      sections {
        ... on ComponentOrganismsDeck {
          id
          cards {
            ...Card
          }
        }
        ... on ComponentOrganismsArticle {
          id
          section {
            ...Section
            ...Section
          }
        }
        ... on ComponentOrganismsArticle {
          id
          section {
            ...Section
          }
        }
        ... on ComponentOrganismsHero {
          id
          button {
            ...Button
          }
          section {
            ...Section
          }
        }
        ... on ComponentOrganismsCallToAction {
          id
          button {
            ...Button
          }
          section {
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
  ${CardFragmentDoc}
  ${SectionFragmentDoc}
  ${ButtonFragmentDoc}
`
export type ContentComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<ContentQuery, ContentQueryVariables>,
  'query'
> &
  ({ variables: ContentQueryVariables; skip?: boolean } | { skip: boolean })

export const ContentComponent = (props: ContentComponentProps) => (
  <ApolloReactComponents.Query<ContentQuery, ContentQueryVariables> query={ContentDocument} {...props} />
)

export type ContentProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<ContentQuery, ContentQueryVariables>
} &
  TChildProps
export function withContent<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ContentQuery,
    ContentQueryVariables,
    ContentProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<TProps, ContentQuery, ContentQueryVariables, ContentProps<TChildProps, TDataName>>(
    ContentDocument,
    {
      alias: 'content',
      ...operationOptions,
    },
  )
}

/**
 * __useContentQuery__
 *
 * To run a query within a React component, call `useContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentQuery({
 *   variables: {
 *      criteria: // value for 'criteria'
 *   },
 * });
 */
export function useContentQuery(baseOptions: Apollo.QueryHookOptions<ContentQuery, ContentQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ContentQuery, ContentQueryVariables>(ContentDocument, options)
}
export function useContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentQuery, ContentQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ContentQuery, ContentQueryVariables>(ContentDocument, options)
}
export type ContentQueryHookResult = ReturnType<typeof useContentQuery>
export type ContentLazyQueryHookResult = ReturnType<typeof useContentLazyQuery>
export type ContentQueryResult = Apollo.QueryResult<ContentQuery, ContentQueryVariables>
export const CreateContactFormRequestDocument = gql`
  mutation createContactFormRequest($input: createContactFormRequestInput) {
    createContactFormRequest(input: $input) {
      contactFormRequest {
        id
        email
        city
        firstName
        lastName
      }
    }
  }
`
export type CreateContactFormRequestMutationFn = Apollo.MutationFunction<
  CreateContactFormRequestMutation,
  CreateContactFormRequestMutationVariables
>
export type CreateContactFormRequestComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateContactFormRequestMutation,
    CreateContactFormRequestMutationVariables
  >,
  'mutation'
>

export const CreateContactFormRequestComponent = (props: CreateContactFormRequestComponentProps) => (
  <ApolloReactComponents.Mutation<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables>
    mutation={CreateContactFormRequestDocument}
    {...props}
  />
)

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
export const LoginDocument = gql`
  mutation login($credentials: UsersPermissionsLoginInput!) {
    login(input: $credentials) {
      jwt
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>
export type LoginComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>,
  'mutation'
>

export const LoginComponent = (props: LoginComponentProps) => (
  <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
)

export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<LoginMutation, LoginMutationVariables>
} &
  TChildProps
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(
    LoginDocument,
    {
      alias: 'login',
      ...operationOptions,
    },
  )
}

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
export const RegisterDocument = gql`
  mutation register($user: UsersPermissionsRegisterInput!) {
    register(input: $user) {
      user {
        id
        email
        username
      }
    }
  }
`
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>
export type RegisterComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>,
  'mutation'
>

export const RegisterComponent = (props: RegisterComponentProps) => (
  <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
)

export type RegisterProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>
} &
  TChildProps
export function withRegister<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RegisterMutation,
    RegisterMutationVariables,
    RegisterProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    RegisterMutation,
    RegisterMutationVariables,
    RegisterProps<TChildProps, TDataName>
  >(RegisterDocument, {
    alias: 'register',
    ...operationOptions,
  })
}

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options)
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>
