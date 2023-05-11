type Maybe<T> = T | null | undefined
type InputMaybe<T> = T | null | undefined
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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: Record<string, any | any[] | string | number | boolean | null | undefined> | any[]
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: number
  /** A time string with format HH:mm:ss.SSS */
  Time: string
  /** The `Upload` scalar type represents a file upload. */
  Upload: unknown
}

type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>
  contains?: InputMaybe<Scalars["Boolean"]>
  containsi?: InputMaybe<Scalars["Boolean"]>
  endsWith?: InputMaybe<Scalars["Boolean"]>
  eq?: InputMaybe<Scalars["Boolean"]>
  eqi?: InputMaybe<Scalars["Boolean"]>
  gt?: InputMaybe<Scalars["Boolean"]>
  gte?: InputMaybe<Scalars["Boolean"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>
  lt?: InputMaybe<Scalars["Boolean"]>
  lte?: InputMaybe<Scalars["Boolean"]>
  ne?: InputMaybe<Scalars["Boolean"]>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars["Boolean"]>
  notContainsi?: InputMaybe<Scalars["Boolean"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]>
  null?: InputMaybe<Scalars["Boolean"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>
  startsWith?: InputMaybe<Scalars["Boolean"]>
}

type ComponentDataEntry = {
  id: Scalars["ID"]
  key?: Maybe<Scalars["String"]>
  value: Scalars["String"]
}

type ComponentDataEntryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentDataEntryFiltersInput>>>
  key?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentDataEntryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentDataEntryFiltersInput>>>
  value?: InputMaybe<StringFilterInput>
}

type ComponentDataEntryInput = {
  id?: InputMaybe<Scalars["ID"]>
  key?: InputMaybe<Scalars["String"]>
  value?: InputMaybe<Scalars["String"]>
}

type ComponentDataSet = {
  id: Scalars["ID"]
  value: Scalars["String"]
}

type ComponentDataSetFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentDataSetFiltersInput>>>
  not?: InputMaybe<ComponentDataSetFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentDataSetFiltersInput>>>
  value?: InputMaybe<StringFilterInput>
}

type ComponentDataSetInput = {
  id?: InputMaybe<Scalars["ID"]>
  value?: InputMaybe<Scalars["String"]>
}

type ComponentUiCard = {
  description?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  media?: Maybe<UploadFileEntityResponse>
  subtitle?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
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
  description?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  media?: InputMaybe<Scalars["ID"]>
  subtitle?: InputMaybe<Scalars["String"]>
  title?: InputMaybe<Scalars["String"]>
}

type ComponentUiGrid = {
  children: Array<Maybe<ComponentDataEntry>>
  id: Scalars["ID"]
  visible: Scalars["Boolean"]
}

type ComponentUiGridChildrenArgs = {
  filters?: InputMaybe<ComponentDataEntryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

type ComponentUiGridFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiGridFiltersInput>>>
  children?: InputMaybe<ComponentDataEntryFiltersInput>
  not?: InputMaybe<ComponentUiGridFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiGridFiltersInput>>>
  visible?: InputMaybe<BooleanFilterInput>
}

type ComponentUiGridInput = {
  children?: InputMaybe<Array<InputMaybe<ComponentDataEntryInput>>>
  id?: InputMaybe<Scalars["ID"]>
  visible?: InputMaybe<Scalars["Boolean"]>
}

type ComponentUiHeadline = {
  id: Scalars["ID"]
  subtitle?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
}

type ComponentUiHeadlineFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiHeadlineFiltersInput>>>
  not?: InputMaybe<ComponentUiHeadlineFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiHeadlineFiltersInput>>>
  subtitle?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

type ComponentUiHeadlineInput = {
  id?: InputMaybe<Scalars["ID"]>
  subtitle?: InputMaybe<Scalars["String"]>
  title?: InputMaybe<Scalars["String"]>
}

type ComponentUiLink = {
  id: Scalars["ID"]
  target: EnumComponentuilinkTarget
  title?: Maybe<Scalars["String"]>
  url: Scalars["String"]
}

type ComponentUiLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiLinkFiltersInput>>>
  not?: InputMaybe<ComponentUiLinkFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiLinkFiltersInput>>>
  target?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  url?: InputMaybe<StringFilterInput>
}

type ComponentUiLinkInput = {
  id?: InputMaybe<Scalars["ID"]>
  target?: InputMaybe<EnumComponentuilinkTarget>
  title?: InputMaybe<Scalars["String"]>
  url?: InputMaybe<Scalars["String"]>
}

type ComponentUiParagraph = {
  id: Scalars["ID"]
  value: Scalars["String"]
}

type ComponentUiParagraphFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiParagraphFiltersInput>>>
  not?: InputMaybe<ComponentUiParagraphFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiParagraphFiltersInput>>>
  value?: InputMaybe<StringFilterInput>
}

type ComponentUiParagraphInput = {
  id?: InputMaybe<Scalars["ID"]>
  value?: InputMaybe<Scalars["String"]>
}

type ComponentUiSection = {
  button?: Maybe<ComponentUiLink>
  heading?: Maybe<ComponentUiCard>
  id: Scalars["ID"]
  visible: Scalars["Boolean"]
}

type ComponentUiSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiSectionFiltersInput>>>
  button?: InputMaybe<ComponentUiLinkFiltersInput>
  heading?: InputMaybe<ComponentUiCardFiltersInput>
  not?: InputMaybe<ComponentUiSectionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiSectionFiltersInput>>>
  visible?: InputMaybe<BooleanFilterInput>
}

type ComponentUiSectionInput = {
  button?: InputMaybe<ComponentUiLinkInput>
  heading?: InputMaybe<ComponentUiCardInput>
  id?: InputMaybe<Scalars["ID"]>
  visible?: InputMaybe<Scalars["Boolean"]>
}

type ComponentUiTab = {
  id: Scalars["ID"]
  name: Scalars["String"]
  pane: ComponentUiCard
}

type ComponentUiTabFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiTabFiltersInput>>>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentUiTabFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiTabFiltersInput>>>
  pane?: InputMaybe<ComponentUiCardFiltersInput>
}

type ComponentUiTabInput = {
  id?: InputMaybe<Scalars["ID"]>
  name?: InputMaybe<Scalars["String"]>
  pane?: InputMaybe<ComponentUiCardInput>
}

type ComponentUiText = {
  children: Array<Maybe<ComponentUiParagraph>>
  id: Scalars["ID"]
  visible: Scalars["Boolean"]
}

type ComponentUiTextChildrenArgs = {
  filters?: InputMaybe<ComponentUiParagraphFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

type ComponentUiTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiTextFiltersInput>>>
  children?: InputMaybe<ComponentUiParagraphFiltersInput>
  not?: InputMaybe<ComponentUiTextFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiTextFiltersInput>>>
  visible?: InputMaybe<BooleanFilterInput>
}

type ComponentUiTextInput = {
  children?: InputMaybe<Array<InputMaybe<ComponentUiParagraphInput>>>
  id?: InputMaybe<Scalars["ID"]>
  visible?: InputMaybe<Scalars["Boolean"]>
}

type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>
  contains?: InputMaybe<Scalars["Date"]>
  containsi?: InputMaybe<Scalars["Date"]>
  endsWith?: InputMaybe<Scalars["Date"]>
  eq?: InputMaybe<Scalars["Date"]>
  eqi?: InputMaybe<Scalars["Date"]>
  gt?: InputMaybe<Scalars["Date"]>
  gte?: InputMaybe<Scalars["Date"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>
  lt?: InputMaybe<Scalars["Date"]>
  lte?: InputMaybe<Scalars["Date"]>
  ne?: InputMaybe<Scalars["Date"]>
  not?: InputMaybe<DateFilterInput>
  notContains?: InputMaybe<Scalars["Date"]>
  notContainsi?: InputMaybe<Scalars["Date"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]>
  null?: InputMaybe<Scalars["Boolean"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>
  startsWith?: InputMaybe<Scalars["Date"]>
}

type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  contains?: InputMaybe<Scalars["DateTime"]>
  containsi?: InputMaybe<Scalars["DateTime"]>
  endsWith?: InputMaybe<Scalars["DateTime"]>
  eq?: InputMaybe<Scalars["DateTime"]>
  eqi?: InputMaybe<Scalars["DateTime"]>
  gt?: InputMaybe<Scalars["DateTime"]>
  gte?: InputMaybe<Scalars["DateTime"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  lt?: InputMaybe<Scalars["DateTime"]>
  lte?: InputMaybe<Scalars["DateTime"]>
  ne?: InputMaybe<Scalars["DateTime"]>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars["DateTime"]>
  notContainsi?: InputMaybe<Scalars["DateTime"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]>
  null?: InputMaybe<Scalars["Boolean"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  startsWith?: InputMaybe<Scalars["DateTime"]>
}

type EnumComponentuilinkTarget = "blank" | "parent" | "self" | "top"

type Error = {
  code: Scalars["String"]
  message?: Maybe<Scalars["String"]>
}

type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]>
  caption?: InputMaybe<Scalars["String"]>
  name?: InputMaybe<Scalars["String"]>
}

type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  contains?: InputMaybe<Scalars["Float"]>
  containsi?: InputMaybe<Scalars["Float"]>
  endsWith?: InputMaybe<Scalars["Float"]>
  eq?: InputMaybe<Scalars["Float"]>
  eqi?: InputMaybe<Scalars["Float"]>
  gt?: InputMaybe<Scalars["Float"]>
  gte?: InputMaybe<Scalars["Float"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  lt?: InputMaybe<Scalars["Float"]>
  lte?: InputMaybe<Scalars["Float"]>
  ne?: InputMaybe<Scalars["Float"]>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars["Float"]>
  notContainsi?: InputMaybe<Scalars["Float"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]>
  null?: InputMaybe<Scalars["Boolean"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  startsWith?: InputMaybe<Scalars["Float"]>
}

type GenericMorph =
  | ComponentDataEntry
  | ComponentDataSet
  | ComponentUiCard
  | ComponentUiGrid
  | ComponentUiHeadline
  | ComponentUiLink
  | ComponentUiParagraph
  | ComponentUiSection
  | ComponentUiTab
  | ComponentUiText
  | Home
  | Layout
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

type Home = {
  createdAt?: Maybe<Scalars["DateTime"]>
  hero?: Maybe<ComponentUiSection>
  key?: Maybe<Scalars["String"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

type HomeEntity = {
  attributes?: Maybe<Home>
  id?: Maybe<Scalars["ID"]>
}

type HomeEntityResponse = {
  data?: Maybe<HomeEntity>
}

type HomeEntityResponseCollection = {
  data: Array<HomeEntity>
  meta: ResponseCollectionMeta
}

type HomeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HomeFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  hero?: InputMaybe<ComponentUiSectionFiltersInput>
  key?: InputMaybe<StringFilterInput>
  not?: InputMaybe<HomeFiltersInput>
  or?: InputMaybe<Array<InputMaybe<HomeFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type HomeInput = {
  hero?: InputMaybe<ComponentUiSectionInput>
  key?: InputMaybe<Scalars["String"]>
}

type HomeRelationResponseCollection = {
  data: Array<HomeEntity>
}

type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  contains?: InputMaybe<Scalars["ID"]>
  containsi?: InputMaybe<Scalars["ID"]>
  endsWith?: InputMaybe<Scalars["ID"]>
  eq?: InputMaybe<Scalars["ID"]>
  eqi?: InputMaybe<Scalars["ID"]>
  gt?: InputMaybe<Scalars["ID"]>
  gte?: InputMaybe<Scalars["ID"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  lt?: InputMaybe<Scalars["ID"]>
  lte?: InputMaybe<Scalars["ID"]>
  ne?: InputMaybe<Scalars["ID"]>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars["ID"]>
  notContainsi?: InputMaybe<Scalars["ID"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]>
  null?: InputMaybe<Scalars["Boolean"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  startsWith?: InputMaybe<Scalars["ID"]>
}

type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  contains?: InputMaybe<Scalars["Int"]>
  containsi?: InputMaybe<Scalars["Int"]>
  endsWith?: InputMaybe<Scalars["Int"]>
  eq?: InputMaybe<Scalars["Int"]>
  eqi?: InputMaybe<Scalars["Int"]>
  gt?: InputMaybe<Scalars["Int"]>
  gte?: InputMaybe<Scalars["Int"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  lt?: InputMaybe<Scalars["Int"]>
  lte?: InputMaybe<Scalars["Int"]>
  ne?: InputMaybe<Scalars["Int"]>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars["Int"]>
  notContainsi?: InputMaybe<Scalars["Int"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]>
  null?: InputMaybe<Scalars["Boolean"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  startsWith?: InputMaybe<Scalars["Int"]>
}

type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>
  contains?: InputMaybe<Scalars["JSON"]>
  containsi?: InputMaybe<Scalars["JSON"]>
  endsWith?: InputMaybe<Scalars["JSON"]>
  eq?: InputMaybe<Scalars["JSON"]>
  eqi?: InputMaybe<Scalars["JSON"]>
  gt?: InputMaybe<Scalars["JSON"]>
  gte?: InputMaybe<Scalars["JSON"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>
  lt?: InputMaybe<Scalars["JSON"]>
  lte?: InputMaybe<Scalars["JSON"]>
  ne?: InputMaybe<Scalars["JSON"]>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars["JSON"]>
  notContainsi?: InputMaybe<Scalars["JSON"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]>
  null?: InputMaybe<Scalars["Boolean"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>
  startsWith?: InputMaybe<Scalars["JSON"]>
}

type Layout = {
  createdAt?: Maybe<Scalars["DateTime"]>
  headerMenu?: Maybe<Array<Maybe<ComponentUiLink>>>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

type LayoutHeaderMenuArgs = {
  filters?: InputMaybe<ComponentUiLinkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

type LayoutEntity = {
  attributes?: Maybe<Layout>
  id?: Maybe<Scalars["ID"]>
}

type LayoutEntityResponse = {
  data?: Maybe<LayoutEntity>
}

type LayoutEntityResponseCollection = {
  data: Array<LayoutEntity>
  meta: ResponseCollectionMeta
}

type LayoutFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LayoutFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  headerMenu?: InputMaybe<ComponentUiLinkFiltersInput>
  not?: InputMaybe<LayoutFiltersInput>
  or?: InputMaybe<Array<InputMaybe<LayoutFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type LayoutInput = {
  headerMenu?: InputMaybe<Array<InputMaybe<ComponentUiLinkInput>>>
}

type LayoutRelationResponseCollection = {
  data: Array<LayoutEntity>
}

type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  contains?: InputMaybe<Scalars["Long"]>
  containsi?: InputMaybe<Scalars["Long"]>
  endsWith?: InputMaybe<Scalars["Long"]>
  eq?: InputMaybe<Scalars["Long"]>
  eqi?: InputMaybe<Scalars["Long"]>
  gt?: InputMaybe<Scalars["Long"]>
  gte?: InputMaybe<Scalars["Long"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  lt?: InputMaybe<Scalars["Long"]>
  lte?: InputMaybe<Scalars["Long"]>
  ne?: InputMaybe<Scalars["Long"]>
  not?: InputMaybe<LongFilterInput>
  notContains?: InputMaybe<Scalars["Long"]>
  notContainsi?: InputMaybe<Scalars["Long"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]>
  null?: InputMaybe<Scalars["Boolean"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  startsWith?: InputMaybe<Scalars["Long"]>
}

type Mutation = {
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteHome?: Maybe<HomeEntityResponse>
  deleteLayout?: Maybe<LayoutEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
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
  updateHome?: Maybe<HomeEntityResponse>
  updateLayout?: Maybe<LayoutEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"]
  password: Scalars["String"]
  passwordConfirmation: Scalars["String"]
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

type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"]
}

type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"]
}

type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"]
}

type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"]
}

type MutationForgotPasswordArgs = {
  email: Scalars["String"]
}

type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars["String"]>
  files: Array<InputMaybe<Scalars["Upload"]>>
  ref?: InputMaybe<Scalars["String"]>
  refId?: InputMaybe<Scalars["ID"]>
}

type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

type MutationRemoveFileArgs = {
  id: Scalars["ID"]
}

type MutationResetPasswordArgs = {
  code: Scalars["String"]
  password: Scalars["String"]
  passwordConfirmation: Scalars["String"]
}

type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"]
  info?: InputMaybe<FileInfoInput>
}

type MutationUpdateHomeArgs = {
  data: HomeInput
}

type MutationUpdateLayoutArgs = {
  data: LayoutInput
}

type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars["ID"]
}

type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars["ID"]
}

type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars["ID"]
}

type MutationUploadArgs = {
  field?: InputMaybe<Scalars["String"]>
  file: Scalars["Upload"]
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars["String"]>
  refId?: InputMaybe<Scalars["ID"]>
}

type Pagination = {
  page: Scalars["Int"]
  pageCount: Scalars["Int"]
  pageSize: Scalars["Int"]
  total: Scalars["Int"]
}

type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]>
  page?: InputMaybe<Scalars["Int"]>
  pageSize?: InputMaybe<Scalars["Int"]>
  start?: InputMaybe<Scalars["Int"]>
}

type PublicationState = "LIVE" | "PREVIEW"

type Query = {
  home?: Maybe<HomeEntityResponse>
  layout?: Maybe<LayoutEntityResponse>
  me?: Maybe<UsersPermissionsUser>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars["ID"]>
}

type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars["ID"]>
}

type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars["ID"]>
}

type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

type ResponseCollectionMeta = {
  pagination: Pagination
}

type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  contains?: InputMaybe<Scalars["String"]>
  containsi?: InputMaybe<Scalars["String"]>
  endsWith?: InputMaybe<Scalars["String"]>
  eq?: InputMaybe<Scalars["String"]>
  eqi?: InputMaybe<Scalars["String"]>
  gt?: InputMaybe<Scalars["String"]>
  gte?: InputMaybe<Scalars["String"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  lt?: InputMaybe<Scalars["String"]>
  lte?: InputMaybe<Scalars["String"]>
  ne?: InputMaybe<Scalars["String"]>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars["String"]>
  notContainsi?: InputMaybe<Scalars["String"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]>
  null?: InputMaybe<Scalars["Boolean"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  startsWith?: InputMaybe<Scalars["String"]>
}

type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Time"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Time"]>>>
  contains?: InputMaybe<Scalars["Time"]>
  containsi?: InputMaybe<Scalars["Time"]>
  endsWith?: InputMaybe<Scalars["Time"]>
  eq?: InputMaybe<Scalars["Time"]>
  eqi?: InputMaybe<Scalars["Time"]>
  gt?: InputMaybe<Scalars["Time"]>
  gte?: InputMaybe<Scalars["Time"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Time"]>>>
  lt?: InputMaybe<Scalars["Time"]>
  lte?: InputMaybe<Scalars["Time"]>
  ne?: InputMaybe<Scalars["Time"]>
  not?: InputMaybe<TimeFilterInput>
  notContains?: InputMaybe<Scalars["Time"]>
  notContainsi?: InputMaybe<Scalars["Time"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Time"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]>
  null?: InputMaybe<Scalars["Boolean"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Time"]>>>
  startsWith?: InputMaybe<Scalars["Time"]>
}

type UploadFile = {
  alternativeText?: Maybe<Scalars["String"]>
  caption?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  ext?: Maybe<Scalars["String"]>
  formats?: Maybe<Scalars["JSON"]>
  hash: Scalars["String"]
  height?: Maybe<Scalars["Int"]>
  mime: Scalars["String"]
  name: Scalars["String"]
  previewUrl?: Maybe<Scalars["String"]>
  provider: Scalars["String"]
  provider_metadata?: Maybe<Scalars["JSON"]>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars["Float"]
  updatedAt?: Maybe<Scalars["DateTime"]>
  url: Scalars["String"]
  width?: Maybe<Scalars["Int"]>
}

type UploadFileEntity = {
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars["ID"]>
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
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
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
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars["String"]>
  caption?: InputMaybe<Scalars["String"]>
  ext?: InputMaybe<Scalars["String"]>
  folder?: InputMaybe<Scalars["ID"]>
  folderPath?: InputMaybe<Scalars["String"]>
  formats?: InputMaybe<Scalars["JSON"]>
  hash?: InputMaybe<Scalars["String"]>
  height?: InputMaybe<Scalars["Int"]>
  mime?: InputMaybe<Scalars["String"]>
  name?: InputMaybe<Scalars["String"]>
  previewUrl?: InputMaybe<Scalars["String"]>
  provider?: InputMaybe<Scalars["String"]>
  provider_metadata?: InputMaybe<Scalars["JSON"]>
  size?: InputMaybe<Scalars["Float"]>
  url?: InputMaybe<Scalars["String"]>
  width?: InputMaybe<Scalars["Int"]>
}

type UploadFileRelationResponseCollection = {
  data: Array<UploadFileEntity>
}

type UploadFolder = {
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars["DateTime"]>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars["String"]
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars["String"]
  pathId: Scalars["Int"]
  updatedAt?: Maybe<Scalars["DateTime"]>
}

type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

type UploadFolderEntity = {
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars["ID"]>
}

type UploadFolderEntityResponse = {
  data?: Maybe<UploadFolderEntity>
}

type UploadFolderEntityResponseCollection = {
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  children?: InputMaybe<UploadFolderFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  files?: InputMaybe<UploadFileFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFolderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  parent?: InputMaybe<UploadFolderFiltersInput>
  path?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  files?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  name?: InputMaybe<Scalars["String"]>
  parent?: InputMaybe<Scalars["ID"]>
  path?: InputMaybe<Scalars["String"]>
  pathId?: InputMaybe<Scalars["Int"]>
}

type UploadFolderRelationResponseCollection = {
  data: Array<UploadFolderEntity>
}

type UsersPermissionsCreateRolePayload = {
  ok: Scalars["Boolean"]
}

type UsersPermissionsDeleteRolePayload = {
  ok: Scalars["Boolean"]
}

type UsersPermissionsLoginInput = {
  identifier: Scalars["String"]
  password: Scalars["String"]
  provider?: Scalars["String"]
}

type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars["String"]>
  user: UsersPermissionsMe
}

type UsersPermissionsMe = {
  blocked?: Maybe<Scalars["Boolean"]>
  confirmed?: Maybe<Scalars["Boolean"]>
  email?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars["String"]
}

type UsersPermissionsMeRole = {
  description?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  name: Scalars["String"]
  type?: Maybe<Scalars["String"]>
}

type UsersPermissionsPasswordPayload = {
  ok: Scalars["Boolean"]
}

type UsersPermissionsPermission = {
  action: Scalars["String"]
  createdAt?: Maybe<Scalars["DateTime"]>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

type UsersPermissionsPermissionEntity = {
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars["ID"]>
}

type UsersPermissionsPermissionEntityResponse = {
  data?: Maybe<UsersPermissionsPermissionEntity>
}

type UsersPermissionsPermissionEntityResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>
  meta: ResponseCollectionMeta
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

type UsersPermissionsPermissionInput = {
  action?: InputMaybe<Scalars["String"]>
  role?: InputMaybe<Scalars["ID"]>
}

type UsersPermissionsPermissionRelationResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>
}

type UsersPermissionsRegisterInput = {
  email: Scalars["String"]
  password: Scalars["String"]
  username: Scalars["String"]
}

type UsersPermissionsRole = {
  createdAt?: Maybe<Scalars["DateTime"]>
  description?: Maybe<Scalars["String"]>
  name: Scalars["String"]
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars["String"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

type UsersPermissionsRoleEntity = {
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars["ID"]>
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
  description?: InputMaybe<Scalars["String"]>
  name?: InputMaybe<Scalars["String"]>
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  type?: InputMaybe<Scalars["String"]>
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
}

type UsersPermissionsRoleRelationResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>
}

type UsersPermissionsUpdateRolePayload = {
  ok: Scalars["Boolean"]
}

type UsersPermissionsUser = {
  blocked?: Maybe<Scalars["Boolean"]>
  confirmed?: Maybe<Scalars["Boolean"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  email: Scalars["String"]
  id: Scalars["ID"]
  provider?: Maybe<Scalars["String"]>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars["DateTime"]>
  username: Scalars["String"]
  uuid?: Maybe<Scalars["String"]>
}

type UsersPermissionsUserEntity = {
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars["ID"]>
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
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
  uuid?: InputMaybe<StringFilterInput>
}

type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]>
  confirmationToken?: InputMaybe<Scalars["String"]>
  confirmed?: InputMaybe<Scalars["Boolean"]>
  email?: InputMaybe<Scalars["String"]>
  password?: InputMaybe<Scalars["String"]>
  provider?: InputMaybe<Scalars["String"]>
  resetPasswordToken?: InputMaybe<Scalars["String"]>
  role?: InputMaybe<Scalars["ID"]>
  username?: InputMaybe<Scalars["String"]>
  uuid?: InputMaybe<Scalars["String"]>
}

type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>
}

type CardFragment = {
  id: string
  title?: string | null | undefined
  subtitle?: string | null | undefined
  description?: string | null | undefined
  media?:
    | {
        data?:
          | {
              id?: string | null | undefined
              attributes?:
                | { previewUrl?: string | null | undefined; alternativeText?: string | null | undefined; url: string }
                | null
                | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
}

type CardFragmentVariables = Exact<{ [key: string]: never }>

type EntryFragment = { id: string; key?: string | null | undefined; value: string }

type EntryFragmentVariables = Exact<{ [key: string]: never }>

type FileFragment = {
  id?: string | null | undefined
  attributes?:
    | { previewUrl?: string | null | undefined; alternativeText?: string | null | undefined; url: string }
    | null
    | undefined
}

type FileFragmentVariables = Exact<{ [key: string]: never }>

type HeadlineFragment = { id: string; title?: string | null | undefined; subtitle?: string | null | undefined }

type HeadlineFragmentVariables = Exact<{ [key: string]: never }>

type LinkFragment = { id: string; title?: string | null | undefined; url: string; target: EnumComponentuilinkTarget }

type LinkFragmentVariables = Exact<{ [key: string]: never }>

type ParagraphFragment = { id: string; value: string }

type ParagraphFragmentVariables = Exact<{ [key: string]: never }>

type SectionFragment = {
  id: string
  button?:
    | { id: string; title?: string | null | undefined; url: string; target: EnumComponentuilinkTarget }
    | null
    | undefined
  heading?:
    | {
        id: string
        title?: string | null | undefined
        subtitle?: string | null | undefined
        description?: string | null | undefined
        media?:
          | {
              data?:
                | {
                    id?: string | null | undefined
                    attributes?:
                      | {
                          previewUrl?: string | null | undefined
                          alternativeText?: string | null | undefined
                          url: string
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
    | null
    | undefined
}

type SectionFragmentVariables = Exact<{ [key: string]: never }>

type TabFragment = {
  id: string
  name: string
  pane: {
    id: string
    title?: string | null | undefined
    subtitle?: string | null | undefined
    description?: string | null | undefined
    media?:
      | {
          data?:
            | {
                id?: string | null | undefined
                attributes?:
                  | { previewUrl?: string | null | undefined; alternativeText?: string | null | undefined; url: string }
                  | null
                  | undefined
              }
            | null
            | undefined
        }
      | null
      | undefined
  }
}

type TabFragmentVariables = Exact<{ [key: string]: never }>

type HomeQueryVariables = Exact<{ [key: string]: never }>

type HomeQuery = {
  home?:
    | {
        data?:
          | {
              attributes?:
                | {
                    hero?:
                      | {
                          id: string
                          button?:
                            | {
                                id: string
                                title?: string | null | undefined
                                url: string
                                target: EnumComponentuilinkTarget
                              }
                            | null
                            | undefined
                          heading?:
                            | {
                                id: string
                                title?: string | null | undefined
                                subtitle?: string | null | undefined
                                description?: string | null | undefined
                                media?:
                                  | {
                                      data?:
                                        | {
                                            id?: string | null | undefined
                                            attributes?:
                                              | {
                                                  previewUrl?: string | null | undefined
                                                  alternativeText?: string | null | undefined
                                                  url: string
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
                            | null
                            | undefined
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
    | null
    | undefined
}

type MeQueryVariables = Exact<{ [key: string]: never }>

type MeQuery = { me?: { id: string } | null | undefined }
