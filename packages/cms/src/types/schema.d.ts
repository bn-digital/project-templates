import {
  BigIntegerAttribute,
  BooleanAttribute,
  CollectionTypeSchema,
  ComponentAttribute,
  ComponentSchema,
  CustomField,
  DateTimeAttribute,
  DecimalAttribute,
  DefaultTo,
  EmailAttribute,
  EnumerationAttribute,
  IntegerAttribute,
  JSONAttribute,
  MediaAttribute,
  PasswordAttribute,
  PrivateAttribute,
  RelationAttribute,
  RequiredAttribute,
  RichTextAttribute,
  SetMinMax,
  SetMinMaxLength,
  SingleTypeSchema,
  StringAttribute,
  TextAttribute,
  UIDAttribute,
  UniqueAttribute,
} from "@strapi/strapi"

export interface AdminPermission extends CollectionTypeSchema {
  info: {
    name: "Permission"
    description: ""
    singularName: "permission"
    pluralName: "permissions"
    displayName: "Permission"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    subject: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    properties: JSONAttribute & DefaultTo<{}>
    conditions: JSONAttribute & DefaultTo<[]>
    role: RelationAttribute<"admin::permission", "manyToOne", "admin::role">
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"admin::permission", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"admin::permission", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface AdminUser extends CollectionTypeSchema {
  info: {
    name: "User"
    description: ""
    singularName: "user"
    pluralName: "users"
    displayName: "User"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    firstname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    lastname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    username: StringAttribute
    email: EmailAttribute &
      RequiredAttribute &
      PrivateAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: StringAttribute & PrivateAttribute
    registrationToken: StringAttribute & PrivateAttribute
    isActive: BooleanAttribute & PrivateAttribute & DefaultTo<false>
    roles: RelationAttribute<"admin::user", "manyToMany", "admin::role"> & PrivateAttribute
    blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>
    preferedLanguage: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"admin::user", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"admin::user", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface AdminRole extends CollectionTypeSchema {
  info: {
    name: "Role"
    description: ""
    singularName: "role"
    pluralName: "roles"
    displayName: "Role"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    code: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute
    users: RelationAttribute<"admin::role", "manyToMany", "admin::user">
    permissions: RelationAttribute<"admin::role", "oneToMany", "admin::permission">
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"admin::role", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"admin::role", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface AdminApiToken extends CollectionTypeSchema {
  info: {
    name: "Api Token"
    singularName: "api-token"
    pluralName: "api-tokens"
    displayName: "Api Token"
    description: ""
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }> &
      DefaultTo<"">
    type: EnumerationAttribute<["read-only", "full-access", "custom"]> & RequiredAttribute & DefaultTo<"read-only">
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: DateTimeAttribute
    permissions: RelationAttribute<"admin::api-token", "oneToMany", "admin::api-token-permission">
    expiresAt: DateTimeAttribute
    lifespan: BigIntegerAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"admin::api-token", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"admin::api-token", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface AdminApiTokenPermission extends CollectionTypeSchema {
  info: {
    name: "API Token Permission"
    description: ""
    singularName: "api-token-permission"
    pluralName: "api-token-permissions"
    displayName: "API Token Permission"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    token: RelationAttribute<"admin::api-token-permission", "manyToOne", "admin::api-token">
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"admin::api-token-permission", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"admin::api-token-permission", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface AdminTransferToken extends CollectionTypeSchema {
  info: {
    name: "Transfer Token"
    singularName: "transfer-token"
    pluralName: "transfer-tokens"
    displayName: "Transfer Token"
    description: ""
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }> &
      DefaultTo<"">
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: DateTimeAttribute
    permissions: RelationAttribute<"admin::transfer-token", "oneToMany", "admin::transfer-token-permission">
    expiresAt: DateTimeAttribute
    lifespan: BigIntegerAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"admin::transfer-token", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"admin::transfer-token", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface AdminTransferTokenPermission extends CollectionTypeSchema {
  info: {
    name: "Transfer Token Permission"
    description: ""
    singularName: "transfer-token-permission"
    pluralName: "transfer-token-permissions"
    displayName: "Transfer Token Permission"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    token: RelationAttribute<"admin::transfer-token-permission", "manyToOne", "admin::transfer-token">
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"admin::transfer-token-permission", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"admin::transfer-token-permission", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface ApiLayoutLayout extends SingleTypeSchema {
  info: {
    singularName: "layout"
    pluralName: "layouts"
    displayName: "Layout"
    description: "Used for common layout components data"
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    headerMenu: ComponentAttribute<"ui.link", true>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"api::layout.layout", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"api::layout.layout", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface PluginUploadFile extends CollectionTypeSchema {
  info: {
    singularName: "file"
    pluralName: "files"
    displayName: "File"
    description: ""
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    alternativeText: StringAttribute
    caption: StringAttribute
    width: IntegerAttribute
    height: IntegerAttribute
    formats: JSONAttribute
    hash: StringAttribute & RequiredAttribute
    ext: StringAttribute
    mime: StringAttribute & RequiredAttribute
    size: DecimalAttribute & RequiredAttribute
    url: StringAttribute & RequiredAttribute
    previewUrl: StringAttribute
    provider: StringAttribute & RequiredAttribute
    provider_metadata: JSONAttribute
    related: RelationAttribute<"plugin::upload.file", "morphToMany">
    folder: RelationAttribute<"plugin::upload.file", "manyToOne", "plugin::upload.folder"> & PrivateAttribute
    folderPath: StringAttribute &
      RequiredAttribute &
      PrivateAttribute &
      SetMinMax<{
        min: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"plugin::upload.file", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"plugin::upload.file", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface PluginUploadFolder extends CollectionTypeSchema {
  info: {
    singularName: "folder"
    pluralName: "folders"
    displayName: "Folder"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    pathId: IntegerAttribute & RequiredAttribute & UniqueAttribute
    parent: RelationAttribute<"plugin::upload.folder", "manyToOne", "plugin::upload.folder">
    children: RelationAttribute<"plugin::upload.folder", "oneToMany", "plugin::upload.folder">
    files: RelationAttribute<"plugin::upload.folder", "oneToMany", "plugin::upload.file">
    path: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"plugin::upload.folder", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"plugin::upload.folder", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface PluginUsersPermissionsPermission extends CollectionTypeSchema {
  info: {
    name: "permission"
    description: ""
    singularName: "permission"
    pluralName: "permissions"
    displayName: "Permission"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute & RequiredAttribute
    role: RelationAttribute<"plugin::users-permissions.permission", "manyToOne", "plugin::users-permissions.role">
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"plugin::users-permissions.permission", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"plugin::users-permissions.permission", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface PluginUsersPermissionsRole extends CollectionTypeSchema {
  info: {
    name: "role"
    description: ""
    singularName: "role"
    pluralName: "roles"
    displayName: "Role"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 3
      }>
    description: StringAttribute
    type: StringAttribute & UniqueAttribute
    permissions: RelationAttribute<
      "plugin::users-permissions.role",
      "oneToMany",
      "plugin::users-permissions.permission"
    >
    users: RelationAttribute<"plugin::users-permissions.role", "oneToMany", "plugin::users-permissions.user">
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"plugin::users-permissions.role", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"plugin::users-permissions.role", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface PluginUsersPermissionsUser extends CollectionTypeSchema {
  info: {
    name: "user"
    description: ""
    singularName: "user"
    pluralName: "users"
    displayName: "User"
  }
  options: {
    draftAndPublish: false
    timestamps: true
  }
  attributes: {
    username: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 3
      }>
    email: EmailAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    provider: StringAttribute
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: StringAttribute & PrivateAttribute
    confirmationToken: StringAttribute & PrivateAttribute
    confirmed: BooleanAttribute & DefaultTo<false>
    blocked: BooleanAttribute & DefaultTo<false>
    role: RelationAttribute<"plugin::users-permissions.user", "manyToOne", "plugin::users-permissions.role">
    uuid: UIDAttribute & CustomField<"plugin::field-uuid.uuid">
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<"plugin::users-permissions.user", "oneToOne", "admin::user"> & PrivateAttribute
    updatedBy: RelationAttribute<"plugin::users-permissions.user", "oneToOne", "admin::user"> & PrivateAttribute
  }
}

export interface DataEntry extends ComponentSchema {
  info: {
    displayName: "Entry"
    icon: "clipboard-list"
    description: ""
  }
  attributes: {
    key: StringAttribute
    value: TextAttribute & RequiredAttribute
  }
}

export interface DataSet extends ComponentSchema {
  info: {
    displayName: "Set"
    icon: "align-justify"
  }
  attributes: {
    value: StringAttribute & RequiredAttribute
  }
}

export interface UiCard extends ComponentSchema {
  info: {
    displayName: "Card"
    icon: "address-card"
    description: ""
  }
  attributes: {
    title: StringAttribute
    subtitle: StringAttribute
    description: TextAttribute
    media: MediaAttribute
  }
}

export interface UiGrid extends ComponentSchema {
  info: {
    displayName: "Grid"
    icon: "table"
    description: ""
  }
  attributes: {
    visible: BooleanAttribute & RequiredAttribute & DefaultTo<true>
    children: ComponentAttribute<"data.entry", true> &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
  }
}

export interface UiHeadline extends ComponentSchema {
  info: {
    displayName: "Headline"
    icon: "heading"
    description: ""
  }
  attributes: {
    title: TextAttribute
    subtitle: TextAttribute
  }
}

export interface UiLink extends ComponentSchema {
  info: {
    displayName: "Link"
    icon: "link"
    description: ""
  }
  attributes: {
    url: StringAttribute & RequiredAttribute
    title: StringAttribute
    target: EnumerationAttribute<["blank", "self", "parent", "top"]> & RequiredAttribute & DefaultTo<"self">
  }
}

export interface UiParagraph extends ComponentSchema {
  info: {
    displayName: "Paragraph"
    icon: "envelope-open-text"
  }
  attributes: {
    value: RichTextAttribute & RequiredAttribute
  }
}

export interface UiSection extends ComponentSchema {
  info: {
    displayName: "Section"
    icon: "pager"
    description: ""
  }
  attributes: {
    visible: BooleanAttribute & RequiredAttribute & DefaultTo<true>
    heading: ComponentAttribute<"ui.card">
    button: ComponentAttribute<"ui.link">
  }
}

export interface UiTab extends ComponentSchema {
  info: {
    displayName: "Tab"
    icon: "clone"
    description: ""
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    pane: ComponentAttribute<"ui.card"> & RequiredAttribute
  }
}

export interface UiText extends ComponentSchema {
  info: {
    displayName: "Text"
    icon: "indent"
    description: ""
  }
  attributes: {
    visible: BooleanAttribute & RequiredAttribute & DefaultTo<true>
    children: ComponentAttribute<"ui.paragraph", true> &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
  }
}

declare global {
  namespace Strapi {
    interface Schemas {
      "admin::permission": AdminPermission
      "admin::user": AdminUser
      "admin::role": AdminRole
      "admin::api-token": AdminApiToken
      "admin::api-token-permission": AdminApiTokenPermission
      "admin::transfer-token": AdminTransferToken
      "admin::transfer-token-permission": AdminTransferTokenPermission
      "api::layout.layout": ApiLayoutLayout
      "plugin::upload.file": PluginUploadFile
      "plugin::upload.folder": PluginUploadFolder
      "plugin::users-permissions.permission": PluginUsersPermissionsPermission
      "plugin::users-permissions.role": PluginUsersPermissionsRole
      "plugin::users-permissions.user": PluginUsersPermissionsUser
      "data.entry": DataEntry
      "data.set": DataSet
      "ui.card": UiCard
      "ui.grid": UiGrid
      "ui.headline": UiHeadline
      "ui.link": UiLink
      "ui.paragraph": UiParagraph
      "ui.section": UiSection
      "ui.tab": UiTab
      "ui.text": UiText
    }
  }
}
