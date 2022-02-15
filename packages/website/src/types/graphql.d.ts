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

type ComponentDataSet = {
  id: Scalars['ID']
  value: Scalars['String']
}

type ComponentIntegrationAddress = {
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  id: Scalars['ID']
  region?: Maybe<Scalars['String']>
  street: Scalars['String']
  unit?: Maybe<Scalars['String']>
  zipCode: Scalars['String']
}

type ComponentIntegrationStripe = {
  id: Scalars['ID']
  payload?: Maybe<Scalars['JSON']>
  stripeId: Scalars['String']
}

type ComponentIntegrationStripeInput = {
  id?: InputMaybe<Scalars['ID']>
  payload?: InputMaybe<Scalars['JSON']>
  stripeId?: InputMaybe<Scalars['String']>
}

type ComponentSharedMetaSocial = {
  description: Scalars['String']
  id: Scalars['ID']
  image?: Maybe<UploadFileEntityResponse>
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork
  title: Scalars['String']
}

type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>
  description?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>
  socialNetwork?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<Scalars['ID']>
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>
  title?: InputMaybe<Scalars['String']>
}

type ComponentSharedSeo = {
  canonicalURL?: Maybe<Scalars['String']>
  id: Scalars['ID']
  keywords?: Maybe<Scalars['String']>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<UploadFileEntityResponse>
  metaRobots?: Maybe<Scalars['String']>
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>
  metaTitle: Scalars['String']
  metaViewport?: Maybe<Scalars['String']>
  structuredData?: Maybe<Scalars['JSON']>
}

type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  keywords?: InputMaybe<Scalars['String']>
  metaDescription?: InputMaybe<Scalars['String']>
  metaImage?: InputMaybe<Scalars['ID']>
  metaRobots?: InputMaybe<Scalars['String']>
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>
  metaTitle?: InputMaybe<Scalars['String']>
  metaViewport?: InputMaybe<Scalars['String']>
  structuredData?: InputMaybe<Scalars['JSON']>
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

type ContactUs = {
  createdAt?: Maybe<Scalars['DateTime']>
  pathname: Scalars['String']
  seo?: Maybe<ComponentSharedSeo>
  updatedAt?: Maybe<Scalars['DateTime']>
}

type ContactUsEntity = {
  attributes?: Maybe<ContactUs>
  id?: Maybe<Scalars['ID']>
}

type ContactUsEntityResponse = {
  data?: Maybe<ContactUsEntity>
}

type ContactUsInput = {
  pathname?: InputMaybe<Scalars['String']>
  seo?: InputMaybe<ComponentSharedSeoInput>
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>
}

type Customer = {
  createdAt?: Maybe<Scalars['DateTime']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  lastName?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  uuid?: Maybe<Scalars['String']>
}

type CustomerEntity = {
  attributes?: Maybe<Customer>
  id?: Maybe<Scalars['ID']>
}

type CustomerEntityResponse = {
  data?: Maybe<CustomerEntity>
}

type CustomerEntityResponseCollection = {
  data: Array<CustomerEntity>
  meta: ResponseCollectionMeta
}

type CustomerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CustomerFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  firstName?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  lastName?: InputMaybe<StringFilterInput>
  not?: InputMaybe<CustomerFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CustomerFiltersInput>>>
  sitemap_exclude?: InputMaybe<BooleanFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  uuid?: InputMaybe<StringFilterInput>
}

type CustomerInput = {
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>
  stripe?: InputMaybe<ComponentIntegrationStripeInput>
  uuid?: InputMaybe<Scalars['String']>
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

type Enum_Componentsharedmetasocial_Socialnetwork = 'Facebook' | 'Twitter'

type Enum_Graphsbuildergraph_Type = 'bar' | 'dateLine' | 'line' | 'pie'

type EmailDesignerEmailTemplate = {
  bodyHtml?: Maybe<Scalars['String']>
  bodyText?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  design?: Maybe<Scalars['JSON']>
  enabled?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  subject?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['JSON']>
  templateReferenceId?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

type EmailDesignerEmailTemplateEntity = {
  attributes?: Maybe<EmailDesignerEmailTemplate>
  id?: Maybe<Scalars['ID']>
}

type EmailDesignerEmailTemplateEntityResponse = {
  data?: Maybe<EmailDesignerEmailTemplateEntity>
}

type EmailDesignerEmailTemplateEntityResponseCollection = {
  data: Array<EmailDesignerEmailTemplateEntity>
  meta: ResponseCollectionMeta
}

type EmailDesignerEmailTemplateFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EmailDesignerEmailTemplateFiltersInput>>>
  bodyHtml?: InputMaybe<StringFilterInput>
  bodyText?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  design?: InputMaybe<JsonFilterInput>
  enabled?: InputMaybe<BooleanFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<EmailDesignerEmailTemplateFiltersInput>
  or?: InputMaybe<Array<InputMaybe<EmailDesignerEmailTemplateFiltersInput>>>
  sitemap_exclude?: InputMaybe<BooleanFilterInput>
  subject?: InputMaybe<StringFilterInput>
  tags?: InputMaybe<JsonFilterInput>
  templateReferenceId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type EmailDesignerEmailTemplateInput = {
  bodyHtml?: InputMaybe<Scalars['String']>
  bodyText?: InputMaybe<Scalars['String']>
  design?: InputMaybe<Scalars['JSON']>
  enabled?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>
  subject?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Scalars['JSON']>
  templateReferenceId?: InputMaybe<Scalars['Int']>
}

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
  | ComponentDataSet
  | ComponentIntegrationAddress
  | ComponentIntegrationStripe
  | ComponentSharedMetaSocial
  | ComponentSharedSeo
  | ComponentUiCard
  | ComponentUiGrid
  | ComponentUiLink
  | ComponentUiMenu
  | ComponentUiParagraph
  | ComponentUiSection
  | ComponentUiTab
  | ComponentUiText
  | ContactUs
  | Customer
  | EmailDesignerEmailTemplate
  | GraphsBuilderGraph
  | Homepage
  | I18NLocale
  | Order
  | OrderLine
  | Product
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
  pathname: Scalars['String']
  seo?: Maybe<ComponentSharedSeo>
  updatedAt?: Maybe<Scalars['DateTime']>
}

type HomepageEntity = {
  attributes?: Maybe<Homepage>
  id?: Maybe<Scalars['ID']>
}

type HomepageEntityResponse = {
  data?: Maybe<HomepageEntity>
}

type I18NLocale = {
  code?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

type I18NLocaleEntity = {
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']>
}

type I18NLocaleEntityResponse = {
  data?: Maybe<I18NLocaleEntity>
}

type I18NLocaleEntityResponseCollection = {
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
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
  createCustomer?: Maybe<CustomerEntityResponse>
  createEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>
  createGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>
  createOrder?: Maybe<OrderEntityResponse>
  createOrderLine?: Maybe<OrderLineEntityResponse>
  createProduct?: Maybe<ProductEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteContactUs?: Maybe<ContactUsEntityResponse>
  deleteCustomer?: Maybe<CustomerEntityResponse>
  deleteEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>
  deleteGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>
  deleteOrder?: Maybe<OrderEntityResponse>
  deleteOrderLine?: Maybe<OrderLineEntityResponse>
  deleteProduct?: Maybe<ProductEntityResponse>
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
  updateContactUs?: Maybe<ContactUsEntityResponse>
  updateCustomer?: Maybe<CustomerEntityResponse>
  updateEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>
  updateOrder?: Maybe<OrderEntityResponse>
  updateOrderLine?: Maybe<OrderLineEntityResponse>
  updateProduct?: Maybe<ProductEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

type MutationCreateCustomerArgs = {
  data: CustomerInput
}

type MutationCreateEmailDesignerEmailTemplateArgs = {
  data: EmailDesignerEmailTemplateInput
}

type MutationCreateGraphsBuilderGraphArgs = {
  data: GraphsBuilderGraphInput
}

type MutationCreateOrderArgs = {
  data: OrderInput
}

type MutationCreateOrderLineArgs = {
  data: OrderLineInput
}

type MutationCreateProductArgs = {
  data: ProductInput
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

type MutationDeleteCustomerArgs = {
  id: Scalars['ID']
}

type MutationDeleteEmailDesignerEmailTemplateArgs = {
  id: Scalars['ID']
}

type MutationDeleteGraphsBuilderGraphArgs = {
  id: Scalars['ID']
}

type MutationDeleteOrderArgs = {
  id: Scalars['ID']
}

type MutationDeleteOrderLineArgs = {
  id: Scalars['ID']
}

type MutationDeleteProductArgs = {
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

type MutationUpdateContactUsArgs = {
  data: ContactUsInput
}

type MutationUpdateCustomerArgs = {
  data: CustomerInput
  id: Scalars['ID']
}

type MutationUpdateEmailDesignerEmailTemplateArgs = {
  data: EmailDesignerEmailTemplateInput
  id: Scalars['ID']
}

type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info?: InputMaybe<FileInfoInput>
}

type MutationUpdateGraphsBuilderGraphArgs = {
  data: GraphsBuilderGraphInput
  id: Scalars['ID']
}

type MutationUpdateOrderArgs = {
  data: OrderInput
  id: Scalars['ID']
}

type MutationUpdateOrderLineArgs = {
  data: OrderLineInput
  id: Scalars['ID']
}

type MutationUpdateProductArgs = {
  data: ProductInput
  id: Scalars['ID']
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

type NavigationItem = {
  audience?: Maybe<Array<Maybe<Scalars['String']>>>
  createdAt?: Maybe<Scalars['String']>
  createdBy?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['String']>
  externalPath?: Maybe<Scalars['String']>
  id: Scalars['Int']
  items?: Maybe<Array<Maybe<NavigationItem>>>
  master?: Maybe<Scalars['Int']>
  menuAttached: Scalars['Boolean']
  order: Scalars['Int']
  parent?: Maybe<Scalars['Int']>
  path?: Maybe<Scalars['String']>
  related?: Maybe<Array<Maybe<NavigationRelated>>>
  title: Scalars['String']
  type: Scalars['String']
  uiRouterKey: Scalars['String']
  updatedAt?: Maybe<Scalars['String']>
  updatedBy?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['String']>
  updated_by?: Maybe<Scalars['String']>
}

type NavigationRelated = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

type NavigationRenderType = 'FLAT' | 'RFR' | 'TREE'

type Order = {
  createdAt?: Maybe<Scalars['DateTime']>
  items?: Maybe<OrderLineRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']>
  uuid?: Maybe<Scalars['String']>
}

type OrderItemsArgs = {
  filters?: InputMaybe<OrderLineFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type OrderEntity = {
  attributes?: Maybe<Order>
  id?: Maybe<Scalars['ID']>
}

type OrderEntityResponse = {
  data?: Maybe<OrderEntity>
}

type OrderEntityResponseCollection = {
  data: Array<OrderEntity>
  meta: ResponseCollectionMeta
}

type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  items?: InputMaybe<OrderLineFiltersInput>
  not?: InputMaybe<OrderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>
  sitemap_exclude?: InputMaybe<BooleanFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  uuid?: InputMaybe<StringFilterInput>
}

type OrderInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>
  stripe?: InputMaybe<ComponentIntegrationStripeInput>
  uuid?: InputMaybe<Scalars['String']>
}

type OrderLine = {
  createdAt?: Maybe<Scalars['DateTime']>
  product?: Maybe<ProductEntityResponse>
  quantity: Scalars['Int']
  updatedAt?: Maybe<Scalars['DateTime']>
}

type OrderLineEntity = {
  attributes?: Maybe<OrderLine>
  id?: Maybe<Scalars['ID']>
}

type OrderLineEntityResponse = {
  data?: Maybe<OrderLineEntity>
}

type OrderLineEntityResponseCollection = {
  data: Array<OrderLineEntity>
  meta: ResponseCollectionMeta
}

type OrderLineFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderLineFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<OrderLineFiltersInput>
  or?: InputMaybe<Array<InputMaybe<OrderLineFiltersInput>>>
  product?: InputMaybe<ProductFiltersInput>
  quantity?: InputMaybe<IntFilterInput>
  sitemap_exclude?: InputMaybe<BooleanFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type OrderLineInput = {
  product?: InputMaybe<Scalars['ID']>
  quantity?: InputMaybe<Scalars['Int']>
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>
}

type OrderLineRelationResponseCollection = {
  data: Array<OrderLineEntity>
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

type Product = {
  createdAt?: Maybe<Scalars['DateTime']>
  name: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  uuid?: Maybe<Scalars['String']>
}

type ProductEntity = {
  attributes?: Maybe<Product>
  id?: Maybe<Scalars['ID']>
}

type ProductEntityResponse = {
  data?: Maybe<ProductEntity>
}

type ProductEntityResponseCollection = {
  data: Array<ProductEntity>
  meta: ResponseCollectionMeta
}

type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ProductFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  sitemap_exclude?: InputMaybe<BooleanFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  uuid?: InputMaybe<StringFilterInput>
}

type ProductInput = {
  name?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>
  stripe?: InputMaybe<ComponentIntegrationStripeInput>
  uuid?: InputMaybe<Scalars['String']>
}

type PublicationState = 'LIVE' | 'PREVIEW'

type Query = {
  contactUs?: Maybe<ContactUsEntityResponse>
  customer?: Maybe<CustomerEntityResponse>
  customers?: Maybe<CustomerEntityResponseCollection>
  emailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>
  emailDesignerEmailTemplates?: Maybe<EmailDesignerEmailTemplateEntityResponseCollection>
  graphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>
  graphsBuilderGraphs?: Maybe<GraphsBuilderGraphEntityResponseCollection>
  homepage?: Maybe<HomepageEntityResponse>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<Customer>
  order?: Maybe<OrderEntityResponse>
  orderLine?: Maybe<OrderLineEntityResponse>
  orderLines?: Maybe<OrderLineEntityResponseCollection>
  orders?: Maybe<OrderEntityResponseCollection>
  product?: Maybe<ProductEntityResponse>
  products?: Maybe<ProductEntityResponseCollection>
  renderNavigation: Array<Maybe<NavigationItem>>
  renderNavigationChild: Array<Maybe<NavigationItem>>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

type QueryCustomerArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryCustomersArgs = {
  filters?: InputMaybe<CustomerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryEmailDesignerEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryEmailDesignerEmailTemplatesArgs = {
  filters?: InputMaybe<EmailDesignerEmailTemplateFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryGraphsBuilderGraphArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryGraphsBuilderGraphsArgs = {
  filters?: InputMaybe<GraphsBuilderGraphFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryOrderLineArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryOrderLinesArgs = {
  filters?: InputMaybe<OrderLineFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryRenderNavigationArgs = {
  menuOnly?: InputMaybe<Scalars['Boolean']>
  navigationIdOrSlug: Scalars['String']
  type?: InputMaybe<NavigationRenderType>
}

type QueryRenderNavigationChildArgs = {
  childUiKey: Scalars['String']
  id: Scalars['String']
  menuOnly?: InputMaybe<Scalars['Boolean']>
  type?: InputMaybe<NavigationRenderType>
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
  customer?: Maybe<CustomerEntityResponse>
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
  customer?: InputMaybe<CustomerFiltersInput>
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
  customer?: InputMaybe<Scalars['ID']>
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
  id: string
  title?: string | null | undefined
  subtitle?: string | null | undefined
  description?: string | null | undefined
  media?: { data?: FileFragment | null | undefined } | null | undefined
}

type CardFragmentVariables = Exact<{ [key: string]: never }>

type EntryFragment = { id: string; key?: string | null | undefined; value: string }

type EntryFragmentVariables = Exact<{ [key: string]: never }>

type FileFragment = { id?: string | null | undefined; attributes?: { previewUrl?: string | null | undefined; url: string } | null | undefined }

type FileFragmentVariables = Exact<{ [key: string]: never }>

type LinkFragment = { id: string; title?: string | null | undefined; url: string }

type LinkFragmentVariables = Exact<{ [key: string]: never }>

type SeoFragment = {
  id: string
  canonicalURL?: string | null | undefined
  keywords?: string | null | undefined
  metaTitle: string
  metaViewport?: string | null | undefined
  metaDescription?: string | null | undefined
}

type SeoFragmentVariables = Exact<{ [key: string]: never }>

type ParagraphFragment = { id: string; value: string }

type ParagraphFragmentVariables = Exact<{ [key: string]: never }>

type TabFragment = { id: string; name: string; pane: CardFragment }

type TabFragmentVariables = Exact<{ [key: string]: never }>

type HomepageFragment = {
  hero?: { subtitle?: string | null | undefined; id: string; description?: string | null | undefined; title?: string | null | undefined } | null | undefined
}

type HomepageFragmentVariables = Exact<{ [key: string]: never }>

type MenuFragment = { items?: Array<MenuItemFragment | null | undefined> | null | undefined } & MenuItemFragment

type MenuFragmentVariables = Exact<{ [key: string]: never }>

type MenuItemFragment = { id: number; title: string; path?: string | null | undefined; externalPath?: string | null | undefined }

type MenuItemFragmentVariables = Exact<{ [key: string]: never }>

type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput
}>

type LoginMutation = { login: { jwt?: string | null | undefined } }

type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput
}>

type RegisterMutation = { register: { jwt?: string | null | undefined } }

type UpdateCustomerMutationVariables = Exact<{
  id: Scalars['ID']
  data: CustomerInput
}>

type UpdateCustomerMutation = {
  updateCustomer?:
    | {
        data?:
          | { id?: string | null | undefined; attributes?: { createdAt?: Date | null | undefined; firstName?: string | null | undefined } | null | undefined }
          | null
          | undefined
      }
    | null
    | undefined
}

type HomepageQueryVariables = Exact<{ [key: string]: never }>

type HomepageQuery = {
  homepage?:
    | {
        data?:
          | { id?: string | null | undefined; attributes?: { hero?: CardFragment | null | undefined; seo?: SeoFragment | null | undefined } | null | undefined }
          | null
          | undefined
      }
    | null
    | undefined
}

type MeQueryVariables = Exact<{ [key: string]: never }>

type MeQuery = {
  me?:
    | { id?: string | null | undefined; createdAt?: Date | null | undefined; firstName?: string | null | undefined; updatedAt?: Date | null | undefined }
    | null
    | undefined
}

type NavigationQueryVariables = Exact<{
  slug: Scalars['String']
}>

type NavigationQuery = { renderNavigation: Array<MenuFragment | null | undefined> }
