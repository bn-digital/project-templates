import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
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
  /** Input type for dynamic zone sections of Website */
  WebsiteSectionsDynamicZoneInput: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type ComponentAtomsAddress = {
  __typename?: 'ComponentAtomsAddress';
  id: Scalars['ID'];
  lines?: Maybe<Array<Maybe<ComponentAtomsText>>>;
  type?: Maybe<ComponentAtomsType>;
};

export type ComponentAtomsAddressInput = {
  lines?: Maybe<Array<Maybe<ComponentAtomsTextInput>>>;
  type: ComponentAtomsTypeInput;
};

export type ComponentAtomsButton = {
  __typename?: 'ComponentAtomsButton';
  id: Scalars['ID'];
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ComponentAtomsButtonInput = {
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ComponentAtomsEmail = {
  __typename?: 'ComponentAtomsEmail';
  id: Scalars['ID'];
  address: Scalars['String'];
  type?: Maybe<ComponentAtomsType>;
};

export type ComponentAtomsEmailInput = {
  address: Scalars['String'];
  type: ComponentAtomsTypeInput;
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

export type ComponentAtomsImage = {
  __typename?: 'ComponentAtomsImage';
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  background?: Maybe<Scalars['String']>;
};

export type ComponentAtomsImageInput = {
  image?: Maybe<Scalars['ID']>;
  background?: Maybe<Scalars['String']>;
};

export type ComponentAtomsLink = {
  __typename?: 'ComponentAtomsLink';
  id: Scalars['ID'];
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  icon?: Maybe<Array<Maybe<ComponentAtomsImage>>>;
};

export type ComponentAtomsLinkInput = {
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  icon?: Maybe<Array<Maybe<ComponentAtomsImageInput>>>;
};

export type ComponentAtomsMarkdown = {
  __typename?: 'ComponentAtomsMarkdown';
  id: Scalars['ID'];
  value?: Maybe<Scalars['String']>;
  properties?: Maybe<Scalars['JSON']>;
};

export type ComponentAtomsMarkdownInput = {
  value?: Maybe<Scalars['String']>;
  properties?: Maybe<Scalars['JSON']>;
};

export type ComponentAtomsMedia = {
  __typename?: 'ComponentAtomsMedia';
  id: Scalars['ID'];
  properties?: Maybe<Scalars['JSON']>;
  media?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ComponentAtomsMediaMediaArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentAtomsMediaInput = {
  media?: Maybe<Array<Maybe<Scalars['ID']>>>;
  properties?: Maybe<Scalars['JSON']>;
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
  children?: Maybe<Array<Maybe<ComponentAtomsText>>>;
};

export type ComponentAtomsParagraphInput = {
  children?: Maybe<Array<Maybe<ComponentAtomsTextInput>>>;
};

export type ComponentAtomsPhone = {
  __typename?: 'ComponentAtomsPhone';
  id: Scalars['ID'];
  number: Scalars['String'];
  type?: Maybe<ComponentAtomsType>;
};

export type ComponentAtomsPhoneInput = {
  number: Scalars['String'];
  type: ComponentAtomsTypeInput;
};

/** Text node */
export type ComponentAtomsText = {
  __typename?: 'ComponentAtomsText';
  id: Scalars['ID'];
  value: Scalars['String'];
  properties?: Maybe<Scalars['JSON']>;
};

export type ComponentAtomsTextInput = {
  value: Scalars['String'];
  properties?: Maybe<Scalars['JSON']>;
};

export type ComponentAtomsType = {
  __typename?: 'ComponentAtomsType';
  id: Scalars['ID'];
  contact?: Maybe<ContactType>;
};

export type ComponentAtomsTypeInput = {
  contact?: Maybe<ContactType>;
};

export type ComponentAtomsValue = {
  __typename?: 'ComponentAtomsValue';
  id: Scalars['ID'];
  value: Scalars['String'];
  type?: Maybe<ComponentAtomsType>;
};

export type ComponentAtomsValueInput = {
  value: Scalars['String'];
  type?: Maybe<ComponentAtomsTypeInput>;
};

export type ComponentMoleculesCard = {
  __typename?: 'ComponentMoleculesCard';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<ComponentAtomsImage>;
};

export type ComponentMoleculesCardInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<ComponentAtomsImageInput>;
};

/** Collection<Entry> */
export type ComponentMoleculesMap = {
  __typename?: 'ComponentMoleculesMap';
  id: Scalars['ID'];
  children?: Maybe<Array<Maybe<ComponentAtomsEntry>>>;
};

export type ComponentMoleculesMapInput = {
  children?: Maybe<Array<Maybe<ComponentAtomsEntryInput>>>;
};

export type ComponentMoleculesMenu = {
  __typename?: 'ComponentMoleculesMenu';
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentAtomsLink>>>;
  slug: Scalars['String'];
};

export type ComponentMoleculesMenuInput = {
  links?: Maybe<Array<Maybe<ComponentAtomsLinkInput>>>;
  slug: Scalars['String'];
};

export type ComponentOrganismsArticle = {
  __typename?: 'ComponentOrganismsArticle';
  id: Scalars['ID'];
  section?: Maybe<ComponentOrganismsSection>;
};

export type ComponentOrganismsArticleInput = {
  section?: Maybe<ComponentOrganismsSectionInput>;
};

export type ComponentOrganismsCallToAction = {
  __typename?: 'ComponentOrganismsCallToAction';
  id: Scalars['ID'];
  section?: Maybe<ComponentOrganismsSection>;
  button?: Maybe<ComponentAtomsButton>;
};

export type ComponentOrganismsCallToActionInput = {
  section: ComponentOrganismsSectionInput;
  button: ComponentAtomsButtonInput;
};

export type ComponentOrganismsDeck = {
  __typename?: 'ComponentOrganismsDeck';
  id: Scalars['ID'];
  cards?: Maybe<Array<Maybe<ComponentMoleculesCard>>>;
  section?: Maybe<ComponentOrganismsSection>;
  slug: Scalars['String'];
  active?: Maybe<Scalars['Boolean']>;
};

export type ComponentOrganismsDeckInput = {
  cards?: Maybe<Array<Maybe<ComponentMoleculesCardInput>>>;
  section?: Maybe<ComponentOrganismsSectionInput>;
  slug: Scalars['String'];
  active?: Maybe<Scalars['Boolean']>;
};

export type ComponentOrganismsFooter = {
  __typename?: 'ComponentOrganismsFooter';
  id: Scalars['ID'];
  value?: Maybe<Scalars['String']>;
  someNumber?: Maybe<Scalars['Int']>;
};

export type ComponentOrganismsFooterInput = {
  value?: Maybe<Scalars['String']>;
  someNumber?: Maybe<Scalars['Int']>;
};

export type ComponentOrganismsHero = {
  __typename?: 'ComponentOrganismsHero';
  id: Scalars['ID'];
  section?: Maybe<ComponentOrganismsSection>;
  button?: Maybe<ComponentAtomsButton>;
  media?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ComponentOrganismsHeroMediaArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentOrganismsHeroInput = {
  section: ComponentOrganismsSectionInput;
  button?: Maybe<ComponentAtomsButtonInput>;
  media?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ComponentOrganismsMetric = {
  __typename?: 'ComponentOrganismsMetric';
  id: Scalars['ID'];
  value?: Maybe<ComponentAtomsNumeric>;
  entry?: Maybe<ComponentAtomsEntry>;
};

export type ComponentOrganismsMetricInput = {
  value: ComponentAtomsNumericInput;
  entry: ComponentAtomsEntryInput;
};

export type ComponentOrganismsPage = {
  __typename?: 'ComponentOrganismsPage';
  id: Scalars['ID'];
  meta?: Maybe<Array<Maybe<ComponentAtomsEntry>>>;
  active?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
};

export type ComponentOrganismsPageInput = {
  meta?: Maybe<Array<Maybe<ComponentAtomsEntryInput>>>;
  active?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
};

export type ComponentOrganismsSection = {
  __typename?: 'ComponentOrganismsSection';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
};

export type ComponentOrganismsSectionInput = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
};

export type ContactFormRequest = {
  __typename?: 'ContactFormRequest';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  city: Scalars['String'];
  country?: Maybe<Country>;
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

export type ContactFormRequestConnectionCity = {
  __typename?: 'ContactFormRequestConnectionCity';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactFormRequestConnection>;
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

export type ContactFormRequestGroupBy = {
  __typename?: 'ContactFormRequestGroupBy';
  id?: Maybe<Array<Maybe<ContactFormRequestConnectionId>>>;
  email?: Maybe<Array<Maybe<ContactFormRequestConnectionEmail>>>;
  firstName?: Maybe<Array<Maybe<ContactFormRequestConnectionFirstName>>>;
  lastName?: Maybe<Array<Maybe<ContactFormRequestConnectionLastName>>>;
  city?: Maybe<Array<Maybe<ContactFormRequestConnectionCity>>>;
  country?: Maybe<Array<Maybe<ContactFormRequestConnectionCountry>>>;
};

export type ContactFormRequestInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  city: Scalars['String'];
  country?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum ContactType {
  BusinessEmail = 'BusinessEmail',
  PersonalEmail = 'PersonalEmail',
  ContactEmail = 'ContactEmail',
  CareersEmail = 'CareersEmail',
  BusinessAddress = 'BusinessAddress',
  PersonalAddress = 'PersonalAddress',
  MobilePhone = 'MobilePhone',
  PersonalPhone = 'PersonalPhone',
  BusinessPhone = 'BusinessPhone'
}

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


export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | ContactFormRequest | ContactFormRequestConnection | ContactFormRequestAggregator | ContactFormRequestGroupBy | ContactFormRequestConnectionId | ContactFormRequestConnectionEmail | ContactFormRequestConnectionFirstName | ContactFormRequestConnectionLastName | ContactFormRequestConnectionCity | ContactFormRequestConnectionCountry | CreateContactFormRequestPayload | UpdateContactFormRequestPayload | DeleteContactFormRequestPayload | Country | CountryConnection | CountryAggregator | CountryGroupBy | CountryConnectionId | CountryConnectionName | CountryConnectionCode | CreateCountryPayload | UpdateCountryPayload | DeleteCountryPayload | Website | WebsiteConnection | WebsiteAggregator | WebsiteGroupBy | WebsiteConnectionId | WebsiteConnectionSlug | CreateWebsitePayload | UpdateWebsitePayload | DeleteWebsitePayload | EmailDesignerEmailTemplate | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionFirstName | UsersPermissionsUserConnectionLastName | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentAtomsAddress | ComponentAtomsButton | ComponentAtomsEmail | ComponentAtomsEntry | ComponentAtomsImage | ComponentAtomsLink | ComponentAtomsMarkdown | ComponentAtomsMedia | ComponentAtomsNumeric | ComponentAtomsParagraph | ComponentAtomsPhone | ComponentAtomsText | ComponentAtomsType | ComponentAtomsValue | ComponentMoleculesCard | ComponentMoleculesMap | ComponentMoleculesMenu | ComponentOrganismsArticle | ComponentOrganismsCallToAction | ComponentOrganismsDeck | ComponentOrganismsFooter | ComponentOrganismsHero | ComponentOrganismsMetric | ComponentOrganismsPage | ComponentOrganismsSection;

export type Mutation = {
  __typename?: 'Mutation';
  createContactFormRequest?: Maybe<CreateContactFormRequestPayload>;
  updateContactFormRequest?: Maybe<UpdateContactFormRequestPayload>;
  deleteContactFormRequest?: Maybe<DeleteContactFormRequestPayload>;
  createCountry?: Maybe<CreateCountryPayload>;
  updateCountry?: Maybe<UpdateCountryPayload>;
  deleteCountry?: Maybe<DeleteCountryPayload>;
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
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
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


export type MutationCreateCountryArgs = {
  input?: Maybe<CreateCountryInput>;
};


export type MutationUpdateCountryArgs = {
  input?: Maybe<UpdateCountryInput>;
};


export type MutationDeleteCountryArgs = {
  input?: Maybe<DeleteCountryInput>;
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

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  contactFormRequest?: Maybe<ContactFormRequest>;
  contactFormRequests?: Maybe<Array<Maybe<ContactFormRequest>>>;
  contactFormRequestsConnection?: Maybe<ContactFormRequestConnection>;
  country?: Maybe<Country>;
  countries?: Maybe<Array<Maybe<Country>>>;
  countriesConnection?: Maybe<CountryConnection>;
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
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
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
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  role?: Maybe<UsersPermissionsRole>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
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

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
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

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
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
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  firstName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionFirstName>>>;
  lastName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionLastName>>>;
};

export type Website = {
  __typename?: 'Website';
  id: Scalars['ID'];
  sections?: Maybe<Array<Maybe<WebsiteSectionsDynamicZone>>>;
  navigation?: Maybe<Array<Maybe<ComponentMoleculesMenu>>>;
  pages?: Maybe<Array<Maybe<ComponentOrganismsPage>>>;
  slug: Scalars['String'];
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

export type WebsiteConnectionId = {
  __typename?: 'WebsiteConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<WebsiteConnection>;
};

export type WebsiteConnectionSlug = {
  __typename?: 'WebsiteConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WebsiteConnection>;
};

export type WebsiteGroupBy = {
  __typename?: 'WebsiteGroupBy';
  id?: Maybe<Array<Maybe<WebsiteConnectionId>>>;
  slug?: Maybe<Array<Maybe<WebsiteConnectionSlug>>>;
};

export type WebsiteInput = {
  sections?: Maybe<Array<Scalars['WebsiteSectionsDynamicZoneInput']>>;
  navigation?: Maybe<Array<Maybe<ComponentMoleculesMenuInput>>>;
  pages?: Maybe<Array<Maybe<ComponentOrganismsPageInput>>>;
  slug: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type WebsiteSectionsDynamicZone = ComponentOrganismsCallToAction | ComponentOrganismsHero | ComponentOrganismsDeck | ComponentOrganismsArticle;


export type CreateContactFormRequestInput = {
  data?: Maybe<ContactFormRequestInput>;
};

export type CreateContactFormRequestPayload = {
  __typename?: 'createContactFormRequestPayload';
  contactFormRequest?: Maybe<ContactFormRequest>;
};

export type CreateCountryInput = {
  data?: Maybe<CountryInput>;
};

export type CreateCountryPayload = {
  __typename?: 'createCountryPayload';
  country?: Maybe<Country>;
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

export type DeleteContactFormRequestInput = {
  where?: Maybe<InputId>;
};

export type DeleteContactFormRequestPayload = {
  __typename?: 'deleteContactFormRequestPayload';
  contactFormRequest?: Maybe<ContactFormRequest>;
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

export type EditComponentAtomsAddressInput = {
  id?: Maybe<Scalars['ID']>;
  lines?: Maybe<Array<Maybe<EditComponentAtomsTextInput>>>;
  type?: Maybe<EditComponentAtomsTypeInput>;
};

export type EditComponentAtomsButtonInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EditComponentAtomsEmailInput = {
  id?: Maybe<Scalars['ID']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EditComponentAtomsTypeInput>;
};

export type EditComponentAtomsEntryInput = {
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type EditComponentAtomsImageInput = {
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  background?: Maybe<Scalars['String']>;
};

export type EditComponentAtomsLinkInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  icon?: Maybe<Array<Maybe<EditComponentAtomsImageInput>>>;
};

export type EditComponentAtomsMarkdownInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
  properties?: Maybe<Scalars['JSON']>;
};

export type EditComponentAtomsMediaInput = {
  id?: Maybe<Scalars['ID']>;
  media?: Maybe<Array<Maybe<Scalars['ID']>>>;
  properties?: Maybe<Scalars['JSON']>;
};

export type EditComponentAtomsNumericInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type EditComponentAtomsParagraphInput = {
  id?: Maybe<Scalars['ID']>;
  children?: Maybe<Array<Maybe<EditComponentAtomsTextInput>>>;
};

export type EditComponentAtomsPhoneInput = {
  id?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['String']>;
  type?: Maybe<EditComponentAtomsTypeInput>;
};

export type EditComponentAtomsTextInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
  properties?: Maybe<Scalars['JSON']>;
};

export type EditComponentAtomsTypeInput = {
  id?: Maybe<Scalars['ID']>;
  contact?: Maybe<ContactType>;
};

export type EditComponentAtomsValueInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
  type?: Maybe<EditComponentAtomsTypeInput>;
};

export type EditComponentMoleculesCardInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<EditComponentAtomsImageInput>;
};

export type EditComponentMoleculesMapInput = {
  id?: Maybe<Scalars['ID']>;
  children?: Maybe<Array<Maybe<EditComponentAtomsEntryInput>>>;
};

export type EditComponentMoleculesMenuInput = {
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<EditComponentAtomsLinkInput>>>;
  slug?: Maybe<Scalars['String']>;
};

export type EditComponentOrganismsArticleInput = {
  id?: Maybe<Scalars['ID']>;
  section?: Maybe<EditComponentOrganismsSectionInput>;
};

export type EditComponentOrganismsCallToActionInput = {
  id?: Maybe<Scalars['ID']>;
  section?: Maybe<EditComponentOrganismsSectionInput>;
  button?: Maybe<EditComponentAtomsButtonInput>;
};

export type EditComponentOrganismsDeckInput = {
  id?: Maybe<Scalars['ID']>;
  cards?: Maybe<Array<Maybe<EditComponentMoleculesCardInput>>>;
  section?: Maybe<EditComponentOrganismsSectionInput>;
  slug?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
};

export type EditComponentOrganismsFooterInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
  someNumber?: Maybe<Scalars['Int']>;
};

export type EditComponentOrganismsHeroInput = {
  id?: Maybe<Scalars['ID']>;
  section?: Maybe<EditComponentOrganismsSectionInput>;
  button?: Maybe<EditComponentAtomsButtonInput>;
  media?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditComponentOrganismsMetricInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<EditComponentAtomsNumericInput>;
  entry?: Maybe<EditComponentAtomsEntryInput>;
};

export type EditComponentOrganismsPageInput = {
  id?: Maybe<Scalars['ID']>;
  meta?: Maybe<Array<Maybe<EditComponentAtomsEntryInput>>>;
  active?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
};

export type EditComponentOrganismsSectionInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
};

export type EditContactFormRequestInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['ID']>;
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
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditWebsiteInput = {
  sections?: Maybe<Array<Scalars['WebsiteSectionsDynamicZoneInput']>>;
  navigation?: Maybe<Array<Maybe<EditComponentMoleculesMenuInput>>>;
  pages?: Maybe<Array<Maybe<EditComponentOrganismsPageInput>>>;
  slug?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateContactFormRequestInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditContactFormRequestInput>;
};

export type UpdateContactFormRequestPayload = {
  __typename?: 'updateContactFormRequestPayload';
  contactFormRequest?: Maybe<ContactFormRequest>;
};

export type UpdateCountryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCountryInput>;
};

export type UpdateCountryPayload = {
  __typename?: 'updateCountryPayload';
  country?: Maybe<Country>;
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

export type ButtonFragment = (
  { __typename?: 'ComponentAtomsButton' }
  & Pick<ComponentAtomsButton, 'id' | 'title' | 'url'>
);

export type CardFragment = (
  { __typename?: 'ComponentMoleculesCard' }
  & Pick<ComponentMoleculesCard, 'id' | 'title' | 'description'>
  & { image?: Maybe<(
    { __typename?: 'ComponentAtomsImage' }
    & Pick<ComponentAtomsImage, 'id' | 'background'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url' | 'alternativeText' | 'caption' | 'name'>
    )> }
  )> }
);

export type DeckFragment = (
  { __typename?: 'ComponentOrganismsDeck' }
  & Pick<ComponentOrganismsDeck, 'id' | 'active' | 'slug'>
  & { cards?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentMoleculesCard' }
    & CardFragment
  )>>> }
);

export type SectionFragment = (
  { __typename?: 'ComponentOrganismsSection' }
  & Pick<ComponentOrganismsSection, 'id' | 'slug' | 'title' | 'subTitle' | 'description' | 'active'>
);

export type ContentQueryVariables = Exact<{
  criteria: Scalars['JSON'];
}>;


export type ContentQuery = (
  { __typename?: 'Query' }
  & { websites?: Maybe<Array<Maybe<(
    { __typename?: 'Website' }
    & Pick<Website, 'id'>
    & { pages?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentOrganismsPage' }
      & Pick<ComponentOrganismsPage, 'id'>
    )>>>, sections?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentOrganismsCallToAction' }
      & Pick<ComponentOrganismsCallToAction, 'id'>
      & { button?: Maybe<(
        { __typename?: 'ComponentAtomsButton' }
        & ButtonFragment
      )>, section?: Maybe<(
        { __typename?: 'ComponentOrganismsSection' }
        & SectionFragment
      )> }
    ) | (
      { __typename?: 'ComponentOrganismsHero' }
      & Pick<ComponentOrganismsHero, 'id'>
      & { button?: Maybe<(
        { __typename?: 'ComponentAtomsButton' }
        & ButtonFragment
      )>, section?: Maybe<(
        { __typename?: 'ComponentOrganismsSection' }
        & SectionFragment
      )> }
    ) | (
      { __typename?: 'ComponentOrganismsDeck' }
      & Pick<ComponentOrganismsDeck, 'id'>
      & { cards?: Maybe<Array<Maybe<(
        { __typename?: 'ComponentMoleculesCard' }
        & CardFragment
      )>>>, section?: Maybe<(
        { __typename?: 'ComponentOrganismsSection' }
        & SectionFragment
      )> }
    ) | (
      { __typename?: 'ComponentOrganismsArticle' }
      & Pick<ComponentOrganismsArticle, 'id'>
      & { section?: Maybe<(
        { __typename?: 'ComponentOrganismsSection' }
        & SectionFragment
        & SectionFragment
      )> }
    )>>>, navigation?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentMoleculesMenu' }
      & Pick<ComponentMoleculesMenu, 'id' | 'slug'>
      & { links?: Maybe<Array<Maybe<(
        { __typename?: 'ComponentAtomsLink' }
        & Pick<ComponentAtomsLink, 'id' | 'title' | 'url'>
      )>>> }
    )>>> }
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
      & Pick<ContactFormRequest, 'id' | 'email' | 'city' | 'firstName' | 'lastName'>
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

export const ButtonFragmentDoc = gql`
    fragment Button on ComponentAtomsButton {
  id
  title
  url
}
    `;
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
    `;
export const DeckFragmentDoc = gql`
    fragment Deck on ComponentOrganismsDeck {
  id
  active
  slug
  cards {
    ...Card
  }
}
    ${CardFragmentDoc}`;
export const SectionFragmentDoc = gql`
    fragment Section on ComponentOrganismsSection {
  id
  slug
  title
  subTitle
  description
  active
}
    `;
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
        section {
          ...Section
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
${ButtonFragmentDoc}`;
export type ContentComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ContentQuery, ContentQueryVariables>, 'query'> & ({ variables: ContentQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ContentComponent = (props: ContentComponentProps) => (
      <ApolloReactComponents.Query<ContentQuery, ContentQueryVariables> query={ContentDocument} {...props} />
    );
    
export type ContentProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ContentQuery, ContentQueryVariables>
    } & TChildProps;
export function withContent<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ContentQuery,
  ContentQueryVariables,
  ContentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ContentQuery, ContentQueryVariables, ContentProps<TChildProps, TDataName>>(ContentDocument, {
      alias: 'content',
      ...operationOptions
    });
};

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
    `;
export type CreateContactFormRequestMutationFn = Apollo.MutationFunction<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables>;
export type CreateContactFormRequestComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables>, 'mutation'>;

    export const CreateContactFormRequestComponent = (props: CreateContactFormRequestComponentProps) => (
      <ApolloReactComponents.Mutation<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables> mutation={CreateContactFormRequestDocument} {...props} />
    );
    
export type CreateContactFormRequestProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables>
    } & TChildProps;
export function withCreateContactFormRequest<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateContactFormRequestMutation,
  CreateContactFormRequestMutationVariables,
  CreateContactFormRequestProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateContactFormRequestMutation, CreateContactFormRequestMutationVariables, CreateContactFormRequestProps<TChildProps, TDataName>>(CreateContactFormRequestDocument, {
      alias: 'createContactFormRequest',
      ...operationOptions
    });
};

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
    
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

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
    
export type RegisterProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>
    } & TChildProps;
export function withRegister<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterMutation,
  RegisterMutationVariables,
  RegisterProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps, TDataName>>(RegisterDocument, {
      alias: 'register',
      ...operationOptions
    });
};

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