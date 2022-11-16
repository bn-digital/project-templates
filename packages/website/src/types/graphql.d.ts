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
  /** A string used to identify an i18n locale */
  I18NLocaleCode: string | 'en'
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: Record<string, any | any[] | string | number | boolean | null | undefined> | any[]
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: number
  /** A time string with format HH:mm:ss.SSS */
  Time: string
  /** The `Upload` scalar type represents a file upload. */
  Upload: unknown
  WebsiteContentDynamicZoneInput: any
}

type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  contains?: InputMaybe<Scalars['Boolean']>
  containsi?: InputMaybe<Scalars['Boolean']>
  endsWith?: InputMaybe<Scalars['Boolean']>
  eq?: InputMaybe<Scalars['Boolean']>
  eqi?: InputMaybe<Scalars['Boolean']>
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

type Category = {
  createdAt?: Maybe<Scalars['DateTime']>
  name: Scalars['String']
  posts?: Maybe<PostRelationResponseCollection>
  seo?: Maybe<ComponentSharedSeo>
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

type CategoryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type CategoryEntity = {
  attributes?: Maybe<Category>
  id?: Maybe<Scalars['ID']>
}

type CategoryEntityResponse = {
  data?: Maybe<CategoryEntity>
}

type CategoryEntityResponseCollection = {
  data: Array<CategoryEntity>
  meta: ResponseCollectionMeta
}

type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<CategoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  posts?: InputMaybe<PostFiltersInput>
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type CategoryInput = {
  name?: InputMaybe<Scalars['String']>
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  seo?: InputMaybe<ComponentSharedSeoInput>
  slug?: InputMaybe<Scalars['String']>
}

type CategoryRelationResponseCollection = {
  data: Array<CategoryEntity>
}

type ChangePasswordInput = {
  newPassword: Scalars['String']
  oldPassword: Scalars['String']
}

type ComponentDataContact = {
  address?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  phone?: Maybe<Scalars['String']>
}

type ComponentDataContactFiltersInput = {
  address?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentDataContactFiltersInput>>>
  email?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentDataContactFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentDataContactFiltersInput>>>
  phone?: InputMaybe<StringFilterInput>
}

type ComponentDataContactInput = {
  address?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  phone?: InputMaybe<Scalars['String']>
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

type ComponentDataEntryInput = {
  id?: InputMaybe<Scalars['ID']>
  key?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

type ComponentDataSet = {
  id: Scalars['ID']
  value: Scalars['String']
}

type ComponentDataSetFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentDataSetFiltersInput>>>
  not?: InputMaybe<ComponentDataSetFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentDataSetFiltersInput>>>
  value?: InputMaybe<StringFilterInput>
}

type ComponentDataSetInput = {
  id?: InputMaybe<Scalars['ID']>
  value?: InputMaybe<Scalars['String']>
}

type ComponentPageContactUs = {
  contact?: Maybe<ComponentDataContact>
  id: Scalars['ID']
  pathname: Scalars['String']
}

type ComponentPageContactUsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageContactUsFiltersInput>>>
  contact?: InputMaybe<ComponentDataContactFiltersInput>
  not?: InputMaybe<ComponentPageContactUsFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentPageContactUsFiltersInput>>>
  pathname?: InputMaybe<StringFilterInput>
}

type ComponentPageContactUsInput = {
  contact?: InputMaybe<ComponentDataContactInput>
  id?: InputMaybe<Scalars['ID']>
  pathname?: InputMaybe<Scalars['String']>
}

type ComponentPageHome = {
  components?: Maybe<Array<Maybe<ComponentUiCard>>>
  frameworks?: Maybe<ComponentUiCard>
  hero?: Maybe<ComponentUiCard>
  id: Scalars['ID']
  pathname: Scalars['String']
  technology?: Maybe<ComponentUiHeadline>
}

type ComponentPageHomeComponentsArgs = {
  filters?: InputMaybe<ComponentUiCardFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type ComponentPageHomeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageHomeFiltersInput>>>
  components?: InputMaybe<ComponentUiCardFiltersInput>
  frameworks?: InputMaybe<ComponentUiCardFiltersInput>
  hero?: InputMaybe<ComponentUiCardFiltersInput>
  not?: InputMaybe<ComponentPageHomeFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentPageHomeFiltersInput>>>
  pathname?: InputMaybe<StringFilterInput>
  technology?: InputMaybe<ComponentUiHeadlineFiltersInput>
}

type ComponentPageHomeInput = {
  components?: InputMaybe<Array<InputMaybe<ComponentUiCardInput>>>
  frameworks?: InputMaybe<ComponentUiCardInput>
  hero?: InputMaybe<ComponentUiCardInput>
  id?: InputMaybe<Scalars['ID']>
  pathname?: InputMaybe<Scalars['String']>
  technology?: InputMaybe<ComponentUiHeadlineInput>
}

type ComponentSharedMetaSocial = {
  description: Scalars['String']
  id: Scalars['ID']
  image?: Maybe<UploadFileEntityResponse>
  socialNetwork: EnumComponentsharedmetasocialSocialnetwork
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
  socialNetwork?: InputMaybe<EnumComponentsharedmetasocialSocialnetwork>
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

type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>
  canonicalURL?: InputMaybe<StringFilterInput>
  keywords?: InputMaybe<StringFilterInput>
  metaDescription?: InputMaybe<StringFilterInput>
  metaRobots?: InputMaybe<StringFilterInput>
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  metaTitle?: InputMaybe<StringFilterInput>
  metaViewport?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedSeoFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>
  structuredData?: InputMaybe<JsonFilterInput>
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

type ComponentUiGridFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiGridFiltersInput>>>
  children?: InputMaybe<ComponentDataEntryFiltersInput>
  not?: InputMaybe<ComponentUiGridFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiGridFiltersInput>>>
  visible?: InputMaybe<BooleanFilterInput>
}

type ComponentUiGridInput = {
  children?: InputMaybe<Array<InputMaybe<ComponentDataEntryInput>>>
  id?: InputMaybe<Scalars['ID']>
  visible?: InputMaybe<Scalars['Boolean']>
}

type ComponentUiHeadline = {
  id: Scalars['ID']
  subtitle?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

type ComponentUiHeadlineFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiHeadlineFiltersInput>>>
  not?: InputMaybe<ComponentUiHeadlineFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiHeadlineFiltersInput>>>
  subtitle?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

type ComponentUiHeadlineInput = {
  id?: InputMaybe<Scalars['ID']>
  subtitle?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
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

type ComponentUiParagraphInput = {
  id?: InputMaybe<Scalars['ID']>
  value?: InputMaybe<Scalars['String']>
}

type ComponentUiSection = {
  button?: Maybe<ComponentUiLink>
  heading?: Maybe<ComponentUiCard>
  id: Scalars['ID']
  visible: Scalars['Boolean']
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
  id?: InputMaybe<Scalars['ID']>
  visible?: InputMaybe<Scalars['Boolean']>
}

type ComponentUiTab = {
  id: Scalars['ID']
  name: Scalars['String']
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
  id?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  pane?: InputMaybe<ComponentUiCardInput>
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

type ComponentUiTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiTextFiltersInput>>>
  children?: InputMaybe<ComponentUiParagraphFiltersInput>
  not?: InputMaybe<ComponentUiTextFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentUiTextFiltersInput>>>
  visible?: InputMaybe<BooleanFilterInput>
}

type ComponentUiTextInput = {
  children?: InputMaybe<Array<InputMaybe<ComponentUiParagraphInput>>>
  id?: InputMaybe<Scalars['ID']>
  visible?: InputMaybe<Scalars['Boolean']>
}

type Contact = {
  comment: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  name: Scalars['String']
  subject?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

type ContactEntity = {
  attributes?: Maybe<Contact>
  id?: Maybe<Scalars['ID']>
}

type ContactEntityResponse = {
  data?: Maybe<ContactEntity>
}

type ContactEntityResponseCollection = {
  data: Array<ContactEntity>
  meta: ResponseCollectionMeta
}

type ContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>
  comment?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ContactFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>
  subject?: InputMaybe<StringFilterInput>
  text?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type ContactInput = {
  comment?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  subject?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

type ContactRelationResponseCollection = {
  data: Array<ContactEntity>
}

type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  contains?: InputMaybe<Scalars['Date']>
  containsi?: InputMaybe<Scalars['Date']>
  endsWith?: InputMaybe<Scalars['Date']>
  eq?: InputMaybe<Scalars['Date']>
  eqi?: InputMaybe<Scalars['Date']>
  gt?: InputMaybe<Scalars['Date']>
  gte?: InputMaybe<Scalars['Date']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  lt?: InputMaybe<Scalars['Date']>
  lte?: InputMaybe<Scalars['Date']>
  ne?: InputMaybe<Scalars['Date']>
  not?: InputMaybe<DateFilterInput>
  notContains?: InputMaybe<Scalars['Date']>
  notContainsi?: InputMaybe<Scalars['Date']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  startsWith?: InputMaybe<Scalars['Date']>
}

type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  contains?: InputMaybe<Scalars['DateTime']>
  containsi?: InputMaybe<Scalars['DateTime']>
  endsWith?: InputMaybe<Scalars['DateTime']>
  eq?: InputMaybe<Scalars['DateTime']>
  eqi?: InputMaybe<Scalars['DateTime']>
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

type EnumComponentsharedmetasocialSocialnetwork = 'Facebook' | 'Twitter'

type EnumMenusmenuitemTarget = 'blank' | 'parent' | 'self' | 'top'

type EmailDesignerEmailTemplate = {
  bodyHtml?: Maybe<Scalars['String']>
  bodyText?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  design?: Maybe<Scalars['JSON']>
  enabled?: Maybe<Scalars['Boolean']>
  name: Scalars['String']
  subject?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['JSON']>
  templateReferenceId: Scalars['String']
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
  subject?: InputMaybe<StringFilterInput>
  tags?: InputMaybe<JsonFilterInput>
  templateReferenceId?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type EmailDesignerEmailTemplateInput = {
  bodyHtml?: InputMaybe<Scalars['String']>
  bodyText?: InputMaybe<Scalars['String']>
  design?: InputMaybe<Scalars['JSON']>
  enabled?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  subject?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Scalars['JSON']>
  templateReferenceId?: InputMaybe<Scalars['String']>
}

type EmailDesignerEmailTemplateRelationResponseCollection = {
  data: Array<EmailDesignerEmailTemplateEntity>
}

type EmailEmitterEmail = {
  createdAt?: Maybe<Scalars['DateTime']>
  delivered: Scalars['Boolean']
  email?: Maybe<Scalars['String']>
  log?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
  publishedAt?: Maybe<Scalars['DateTime']>
  scheduled: Scalars['Boolean']
  template?: Maybe<EmailDesignerEmailTemplateEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
}

type EmailEmitterEmailEntity = {
  attributes?: Maybe<EmailEmitterEmail>
  id?: Maybe<Scalars['ID']>
}

type EmailEmitterEmailEntityResponse = {
  data?: Maybe<EmailEmitterEmailEntity>
}

type EmailEmitterEmailEntityResponseCollection = {
  data: Array<EmailEmitterEmailEntity>
  meta: ResponseCollectionMeta
}

type EmailEmitterEmailFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EmailEmitterEmailFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  delivered?: InputMaybe<BooleanFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  log?: InputMaybe<StringFilterInput>
  not?: InputMaybe<EmailEmitterEmailFiltersInput>
  or?: InputMaybe<Array<InputMaybe<EmailEmitterEmailFiltersInput>>>
  payload?: InputMaybe<JsonFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  scheduled?: InputMaybe<BooleanFilterInput>
  template?: InputMaybe<EmailDesignerEmailTemplateFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type EmailEmitterEmailInput = {
  delivered?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  log?: InputMaybe<Scalars['String']>
  payload?: InputMaybe<Scalars['JSON']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  scheduled?: InputMaybe<Scalars['Boolean']>
  template?: InputMaybe<Scalars['ID']>
}

type EmailEmitterEmailRelationResponseCollection = {
  data: Array<EmailEmitterEmailEntity>
}

type Error = {
  code: Scalars['String']
  message?: Maybe<Scalars['String']>
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
  eqi?: InputMaybe<Scalars['Float']>
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
  | Category
  | ComponentDataContact
  | ComponentDataEntry
  | ComponentDataSet
  | ComponentPageContactUs
  | ComponentPageHome
  | ComponentSharedMetaSocial
  | ComponentSharedSeo
  | ComponentUiCard
  | ComponentUiGrid
  | ComponentUiHeadline
  | ComponentUiLink
  | ComponentUiParagraph
  | ComponentUiSection
  | ComponentUiTab
  | ComponentUiText
  | Contact
  | EmailDesignerEmailTemplate
  | EmailEmitterEmail
  | I18NLocale
  | MenusMenu
  | MenusMenuItem
  | Post
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | Website

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

type I18NLocaleInput = {
  code?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

type I18NLocaleRelationResponseCollection = {
  data: Array<I18NLocaleEntity>
}

type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  contains?: InputMaybe<Scalars['ID']>
  containsi?: InputMaybe<Scalars['ID']>
  endsWith?: InputMaybe<Scalars['ID']>
  eq?: InputMaybe<Scalars['ID']>
  eqi?: InputMaybe<Scalars['ID']>
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
  eqi?: InputMaybe<Scalars['Int']>
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
  eqi?: InputMaybe<Scalars['JSON']>
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

type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>
  contains?: InputMaybe<Scalars['Long']>
  containsi?: InputMaybe<Scalars['Long']>
  endsWith?: InputMaybe<Scalars['Long']>
  eq?: InputMaybe<Scalars['Long']>
  eqi?: InputMaybe<Scalars['Long']>
  gt?: InputMaybe<Scalars['Long']>
  gte?: InputMaybe<Scalars['Long']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>
  lt?: InputMaybe<Scalars['Long']>
  lte?: InputMaybe<Scalars['Long']>
  ne?: InputMaybe<Scalars['Long']>
  not?: InputMaybe<LongFilterInput>
  notContains?: InputMaybe<Scalars['Long']>
  notContainsi?: InputMaybe<Scalars['Long']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>
  startsWith?: InputMaybe<Scalars['Long']>
}

type MenusMenu = {
  createdAt?: Maybe<Scalars['DateTime']>
  items?: Maybe<MenusMenuItemRelationResponseCollection>
  slug: Scalars['String']
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

type MenusMenuItemsArgs = {
  filters?: InputMaybe<MenusMenuItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type MenusMenuEntity = {
  attributes?: Maybe<MenusMenu>
  id?: Maybe<Scalars['ID']>
}

type MenusMenuEntityResponse = {
  data?: Maybe<MenusMenuEntity>
}

type MenusMenuEntityResponseCollection = {
  data: Array<MenusMenuEntity>
  meta: ResponseCollectionMeta
}

type MenusMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  items?: InputMaybe<MenusMenuItemFiltersInput>
  not?: InputMaybe<MenusMenuFiltersInput>
  or?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type MenusMenuInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  slug?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

type MenusMenuItem = {
  createdAt?: Maybe<Scalars['DateTime']>
  order?: Maybe<Scalars['Int']>
  parent?: Maybe<MenusMenuItemEntityResponse>
  root_menu: MenusMenuEntityResponse
  target?: Maybe<EnumMenusmenuitemTarget>
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  url?: Maybe<Scalars['String']>
}

type MenusMenuItemEntity = {
  attributes?: Maybe<MenusMenuItem>
  id?: Maybe<Scalars['ID']>
}

type MenusMenuItemEntityResponse = {
  data?: Maybe<MenusMenuItemEntity>
}

type MenusMenuItemEntityResponseCollection = {
  data: Array<MenusMenuItemEntity>
  meta: ResponseCollectionMeta
}

type MenusMenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<MenusMenuItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>
  order?: InputMaybe<IntFilterInput>
  parent?: InputMaybe<MenusMenuItemFiltersInput>
  root_menu?: InputMaybe<MenusMenuFiltersInput>
  target?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
}

type MenusMenuItemInput = {
  order?: InputMaybe<Scalars['Int']>
  parent?: InputMaybe<Scalars['ID']>
  root_menu?: InputMaybe<Scalars['ID']>
  target?: InputMaybe<EnumMenusmenuitemTarget>
  title?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

type MenusMenuItemRelationResponseCollection = {
  data: Array<MenusMenuItemEntity>
}

type MenusMenuRelationResponseCollection = {
  data: Array<MenusMenuEntity>
}

type Mutation = {
  changePassword: Scalars['Boolean']
  createContact?: Maybe<ContactEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  createWebsiteLocalization?: Maybe<WebsiteEntityResponse>
  deleteContact?: Maybe<ContactEntityResponse>
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
  updateContact?: Maybe<ContactEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

type MutationChangePasswordArgs = {
  input?: InputMaybe<ChangePasswordInput>
}

type MutationCreateContactArgs = {
  data: ContactInput
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

type MutationCreateWebsiteLocalizationArgs = {
  data?: InputMaybe<WebsiteInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

type MutationDeleteContactArgs = {
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

type MutationUpdateContactArgs = {
  data: ContactInput
  id: Scalars['ID']
}

type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info?: InputMaybe<FileInfoInput>
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

type Post = {
  background?: Maybe<Scalars['String']>
  category?: Maybe<CategoryEntityResponse>
  content?: Maybe<Scalars['String']>
  cover?: Maybe<UploadFileEntityResponse>
  createdAt?: Maybe<Scalars['DateTime']>
  name: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  seo?: Maybe<ComponentSharedSeo>
  slug: Scalars['String']
  teaser?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  uuid: Scalars['String']
}

type PostEntity = {
  attributes?: Maybe<Post>
  id?: Maybe<Scalars['ID']>
}

type PostEntityResponse = {
  data?: Maybe<PostEntity>
}

type PostEntityResponseCollection = {
  data: Array<PostEntity>
  meta: ResponseCollectionMeta
}

type PostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>
  background?: InputMaybe<StringFilterInput>
  category?: InputMaybe<CategoryFiltersInput>
  content?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<PostFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  teaser?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  uuid?: InputMaybe<StringFilterInput>
}

type PostInput = {
  background?: InputMaybe<Scalars['String']>
  category?: InputMaybe<Scalars['ID']>
  content?: InputMaybe<Scalars['String']>
  cover?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  seo?: InputMaybe<ComponentSharedSeoInput>
  slug?: InputMaybe<Scalars['String']>
  teaser?: InputMaybe<Scalars['String']>
  uuid?: InputMaybe<Scalars['String']>
}

type PostRelationResponseCollection = {
  data: Array<PostEntity>
}

type PublicationState = 'LIVE' | 'PREVIEW'

type Query = {
  categories?: Maybe<CategoryEntityResponseCollection>
  category?: Maybe<CategoryEntityResponse>
  emailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>
  emailDesignerEmailTemplates?: Maybe<EmailDesignerEmailTemplateEntityResponseCollection>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsUser>
  menusMenu?: Maybe<MenusMenuEntityResponse>
  menusMenuItem?: Maybe<MenusMenuItemEntityResponse>
  menusMenuItems?: Maybe<MenusMenuItemEntityResponseCollection>
  menusMenus?: Maybe<MenusMenuEntityResponseCollection>
  post?: Maybe<PostEntityResponse>
  posts?: Maybe<PostEntityResponseCollection>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
  website?: Maybe<WebsiteEntityResponse>
}

type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryEmailDesignerEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryEmailDesignerEmailTemplatesArgs = {
  filters?: InputMaybe<EmailDesignerEmailTemplateFiltersInput>
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

type QueryMenusMenuArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryMenusMenuItemArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryMenusMenuItemsArgs = {
  filters?: InputMaybe<MenusMenuItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryMenusMenusArgs = {
  filters?: InputMaybe<MenusMenuFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
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

type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>
}

type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
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

type QueryWebsiteArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
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
  eqi?: InputMaybe<Scalars['String']>
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

type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>
  contains?: InputMaybe<Scalars['Time']>
  containsi?: InputMaybe<Scalars['Time']>
  endsWith?: InputMaybe<Scalars['Time']>
  eq?: InputMaybe<Scalars['Time']>
  eqi?: InputMaybe<Scalars['Time']>
  gt?: InputMaybe<Scalars['Time']>
  gte?: InputMaybe<Scalars['Time']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>
  lt?: InputMaybe<Scalars['Time']>
  lte?: InputMaybe<Scalars['Time']>
  ne?: InputMaybe<Scalars['Time']>
  not?: InputMaybe<TimeFilterInput>
  notContains?: InputMaybe<Scalars['Time']>
  notContainsi?: InputMaybe<Scalars['Time']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>
  startsWith?: InputMaybe<Scalars['Time']>
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
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  ext?: InputMaybe<Scalars['String']>
  folder?: InputMaybe<Scalars['ID']>
  folderPath?: InputMaybe<Scalars['String']>
  formats?: InputMaybe<Scalars['JSON']>
  hash?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Int']>
  mime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  previewUrl?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  provider_metadata?: InputMaybe<Scalars['JSON']>
  size?: InputMaybe<Scalars['Float']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
}

type UploadFileRelationResponseCollection = {
  data: Array<UploadFileEntity>
}

type UploadFolder = {
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars['String']
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars['String']
  pathId: Scalars['Int']
  updatedAt?: Maybe<Scalars['DateTime']>
}

type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type UploadFolderEntity = {
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars['ID']>
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
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<Scalars['ID']>
  path?: InputMaybe<Scalars['String']>
  pathId?: InputMaybe<Scalars['Int']>
}

type UploadFolderRelationResponseCollection = {
  data: Array<UploadFolderEntity>
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
  action?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['ID']>
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

type UsersPermissionsRoleRelationResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>
}

type UsersPermissionsUpdateRolePayload = {
  ok: Scalars['Boolean']
}

type UsersPermissionsUser = {
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  id: Scalars['ID']
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
  username?: InputMaybe<Scalars['String']>
}

type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>
}

type Website = {
  content?: Maybe<Array<Maybe<WebsiteContentDynamicZone>>>
  createdAt?: Maybe<Scalars['DateTime']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<WebsiteRelationResponseCollection>
  seo?: Maybe<ComponentSharedSeo>
  translations?: Maybe<Array<Maybe<ComponentDataEntry>>>
  updatedAt?: Maybe<Scalars['DateTime']>
}

type WebsiteTranslationsArgs = {
  filters?: InputMaybe<ComponentDataEntryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

type WebsiteContentDynamicZone = ComponentPageContactUs | ComponentPageHome | Error

type WebsiteEntity = {
  attributes?: Maybe<Website>
  id?: Maybe<Scalars['ID']>
}

type WebsiteEntityResponse = {
  data?: Maybe<WebsiteEntity>
}

type WebsiteEntityResponseCollection = {
  data: Array<WebsiteEntity>
  meta: ResponseCollectionMeta
}

type WebsiteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WebsiteFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<WebsiteFiltersInput>
  not?: InputMaybe<WebsiteFiltersInput>
  or?: InputMaybe<Array<InputMaybe<WebsiteFiltersInput>>>
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>
  translations?: InputMaybe<ComponentDataEntryFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

type WebsiteInput = {
  content?: InputMaybe<Array<Scalars['WebsiteContentDynamicZoneInput']>>
  seo?: InputMaybe<ComponentSharedSeoInput>
  translations?: InputMaybe<Array<InputMaybe<ComponentDataEntryInput>>>
}

type WebsiteRelationResponseCollection = {
  data: Array<WebsiteEntity>
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
              attributes?: { previewUrl?: string | null | undefined; alternativeText?: string | null | undefined; url: string } | null | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
}

type CardFragmentVariables = Exact<{ [key: string]: never }>

type CategoryFragment = { id?: string | null | undefined; attributes?: { name: string; slug: string } | null | undefined }

type CategoryFragmentVariables = Exact<{ [key: string]: never }>

type ContactUsFragment = {
  id: string
  pathname: string
  contact?: { id: string; address?: string | null | undefined; email?: string | null | undefined; phone?: string | null | undefined } | null | undefined
}

type ContactUsFragmentVariables = Exact<{ [key: string]: never }>

type EntryFragment = { id: string; key?: string | null | undefined; value: string }

type EntryFragmentVariables = Exact<{ [key: string]: never }>

type FileFragment = {
  id?: string | null | undefined
  attributes?: { previewUrl?: string | null | undefined; alternativeText?: string | null | undefined; url: string } | null | undefined
}

type FileFragmentVariables = Exact<{ [key: string]: never }>

type HeadlineFragment = { id: string; title?: string | null | undefined; subtitle?: string | null | undefined }

type HeadlineFragmentVariables = Exact<{ [key: string]: never }>

type HomeFragment = {
  id: string
  pathname: string
  hero?:
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
                    attributes?: { previewUrl?: string | null | undefined; alternativeText?: string | null | undefined; url: string } | null | undefined
                  }
                | null
                | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
  components?:
    | Array<
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
                        attributes?: { previewUrl?: string | null | undefined; alternativeText?: string | null | undefined; url: string } | null | undefined
                      }
                    | null
                    | undefined
                }
              | null
              | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
  technology?: { id: string; title?: string | null | undefined; subtitle?: string | null | undefined } | null | undefined
  frameworks?:
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
                    attributes?: { previewUrl?: string | null | undefined; alternativeText?: string | null | undefined; url: string } | null | undefined
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

type HomeFragmentVariables = Exact<{ [key: string]: never }>

type LinkFragment = { id: string; title?: string | null | undefined; url: string }

type LinkFragmentVariables = Exact<{ [key: string]: never }>

type MenuFragment = {
  id?: string | null | undefined
  attributes?:
    | {
        title: string
        slug: string
        items?:
          | {
              data: Array<{
                id?: string | null | undefined
                attributes?:
                  | {
                      order?: number | null | undefined
                      url?: string | null | undefined
                      title: string
                      target?: EnumMenusmenuitemTarget | null | undefined
                      created_at?: Date | null | undefined
                      parent?:
                        | {
                            data?:
                              | {
                                  id?: string | null | undefined
                                  attributes?:
                                    | {
                                        order?: number | null | undefined
                                        url?: string | null | undefined
                                        title: string
                                        target?: EnumMenusmenuitemTarget | null | undefined
                                        created_at?: Date | null | undefined
                                      }
                                    | null
                                    | undefined
                                }
                              | null
                              | undefined
                          }
                        | null
                        | undefined
                      root_menu: {
                        data?:
                          | {
                              attributes?:
                                | {
                                    slug: string
                                    items?:
                                      | {
                                          data: Array<{
                                            id?: string | null | undefined
                                            attributes?:
                                              | {
                                                  order?: number | null | undefined
                                                  url?: string | null | undefined
                                                  title: string
                                                  target?: EnumMenusmenuitemTarget | null | undefined
                                                  created_at?: Date | null | undefined
                                                }
                                              | null
                                              | undefined
                                          }>
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
                    }
                  | null
                  | undefined
              }>
            }
          | null
          | undefined
      }
    | null
    | undefined
}

type MenuFragmentVariables = Exact<{ [key: string]: never }>

type MenuItemFragment = {
  id?: string | null | undefined
  attributes?:
    | {
        order?: number | null | undefined
        url?: string | null | undefined
        title: string
        target?: EnumMenusmenuitemTarget | null | undefined
        created_at?: Date | null | undefined
      }
    | null
    | undefined
}

type MenuItemFragmentVariables = Exact<{ [key: string]: never }>

type ParagraphFragment = { id: string; value: string }

type ParagraphFragmentVariables = Exact<{ [key: string]: never }>

type PostFragment = {
  id?: string | null | undefined
  attributes?:
    | {
        content?: string | null | undefined
        slug: string
        cover?:
          | {
              data?:
                | {
                    id?: string | null | undefined
                    attributes?: { previewUrl?: string | null | undefined; alternativeText?: string | null | undefined; url: string } | null | undefined
                  }
                | null
                | undefined
            }
          | null
          | undefined
        category?:
          | { data?: { id?: string | null | undefined; attributes?: { name: string; slug: string } | null | undefined } | null | undefined }
          | null
          | undefined
      }
    | null
    | undefined
}

type PostFragmentVariables = Exact<{ [key: string]: never }>

type SeoFragment = {
  id: string
  canonicalURL?: string | null | undefined
  keywords?: string | null | undefined
  metaTitle: string
  metaViewport?: string | null | undefined
  metaDescription?: string | null | undefined
}

type SeoFragmentVariables = Exact<{ [key: string]: never }>

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
                attributes?: { previewUrl?: string | null | undefined; alternativeText?: string | null | undefined; url: string } | null | undefined
              }
            | null
            | undefined
        }
      | null
      | undefined
  }
}

type TabFragmentVariables = Exact<{ [key: string]: never }>

type WebsiteFragment = {
  id?: string | null | undefined
  attributes?:
    | {
        locale?: string | null | undefined
        seo?:
          | {
              id: string
              canonicalURL?: string | null | undefined
              keywords?: string | null | undefined
              metaTitle: string
              metaViewport?: string | null | undefined
              metaDescription?: string | null | undefined
            }
          | null
          | undefined
        content?:
          | Array<
              | {
                  __typename: 'ComponentPageContactUs'
                  id: string
                  pathname: string
                  contact?:
                    | { id: string; address?: string | null | undefined; email?: string | null | undefined; phone?: string | null | undefined }
                    | null
                    | undefined
                }
              | {
                  __typename: 'ComponentPageHome'
                  id: string
                  pathname: string
                  hero?:
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
                    | null
                    | undefined
                  components?:
                    | Array<
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
                        | null
                        | undefined
                      >
                    | null
                    | undefined
                  technology?: { id: string; title?: string | null | undefined; subtitle?: string | null | undefined } | null | undefined
                  frameworks?:
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
                    | null
                    | undefined
                }
              | { __typename: 'Error' }
              | null
              | undefined
            >
          | null
          | undefined
        translations?: Array<{ id: string; key?: string | null | undefined; value: string } | null | undefined> | null | undefined
      }
    | null
    | undefined
}

type WebsiteFragmentVariables = Exact<{ [key: string]: never }>

type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']
}>

type ForgotPasswordMutation = { forgotPassword?: { ok: boolean } | null | undefined }

type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput
}>

type LoginMutation = { login: { jwt?: string | null | undefined; user: { username: string } } }

type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput
}>

type RegisterMutation = { register: { jwt?: string | null | undefined } }

type CategoriesQueryVariables = Exact<{
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
}>

type CategoriesQuery = {
  categories?:
    | {
        data: Array<{
          id?: string | null | undefined
          attributes?:
            | {
                name: string
                slug: string
                posts?:
                  | {
                      data: Array<{
                        id?: string | null | undefined
                        attributes?:
                          | {
                              content?: string | null | undefined
                              slug: string
                              cover?:
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
                              category?:
                                | {
                                    data?: { id?: string | null | undefined; attributes?: { name: string; slug: string } | null | undefined } | null | undefined
                                  }
                                | null
                                | undefined
                            }
                          | null
                          | undefined
                      }>
                    }
                  | null
                  | undefined
              }
            | null
            | undefined
        }>
      }
    | null
    | undefined
}

type MeQueryVariables = Exact<{ [key: string]: never }>

type MeQuery = { me?: { email: string } | null | undefined }

type MenuQueryVariables = Exact<{
  filters?: InputMaybe<MenusMenuFiltersInput>
}>

type MenuQuery = {
  menusMenus?:
    | {
        data: Array<{
          id?: string | null | undefined
          attributes?:
            | {
                title: string
                slug: string
                items?:
                  | {
                      data: Array<{
                        id?: string | null | undefined
                        attributes?:
                          | {
                              order?: number | null | undefined
                              url?: string | null | undefined
                              title: string
                              target?: EnumMenusmenuitemTarget | null | undefined
                              created_at?: Date | null | undefined
                              parent?:
                                | {
                                    data?:
                                      | {
                                          id?: string | null | undefined
                                          attributes?:
                                            | {
                                                order?: number | null | undefined
                                                url?: string | null | undefined
                                                title: string
                                                target?: EnumMenusmenuitemTarget | null | undefined
                                                created_at?: Date | null | undefined
                                              }
                                            | null
                                            | undefined
                                        }
                                      | null
                                      | undefined
                                  }
                                | null
                                | undefined
                              root_menu: {
                                data?:
                                  | {
                                      attributes?:
                                        | {
                                            slug: string
                                            items?:
                                              | {
                                                  data: Array<{
                                                    id?: string | null | undefined
                                                    attributes?:
                                                      | {
                                                          order?: number | null | undefined
                                                          url?: string | null | undefined
                                                          title: string
                                                          target?: EnumMenusmenuitemTarget | null | undefined
                                                          created_at?: Date | null | undefined
                                                        }
                                                      | null
                                                      | undefined
                                                  }>
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
                            }
                          | null
                          | undefined
                      }>
                    }
                  | null
                  | undefined
              }
            | null
            | undefined
        }>
      }
    | null
    | undefined
}

type PostsQueryVariables = Exact<{
  filters?: InputMaybe<PostFiltersInput>
}>

type PostsQuery = {
  posts?:
    | {
        data: Array<{
          id?: string | null | undefined
          attributes?:
            | {
                content?: string | null | undefined
                slug: string
                cover?:
                  | {
                      data?:
                        | {
                            id?: string | null | undefined
                            attributes?: { previewUrl?: string | null | undefined; alternativeText?: string | null | undefined; url: string } | null | undefined
                          }
                        | null
                        | undefined
                    }
                  | null
                  | undefined
                category?:
                  | { data?: { id?: string | null | undefined; attributes?: { name: string; slug: string } | null | undefined } | null | undefined }
                  | null
                  | undefined
              }
            | null
            | undefined
        }>
      }
    | null
    | undefined
}

type WebsiteQueryVariables = Exact<{ [key: string]: never }>

type WebsiteQuery = {
  website?:
    | {
        data?:
          | {
              id?: string | null | undefined
              attributes?:
                | {
                    locale?: string | null | undefined
                    localizations?:
                      | {
                          data: Array<{
                            id?: string | null | undefined
                            attributes?:
                              | {
                                  locale?: string | null | undefined
                                  seo?:
                                    | {
                                        id: string
                                        canonicalURL?: string | null | undefined
                                        keywords?: string | null | undefined
                                        metaTitle: string
                                        metaViewport?: string | null | undefined
                                        metaDescription?: string | null | undefined
                                      }
                                    | null
                                    | undefined
                                  content?:
                                    | Array<
                                        | {
                                            __typename: 'ComponentPageContactUs'
                                            id: string
                                            pathname: string
                                            contact?:
                                              | {
                                                  id: string
                                                  address?: string | null | undefined
                                                  email?: string | null | undefined
                                                  phone?: string | null | undefined
                                                }
                                              | null
                                              | undefined
                                          }
                                        | {
                                            __typename: 'ComponentPageHome'
                                            id: string
                                            pathname: string
                                            hero?:
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
                                            components?:
                                              | Array<
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
                                                >
                                              | null
                                              | undefined
                                            technology?:
                                              | { id: string; title?: string | null | undefined; subtitle?: string | null | undefined }
                                              | null
                                              | undefined
                                            frameworks?:
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
                                        | { __typename: 'Error' }
                                        | null
                                        | undefined
                                      >
                                    | null
                                    | undefined
                                  translations?: Array<{ id: string; key?: string | null | undefined; value: string } | null | undefined> | null | undefined
                                }
                              | null
                              | undefined
                          }>
                        }
                      | null
                      | undefined
                    seo?:
                      | {
                          id: string
                          canonicalURL?: string | null | undefined
                          keywords?: string | null | undefined
                          metaTitle: string
                          metaViewport?: string | null | undefined
                          metaDescription?: string | null | undefined
                        }
                      | null
                      | undefined
                    content?:
                      | Array<
                          | {
                              __typename: 'ComponentPageContactUs'
                              id: string
                              pathname: string
                              contact?:
                                | { id: string; address?: string | null | undefined; email?: string | null | undefined; phone?: string | null | undefined }
                                | null
                                | undefined
                            }
                          | {
                              __typename: 'ComponentPageHome'
                              id: string
                              pathname: string
                              hero?:
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
                                | null
                                | undefined
                              components?:
                                | Array<
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
                                    | null
                                    | undefined
                                  >
                                | null
                                | undefined
                              technology?: { id: string; title?: string | null | undefined; subtitle?: string | null | undefined } | null | undefined
                              frameworks?:
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
                                | null
                                | undefined
                            }
                          | { __typename: 'Error' }
                          | null
                          | undefined
                        >
                      | null
                      | undefined
                    translations?: Array<{ id: string; key?: string | null | undefined; value: string } | null | undefined> | null | undefined
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
