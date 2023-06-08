type Maybe<T> = T | null | undefined
type InputMaybe<T> = T | null | undefined
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string | number; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: string; output: string }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date; output: Date }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: {
    input: Record<string, any | any[] | string | number | boolean | null | undefined> | any[]
    output: Record<string, any | any[] | string | number | boolean | null | undefined> | any[]
  }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: { input: number; output: number }
  /** A time string with format HH:mm:ss.SSS */
  Time: { input: string; output: string }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: unknown; output: unknown }
}

type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  contains?: InputMaybe<Scalars["Boolean"]["input"]>
  containsi?: InputMaybe<Scalars["Boolean"]["input"]>
  endsWith?: InputMaybe<Scalars["Boolean"]["input"]>
  eq?: InputMaybe<Scalars["Boolean"]["input"]>
  eqi?: InputMaybe<Scalars["Boolean"]["input"]>
  gt?: InputMaybe<Scalars["Boolean"]["input"]>
  gte?: InputMaybe<Scalars["Boolean"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  lt?: InputMaybe<Scalars["Boolean"]["input"]>
  lte?: InputMaybe<Scalars["Boolean"]["input"]>
  ne?: InputMaybe<Scalars["Boolean"]["input"]>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars["Boolean"]["input"]>
  notContainsi?: InputMaybe<Scalars["Boolean"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  startsWith?: InputMaybe<Scalars["Boolean"]["input"]>
}

type ComponentDataEntry = {
  id: Scalars["ID"]["output"]; key?: "ID"be"output"["String"]["output"]>; "String"ca"output"ring"]["output'];
}
"String"
Co
"output"
ataEntryFiltersInput = {
  and? : InputMaybe<Array<InputMaybe<ComponentDataEntryFiltersInput>>>;
  key? : InputMaybe<StringFilterInput>;
  not? : InputMaybe<ComponentDataEntryFiltersInput>;
  or? : InputMaybe<Array<InputMaybe<ComponentDataEntryFiltersInput>>>;
  value? : InputMaybe<StringFilterInput>
}

type ComponentDataEntryInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>; key?: InputMaybe<Scalars["String"]["input"]>; value?: InputMaybe<Scalars["String"]["input"]>;
};

type ComponentDataSet = {
  id: Scalars["ID"]["output"]; value: Scalars["String"]["output"];
};

type ComponentDataSetFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentDataSetFiltersInput>>>;
  not?: InputMaybe<ComponentDataSetFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentDataSetFiltersInput>>>;
  value?: InputMaybe<StringFilterInput>;
};

type ComponentDataSetInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>; value?: InputMaybe<Scalars["String"]["input"]>;
};

type ComponentUiCard = {
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  media?: Maybe<UploadFileEntityResponse>;
  subtitle?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

type ComponentUiCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiCardFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUiCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiCardFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

type ComponentUiCardInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  media?: InputMaybe<Scalars["ID"]["input"]>;
  subtitle?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

type ComponentUiGrid = {
  children: Array<Maybe<ComponentDataEntry>>; id: Scalars["ID"]["output"]; visible: Scalars["Boolean"]["output"];
};


type ComponentUiGridChildrenArgs = {
  filters?: InputMaybe<ComponentDataEntryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type ComponentUiGridFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiGridFiltersInput>>>;
  children?: InputMaybe<ComponentDataEntryFiltersInput>;
  not?: InputMaybe<ComponentUiGridFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiGridFiltersInput>>>;
  visible?: InputMaybe<BooleanFilterInput>;
};

type ComponentUiGridInput = {
  children?: InputMaybe<Array<InputMaybe<ComponentDataEntryInput>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  visible?: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ComponentUiHeadline = {
  id: Scalars["ID"]["output"]; subtitle?: Maybe<Scalars["String"]["output"]>; title?: Maybe<Scalars["String"]["output"]>;
};

type ComponentUiHeadlineFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiHeadlineFiltersInput>>>;
  not?: InputMaybe<ComponentUiHeadlineFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiHeadlineFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

type ComponentUiHeadlineInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  subtitle?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

type ComponentUiLink = {
  icon?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  target: EnumComponentuilinkTarget;
  title?: Maybe<Scalars["String"]["output"]>;
  url: Scalars["String"]["output"];
};

type ComponentUiLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiLinkFiltersInput>>>;
  icon?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUiLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiLinkFiltersInput>>>;
  target?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

type ComponentUiLinkInput = {
  icon?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  target?: InputMaybe<EnumComponentuilinkTarget>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

type ComponentUiParagraph = {
  id: Scalars["ID"]["output"]; value: Scalars["String"]["output"];
};

type ComponentUiParagraphFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiParagraphFiltersInput>>>;
  not?: InputMaybe<ComponentUiParagraphFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiParagraphFiltersInput>>>;
  value?: InputMaybe<StringFilterInput>;
};

type ComponentUiParagraphInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>; value?: InputMaybe<Scalars["String"]["input"]>;
};

type ComponentUiSection = {
  button?: Maybe<ComponentUiLink>; heading?: Maybe<ComponentUiCard>; id: Scalars["ID"]["output"]; visible: Scalars["Boolean"]["output"];
};

type ComponentUiSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiSectionFiltersInput>>>;
  button?: InputMaybe<ComponentUiLinkFiltersInput>;
  heading?: InputMaybe<ComponentUiCardFiltersInput>;
  not?: InputMaybe<ComponentUiSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiSectionFiltersInput>>>;
  visible?: InputMaybe<BooleanFilterInput>;
};

type ComponentUiSectionInput = {
  button?: InputMaybe<ComponentUiLinkInput>;
  heading?: InputMaybe<ComponentUiCardInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  visible?: InputMaybe<Scalars["Boolean"]["input"]>;
};

type ComponentUiTab = {
  id: Scalars["ID"]["output"]; name: Scalars["String"]["output"]; pane: ComponentUiCard;
};

type ComponentUiTabFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiTabFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUiTabFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiTabFiltersInput>>>;
  pane?: InputMaybe<ComponentUiCardFiltersInput>;
};

type ComponentUiTabInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>; name?: InputMaybe<Scalars["String"]["input"]>; pane?: InputMaybe<ComponentUiCardInput>;
};

type ComponentUiText = {
  children: Array<Maybe<ComponentUiParagraph>>; id: Scalars["ID"]["output"]; visible: Scalars["Boolean"]["output"];
};


type ComponentUiTextChildrenArgs = {
  filters?: InputMaybe<ComponentUiParagraphFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type ComponentUiTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiTextFiltersInput>>>;
  children?: InputMaybe<ComponentUiParagraphFiltersInput>;
  not?: InputMaybe<ComponentUiTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiTextFiltersInput>>>;
  visible?: InputMaybe<BooleanFilterInput>;
};

type ComponentUiTextInput = {
  children?: InputMaybe<Array<InputMaybe<ComponentUiParagraphInput>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  visible?: InputMaybe<Scalars["Boolean"]["input"]>;
};

type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  contains?: InputMaybe<Scalars["Date"]["input"]>;
  containsi?: InputMaybe<Scalars["Date"]["input"]>;
  endsWith?: InputMaybe<Scalars["Date"]["input"]>;
  eq?: InputMaybe<Scalars["Date"]["input"]>;
  eqi?: InputMaybe<Scalars["Date"]["input"]>;
  gt?: InputMaybe<Scalars["Date"]["input"]>;
  gte?: InputMaybe<Scalars["Date"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  lt?: InputMaybe<Scalars["Date"]["input"]>;
  lte?: InputMaybe<Scalars["Date"]["input"]>;
  ne?: InputMaybe<Scalars["Date"]["input"]>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars["Date"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Date"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Date"]["input"]>;
};

type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  contains?: InputMaybe<Scalars["DateTime"]["input"]>;
  containsi?: InputMaybe<Scalars["DateTime"]["input"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  eqi?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  ne?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars["DateTime"]["input"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
};

type EnumComponentuilinkTarget = | "blank" | "parent" | "self" | "top";

type Error = {
  code: Scalars["String"]["output"]; message?: Maybe<Scalars["String"]["output"]>;
};

type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]["input"]>;
  caption?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  contains?: InputMaybe<Scalars["Float"]["input"]>;
  containsi?: InputMaybe<Scalars["Float"]["input"]>;
  endsWith?: InputMaybe<Scalars["Float"]["input"]>;
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  eqi?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  ne?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars["Float"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Float"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Float"]["input"]>;
};

type GenericMorph = ComponentDataEntry
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
  | Layout | ReactIconsIconlibrary
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole | UsersPermissionsUser;

type Home = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  hero?: Maybe<ComponentUiSection>;
  key?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

type HomeEntity = {
  attributes?: Maybe<Home>; id?: Maybe<Scalars["ID"]["output"]>;
};

type HomeEntityResponse = {
  data?: Maybe<HomeEntity>;
};

type HomeEntityResponseCollection = {
  data: Array<HomeEntity>; meta: ResponseCollectionMeta;
};

type HomeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HomeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  hero?: InputMaybe<ComponentUiSectionFiltersInput>;
  key?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<HomeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HomeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type HomeInput = {
  hero?: InputMaybe<ComponentUiSectionInput>; key?: InputMaybe<Scalars["String"]["input"]>;
};

type HomeRelationResponseCollection = {
  data: Array<HomeEntity>;
};

type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  contains?: InputMaybe<Scalars["ID"]["input"]>;
  containsi?: InputMaybe<Scalars["ID"]["input"]>;
  endsWith?: InputMaybe<Scalars["ID"]["input"]>;
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  eqi?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["ID"]["input"]>;
  gte?: InputMaybe<Scalars["ID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  lt?: InputMaybe<Scalars["ID"]["input"]>;
  lte?: InputMaybe<Scalars["ID"]["input"]>;
  ne?: InputMaybe<Scalars["ID"]["input"]>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars["ID"]["input"]>;
  notContainsi?: InputMaybe<Scalars["ID"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["ID"]["input"]>;
};

type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  contains?: InputMaybe<Scalars["Int"]["input"]>;
  containsi?: InputMaybe<Scalars["Int"]["input"]>;
  endsWith?: InputMaybe<Scalars["Int"]["input"]>;
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  eqi?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  ne?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars["Int"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Int"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Int"]["input"]>;
};

type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  contains?: InputMaybe<Scalars["JSON"]["input"]>;
  containsi?: InputMaybe<Scalars["JSON"]["input"]>;
  endsWith?: InputMaybe<Scalars["JSON"]["input"]>;
  eq?: InputMaybe<Scalars["JSON"]["input"]>;
  eqi?: InputMaybe<Scalars["JSON"]["input"]>;
  gt?: InputMaybe<Scalars["JSON"]["input"]>;
  gte?: InputMaybe<Scalars["JSON"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  lt?: InputMaybe<Scalars["JSON"]["input"]>;
  lte?: InputMaybe<Scalars["JSON"]["input"]>;
  ne?: InputMaybe<Scalars["JSON"]["input"]>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars["JSON"]["input"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["JSON"]["input"]>;
};

type Layout = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  headerMenu?: Maybe<Array<Maybe<ComponentUiLink>>>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};


type LayoutHeaderMenuArgs = {
  filters?: InputMaybe<ComponentUiLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type LayoutEntity = {
  attributes?: Maybe<Layout>; id?: Maybe<Scalars["ID"]["output"]>;
};

type LayoutEntityResponse = {
  data?: Maybe<LayoutEntity>;
};

type LayoutEntityResponseCollection = {
  data: Array<LayoutEntity>; meta: ResponseCollectionMeta;
};

type LayoutFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LayoutFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  headerMenu?: InputMaybe<ComponentUiLinkFiltersInput>;
  not?: InputMaybe<LayoutFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LayoutFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type LayoutInput = {
  headerMenu?: InputMaybe<Array<InputMaybe<ComponentUiLinkInput>>>;
};

type LayoutRelationResponseCollection = {
  data: Array<LayoutEntity>;
};

type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Long"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Long"]["input"]>>>;
  contains?: InputMaybe<Scalars["Long"]["input"]>;
  containsi?: InputMaybe<Scalars["Long"]["input"]>;
  endsWith?: InputMaybe<Scalars["Long"]["input"]>;
  eq?: InputMaybe<Scalars["Long"]["input"]>;
  eqi?: InputMaybe<Scalars["Long"]["input"]>;
  gt?: InputMaybe<Scalars["Long"]["input"]>;
  gte?: InputMaybe<Scalars["Long"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Long"]["input"]>>>;
  lt?: InputMaybe<Scalars["Long"]["input"]>;
  lte?: InputMaybe<Scalars["Long"]["input"]>;
  ne?: InputMaybe<Scalars["Long"]["input"]>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars["Long"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Long"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Long"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Long"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Long"]["input"]>;
};

type Mutation = {
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createReactIconsIconlibrary?: Maybe<ReactIconsIconlibraryEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteLayout?: Maybe<LayoutEntityResponse>;
  deleteReactIconsIconlibrary?: Maybe<ReactIconsIconlibraryEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFileEntityResponse;
  updateHome?: Maybe<HomeEntityResponse>;
  updateLayout?: Maybe<LayoutEntityResponse>;
  updateReactIconsIconlibrary?: Maybe<ReactIconsIconlibraryEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"]["input"]; password: Scalars["String"]["input"]; passwordConfirmation: Scalars["String"]["input"];
};


type MutationCreateReactIconsIconlibraryArgs = {
  data: ReactIconsIconlibraryInput;
};


type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


type MutationDeleteReactIconsIconlibraryArgs = {
  id: Scalars["ID"]["input"];
};


type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"]["input"];
};


type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"]["input"];
};


type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"]["input"];
};


type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"]["input"];
};


type MutationForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};


type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars["String"]["input"]>;
  files: Array<InputMaybe<Scalars["Upload"]["input"]>>;
  ref?: InputMaybe<Scalars["String"]["input"]>;
  refId?: InputMaybe<Scalars["ID"]["input"]>;
};


type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


type MutationRemoveFileArgs = {
  id: Scalars["ID"]["input"];
};


type MutationResetPasswordArgs = {
  code: Scalars["String"]["input"]; password: Scalars["String"]["input"]; passwordConfirmation: Scalars["String"]["input"];
};


type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"]["input"]; info?: InputMaybe<FileInfoInput>;
};


type MutationUpdateHomeArgs = {
  data: HomeInput;
};


type MutationUpdateLayoutArgs = {
  data: LayoutInput;
};


type MutationUpdateReactIconsIconlibraryArgs = {
  data: ReactIconsIconlibraryInput; id: Scalars["ID"]["input"];
};


type MutationUpdateUploadFileArgs = {
  data: UploadFileInput; id: Scalars["ID"]["input"];
};


type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput; id: Scalars["ID"]["input"];
};


type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput; id: Scalars["ID"]["input"];
};


type MutationUploadArgs = {
  field?: InputMaybe<Scalars["String"]["input"]>;
  file: Scalars["Upload"]["input"];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars["String"]["input"]>;
  refId?: InputMaybe<Scalars["ID"]["input"]>;
};

type Pagination = {
  page: Scalars["Int"]["output"]; pageCount: Scalars["Int"]["output"]; pageSize: Scalars["Int"]["output"]; total: Scalars["Int"]["output"];
};

type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
  start?: InputMaybe<Scalars["Int"]["input"]>;
};

type PublicationState = | "LIVE" | "PREVIEW";

type Query = {
  home?: Maybe<HomeEntityResponse>;
  layout?: Maybe<LayoutEntityResponse>;
  me?: Maybe<UsersPermissionsUser>;
  reactIconsIconlibraries?: Maybe<ReactIconsIconlibraryEntityResponseCollection>;
  reactIconsIconlibrary?: Maybe<ReactIconsIconlibraryEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


type QueryReactIconsIconlibrariesArgs = {
  filters?: InputMaybe<ReactIconsIconlibraryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};


type QueryReactIconsIconlibraryArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};


type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};


type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};


type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};


type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};


type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};


type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type ReactIconsIconlibrary = {
  abbreviation: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  isEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  name: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

type ReactIconsIconlibraryEntity = {
  attributes?: Maybe<ReactIconsIconlibrary>; id?: Maybe<Scalars["ID"]["output"]>;
};

type ReactIconsIconlibraryEntityResponse = {
  data?: Maybe<ReactIconsIconlibraryEntity>;
};

type ReactIconsIconlibraryEntityResponseCollection = {
  data: Array<ReactIconsIconlibraryEntity>; meta: ResponseCollectionMeta;
};

type ReactIconsIconlibraryFiltersInput = {
  abbreviation?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ReactIconsIconlibraryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isEnabled?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReactIconsIconlibraryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReactIconsIconlibraryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type ReactIconsIconlibraryInput = {
  abbreviation?: InputMaybe<Scalars["String"]["input"]>;
  isEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

type ReactIconsIconlibraryRelationResponseCollection = {
  data: Array<ReactIconsIconlibraryEntity>;
};

type ResponseCollectionMeta = {
  pagination: Pagination;
};

type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  containsi?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  eqi?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars["String"]["input"]>;
  notContainsi?: InputMaybe<Scalars["String"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Time"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Time"]["input"]>>>;
  contains?: InputMaybe<Scalars["Time"]["input"]>;
  containsi?: InputMaybe<Scalars["Time"]["input"]>;
  endsWith?: InputMaybe<Scalars["Time"]["input"]>;
  eq?: InputMaybe<Scalars["Time"]["input"]>;
  eqi?: InputMaybe<Scalars["Time"]["input"]>;
  gt?: InputMaybe<Scalars["Time"]["input"]>;
  gte?: InputMaybe<Scalars["Time"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Time"]["input"]>>>;
  lt?: InputMaybe<Scalars["Time"]["input"]>;
  lte?: InputMaybe<Scalars["Time"]["input"]>;
  ne?: InputMaybe<Scalars["Time"]["input"]>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars["Time"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Time"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Time"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Time"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Time"]["input"]>;
};

type UploadFile = {
  alternativeText?: Maybe<Scalars["String"]["output"]>;
  blurhash?: Maybe<Scalars["String"]["output"]>;
  caption?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  ext?: Maybe<Scalars["String"]["output"]>;
  formats?: Maybe<Scalars["JSON"]["output"]>;
  hash: Scalars["String"]["output"];
  height?: Maybe<Scalars["Int"]["output"]>;
  mime: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  previewUrl?: Maybe<Scalars["String"]["output"]>;
  provider: Scalars["String"]["output"];
  provider_metadata?: Maybe<Scalars["JSON"]["output"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars["Float"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  url: Scalars["String"]["output"];
  width?: Maybe<Scalars["Int"]["output"]>;
};

type UploadFileEntity = {
  attributes?: Maybe<UploadFile>; id?: Maybe<Scalars["ID"]["output"]>;
};

type UploadFileEntityResponse = {
  data?: Maybe<UploadFileEntity>;
};

type UploadFileEntityResponseCollection = {
  data: Array<UploadFileEntity>; meta: ResponseCollectionMeta;
};

type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  blurhash?: InputMaybe<StringFilterInput>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars["String"]["input"]>;
  blurhash?: InputMaybe<Scalars["String"]["input"]>;
  caption?: InputMaybe<Scalars["String"]["input"]>;
  ext?: InputMaybe<Scalars["String"]["input"]>;
  folder?: InputMaybe<Scalars["ID"]["input"]>;
  folderPath?: InputMaybe<Scalars["String"]["input"]>;
  formats?: InputMaybe<Scalars["JSON"]["input"]>;
  hash?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  mime?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  previewUrl?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

type UploadFileRelationResponseCollection = {
  data: Array<UploadFileEntity>;
};

type UploadFolder = {
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars["String"]["output"];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars["String"]["output"];
  pathId: Scalars["Int"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};


type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};


type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type UploadFolderEntity = {
  attributes?: Maybe<UploadFolder>; id?: Maybe<Scalars["ID"]["output"]>;
};

type UploadFolderEntityResponse = {
  data?: Maybe<UploadFolderEntity>;
};

type UploadFolderEntityResponseCollection = {
  data: Array<UploadFolderEntity>; meta: ResponseCollectionMeta;
};

type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  parent?: InputMaybe<Scalars["ID"]["input"]>;
  path?: InputMaybe<Scalars["String"]["input"]>;
  pathId?: InputMaybe<Scalars["Int"]["input"]>;
};

type UploadFolderRelationResponseCollection = {
  data: Array<UploadFolderEntity>;
};

type UsersPermissionsCreateRolePayload = {
  ok: Scalars["Boolean"]["output"];
};

type UsersPermissionsDeleteRolePayload = {
  ok: Scalars["Boolean"]["output"];
};

type UsersPermissionsLoginInput = {
  identifier: Scalars["String"]["input"]; password: Scalars["String"]["input"]; provider?: Scalars["String"]["input"];
};

type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars["String"]["output"]>; user: UsersPermissionsMe;
};

type UsersPermissionsMe = {
  blocked?: Maybe<Scalars["Boolean"]["output"]>;
  confirmed?: Maybe<Scalars["Boolean"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"]["output"];
};

type UsersPermissionsMeRole = {
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

type UsersPermissionsPasswordPayload = {
  ok: Scalars["Boolean"]["output"];
};

type UsersPermissionsPermission = {
  action: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

type UsersPermissionsPermissionEntity = {
  attributes?: Maybe<UsersPermissionsPermission>; id?: Maybe<Scalars["ID"]["output"]>;
};

type UsersPermissionsPermissionEntityResponse = {
  data?: Maybe<UsersPermissionsPermissionEntity>;
};

type UsersPermissionsPermissionEntityResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>; meta: ResponseCollectionMeta;
};

type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type UsersPermissionsPermissionInput = {
  action?: InputMaybe<Scalars["String"]["input"]>; role?: InputMaybe<Scalars["ID"]["input"]>;
};

type UsersPermissionsPermissionRelationResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>;
};

type UsersPermissionsRegisterInput = {
  email: Scalars["String"]["input"]; password: Scalars["String"]["input"]; username: Scalars["String"]["input"];
};

type UsersPermissionsRole = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};


type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

type UsersPermissionsRoleEntity = {
  attributes?: Maybe<UsersPermissionsRole>; id?: Maybe<Scalars["ID"]["output"]>;
};

type UsersPermissionsRoleEntityResponse = {
  data?: Maybe<UsersPermissionsRoleEntity>;
};

type UsersPermissionsRoleEntityResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>; meta: ResponseCollectionMeta;
};

type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

type UsersPermissionsRoleRelationResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>;
};

type UsersPermissionsUpdateRolePayload = {
  ok: Scalars["Boolean"]["output"];
};

type UsersPermissionsUser = {
  blocked?: Maybe<Scalars["Boolean"]["output"]>;
  confirmed?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  provider?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  username: Scalars["String"]["output"];
  uuid?: Maybe<Scalars["String"]["output"]>;
};

type UsersPermissionsUserEntity = {
  attributes?: Maybe<UsersPermissionsUser>; id?: Maybe<Scalars["ID"]["output"]>;
};

type UsersPermissionsUserEntityResponse = {
  data?: Maybe<UsersPermissionsUserEntity>;
};

type UsersPermissionsUserEntityResponseCollection = {
  data: Array<UsersPermissionsUserEntity>; meta: ResponseCollectionMeta;
};

type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  uuid?: InputMaybe<StringFilterInput>;
};

type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]["input"]>;
  confirmationToken?: InputMaybe<Scalars["String"]["input"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["ID"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  uuid?: InputMaybe<Scalars["String"]["input"]>;
};

type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
};

type CardFragment = {
  id: string, title?: string | null | undefined, subtitle?: string | null | undefined, description?: string | null | undefined, media?: {
    data?: {
      id?: string | null | undefined,
      attributes?: { previewUrl?: string | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined
    } | null | undefined
  } | null | undefined
};


type CardFragmentVariables = Exact<{ [key: string]: never; }>;

type EntryFragment = { id: string, key?: string | null | undefined, value: string };


type EntryFragmentVariables = Exact<{ [key: string]: never; }>;

type FileFragment = {
  id?: string | null | undefined,
  attributes?: { previewUrl?: string | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined
};


type FileFragmentVariables = Exact<{ [key: string]: never; }>;

type HeadlineFragment = { id: string, title?: string | null | undefined, subtitle?: string | null | undefined };


type HeadlineFragmentVariables = Exact<{ [key: string]: never; }>;

type LinkFragment = { id: string, title?: string | null | undefined, url: string, target: EnumComponentuilinkTarget };


type LinkFragmentVariables = Exact<{ [key: string]: never; }>;

type ParagraphFragment = { id: string, value: string };


type ParagraphFragmentVariables = Exact<{ [key: string]: never; }>;

type SectionFragment = {
  id: string,
  button?: { id: string, title?: string | null | undefined, url: string, target: EnumComponentuilinkTarget } | null | undefined,
  heading?: {
    id: string, title?: string | null | undefined, subtitle?: string | null | undefined, description?: string | null | undefined, media?: {
      data?: {
        id?: string | null | undefined,
        attributes?: { previewUrl?: string | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined
      } | null | undefined
    } | null | undefined
  } | null | undefined
};


type SectionFragmentVariables = Exact<{ [key: string]: never; }>;

type TabFragment = {
  id: string, name: string,
  pane: {
    id: string, title?: string | null | undefined, subtitle?: string | null | undefined, description?: string | null | undefined, media?: {
      data?: {
        id?: string | null | undefined,
        attributes?: { previewUrl?: string | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined
      } | null | undefined
    } | null | undefined
  }
};


type TabFragmentVariables = Exact<{ [key: string]: never; }>;

type HomeQueryVariables = Exact<{ [key: string]: never; }>;


type HomeQuery = {
  home?: {
    data?: {
      attributes?: {
        hero?: {
          id: string,
          button?: { id: string, title?: string | null | undefined, url: string, target: EnumComponentuilinkTarget } | null | undefined,
          heading?: {
            id: string,
            title?: string | null | undefined,
            subtitle?: string | null | undefined,
            description?: string | null | undefined,
            media?: {
              data?: {
                id?: string | null | undefined, attributes?: {
                  previewUrl?: string | null | undefined, alternativeText?: string | null | undefined, url: string
                } | null | undefined
              } | null | undefined
            } | null | undefined
          } | null | undefined
        } | null | undefined
      } | null | undefined
    } | null | undefined
  } | null | undefined
};

type MeQueryVariables = Exact<{ [key: string]: never; }>;


type MeQuery = { me?: { id: string } | null | undefined };
