import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  posts?: Maybe<Array<Maybe<Post>>>;
};


export type CategoryPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CategoryAggregator = {
  __typename?: 'CategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  values?: Maybe<Array<Maybe<Category>>>;
  groupBy?: Maybe<CategoryGroupBy>;
  aggregate?: Maybe<CategoryAggregator>;
};

export type CategoryConnectionId = {
  __typename?: 'CategoryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionName = {
  __typename?: 'CategoryConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionSlug = {
  __typename?: 'CategoryConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  name?: Maybe<Array<Maybe<CategoryConnectionName>>>;
  slug?: Maybe<Array<Maybe<CategoryConnectionSlug>>>;
};

export type CategoryInput = {
  name: Scalars['String'];
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentAtomsButton = {
  __typename?: 'ComponentAtomsButton';
  id: Scalars['ID'];
  link?: Maybe<ComponentAtomsLink>;
  simpleIcon?: Maybe<Scalars['String']>;
};

export type ComponentAtomsButtonInput = {
  link: ComponentAtomsLinkInput;
  simpleIcon?: Maybe<Scalars['String']>;
};

/** Key-Value entry */
export type ComponentAtomsEntry = {
  __typename?: 'ComponentAtomsEntry';
  id: Scalars['ID'];
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type ComponentAtomsEntryInput = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type ComponentAtomsLink = {
  __typename?: 'ComponentAtomsLink';
  id: Scalars['ID'];
  extra?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  text: Scalars['String'];
};

export type ComponentAtomsLinkInput = {
  extra?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  text: Scalars['String'];
};

export type ComponentAtomsNumeric = {
  __typename?: 'ComponentAtomsNumeric';
  id: Scalars['ID'];
  value: Scalars['Float'];
  unit?: Maybe<Scalars['String']>;
};

export type ComponentAtomsNumericInput = {
  value: Scalars['Float'];
  unit?: Maybe<Scalars['String']>;
};

export type ComponentAtomsParagraph = {
  __typename?: 'ComponentAtomsParagraph';
  id: Scalars['ID'];
  lines?: Maybe<Array<Maybe<ComponentAtomsText>>>;
};

export type ComponentAtomsParagraphInput = {
  lines?: Maybe<Array<Maybe<ComponentAtomsTextInput>>>;
};

/** Text node */
export type ComponentAtomsText = {
  __typename?: 'ComponentAtomsText';
  id: Scalars['ID'];
  value: Scalars['String'];
};

export type ComponentAtomsTextInput = {
  value: Scalars['String'];
};

/** Collection<Entry> */
export type ComponentMoleculesMap = {
  __typename?: 'ComponentMoleculesMap';
  id: Scalars['ID'];
  entries?: Maybe<Array<Maybe<ComponentAtomsEntry>>>;
  slug: Scalars['String'];
};

export type ComponentMoleculesMapInput = {
  entries?: Maybe<Array<Maybe<ComponentAtomsEntryInput>>>;
  slug: Scalars['String'];
};

export type ComponentMoleculesMenu = {
  __typename?: 'ComponentMoleculesMenu';
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentAtomsLink>>>;
  slug: Scalars['String'];
};

export type ComponentMoleculesMenuInput = {
  links?: Maybe<Array<Maybe<ComponentAtomsLinkInput>>>;
  slug?: Maybe<Scalars['String']>;
};

/** Content building block - defines section, slides, rows and columns and link or button */
export type ComponentOrganismsArticle = {
  __typename?: 'ComponentOrganismsArticle';
  id: Scalars['ID'];
  section?: Maybe<ComponentOrganismsSection>;
  cards?: Maybe<Array<Maybe<ComponentOrganismsSection>>>;
  entries?: Maybe<Array<Maybe<ComponentAtomsEntry>>>;
  link?: Maybe<ComponentAtomsLink>;
  slug: Scalars['String'];
};

export type ComponentOrganismsArticleInput = {
  section: ComponentOrganismsSectionInput;
  cards?: Maybe<Array<ComponentOrganismsSectionInput>>;
  entries?: Maybe<Array<Maybe<ComponentAtomsEntryInput>>>;
  link?: Maybe<ComponentAtomsLinkInput>;
  slug: Scalars['String'];
};

export type ComponentOrganismsPage = {
  __typename?: 'ComponentOrganismsPage';
  id: Scalars['ID'];
  meta?: Maybe<Array<Maybe<ComponentAtomsEntry>>>;
  uri: Scalars['String'];
};

export type ComponentOrganismsPageInput = {
  meta?: Maybe<Array<Maybe<ComponentAtomsEntryInput>>>;
  uri: Scalars['String'];
};

export type ComponentOrganismsSection = {
  __typename?: 'ComponentOrganismsSection';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  media?: Maybe<UploadFile>;
  active?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type ComponentOrganismsSectionInput = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['ID']>;
  active?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type ContactFormRequest = {
  __typename?: 'ContactFormRequest';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  message?: Maybe<Scalars['String']>;
};

export type ContactFormRequestAggregator = {
  __typename?: 'ContactFormRequestAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContactFormRequestConnection = {
  __typename?: 'ContactFormRequestConnection';
  values?: Maybe<Array<Maybe<ContactFormRequest>>>;
  groupBy?: Maybe<ContactFormRequestGroupBy>;
  aggregate?: Maybe<ContactFormRequestAggregator>;
};

export type ContactFormRequestConnectionCountry = {
  __typename?: 'ContactFormRequestConnectionCountry';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ContactFormRequestConnection>;
};

export type ContactFormRequestConnectionEmail = {
  __typename?: 'ContactFormRequestConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactFormRequestConnection>;
};

export type ContactFormRequestConnectionFirstName = {
  __typename?: 'ContactFormRequestConnectionFirstName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactFormRequestConnection>;
};

export type ContactFormRequestConnectionId = {
  __typename?: 'ContactFormRequestConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ContactFormRequestConnection>;
};

export type ContactFormRequestConnectionLastName = {
  __typename?: 'ContactFormRequestConnectionLastName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactFormRequestConnection>;
};

export type ContactFormRequestConnectionMessage = {
  __typename?: 'ContactFormRequestConnectionMessage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactFormRequestConnection>;
};

export type ContactFormRequestGroupBy = {
  __typename?: 'ContactFormRequestGroupBy';
  id?: Maybe<Array<Maybe<ContactFormRequestConnectionId>>>;
  email?: Maybe<Array<Maybe<ContactFormRequestConnectionEmail>>>;
  firstName?: Maybe<Array<Maybe<ContactFormRequestConnectionFirstName>>>;
  lastName?: Maybe<Array<Maybe<ContactFormRequestConnectionLastName>>>;
  country?: Maybe<Array<Maybe<ContactFormRequestConnectionCountry>>>;
  message?: Maybe<Array<Maybe<ContactFormRequestConnectionMessage>>>;
};

export type ContactFormRequestInput = {
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Content = {
  __typename?: 'Content';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<ComponentOrganismsSection>>>;
  table?: Maybe<Array<Maybe<ComponentMoleculesMap>>>;
  button?: Maybe<ComponentAtomsButton>;
  slug: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Content>>>;
  section?: Maybe<ComponentOrganismsSection>;
};


export type ContentLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ContentAggregator = {
  __typename?: 'ContentAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContentConnection = {
  __typename?: 'ContentConnection';
  values?: Maybe<Array<Maybe<Content>>>;
  groupBy?: Maybe<ContentGroupBy>;
  aggregate?: Maybe<ContentAggregator>;
};

export type ContentConnectionButton = {
  __typename?: 'ContentConnectionButton';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ContentConnection>;
};

export type ContentConnectionDescription = {
  __typename?: 'ContentConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContentConnection>;
};

export type ContentConnectionId = {
  __typename?: 'ContentConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ContentConnection>;
};

export type ContentConnectionLocale = {
  __typename?: 'ContentConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContentConnection>;
};

export type ContentConnectionSlug = {
  __typename?: 'ContentConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContentConnection>;
};

export type ContentConnectionTitle = {
  __typename?: 'ContentConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContentConnection>;
};

export type ContentGroupBy = {
  __typename?: 'ContentGroupBy';
  id?: Maybe<Array<Maybe<ContentConnectionId>>>;
  title?: Maybe<Array<Maybe<ContentConnectionTitle>>>;
  description?: Maybe<Array<Maybe<ContentConnectionDescription>>>;
  button?: Maybe<Array<Maybe<ContentConnectionButton>>>;
  slug?: Maybe<Array<Maybe<ContentConnectionSlug>>>;
  locale?: Maybe<Array<Maybe<ContentConnectionLocale>>>;
};

export type ContentInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<ComponentOrganismsSectionInput>>>;
  table?: Maybe<Array<Maybe<ComponentMoleculesMapInput>>>;
  button?: Maybe<ComponentAtomsButtonInput>;
  slug: Scalars['String'];
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
};

export type CountryAggregator = {
  __typename?: 'CountryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  values?: Maybe<Array<Maybe<Country>>>;
  groupBy?: Maybe<CountryGroupBy>;
  aggregate?: Maybe<CountryAggregator>;
};

export type CountryConnectionCode = {
  __typename?: 'CountryConnectionCode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryConnectionId = {
  __typename?: 'CountryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryConnectionName = {
  __typename?: 'CountryConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryGroupBy = {
  __typename?: 'CountryGroupBy';
  id?: Maybe<Array<Maybe<CountryConnectionId>>>;
  name?: Maybe<Array<Maybe<CountryConnectionName>>>;
  code?: Maybe<Array<Maybe<CountryConnectionCode>>>;
};

export type CountryInput = {
  name: Scalars['String'];
  code: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type EmailDesignerEmailTemplate = {
  __typename?: 'EmailDesignerEmailTemplate';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  design?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  bodyHtml?: Maybe<Scalars['String']>;
  bodyText?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
};

export type EmailTemplateInput = {
  design?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  bodyHtml?: Maybe<Scalars['String']>;
  bodyText?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Employee = {
  __typename?: 'Employee';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  photo?: Maybe<UploadFile>;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type InputId = {
  id: Scalars['ID'];
};


export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Employee | Category | CategoryConnection | CategoryAggregator | CategoryGroupBy | CategoryConnectionId | CategoryConnectionName | CategoryConnectionSlug | CreateCategoryPayload | UpdateCategoryPayload | DeleteCategoryPayload | ContactFormRequest | ContactFormRequestConnection | ContactFormRequestAggregator | ContactFormRequestGroupBy | ContactFormRequestConnectionId | ContactFormRequestConnectionEmail | ContactFormRequestConnectionFirstName | ContactFormRequestConnectionLastName | ContactFormRequestConnectionCountry | ContactFormRequestConnectionMessage | CreateContactFormRequestPayload | UpdateContactFormRequestPayload | DeleteContactFormRequestPayload | Content | ContentConnection | ContentAggregator | ContentGroupBy | ContentConnectionId | ContentConnectionTitle | ContentConnectionDescription | ContentConnectionButton | ContentConnectionSlug | ContentConnectionLocale | CreateContentPayload | UpdateContentPayload | DeleteContentPayload | Country | CountryConnection | CountryAggregator | CountryGroupBy | CountryConnectionId | CountryConnectionName | CountryConnectionCode | CreateCountryPayload | UpdateCountryPayload | DeleteCountryPayload | Post | PostConnection | PostAggregator | PostGroupBy | PostConnectionId | PostConnectionCategory | PostConnectionSlug | PostConnectionSeo | PostConnectionSection | PostConnectionPreviewHorizontal | PostConnectionPreviewVertical | CreatePostPayload | UpdatePostPayload | DeletePostPayload | Website | WebsiteConnection | WebsiteAggregator | WebsiteGroupBy | WebsiteConnectionId | WebsiteConnectionDomain | WebsiteConnectionGoogleAnalyticsCode | CreateWebsitePayload | UpdateWebsitePayload | DeleteWebsitePayload | EmailDesignerEmailTemplate | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionFirstName | UsersPermissionsUserConnectionLastName | UsersPermissionsUserConnectionPhoto | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentAtomsButton | ComponentAtomsEntry | ComponentAtomsLink | ComponentAtomsNumeric | ComponentAtomsParagraph | ComponentAtomsText | ComponentMoleculesMap | ComponentMoleculesMenu | ComponentOrganismsArticle | ComponentOrganismsPage | ComponentOrganismsSection;

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<CreateCategoryPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  createContactFormRequest?: Maybe<CreateContactFormRequestPayload>;
  updateContactFormRequest?: Maybe<UpdateContactFormRequestPayload>;
  deleteContactFormRequest?: Maybe<DeleteContactFormRequestPayload>;
  createContent?: Maybe<CreateContentPayload>;
  updateContent?: Maybe<UpdateContentPayload>;
  deleteContent?: Maybe<DeleteContentPayload>;
  createCountry?: Maybe<CreateCountryPayload>;
  updateCountry?: Maybe<UpdateCountryPayload>;
  deleteCountry?: Maybe<DeleteCountryPayload>;
  createPost?: Maybe<CreatePostPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  createWebsite?: Maybe<CreateWebsitePayload>;
  updateWebsite?: Maybe<UpdateWebsitePayload>;
  deleteWebsite?: Maybe<DeleteWebsitePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  createContentLocalization: Content;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateCategoryArgs = {
  input?: Maybe<CreateCategoryInput>;
};


export type MutationUpdateCategoryArgs = {
  input?: Maybe<UpdateCategoryInput>;
};


export type MutationDeleteCategoryArgs = {
  input?: Maybe<DeleteCategoryInput>;
};


export type MutationCreateContactFormRequestArgs = {
  input?: Maybe<CreateContactFormRequestInput>;
};


export type MutationUpdateContactFormRequestArgs = {
  input?: Maybe<UpdateContactFormRequestInput>;
};


export type MutationDeleteContactFormRequestArgs = {
  input?: Maybe<DeleteContactFormRequestInput>;
};


export type MutationCreateContentArgs = {
  input?: Maybe<CreateContentInput>;
};


export type MutationUpdateContentArgs = {
  input?: Maybe<UpdateContentInput>;
};


export type MutationDeleteContentArgs = {
  input?: Maybe<DeleteContentInput>;
};


export type MutationCreateCountryArgs = {
  input?: Maybe<CreateCountryInput>;
};


export type MutationUpdateCountryArgs = {
  input?: Maybe<UpdateCountryInput>;
};


export type MutationDeleteCountryArgs = {
  input?: Maybe<DeleteCountryInput>;
};


export type MutationCreatePostArgs = {
  input?: Maybe<CreatePostInput>;
};


export type MutationUpdatePostArgs = {
  input?: Maybe<UpdatePostInput>;
};


export type MutationDeletePostArgs = {
  input?: Maybe<DeletePostInput>;
};


export type MutationCreateWebsiteArgs = {
  input?: Maybe<CreateWebsiteInput>;
};


export type MutationUpdateWebsiteArgs = {
  input?: Maybe<UpdateWebsiteInput>;
};


export type MutationDeleteWebsiteArgs = {
  input?: Maybe<DeleteWebsiteInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationCreateContentLocalizationArgs = {
  input: UpdateContentInput;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  category?: Maybe<Category>;
  slug: Scalars['String'];
  seo?: Maybe<ComponentOrganismsPage>;
  section?: Maybe<ComponentOrganismsSection>;
  previewHorizontal?: Maybe<UploadFile>;
  previewVertical?: Maybe<UploadFile>;
};

export type PostAggregator = {
  __typename?: 'PostAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  values?: Maybe<Array<Maybe<Post>>>;
  groupBy?: Maybe<PostGroupBy>;
  aggregate?: Maybe<PostAggregator>;
};

export type PostConnectionCategory = {
  __typename?: 'PostConnectionCategory';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionId = {
  __typename?: 'PostConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionPreviewHorizontal = {
  __typename?: 'PostConnectionPreviewHorizontal';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionPreviewVertical = {
  __typename?: 'PostConnectionPreviewVertical';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionSection = {
  __typename?: 'PostConnectionSection';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionSeo = {
  __typename?: 'PostConnectionSeo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionSlug = {
  __typename?: 'PostConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostConnection>;
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  id?: Maybe<Array<Maybe<PostConnectionId>>>;
  category?: Maybe<Array<Maybe<PostConnectionCategory>>>;
  slug?: Maybe<Array<Maybe<PostConnectionSlug>>>;
  seo?: Maybe<Array<Maybe<PostConnectionSeo>>>;
  section?: Maybe<Array<Maybe<PostConnectionSection>>>;
  previewHorizontal?: Maybe<Array<Maybe<PostConnectionPreviewHorizontal>>>;
  previewVertical?: Maybe<Array<Maybe<PostConnectionPreviewVertical>>>;
};

export type PostInput = {
  category?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  seo?: Maybe<ComponentOrganismsPageInput>;
  section: ComponentOrganismsSectionInput;
  previewHorizontal?: Maybe<Scalars['ID']>;
  previewVertical?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  category?: Maybe<Category>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesConnection?: Maybe<CategoryConnection>;
  contactFormRequest?: Maybe<ContactFormRequest>;
  contactFormRequests?: Maybe<Array<Maybe<ContactFormRequest>>>;
  contactFormRequestsConnection?: Maybe<ContactFormRequestConnection>;
  content?: Maybe<Content>;
  contents?: Maybe<Array<Maybe<Content>>>;
  contentsConnection?: Maybe<ContentConnection>;
  country?: Maybe<Country>;
  countries?: Maybe<Array<Maybe<Country>>>;
  countriesConnection?: Maybe<CountryConnection>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  postsConnection?: Maybe<PostConnection>;
  website?: Maybe<Website>;
  websites?: Maybe<Array<Maybe<Website>>>;
  websitesConnection?: Maybe<WebsiteConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
  employees: Array<Maybe<Employee>>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryContactFormRequestArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryContactFormRequestsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryContactFormRequestsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryContentArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryContentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryContentsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCountriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCountriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryWebsiteArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryWebsitesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryWebsitesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  role?: Maybe<UsersPermissionsRole>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  photo?: Maybe<UploadFile>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionFirstName = {
  __typename?: 'UsersPermissionsUserConnectionFirstName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionLastName = {
  __typename?: 'UsersPermissionsUserConnectionLastName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionPhoto = {
  __typename?: 'UsersPermissionsUserConnectionPhoto';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  firstName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionFirstName>>>;
  lastName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionLastName>>>;
  photo?: Maybe<Array<Maybe<UsersPermissionsUserConnectionPhoto>>>;
};

export type Website = {
  __typename?: 'Website';
  id: Scalars['ID'];
  navigation?: Maybe<Array<Maybe<ComponentMoleculesMenu>>>;
  domain: Scalars['String'];
  meta?: Maybe<Array<Maybe<ComponentMoleculesMap>>>;
  redirects?: Maybe<Array<Maybe<ComponentMoleculesMap>>>;
  googleAnalyticsCode?: Maybe<Scalars['String']>;
};

export type WebsiteAggregator = {
  __typename?: 'WebsiteAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WebsiteConnection = {
  __typename?: 'WebsiteConnection';
  values?: Maybe<Array<Maybe<Website>>>;
  groupBy?: Maybe<WebsiteGroupBy>;
  aggregate?: Maybe<WebsiteAggregator>;
};

export type WebsiteConnectionDomain = {
  __typename?: 'WebsiteConnectionDomain';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WebsiteConnection>;
};

export type WebsiteConnectionGoogleAnalyticsCode = {
  __typename?: 'WebsiteConnectionGoogleAnalyticsCode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WebsiteConnection>;
};

export type WebsiteConnectionId = {
  __typename?: 'WebsiteConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<WebsiteConnection>;
};

export type WebsiteGroupBy = {
  __typename?: 'WebsiteGroupBy';
  id?: Maybe<Array<Maybe<WebsiteConnectionId>>>;
  domain?: Maybe<Array<Maybe<WebsiteConnectionDomain>>>;
  googleAnalyticsCode?: Maybe<Array<Maybe<WebsiteConnectionGoogleAnalyticsCode>>>;
};

export type WebsiteInput = {
  navigation?: Maybe<Array<Maybe<ComponentMoleculesMenuInput>>>;
  domain: Scalars['String'];
  meta?: Maybe<Array<ComponentMoleculesMapInput>>;
  redirects?: Maybe<Array<Maybe<ComponentMoleculesMapInput>>>;
  googleAnalyticsCode?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCategoryInput = {
  data?: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
};

export type CreateContactFormRequestInput = {
  data?: Maybe<ContactFormRequestInput>;
};

export type CreateContactFormRequestPayload = {
  __typename?: 'createContactFormRequestPayload';
  contactFormRequest?: Maybe<ContactFormRequest>;
};

export type CreateContentInput = {
  data?: Maybe<ContentInput>;
};

export type CreateContentPayload = {
  __typename?: 'createContentPayload';
  content?: Maybe<Content>;
};

export type CreateCountryInput = {
  data?: Maybe<CountryInput>;
};

export type CreateCountryPayload = {
  __typename?: 'createCountryPayload';
  country?: Maybe<Country>;
};

export type CreatePostInput = {
  data?: Maybe<PostInput>;
};

export type CreatePostPayload = {
  __typename?: 'createPostPayload';
  post?: Maybe<Post>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateWebsiteInput = {
  data?: Maybe<WebsiteInput>;
};

export type CreateWebsitePayload = {
  __typename?: 'createWebsitePayload';
  website?: Maybe<Website>;
};

export type DeleteCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
};

export type DeleteContactFormRequestInput = {
  where?: Maybe<InputId>;
};

export type DeleteContactFormRequestPayload = {
  __typename?: 'deleteContactFormRequestPayload';
  contactFormRequest?: Maybe<ContactFormRequest>;
};

export type DeleteContentInput = {
  where?: Maybe<InputId>;
};

export type DeleteContentPayload = {
  __typename?: 'deleteContentPayload';
  content?: Maybe<Content>;
};

export type DeleteCountryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCountryPayload = {
  __typename?: 'deleteCountryPayload';
  country?: Maybe<Country>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeletePostInput = {
  where?: Maybe<InputId>;
};

export type DeletePostPayload = {
  __typename?: 'deletePostPayload';
  post?: Maybe<Post>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteWebsiteInput = {
  where?: Maybe<InputId>;
};

export type DeleteWebsitePayload = {
  __typename?: 'deleteWebsitePayload';
  website?: Maybe<Website>;
};

export type EditCategoryInput = {
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentAtomsButtonInput = {
  id?: Maybe<Scalars['ID']>;
  link?: Maybe<EditComponentAtomsLinkInput>;
  simpleIcon?: Maybe<Scalars['String']>;
};

export type EditComponentAtomsEntryInput = {
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type EditComponentAtomsLinkInput = {
  id?: Maybe<Scalars['ID']>;
  extra?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type EditComponentAtomsNumericInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type EditComponentAtomsParagraphInput = {
  id?: Maybe<Scalars['ID']>;
  lines?: Maybe<Array<Maybe<EditComponentAtomsTextInput>>>;
};

export type EditComponentAtomsTextInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};

export type EditComponentMoleculesMapInput = {
  id?: Maybe<Scalars['ID']>;
  entries?: Maybe<Array<Maybe<EditComponentAtomsEntryInput>>>;
  slug?: Maybe<Scalars['String']>;
};

export type EditComponentMoleculesMenuInput = {
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<EditComponentAtomsLinkInput>>>;
  slug?: Maybe<Scalars['String']>;
};

export type EditComponentOrganismsArticleInput = {
  id?: Maybe<Scalars['ID']>;
  section?: Maybe<EditComponentOrganismsSectionInput>;
  cards?: Maybe<Array<Maybe<EditComponentOrganismsSectionInput>>>;
  entries?: Maybe<Array<Maybe<EditComponentAtomsEntryInput>>>;
  link?: Maybe<EditComponentAtomsLinkInput>;
  slug?: Maybe<Scalars['String']>;
};

export type EditComponentOrganismsPageInput = {
  id?: Maybe<Scalars['ID']>;
  meta?: Maybe<Array<Maybe<EditComponentAtomsEntryInput>>>;
  uri?: Maybe<Scalars['String']>;
};

export type EditComponentOrganismsSectionInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['ID']>;
  active?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type EditContactFormRequestInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditContentInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<EditComponentOrganismsSectionInput>>>;
  table?: Maybe<Array<Maybe<EditComponentMoleculesMapInput>>>;
  button?: Maybe<EditComponentAtomsButtonInput>;
  slug?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCountryInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditEmailTemplateInput = {
  design?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  bodyHtml?: Maybe<Scalars['String']>;
  bodyText?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPostInput = {
  category?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  seo?: Maybe<EditComponentOrganismsPageInput>;
  section?: Maybe<EditComponentOrganismsSectionInput>;
  previewHorizontal?: Maybe<Scalars['ID']>;
  previewVertical?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditWebsiteInput = {
  navigation?: Maybe<Array<Maybe<EditComponentMoleculesMenuInput>>>;
  domain?: Maybe<Scalars['String']>;
  meta?: Maybe<Array<Maybe<EditComponentMoleculesMapInput>>>;
  redirects?: Maybe<Array<Maybe<EditComponentMoleculesMapInput>>>;
  googleAnalyticsCode?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCategoryInput>;
};

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
};

export type UpdateContactFormRequestInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditContactFormRequestInput>;
};

export type UpdateContactFormRequestPayload = {
  __typename?: 'updateContactFormRequestPayload';
  contactFormRequest?: Maybe<ContactFormRequest>;
};

export type UpdateContentInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditContentInput>;
};

export type UpdateContentPayload = {
  __typename?: 'updateContentPayload';
  content?: Maybe<Content>;
};

export type UpdateCountryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCountryInput>;
};

export type UpdateCountryPayload = {
  __typename?: 'updateCountryPayload';
  country?: Maybe<Country>;
};

export type UpdatePostInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPostInput>;
};

export type UpdatePostPayload = {
  __typename?: 'updatePostPayload';
  post?: Maybe<Post>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateWebsiteInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditWebsiteInput>;
};

export type UpdateWebsitePayload = {
  __typename?: 'updateWebsitePayload';
  website?: Maybe<Website>;
};

export type ContentQueryVariables = Exact<{
  where?: Maybe<Scalars['JSON']>;
}>;


export type ContentQuery = (
  { __typename?: 'Query' }
  & { contents?: Maybe<Array<Maybe<(
    { __typename?: 'Content' }
    & Pick<Content, 'id'>
    & ContentFragment
  )>>> }
);

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = (
  { __typename?: 'Query' }
  & { countries?: Maybe<Array<Maybe<(
    { __typename?: 'Country' }
    & Pick<Country, 'id' | 'name' | 'code'>
  )>>> }
);

export type CreateContactFormRequestMutationVariables = Exact<{
  input?: Maybe<CreateContactFormRequestInput>;
}>;


export type CreateContactFormRequestMutation = (
  { __typename?: 'Mutation' }
  & { createContactFormRequest?: Maybe<(
    { __typename?: 'createContactFormRequestPayload' }
    & { contactFormRequest?: Maybe<(
      { __typename?: 'ContactFormRequest' }
      & Pick<ContactFormRequest, 'id' | 'email' | 'firstName' | 'lastName' | 'message'>
      & { country?: Maybe<(
        { __typename?: 'Country' }
        & Pick<Country, 'id' | 'name' | 'code'>
      )> }
    )> }
  )> }
);

export type LoginMutationVariables = Exact<{
  credentials: UsersPermissionsLoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & Pick<UsersPermissionsLoginPayload, 'jwt'>
  ) }
);

export type RegisterMutationVariables = Exact<{
  user: UsersPermissionsRegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & { user: (
      { __typename?: 'UsersPermissionsMe' }
      & Pick<UsersPermissionsMe, 'id' | 'email' | 'username'>
    ) }
  ) }
);

export type WebsiteQueryVariables = Exact<{
  where?: Maybe<Scalars['JSON']>;
}>;


export type WebsiteQuery = (
  { __typename?: 'Query' }
  & { websites?: Maybe<Array<Maybe<(
    { __typename?: 'Website' }
    & Pick<Website, 'id'>
    & WebsiteFragment
  )>>> }
);

export type ButtonFragment = (
  { __typename?: 'ComponentAtomsButton' }
  & Pick<ComponentAtomsButton, 'id' | 'simpleIcon'>
  & { link?: Maybe<(
    { __typename?: 'ComponentAtomsLink' }
    & LinkFragment
  )> }
);

export type ContentFragment = (
  { __typename?: 'Content' }
  & Pick<Content, 'id' | 'title' | 'description' | 'slug'>
  & { button?: Maybe<(
    { __typename?: 'ComponentAtomsButton' }
    & ButtonFragment
  )>, section?: Maybe<(
    { __typename?: 'ComponentOrganismsSection' }
    & SectionFragment
  )>, sections?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentOrganismsSection' }
    & SectionFragment
  )>>>, table?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentMoleculesMap' }
    & MapFragment
  )>>> }
);

export type CountryFragment = (
  { __typename?: 'Country' }
  & Pick<Country, 'id' | 'name' | 'code'>
);

export type EntryFragment = (
  { __typename?: 'ComponentAtomsEntry' }
  & Pick<ComponentAtomsEntry, 'id' | 'key' | 'value'>
);

export type FileFragment = (
  { __typename?: 'UploadFile' }
  & Pick<UploadFile, 'id' | 'alternativeText' | 'caption' | 'name' | 'previewUrl' | 'size' | 'url' | 'height' | 'width'>
);

export type LinkFragment = (
  { __typename?: 'ComponentAtomsLink' }
  & Pick<ComponentAtomsLink, 'id' | 'text' | 'extra' | 'url'>
);

export type MapFragment = (
  { __typename?: 'ComponentMoleculesMap' }
  & Pick<ComponentMoleculesMap, 'id' | 'slug'>
  & { entries?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentAtomsEntry' }
    & EntryFragment
  )>>> }
);

export type NumericFragment = (
  { __typename?: 'ComponentAtomsNumeric' }
  & Pick<ComponentAtomsNumeric, 'id' | 'value' | 'unit'>
);

export type SectionFragment = (
  { __typename?: 'ComponentOrganismsSection' }
  & Pick<ComponentOrganismsSection, 'id' | 'title' | 'subTitle' | 'active' | 'description' | 'extra' | 'backgroundColor' | 'text' | 'slug'>
  & { media?: Maybe<(
    { __typename?: 'UploadFile' }
    & FileFragment
  )> }
);

export type TextFragment = (
  { __typename?: 'ComponentAtomsText' }
  & Pick<ComponentAtomsText, 'id' | 'value'>
);

export type WebsiteFragment = (
  { __typename?: 'Website' }
  & Pick<Website, 'id' | 'domain'>
  & { navigation?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentMoleculesMenu' }
    & Pick<ComponentMoleculesMenu, 'id' | 'slug'>
    & { links?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentAtomsLink' }
      & LinkFragment
    )>>> }
  )>>>, meta?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentMoleculesMap' }
    & Pick<ComponentMoleculesMap, 'id' | 'slug'>
    & { entries?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentAtomsEntry' }
      & EntryFragment
    )>>> }
  )>>>, redirects?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentMoleculesMap' }
    & Pick<ComponentMoleculesMap, 'id' | 'slug'>
    & { entries?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentAtomsEntry' }
      & EntryFragment
    )>>> }
  )>>> }
);

export const LinkFragmentDoc = gql`
    fragment Link on ComponentAtomsLink {
  id
  text
  extra
  url
}
    `;
export const ButtonFragmentDoc = gql`
    fragment Button on ComponentAtomsButton {
  id
  link {
    ...Link
  }
  simpleIcon
}
    ${LinkFragmentDoc}`;
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
    `;
export const SectionFragmentDoc = gql`
    fragment Section on ComponentOrganismsSection {
  id
  title
  subTitle
  active
  description
  extra
  backgroundColor
  text
  slug
  media {
    ...File
  }
}
    ${FileFragmentDoc}`;
export const EntryFragmentDoc = gql`
    fragment Entry on ComponentAtomsEntry {
  id
  key
  value
}
    `;
export const MapFragmentDoc = gql`
    fragment Map on ComponentMoleculesMap {
  id
  slug
  entries {
    ...Entry
  }
}
    ${EntryFragmentDoc}`;
export const ContentFragmentDoc = gql`
    fragment Content on Content {
  id
  title
  description
  slug
  button {
    ...Button
  }
  section {
    ...Section
  }
  sections {
    ...Section
  }
  table {
    ...Map
  }
}
    ${ButtonFragmentDoc}
${SectionFragmentDoc}
${MapFragmentDoc}`;
export const CountryFragmentDoc = gql`
    fragment Country on Country {
  id
  name
  code
}
    `;
export const NumericFragmentDoc = gql`
    fragment Numeric on ComponentAtomsNumeric {
  id
  value
  unit
}
    `;
export const TextFragmentDoc = gql`
    fragment Text on ComponentAtomsText {
  id
  value
}
    `;
export const WebsiteFragmentDoc = gql`
    fragment Website on Website {
  id
  domain
  navigation {
    id
    slug
    links {
      ...Link
    }
  }
  meta {
    id
    slug
    entries {
      ...Entry
    }
  }
  redirects {
    id
    slug
    entries {
      ...Entry
    }
  }
}
    ${LinkFragmentDoc}
${EntryFragmentDoc}`;
export const ContentDocument = gql`
    query content($where: JSON) {
  contents(where: $where, publicationState: LIVE) {
    id
    ...Content
  }
}
    ${ContentFragmentDoc}`;
export type ContentComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ContentQuery, ContentQueryVariables>, 'query'>;

    export const ContentComponent = (props: ContentComponentProps) => (
      <ApolloReactComponents.Query<ContentQuery, ContentQueryVariables> query={ContentDocument} {...props} />
    );
    

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
 *      where: // value for 'where'
 *   },
 * });
 */
export function useContentQuery(baseOptions?: Apollo.QueryHookOptions<ContentQuery, ContentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContentQuery, ContentQueryVariables>(ContentDocument, options);
      }
export function useContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentQuery, ContentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContentQuery, ContentQueryVariables>(ContentDocument, options);
        }
export type ContentQueryHookResult = ReturnType<typeof useContentQuery>;
export type ContentLazyQueryHookResult = ReturnType<typeof useContentLazyQuery>;
export type ContentQueryResult = Apollo.QueryResult<ContentQuery, ContentQueryVariables>;
export const CountriesDocument = gql`
    query countries {
  countries {
    id
    name
    code
  }
}
    `;
export type CountriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CountriesQuery, CountriesQueryVariables>, 'query'>;

    export const CountriesComponent = (props: CountriesComponentProps) => (
      <ApolloReactComponents.Query<CountriesQuery, CountriesQueryVariables> query={CountriesDocument} {...props} />
    );
    

/**
 * __useCountriesQuery__
 *
 * To run a query within a React component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesQuery(baseOptions?: Apollo.QueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
      }
export function useCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
        }
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>;
export type CountriesLazyQueryHookResult = ReturnType<typeof useCountriesLazyQuery>;
export type CountriesQueryResult = Apollo.QueryResult<CountriesQuery, CountriesQueryVariables>;
export const CreateContactFormRequestDocument = gql`
    mutation createContactFormRequest($input: createContactFormRequestInput) {
  createContactFormRequest(input: $input) {
    contactFormRequest {
      id
      email
      country {
        id
        name
        code
      }
      firstName
      lastName
      message
    }
  }
}
    `;
export type CreateContactFormRequestMutationFn = Apollo.MutationFunction<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables>;
export type CreateContactFormRequestComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables>, 'mutation'>;

    export const CreateContactFormRequestComponent = (props: CreateContactFormRequestComponentProps) => (
      <ApolloReactComponents.Mutation<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables> mutation={CreateContactFormRequestDocument} {...props} />
    );
    

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
export function useCreateContactFormRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables>(CreateContactFormRequestDocument, options);
      }
export type CreateContactFormRequestMutationHookResult = ReturnType<typeof useCreateContactFormRequestMutation>;
export type CreateContactFormRequestMutationResult = Apollo.MutationResult<CreateContactFormRequestMutation>;
export type CreateContactFormRequestMutationOptions = Apollo.BaseMutationOptions<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables>;
export const LoginDocument = gql`
    mutation login($credentials: UsersPermissionsLoginInput!) {
  login(input: $credentials) {
    jwt
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
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
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    

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
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const WebsiteDocument = gql`
    query website($where: JSON) {
  websites(where: $where, limit: 1) {
    id
    ...Website
  }
}
    ${WebsiteFragmentDoc}`;
export type WebsiteComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<WebsiteQuery, WebsiteQueryVariables>, 'query'>;

    export const WebsiteComponent = (props: WebsiteComponentProps) => (
      <ApolloReactComponents.Query<WebsiteQuery, WebsiteQueryVariables> query={WebsiteDocument} {...props} />
    );
    

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
 *      where: // value for 'where'
 *   },
 * });
 */
export function useWebsiteQuery(baseOptions?: Apollo.QueryHookOptions<WebsiteQuery, WebsiteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options);
      }
export function useWebsiteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WebsiteQuery, WebsiteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options);
        }
export type WebsiteQueryHookResult = ReturnType<typeof useWebsiteQuery>;
export type WebsiteLazyQueryHookResult = ReturnType<typeof useWebsiteLazyQuery>;
export type WebsiteQueryResult = Apollo.QueryResult<WebsiteQuery, WebsiteQueryVariables>;