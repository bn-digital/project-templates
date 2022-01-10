type Maybe<T> = T | null
type InputMaybe<T> = Maybe<T>
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: Record<string, any>
  /** The `Upload` scalar type represents a file upload. */
  Upload: unknown
}

type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  contains?: InputMaybe<Scalars['Boolean']>
  containsi?: InputMaybe<Scalars['Boolean']>
  endsWith?: InputMaybe<Scalars['Boolean']>
  eq?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['Boolean']>
  gte?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  lt?: InputMaybe<Scalars['Boolean']>
  lte?: InputMaybe<Scalars['Boolean']>
  ne?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']>
  notContainsi?: InputMaybe<Scalars['Boolean']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  startsWith?: InputMaybe<Scalars['Boolean']>
}

type ComponentDataEntry = {
  id: Scalars['ID']
  key?: Maybe<Scalars['String']>
  value: Scalars['String']
}

type ComponentDataEntryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentDataEntryFiltersInput>>>
  key?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentDataEntryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentDataEntryFiltersInput>>>
  value?: InputMaybe<StringFilterInput>
}

type ComponentDataMeta = {
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
}

type ComponentDataMetaInput = {
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  title?: InputMaybe<Scalars['String']>
}

type ComponentDataSet = {
  id: Scalars['ID']
  value: Scalars['String']
}

type ComponentUiCard = {
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  media?: Maybe<UploadFileEntityResponse>
  subtitle?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

type ComponentUiCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiCardFiltersInput>>>
  description?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentUiCardFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiCardFiltersInput>>>
  subtitle?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

type ComponentUiCardInput = {
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  media?: InputMaybe<Scalars['ID']>
  subtitle?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

type ComponentUiGrid = {
  children: Array<Maybe<ComponentDataEntry>>
  id: Scalars['ID']
  visible: Scalars['Boolean']
}

type ComponentUiGridChildrenArgs = {
  filters?: InputMaybe<ComponentDataEntryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type ComponentUiLink = {
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  url: Scalars['String']
}

type ComponentUiLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiLinkFiltersInput>>>
  not?: InputMaybe<ComponentUiLinkFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiLinkFiltersInput>>>
  title?: InputMaybe<StringFilterInput>
  url?: InputMaybe<StringFilterInput>
}

type ComponentUiLinkInput = {
  id?: InputMaybe<Scalars['ID']>
  title?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

type ComponentUiMenu = {
  children: Array<Maybe<ComponentUiLink>>
  id: Scalars['ID']
  visible: Scalars['Boolean']
}

type ComponentUiMenuChildrenArgs = {
  filters?: InputMaybe<ComponentUiLinkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type ComponentUiParagraph = {
  id: Scalars['ID']
  value: Scalars['String']
}

type ComponentUiParagraphFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiParagraphFiltersInput>>>
  not?: InputMaybe<ComponentUiParagraphFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiParagraphFiltersInput>>>
  value?: InputMaybe<StringFilterInput>
}

type ComponentUiSection = {
  button?: Maybe<ComponentUiLink>
  children?: Maybe<Array<Maybe<ComponentUiCard>>>
  heading?: Maybe<ComponentUiCard>
  id: Scalars['ID']
  visible: Scalars['Boolean']
}

type ComponentUiSectionChildrenArgs = {
  filters?: InputMaybe<ComponentUiCardFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type ComponentUiTab = {
  id: Scalars['ID']
  name: Scalars['String']
  pane: ComponentUiCard
}

type ComponentUiText = {
  children: Array<Maybe<ComponentUiParagraph>>
  id: Scalars['ID']
  visible: Scalars['Boolean']
}

type ComponentUiTextChildrenArgs = {
  filters?: InputMaybe<ComponentUiParagraphFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  contains?: InputMaybe<Scalars['DateTime']>
  containsi?: InputMaybe<Scalars['DateTime']>
  endsWith?: InputMaybe<Scalars['DateTime']>
  eq?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  ne?: InputMaybe<Scalars['DateTime']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']>
  notContainsi?: InputMaybe<Scalars['DateTime']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  startsWith?: InputMaybe<Scalars['DateTime']>
}

type Enum_Graphsbuildergraph_Type = 'bar' | 'dateLine' | 'line' | 'pie'

type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  contains?: InputMaybe<Scalars['Float']>
  containsi?: InputMaybe<Scalars['Float']>
  endsWith?: InputMaybe<Scalars['Float']>
  eq?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  ne?: InputMaybe<Scalars['Float']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']>
  notContainsi?: InputMaybe<Scalars['Float']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  startsWith?: InputMaybe<Scalars['Float']>
}

type GenericMorph =
  | ComponentDataEntry
  | ComponentDataMeta
  | ComponentDataSet
  | ComponentUiCard
  | ComponentUiGrid
  | ComponentUiLink
  | ComponentUiMenu
  | ComponentUiParagraph
  | ComponentUiSection
  | ComponentUiTab
  | ComponentUiText
  | GraphsBuilderGraph
  | Homepage
  | Setting
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

type GraphsBuilderGraph = {
  collectionX: Scalars['String']
  collectionXAttribute?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  title: Scalars['String']
  type: Enum_Graphsbuildergraph_Type
  updatedAt?: Maybe<Scalars['DateTime']>
}

type GraphsBuilderGraphEntity = {
  attributes?: Maybe<GraphsBuilderGraph>
  id?: Maybe<Scalars['ID']>
}

type GraphsBuilderGraphEntityResponse = {
  data?: Maybe<GraphsBuilderGraphEntity>
}

type GraphsBuilderGraphEntityResponseCollection = {
  data: Array<GraphsBuilderGraphEntity>
  meta: ResponseCollectionMeta
}

type GraphsBuilderGraphFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GraphsBuilderGraphFiltersInput>>>
  collectionX?: InputMaybe<StringFilterInput>
  collectionXAttribute?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<GraphsBuilderGraphFiltersInput>
  or?: InputMaybe<Array<InputMaybe<GraphsBuilderGraphFiltersInput>>>
  sitemap_exclude?: InputMaybe<BooleanFilterInput>
  title?: InputMaybe<StringFilterInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type GraphsBuilderGraphInput = {
  collectionX?: InputMaybe<Scalars['String']>
  collectionXAttribute?: InputMaybe<Scalars['String']>
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Enum_Graphsbuildergraph_Type>
}

type Homepage = {
  createdAt?: Maybe<Scalars['DateTime']>
  hero?: Maybe<ComponentUiCard>
  meta?: Maybe<ComponentDataMeta>
  updatedAt?: Maybe<Scalars['DateTime']>
}

type HomepageEntity = {
  attributes?: Maybe<Homepage>
  id?: Maybe<Scalars['ID']>
}

type HomepageEntityResponse = {
  data?: Maybe<HomepageEntity>
}

type HomepageInput = {
  hero?: InputMaybe<ComponentUiCardInput>
  meta?: InputMaybe<ComponentDataMetaInput>
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>
}

type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  contains?: InputMaybe<Scalars['ID']>
  containsi?: InputMaybe<Scalars['ID']>
  endsWith?: InputMaybe<Scalars['ID']>
  eq?: InputMaybe<Scalars['ID']>
  gt?: InputMaybe<Scalars['ID']>
  gte?: InputMaybe<Scalars['ID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  lt?: InputMaybe<Scalars['ID']>
  lte?: InputMaybe<Scalars['ID']>
  ne?: InputMaybe<Scalars['ID']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']>
  notContainsi?: InputMaybe<Scalars['ID']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  startsWith?: InputMaybe<Scalars['ID']>
}

type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  contains?: InputMaybe<Scalars['Int']>
  containsi?: InputMaybe<Scalars['Int']>
  endsWith?: InputMaybe<Scalars['Int']>
  eq?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  ne?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']>
  notContainsi?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  startsWith?: InputMaybe<Scalars['Int']>
}

type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  contains?: InputMaybe<Scalars['JSON']>
  containsi?: InputMaybe<Scalars['JSON']>
  endsWith?: InputMaybe<Scalars['JSON']>
  eq?: InputMaybe<Scalars['JSON']>
  gt?: InputMaybe<Scalars['JSON']>
  gte?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  lt?: InputMaybe<Scalars['JSON']>
  lte?: InputMaybe<Scalars['JSON']>
  ne?: InputMaybe<Scalars['JSON']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']>
  notContainsi?: InputMaybe<Scalars['JSON']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  startsWith?: InputMaybe<Scalars['JSON']>
}

type Mutation = {
  createGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>
  deleteHomepage?: Maybe<HomepageEntityResponse>
  deleteSetting?: Maybe<SettingEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateFileInfo: UploadFileEntityResponse
  updateGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>
  updateHomepage?: Maybe<HomepageEntityResponse>
  updateSetting?: Maybe<SettingEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

type MutationCreateGraphsBuilderGraphArgs = {
  data: GraphsBuilderGraphInput
}

type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

type MutationDeleteGraphsBuilderGraphArgs = {
  id: Scalars['ID']
}

type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']
}

type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']
}

type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']
}

type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  files: Array<InputMaybe<Scalars['Upload']>>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

type MutationRemoveFileArgs = {
  id: Scalars['ID']
}

type MutationResetPasswordArgs = {
  code: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info?: InputMaybe<FileInfoInput>
}

type MutationUpdateGraphsBuilderGraphArgs = {
  data: GraphsBuilderGraphInput
  id: Scalars['ID']
}

type MutationUpdateHomepageArgs = {
  data: HomepageInput
}

type MutationUpdateSettingArgs = {
  data: SettingInput
}

type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars['ID']
}

type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']
}

type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']
}

type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  file: Scalars['Upload']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

type Pagination = {
  page: Scalars['Int']
  pageCount: Scalars['Int']
  pageSize: Scalars['Int']
  total: Scalars['Int']
}

type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  start?: InputMaybe<Scalars['Int']>
}

type Query = {
  graphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>
  graphsBuilderGraphs?: Maybe<GraphsBuilderGraphEntityResponseCollection>
  homepage?: Maybe<HomepageEntityResponse>
  me?: Maybe<UsersPermissionsMe>
  setting?: Maybe<SettingEntityResponse>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

type QueryGraphsBuilderGraphArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryGraphsBuilderGraphsArgs = {
  filters?: InputMaybe<GraphsBuilderGraphFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type ResponseCollectionMeta = {
  pagination: Pagination
}

type Setting = {
  createdAt?: Maybe<Scalars['DateTime']>
  headerMenu?: Maybe<Array<Maybe<ComponentUiLink>>>
  hostname: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

type SettingHeaderMenuArgs = {
  filters?: InputMaybe<ComponentUiLinkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type SettingEntity = {
  attributes?: Maybe<Setting>
  id?: Maybe<Scalars['ID']>
}

type SettingEntityResponse = {
  data?: Maybe<SettingEntity>
}

type SettingInput = {
  headerMenu?: InputMaybe<Array<InputMaybe<ComponentUiLinkInput>>>
  hostname?: InputMaybe<Scalars['String']>
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>
}

type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  containsi?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  eq?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  ne?: InputMaybe<Scalars['String']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']>
  notContainsi?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  startsWith?: InputMaybe<Scalars['String']>
}

type UploadFile = {
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: Maybe<Scalars['Int']>
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

type UploadFileEntity = {
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']>
}

type UploadFileEntityResponse = {
  data?: Maybe<UploadFileEntity>
}

type UploadFileEntityResponseCollection = {
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  sitemap_exclude?: InputMaybe<BooleanFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  ext?: InputMaybe<Scalars['String']>
  formats?: InputMaybe<Scalars['JSON']>
  hash?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Int']>
  mime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  previewUrl?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  provider_metadata?: InputMaybe<Scalars['JSON']>
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>
  size?: InputMaybe<Scalars['Float']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
}

type UsersPermissionsCreateRolePayload = {
  ok: Scalars['Boolean']
}

type UsersPermissionsDeleteRolePayload = {
  ok: Scalars['Boolean']
}

type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Scalars['String']
}

type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

type UsersPermissionsMe = {
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']
}

type UsersPermissionsMeRole = {
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
}

type UsersPermissionsPasswordPayload = {
  ok: Scalars['Boolean']
}

type UsersPermissionsPermission = {
  action: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
}

type UsersPermissionsPermissionEntity = {
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']>
}

type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type UsersPermissionsPermissionRelationResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>
}

type UsersPermissionsRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

type UsersPermissionsRole = {
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type UsersPermissionsRoleEntity = {
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']>
}

type UsersPermissionsRoleEntityResponse = {
  data?: Maybe<UsersPermissionsRoleEntity>
}

type UsersPermissionsRoleEntityResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  type?: InputMaybe<Scalars['String']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

type UsersPermissionsUpdateRolePayload = {
  ok: Scalars['Boolean']
}

type UsersPermissionsUser = {
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
  username: Scalars['String']
}

type UsersPermissionsUserEntity = {
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']>
}

type UsersPermissionsUserEntityResponse = {
  data?: Maybe<UsersPermissionsUserEntity>
}

type UsersPermissionsUserEntityResponseCollection = {
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  sitemap_exclude?: InputMaybe<BooleanFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>
  confirmationToken?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['ID']>
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>
  username?: InputMaybe<Scalars['String']>
}

type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>
}

type CardFragment = {
  __typename?: 'ComponentUiCard'
  id: string
  title?: string | null | undefined
  subtitle?: string | null | undefined
  description?: string | null | undefined
  media?: { __typename?: 'UploadFileEntityResponse'; data?: ({ __typename?: 'UploadFileEntity' } & FileFragment) | null | undefined } | null | undefined
}

type CardFragmentVariables = Exact<{ [key: string]: never }>

type EntryFragment = { __typename?: 'ComponentDataEntry'; id: string; key?: string | null | undefined; value: string }

type EntryFragmentVariables = Exact<{ [key: string]: never }>

type FileFragment = {
  __typename?: 'UploadFileEntity'
  id?: string | null | undefined
  attributes?: { __typename?: 'UploadFile'; previewUrl?: string | null | undefined; url: string } | null | undefined
}

type FileFragmentVariables = Exact<{ [key: string]: never }>

type LinkFragment = { __typename?: 'ComponentUiLink'; id: string; title?: string | null | undefined; url: string }

type LinkFragmentVariables = Exact<{ [key: string]: never }>

type MetaFragment = { __typename?: 'ComponentDataMeta'; id: string; title?: string | null | undefined; description?: string | null | undefined }

type MetaFragmentVariables = Exact<{ [key: string]: never }>

type ParagraphFragment = { __typename?: 'ComponentUiParagraph'; id: string; value: string }

type ParagraphFragmentVariables = Exact<{ [key: string]: never }>

type TabFragment = { __typename?: 'ComponentUiTab'; id: string; name: string; pane: { __typename?: 'ComponentUiCard' } & CardFragment }

type TabFragmentVariables = Exact<{ [key: string]: never }>

type HomepageFragment = {
  __typename?: 'Homepage'
  meta?: { __typename?: 'ComponentDataMeta'; title?: string | null | undefined; description?: string | null | undefined } | null | undefined
  hero?:
    | {
        __typename?: 'ComponentUiCard'
        subtitle?: string | null | undefined
        id: string
        description?: string | null | undefined
        title?: string | null | undefined
      }
    | null
    | undefined
}

type HomepageFragmentVariables = Exact<{ [key: string]: never }>

type HomepageQueryVariables = Exact<{ [key: string]: never }>

type HomepageQuery = {
  __typename?: 'Query'
  homepage?:
    | {
        __typename?: 'HomepageEntityResponse'
        data?:
          | {
              __typename?: 'HomepageEntity'
              id?: string | null | undefined
              attributes?:
                | {
                    __typename?: 'Homepage'
                    meta?: ({ __typename?: 'ComponentDataMeta' } & MetaFragment) | null | undefined
                    hero?: ({ __typename?: 'ComponentUiCard' } & CardFragment) | null | undefined
                  }
                | null
                | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
}
