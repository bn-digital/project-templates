import * as Apollo from "@apollo/client"
import { gql } from "@apollo/client"
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from "@apollo/client/cache"
import * as ApolloReactComponents from "@apollo/client/react/components"
import * as React from "react"
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
const defaultOptions = {} as const

export type PossibleTypesResultData = {
  possibleTypes: {
    GenericMorph: [
      "ComponentDataContact",
      "ComponentDataEntry",
      "ComponentDataSet",
      "ComponentPageContactUs",
      "ComponentPageHome",
      "ComponentUiCard",
      "ComponentUiGrid",
      "ComponentUiHeadline",
      "ComponentUiLink",
      "ComponentUiParagraph",
      "ComponentUiSection",
      "ComponentUiTab",
      "ComponentUiText",
      "UploadFile",
      "UploadFolder",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsUser"
    ]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    GenericMorph: [
      "ComponentDataContact",
      "ComponentDataEntry",
      "ComponentDataSet",
      "ComponentPageContactUs",
      "ComponentPageHome",
      "ComponentUiCard",
      "ComponentUiGrid",
      "ComponentUiHeadline",
      "ComponentUiLink",
      "ComponentUiParagraph",
      "ComponentUiSection",
      "ComponentUiTab",
      "ComponentUiText",
      "UploadFile",
      "UploadFolder",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsUser",
    ],
  },
}
export default result

export const EntryFragmentDoc = gql`
  fragment Entry on ComponentDataEntry {
    id
    key
    value
  }
`
export const FileFragmentDoc = gql`
  fragment File on UploadFileEntity {
    id
    attributes {
      previewUrl
      alternativeText
      url
    }
  }
`
export const CardFragmentDoc = gql`
  fragment Card on ComponentUiCard {
    id
    title
    subtitle
    description
    media {
      data {
        ...File
      }
    }
  }
`
export const HeadlineFragmentDoc = gql`
  fragment Headline on ComponentUiHeadline {
    id
    title
    subtitle
  }
`
export const HomeFragmentDoc = gql`
  fragment Home on ComponentPageHome {
    id
    pathname
    hero {
      ...Card
    }
    components {
      ...Card
    }
    technology {
      ...Headline
    }
    frameworks {
      ...Card
    }
  }
`
export const LinkFragmentDoc = gql`
  fragment Link on ComponentUiLink {
    id
    title
    url
  }
`
export const ParagraphFragmentDoc = gql`
  fragment Paragraph on ComponentUiParagraph {
    id
    value
  }
`
export const TabFragmentDoc = gql`
  fragment Tab on ComponentUiTab {
    id
    name
    pane {
      ...Card
    }
  }
`
export const MeDocument = gql`
  query me {
    me {
      id
    }
  }
`
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, "query">

export const MeComponent = (props: MeComponentProps) => (
  <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
)

export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
export type ComponentDataContactKeySpecifier = (
  | "address"
  | "email"
  | "id"
  | "phone"
  | ComponentDataContactKeySpecifier
)[]
export type ComponentDataContactFieldPolicy = {
  address?: FieldPolicy<any> | FieldReadFunction<any>
  email?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  phone?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ComponentDataEntryKeySpecifier = ("id" | "key" | "value" | ComponentDataEntryKeySpecifier)[]
export type ComponentDataEntryFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  key?: FieldPolicy<any> | FieldReadFunction<any>
  value?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ComponentDataSetKeySpecifier = ("id" | "value" | ComponentDataSetKeySpecifier)[]
export type ComponentDataSetFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  value?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ComponentPageContactUsKeySpecifier = ("contact" | "id" | "pathname" | ComponentPageContactUsKeySpecifier)[]
export type ComponentPageContactUsFieldPolicy = {
  contact?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  pathname?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ComponentPageHomeKeySpecifier = (
  | "components"
  | "frameworks"
  | "hero"
  | "id"
  | "pathname"
  | "technology"
  | ComponentPageHomeKeySpecifier
)[]
export type ComponentPageHomeFieldPolicy = {
  components?: FieldPolicy<any> | FieldReadFunction<any>
  frameworks?: FieldPolicy<any> | FieldReadFunction<any>
  hero?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  pathname?: FieldPolicy<any> | FieldReadFunction<any>
  technology?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ComponentUiCardKeySpecifier = (
  | "description"
  | "id"
  | "media"
  | "subtitle"
  | "title"
  | ComponentUiCardKeySpecifier
)[]
export type ComponentUiCardFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  media?: FieldPolicy<any> | FieldReadFunction<any>
  subtitle?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ComponentUiGridKeySpecifier = ("children" | "id" | "visible" | ComponentUiGridKeySpecifier)[]
export type ComponentUiGridFieldPolicy = {
  children?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  visible?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ComponentUiHeadlineKeySpecifier = ("id" | "subtitle" | "title" | ComponentUiHeadlineKeySpecifier)[]
export type ComponentUiHeadlineFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  subtitle?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ComponentUiLinkKeySpecifier = ("id" | "title" | "url" | ComponentUiLinkKeySpecifier)[]
export type ComponentUiLinkFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
  url?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ComponentUiParagraphKeySpecifier = ("id" | "value" | ComponentUiParagraphKeySpecifier)[]
export type ComponentUiParagraphFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  value?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ComponentUiSectionKeySpecifier = (
  | "button"
  | "heading"
  | "id"
  | "visible"
  | ComponentUiSectionKeySpecifier
)[]
export type ComponentUiSectionFieldPolicy = {
  button?: FieldPolicy<any> | FieldReadFunction<any>
  heading?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  visible?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ComponentUiTabKeySpecifier = ("id" | "name" | "pane" | ComponentUiTabKeySpecifier)[]
export type ComponentUiTabFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
  pane?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ComponentUiTextKeySpecifier = ("children" | "id" | "visible" | ComponentUiTextKeySpecifier)[]
export type ComponentUiTextFieldPolicy = {
  children?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  visible?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ErrorKeySpecifier = ("code" | "message" | ErrorKeySpecifier)[]
export type ErrorFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>
  message?: FieldPolicy<any> | FieldReadFunction<any>
}
export type MutationKeySpecifier = (
  | "changePassword"
  | "createUploadFile"
  | "createUsersPermissionsRole"
  | "createUsersPermissionsUser"
  | "deleteUploadFile"
  | "deleteUsersPermissionsRole"
  | "deleteUsersPermissionsUser"
  | "emailConfirmation"
  | "forgotPassword"
  | "login"
  | "multipleUpload"
  | "register"
  | "removeFile"
  | "resetPassword"
  | "updateFileInfo"
  | "updateUploadFile"
  | "updateUsersPermissionsRole"
  | "updateUsersPermissionsUser"
  | "upload"
  | MutationKeySpecifier
)[]
export type MutationFieldPolicy = {
  changePassword?: FieldPolicy<any> | FieldReadFunction<any>
  createUploadFile?: FieldPolicy<any> | FieldReadFunction<any>
  createUsersPermissionsRole?: FieldPolicy<any> | FieldReadFunction<any>
  createUsersPermissionsUser?: FieldPolicy<any> | FieldReadFunction<any>
  deleteUploadFile?: FieldPolicy<any> | FieldReadFunction<any>
  deleteUsersPermissionsRole?: FieldPolicy<any> | FieldReadFunction<any>
  deleteUsersPermissionsUser?: FieldPolicy<any> | FieldReadFunction<any>
  emailConfirmation?: FieldPolicy<any> | FieldReadFunction<any>
  forgotPassword?: FieldPolicy<any> | FieldReadFunction<any>
  login?: FieldPolicy<any> | FieldReadFunction<any>
  multipleUpload?: FieldPolicy<any> | FieldReadFunction<any>
  register?: FieldPolicy<any> | FieldReadFunction<any>
  removeFile?: FieldPolicy<any> | FieldReadFunction<any>
  resetPassword?: FieldPolicy<any> | FieldReadFunction<any>
  updateFileInfo?: FieldPolicy<any> | FieldReadFunction<any>
  updateUploadFile?: FieldPolicy<any> | FieldReadFunction<any>
  updateUsersPermissionsRole?: FieldPolicy<any> | FieldReadFunction<any>
  updateUsersPermissionsUser?: FieldPolicy<any> | FieldReadFunction<any>
  upload?: FieldPolicy<any> | FieldReadFunction<any>
}
export type PaginationKeySpecifier = ("page" | "pageCount" | "pageSize" | "total" | PaginationKeySpecifier)[]
export type PaginationFieldPolicy = {
  page?: FieldPolicy<any> | FieldReadFunction<any>
  pageCount?: FieldPolicy<any> | FieldReadFunction<any>
  pageSize?: FieldPolicy<any> | FieldReadFunction<any>
  total?: FieldPolicy<any> | FieldReadFunction<any>
}
export type QueryKeySpecifier = (
  | "me"
  | "uploadFile"
  | "uploadFiles"
  | "usersPermissionsRole"
  | "usersPermissionsRoles"
  | "usersPermissionsUser"
  | "usersPermissionsUsers"
  | QueryKeySpecifier
)[]
export type QueryFieldPolicy = {
  me?: FieldPolicy<any> | FieldReadFunction<any>
  uploadFile?: FieldPolicy<any> | FieldReadFunction<any>
  uploadFiles?: FieldPolicy<any> | FieldReadFunction<any>
  usersPermissionsRole?: FieldPolicy<any> | FieldReadFunction<any>
  usersPermissionsRoles?: FieldPolicy<any> | FieldReadFunction<any>
  usersPermissionsUser?: FieldPolicy<any> | FieldReadFunction<any>
  usersPermissionsUsers?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ResponseCollectionMetaKeySpecifier = ("pagination" | ResponseCollectionMetaKeySpecifier)[]
export type ResponseCollectionMetaFieldPolicy = {
  pagination?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UploadFileKeySpecifier = (
  | "alternativeText"
  | "caption"
  | "createdAt"
  | "ext"
  | "formats"
  | "hash"
  | "height"
  | "mime"
  | "name"
  | "previewUrl"
  | "provider"
  | "provider_metadata"
  | "related"
  | "size"
  | "updatedAt"
  | "url"
  | "width"
  | UploadFileKeySpecifier
)[]
export type UploadFileFieldPolicy = {
  alternativeText?: FieldPolicy<any> | FieldReadFunction<any>
  caption?: FieldPolicy<any> | FieldReadFunction<any>
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  ext?: FieldPolicy<any> | FieldReadFunction<any>
  formats?: FieldPolicy<any> | FieldReadFunction<any>
  hash?: FieldPolicy<any> | FieldReadFunction<any>
  height?: FieldPolicy<any> | FieldReadFunction<any>
  mime?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
  previewUrl?: FieldPolicy<any> | FieldReadFunction<any>
  provider?: FieldPolicy<any> | FieldReadFunction<any>
  provider_metadata?: FieldPolicy<any> | FieldReadFunction<any>
  related?: FieldPolicy<any> | FieldReadFunction<any>
  size?: FieldPolicy<any> | FieldReadFunction<any>
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
  url?: FieldPolicy<any> | FieldReadFunction<any>
  width?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UploadFileEntityKeySpecifier = ("attributes" | "id" | UploadFileEntityKeySpecifier)[]
export type UploadFileEntityFieldPolicy = {
  attributes?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UploadFileEntityResponseKeySpecifier = ("data" | UploadFileEntityResponseKeySpecifier)[]
export type UploadFileEntityResponseFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UploadFileEntityResponseCollectionKeySpecifier = (
  | "data"
  | "meta"
  | UploadFileEntityResponseCollectionKeySpecifier
)[]
export type UploadFileEntityResponseCollectionFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
  meta?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UploadFileRelationResponseCollectionKeySpecifier = (
  | "data"
  | UploadFileRelationResponseCollectionKeySpecifier
)[]
export type UploadFileRelationResponseCollectionFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UploadFolderKeySpecifier = (
  | "children"
  | "createdAt"
  | "files"
  | "name"
  | "parent"
  | "path"
  | "pathId"
  | "updatedAt"
  | UploadFolderKeySpecifier
)[]
export type UploadFolderFieldPolicy = {
  children?: FieldPolicy<any> | FieldReadFunction<any>
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  files?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
  parent?: FieldPolicy<any> | FieldReadFunction<any>
  path?: FieldPolicy<any> | FieldReadFunction<any>
  pathId?: FieldPolicy<any> | FieldReadFunction<any>
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UploadFolderEntityKeySpecifier = ("attributes" | "id" | UploadFolderEntityKeySpecifier)[]
export type UploadFolderEntityFieldPolicy = {
  attributes?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UploadFolderEntityResponseKeySpecifier = ("data" | UploadFolderEntityResponseKeySpecifier)[]
export type UploadFolderEntityResponseFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UploadFolderEntityResponseCollectionKeySpecifier = (
  | "data"
  | "meta"
  | UploadFolderEntityResponseCollectionKeySpecifier
)[]
export type UploadFolderEntityResponseCollectionFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
  meta?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UploadFolderRelationResponseCollectionKeySpecifier = (
  | "data"
  | UploadFolderRelationResponseCollectionKeySpecifier
)[]
export type UploadFolderRelationResponseCollectionFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsCreateRolePayloadKeySpecifier = ("ok" | UsersPermissionsCreateRolePayloadKeySpecifier)[]
export type UsersPermissionsCreateRolePayloadFieldPolicy = {
  ok?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsDeleteRolePayloadKeySpecifier = ("ok" | UsersPermissionsDeleteRolePayloadKeySpecifier)[]
export type UsersPermissionsDeleteRolePayloadFieldPolicy = {
  ok?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsLoginPayloadKeySpecifier = ("jwt" | "user" | UsersPermissionsLoginPayloadKeySpecifier)[]
export type UsersPermissionsLoginPayloadFieldPolicy = {
  jwt?: FieldPolicy<any> | FieldReadFunction<any>
  user?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsMeKeySpecifier = (
  | "blocked"
  | "confirmed"
  | "email"
  | "id"
  | "role"
  | "username"
  | UsersPermissionsMeKeySpecifier
)[]
export type UsersPermissionsMeFieldPolicy = {
  blocked?: FieldPolicy<any> | FieldReadFunction<any>
  confirmed?: FieldPolicy<any> | FieldReadFunction<any>
  email?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  role?: FieldPolicy<any> | FieldReadFunction<any>
  username?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsMeRoleKeySpecifier = (
  | "description"
  | "id"
  | "name"
  | "type"
  | UsersPermissionsMeRoleKeySpecifier
)[]
export type UsersPermissionsMeRoleFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
  type?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsPasswordPayloadKeySpecifier = ("ok" | UsersPermissionsPasswordPayloadKeySpecifier)[]
export type UsersPermissionsPasswordPayloadFieldPolicy = {
  ok?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsPermissionKeySpecifier = (
  | "action"
  | "createdAt"
  | "role"
  | "updatedAt"
  | UsersPermissionsPermissionKeySpecifier
)[]
export type UsersPermissionsPermissionFieldPolicy = {
  action?: FieldPolicy<any> | FieldReadFunction<any>
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  role?: FieldPolicy<any> | FieldReadFunction<any>
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsPermissionEntityKeySpecifier = (
  | "attributes"
  | "id"
  | UsersPermissionsPermissionEntityKeySpecifier
)[]
export type UsersPermissionsPermissionEntityFieldPolicy = {
  attributes?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsPermissionEntityResponseKeySpecifier = (
  | "data"
  | UsersPermissionsPermissionEntityResponseKeySpecifier
)[]
export type UsersPermissionsPermissionEntityResponseFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsPermissionEntityResponseCollectionKeySpecifier = (
  | "data"
  | "meta"
  | UsersPermissionsPermissionEntityResponseCollectionKeySpecifier
)[]
export type UsersPermissionsPermissionEntityResponseCollectionFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
  meta?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsPermissionRelationResponseCollectionKeySpecifier = (
  | "data"
  | UsersPermissionsPermissionRelationResponseCollectionKeySpecifier
)[]
export type UsersPermissionsPermissionRelationResponseCollectionFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsRoleKeySpecifier = (
  | "createdAt"
  | "description"
  | "name"
  | "permissions"
  | "type"
  | "updatedAt"
  | "users"
  | UsersPermissionsRoleKeySpecifier
)[]
export type UsersPermissionsRoleFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  description?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
  permissions?: FieldPolicy<any> | FieldReadFunction<any>
  type?: FieldPolicy<any> | FieldReadFunction<any>
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
  users?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsRoleEntityKeySpecifier = ("attributes" | "id" | UsersPermissionsRoleEntityKeySpecifier)[]
export type UsersPermissionsRoleEntityFieldPolicy = {
  attributes?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsRoleEntityResponseKeySpecifier = ("data" | UsersPermissionsRoleEntityResponseKeySpecifier)[]
export type UsersPermissionsRoleEntityResponseFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsRoleEntityResponseCollectionKeySpecifier = (
  | "data"
  | "meta"
  | UsersPermissionsRoleEntityResponseCollectionKeySpecifier
)[]
export type UsersPermissionsRoleEntityResponseCollectionFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
  meta?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsRoleRelationResponseCollectionKeySpecifier = (
  | "data"
  | UsersPermissionsRoleRelationResponseCollectionKeySpecifier
)[]
export type UsersPermissionsRoleRelationResponseCollectionFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsUpdateRolePayloadKeySpecifier = ("ok" | UsersPermissionsUpdateRolePayloadKeySpecifier)[]
export type UsersPermissionsUpdateRolePayloadFieldPolicy = {
  ok?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsUserKeySpecifier = (
  | "blocked"
  | "confirmed"
  | "createdAt"
  | "email"
  | "id"
  | "provider"
  | "role"
  | "updatedAt"
  | "username"
  | "uuid"
  | UsersPermissionsUserKeySpecifier
)[]
export type UsersPermissionsUserFieldPolicy = {
  blocked?: FieldPolicy<any> | FieldReadFunction<any>
  confirmed?: FieldPolicy<any> | FieldReadFunction<any>
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  email?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  provider?: FieldPolicy<any> | FieldReadFunction<any>
  role?: FieldPolicy<any> | FieldReadFunction<any>
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
  username?: FieldPolicy<any> | FieldReadFunction<any>
  uuid?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsUserEntityKeySpecifier = ("attributes" | "id" | UsersPermissionsUserEntityKeySpecifier)[]
export type UsersPermissionsUserEntityFieldPolicy = {
  attributes?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsUserEntityResponseKeySpecifier = ("data" | UsersPermissionsUserEntityResponseKeySpecifier)[]
export type UsersPermissionsUserEntityResponseFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsUserEntityResponseCollectionKeySpecifier = (
  | "data"
  | "meta"
  | UsersPermissionsUserEntityResponseCollectionKeySpecifier
)[]
export type UsersPermissionsUserEntityResponseCollectionFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
  meta?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UsersPermissionsUserRelationResponseCollectionKeySpecifier = (
  | "data"
  | UsersPermissionsUserRelationResponseCollectionKeySpecifier
)[]
export type UsersPermissionsUserRelationResponseCollectionFieldPolicy = {
  data?: FieldPolicy<any> | FieldReadFunction<any>
}
export type StrictTypedTypePolicies = {
  ComponentDataContact?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentDataContactKeySpecifier | (() => undefined | ComponentDataContactKeySpecifier)
    fields?: ComponentDataContactFieldPolicy
  }
  ComponentDataEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentDataEntryKeySpecifier | (() => undefined | ComponentDataEntryKeySpecifier)
    fields?: ComponentDataEntryFieldPolicy
  }
  ComponentDataSet?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentDataSetKeySpecifier | (() => undefined | ComponentDataSetKeySpecifier)
    fields?: ComponentDataSetFieldPolicy
  }
  ComponentPageContactUs?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentPageContactUsKeySpecifier | (() => undefined | ComponentPageContactUsKeySpecifier)
    fields?: ComponentPageContactUsFieldPolicy
  }
  ComponentPageHome?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentPageHomeKeySpecifier | (() => undefined | ComponentPageHomeKeySpecifier)
    fields?: ComponentPageHomeFieldPolicy
  }
  ComponentUiCard?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentUiCardKeySpecifier | (() => undefined | ComponentUiCardKeySpecifier)
    fields?: ComponentUiCardFieldPolicy
  }
  ComponentUiGrid?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentUiGridKeySpecifier | (() => undefined | ComponentUiGridKeySpecifier)
    fields?: ComponentUiGridFieldPolicy
  }
  ComponentUiHeadline?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentUiHeadlineKeySpecifier | (() => undefined | ComponentUiHeadlineKeySpecifier)
    fields?: ComponentUiHeadlineFieldPolicy
  }
  ComponentUiLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentUiLinkKeySpecifier | (() => undefined | ComponentUiLinkKeySpecifier)
    fields?: ComponentUiLinkFieldPolicy
  }
  ComponentUiParagraph?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentUiParagraphKeySpecifier | (() => undefined | ComponentUiParagraphKeySpecifier)
    fields?: ComponentUiParagraphFieldPolicy
  }
  ComponentUiSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentUiSectionKeySpecifier | (() => undefined | ComponentUiSectionKeySpecifier)
    fields?: ComponentUiSectionFieldPolicy
  }
  ComponentUiTab?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentUiTabKeySpecifier | (() => undefined | ComponentUiTabKeySpecifier)
    fields?: ComponentUiTabFieldPolicy
  }
  ComponentUiText?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ComponentUiTextKeySpecifier | (() => undefined | ComponentUiTextKeySpecifier)
    fields?: ComponentUiTextFieldPolicy
  }
  Error?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ErrorKeySpecifier | (() => undefined | ErrorKeySpecifier)
    fields?: ErrorFieldPolicy
  }
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier)
    fields?: MutationFieldPolicy
  }
  Pagination?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | PaginationKeySpecifier | (() => undefined | PaginationKeySpecifier)
    fields?: PaginationFieldPolicy
  }
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier)
    fields?: QueryFieldPolicy
  }
  ResponseCollectionMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ResponseCollectionMetaKeySpecifier | (() => undefined | ResponseCollectionMetaKeySpecifier)
    fields?: ResponseCollectionMetaFieldPolicy
  }
  UploadFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UploadFileKeySpecifier | (() => undefined | UploadFileKeySpecifier)
    fields?: UploadFileFieldPolicy
  }
  UploadFileEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UploadFileEntityKeySpecifier | (() => undefined | UploadFileEntityKeySpecifier)
    fields?: UploadFileEntityFieldPolicy
  }
  UploadFileEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UploadFileEntityResponseKeySpecifier | (() => undefined | UploadFileEntityResponseKeySpecifier)
    fields?: UploadFileEntityResponseFieldPolicy
  }
  UploadFileEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UploadFileEntityResponseCollectionKeySpecifier
      | (() => undefined | UploadFileEntityResponseCollectionKeySpecifier)
    fields?: UploadFileEntityResponseCollectionFieldPolicy
  }
  UploadFileRelationResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UploadFileRelationResponseCollectionKeySpecifier
      | (() => undefined | UploadFileRelationResponseCollectionKeySpecifier)
    fields?: UploadFileRelationResponseCollectionFieldPolicy
  }
  UploadFolder?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UploadFolderKeySpecifier | (() => undefined | UploadFolderKeySpecifier)
    fields?: UploadFolderFieldPolicy
  }
  UploadFolderEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UploadFolderEntityKeySpecifier | (() => undefined | UploadFolderEntityKeySpecifier)
    fields?: UploadFolderEntityFieldPolicy
  }
  UploadFolderEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UploadFolderEntityResponseKeySpecifier
      | (() => undefined | UploadFolderEntityResponseKeySpecifier)
    fields?: UploadFolderEntityResponseFieldPolicy
  }
  UploadFolderEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UploadFolderEntityResponseCollectionKeySpecifier
      | (() => undefined | UploadFolderEntityResponseCollectionKeySpecifier)
    fields?: UploadFolderEntityResponseCollectionFieldPolicy
  }
  UploadFolderRelationResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UploadFolderRelationResponseCollectionKeySpecifier
      | (() => undefined | UploadFolderRelationResponseCollectionKeySpecifier)
    fields?: UploadFolderRelationResponseCollectionFieldPolicy
  }
  UsersPermissionsCreateRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsCreateRolePayloadKeySpecifier
      | (() => undefined | UsersPermissionsCreateRolePayloadKeySpecifier)
    fields?: UsersPermissionsCreateRolePayloadFieldPolicy
  }
  UsersPermissionsDeleteRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsDeleteRolePayloadKeySpecifier
      | (() => undefined | UsersPermissionsDeleteRolePayloadKeySpecifier)
    fields?: UsersPermissionsDeleteRolePayloadFieldPolicy
  }
  UsersPermissionsLoginPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsLoginPayloadKeySpecifier
      | (() => undefined | UsersPermissionsLoginPayloadKeySpecifier)
    fields?: UsersPermissionsLoginPayloadFieldPolicy
  }
  UsersPermissionsMe?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UsersPermissionsMeKeySpecifier | (() => undefined | UsersPermissionsMeKeySpecifier)
    fields?: UsersPermissionsMeFieldPolicy
  }
  UsersPermissionsMeRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UsersPermissionsMeRoleKeySpecifier | (() => undefined | UsersPermissionsMeRoleKeySpecifier)
    fields?: UsersPermissionsMeRoleFieldPolicy
  }
  UsersPermissionsPasswordPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsPasswordPayloadKeySpecifier
      | (() => undefined | UsersPermissionsPasswordPayloadKeySpecifier)
    fields?: UsersPermissionsPasswordPayloadFieldPolicy
  }
  UsersPermissionsPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsPermissionKeySpecifier
      | (() => undefined | UsersPermissionsPermissionKeySpecifier)
    fields?: UsersPermissionsPermissionFieldPolicy
  }
  UsersPermissionsPermissionEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsPermissionEntityKeySpecifier
      | (() => undefined | UsersPermissionsPermissionEntityKeySpecifier)
    fields?: UsersPermissionsPermissionEntityFieldPolicy
  }
  UsersPermissionsPermissionEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsPermissionEntityResponseKeySpecifier
      | (() => undefined | UsersPermissionsPermissionEntityResponseKeySpecifier)
    fields?: UsersPermissionsPermissionEntityResponseFieldPolicy
  }
  UsersPermissionsPermissionEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsPermissionEntityResponseCollectionKeySpecifier
      | (() => undefined | UsersPermissionsPermissionEntityResponseCollectionKeySpecifier)
    fields?: UsersPermissionsPermissionEntityResponseCollectionFieldPolicy
  }
  UsersPermissionsPermissionRelationResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsPermissionRelationResponseCollectionKeySpecifier
      | (() => undefined | UsersPermissionsPermissionRelationResponseCollectionKeySpecifier)
    fields?: UsersPermissionsPermissionRelationResponseCollectionFieldPolicy
  }
  UsersPermissionsRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UsersPermissionsRoleKeySpecifier | (() => undefined | UsersPermissionsRoleKeySpecifier)
    fields?: UsersPermissionsRoleFieldPolicy
  }
  UsersPermissionsRoleEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsRoleEntityKeySpecifier
      | (() => undefined | UsersPermissionsRoleEntityKeySpecifier)
    fields?: UsersPermissionsRoleEntityFieldPolicy
  }
  UsersPermissionsRoleEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsRoleEntityResponseKeySpecifier
      | (() => undefined | UsersPermissionsRoleEntityResponseKeySpecifier)
    fields?: UsersPermissionsRoleEntityResponseFieldPolicy
  }
  UsersPermissionsRoleEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsRoleEntityResponseCollectionKeySpecifier
      | (() => undefined | UsersPermissionsRoleEntityResponseCollectionKeySpecifier)
    fields?: UsersPermissionsRoleEntityResponseCollectionFieldPolicy
  }
  UsersPermissionsRoleRelationResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsRoleRelationResponseCollectionKeySpecifier
      | (() => undefined | UsersPermissionsRoleRelationResponseCollectionKeySpecifier)
    fields?: UsersPermissionsRoleRelationResponseCollectionFieldPolicy
  }
  UsersPermissionsUpdateRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsUpdateRolePayloadKeySpecifier
      | (() => undefined | UsersPermissionsUpdateRolePayloadKeySpecifier)
    fields?: UsersPermissionsUpdateRolePayloadFieldPolicy
  }
  UsersPermissionsUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UsersPermissionsUserKeySpecifier | (() => undefined | UsersPermissionsUserKeySpecifier)
    fields?: UsersPermissionsUserFieldPolicy
  }
  UsersPermissionsUserEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsUserEntityKeySpecifier
      | (() => undefined | UsersPermissionsUserEntityKeySpecifier)
    fields?: UsersPermissionsUserEntityFieldPolicy
  }
  UsersPermissionsUserEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsUserEntityResponseKeySpecifier
      | (() => undefined | UsersPermissionsUserEntityResponseKeySpecifier)
    fields?: UsersPermissionsUserEntityResponseFieldPolicy
  }
  UsersPermissionsUserEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsUserEntityResponseCollectionKeySpecifier
      | (() => undefined | UsersPermissionsUserEntityResponseCollectionKeySpecifier)
    fields?: UsersPermissionsUserEntityResponseCollectionFieldPolicy
  }
  UsersPermissionsUserRelationResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsersPermissionsUserRelationResponseCollectionKeySpecifier
      | (() => undefined | UsersPermissionsUserRelationResponseCollectionKeySpecifier)
    fields?: UsersPermissionsUserRelationResponseCollectionFieldPolicy
  }
}
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies
