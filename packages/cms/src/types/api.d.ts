import {
  CollectionTypeSchema,
  StringAttribute,
  RequiredAttribute,
  SetMinMaxLength,
  JSONAttribute,
  DefaultTo,
  RelationAttribute,
  DateTimeAttribute,
  PrivateAttribute,
  EmailAttribute,
  UniqueAttribute,
  PasswordAttribute,
  BooleanAttribute,
  EnumerationAttribute,
  IntegerAttribute,
  DecimalAttribute,
  SetMinMax,
  TextAttribute,
  UIDAttribute,
  ComponentAttribute,
  RichTextAttribute,
  MediaAttribute,
  SingleTypeSchema,
  SetPluginOptions,
  DynamicZoneAttribute,
  ComponentSchema,
} from '@strapi/strapi'

export interface AdminPermission extends CollectionTypeSchema {
  info: {
    name: 'Permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
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
    role: RelationAttribute<'admin::permission', 'manyToOne', 'admin::role'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::permission', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::permission', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminUser extends CollectionTypeSchema {
  info: {
    name: 'User'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
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
    roles: RelationAttribute<'admin::user', 'manyToMany', 'admin::role'> & PrivateAttribute
    blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>
    preferedLanguage: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminRole extends CollectionTypeSchema {
  info: {
    name: 'Role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
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
    users: RelationAttribute<'admin::role', 'manyToMany', 'admin::user'>
    permissions: RelationAttribute<'admin::role', 'oneToMany', 'admin::permission'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminApiToken extends CollectionTypeSchema {
  info: {
    name: 'Api Token'
    singularName: 'api-token'
    pluralName: 'api-tokens'
    displayName: 'Api Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }> &
      DefaultTo<''>
    type: EnumerationAttribute<['read-only', 'full-access']> & DefaultTo<'read-only'>
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::api-token', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::api-token', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface PluginUploadFile extends CollectionTypeSchema {
  info: {
    singularName: 'file'
    pluralName: 'files'
    displayName: 'File'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
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
    related: RelationAttribute<'plugin::upload.file', 'morphToMany'>
    folder: RelationAttribute<'plugin::upload.file', 'manyToOne', 'plugin::upload.folder'> & PrivateAttribute
    folderPath: StringAttribute &
      RequiredAttribute &
      PrivateAttribute &
      SetMinMax<{
        min: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::upload.file', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::upload.file', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginUploadFolder extends CollectionTypeSchema {
  info: {
    singularName: 'folder'
    pluralName: 'folders'
    displayName: 'Folder'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
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
    parent: RelationAttribute<'plugin::upload.folder', 'manyToOne', 'plugin::upload.folder'>
    children: RelationAttribute<'plugin::upload.folder', 'oneToMany', 'plugin::upload.folder'>
    files: RelationAttribute<'plugin::upload.folder', 'oneToMany', 'plugin::upload.file'>
    path: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::upload.folder', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::upload.folder', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginUsersPermissionsPermission extends CollectionTypeSchema {
  info: {
    name: 'permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute & RequiredAttribute
    role: RelationAttribute<'plugin::users-permissions.permission', 'manyToOne', 'plugin::users-permissions.role'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::users-permissions.permission', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::users-permissions.permission', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface PluginUsersPermissionsRole extends CollectionTypeSchema {
  info: {
    name: 'role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
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
    permissions: RelationAttribute<'plugin::users-permissions.role', 'oneToMany', 'plugin::users-permissions.permission'>
    users: RelationAttribute<'plugin::users-permissions.role', 'oneToMany', 'plugin::users-permissions.user'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface PluginUsersPermissionsUser extends CollectionTypeSchema {
  info: {
    name: 'user'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
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
    role: RelationAttribute<'plugin::users-permissions.user', 'manyToOne', 'plugin::users-permissions.role'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginI18NLocale extends CollectionTypeSchema {
  info: {
    singularName: 'locale'
    pluralName: 'locales'
    collectionName: 'locales'
    displayName: 'Locale'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      SetMinMax<{
        min: 1
        max: 50
      }>
    code: StringAttribute & UniqueAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::i18n.locale', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::i18n.locale', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface PluginEmailDesignerEmailTemplate extends CollectionTypeSchema {
  info: {
    singularName: 'email-template'
    pluralName: 'email-templates'
    displayName: 'Email-template'
    name: 'email-template'
  }
  options: {
    draftAndPublish: false
    timestamps: true
    increments: true
    comment: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    templateReferenceId: IntegerAttribute & UniqueAttribute
    design: JSONAttribute
    name: StringAttribute
    subject: StringAttribute
    bodyHtml: TextAttribute
    bodyText: TextAttribute
    enabled: BooleanAttribute & DefaultTo<true>
    tags: JSONAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::email-designer.email-template', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::email-designer.email-template', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginMenusMenu extends CollectionTypeSchema {
  info: {
    displayName: 'Menu'
    singularName: 'menu'
    pluralName: 'menus'
    tableName: 'menus'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    title: StringAttribute & RequiredAttribute
    slug: UIDAttribute<'plugin::menus.menu', 'title'> & RequiredAttribute
    items: RelationAttribute<'plugin::menus.menu', 'oneToMany', 'plugin::menus.menu-item'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::menus.menu', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::menus.menu', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginMenusMenuItem extends CollectionTypeSchema {
  info: {
    displayName: 'Menu Item'
    singularName: 'menu-item'
    pluralName: 'menu-items'
    tableName: 'menu_items'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    order: IntegerAttribute
    title: StringAttribute & RequiredAttribute
    url: StringAttribute
    target: EnumerationAttribute<['_blank', '_parent', '_self', '_top']>
    root_menu: RelationAttribute<'plugin::menus.menu-item', 'manyToOne', 'plugin::menus.menu'> & RequiredAttribute
    parent: RelationAttribute<'plugin::menus.menu-item', 'oneToOne', 'plugin::menus.menu-item'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::menus.menu-item', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::menus.menu-item', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiCategoryCategory extends CollectionTypeSchema {
  info: {
    singularName: 'category'
    pluralName: 'categories'
    displayName: 'Category'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    slug: UIDAttribute<'api::category.category', 'name'> & RequiredAttribute
    posts: RelationAttribute<'api::category.category', 'oneToMany', 'api::post.post'>
    seo: ComponentAttribute<'shared.seo'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::category.category', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::category.category', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiContactContact extends CollectionTypeSchema {
  info: {
    singularName: 'contact'
    pluralName: 'contacts'
    displayName: 'Contact'
    description: ''
  }
  options: {
    populateCreatorFields: false
    draftAndPublish: false
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    email: EmailAttribute & RequiredAttribute
    subject: StringAttribute
    text: TextAttribute
    status: EnumerationAttribute<['new', 'sent', 'failed']>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::contact.contact', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::contact.contact', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiEmailEmail extends CollectionTypeSchema {
  info: {
    singularName: 'email'
    pluralName: 'emails'
    displayName: 'Email'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    to: EmailAttribute & RequiredAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::email.email', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::email.email', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiPostPost extends CollectionTypeSchema {
  info: {
    singularName: 'post'
    pluralName: 'posts'
    displayName: 'Post'
    description: ''
  }
  options: {
    populateCreatorFields: false
    draftAndPublish: true
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    slug: UIDAttribute<'api::post.post', 'name'> & RequiredAttribute
    teaser: TextAttribute
    content: RichTextAttribute
    cover: MediaAttribute
    seo: ComponentAttribute<'shared.seo'>
    category: RelationAttribute<'api::post.post', 'manyToOne', 'api::category.category'>
    background: StringAttribute
    uuid: UIDAttribute & RequiredAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::post.post', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::post.post', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiTranslationTranslation extends SingleTypeSchema {
  info: {
    singularName: 'translation'
    pluralName: 'translations'
    displayName: 'Translation'
    description: ''
  }
  options: {
    populateCreatorFields: false
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    entry: ComponentAttribute<'data.entry', true> &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::translation.translation', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::translation.translation', 'oneToOne', 'admin::user'> & PrivateAttribute
    localizations: RelationAttribute<'api::translation.translation', 'oneToMany', 'api::translation.translation'>
    locale: StringAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiWebsiteWebsite extends SingleTypeSchema {
  info: {
    singularName: 'website'
    pluralName: 'websites'
    displayName: 'Website'
    description: ''
  }
  options: {
    populateCreatorFields: false
    draftAndPublish: false
  }
  attributes: {
    content: DynamicZoneAttribute<['page.contact-us', 'page.home']>
    seo: ComponentAttribute<'shared.seo'>
    translations: ComponentAttribute<'data.entry', true>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::website.website', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::website.website', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface DataContact extends ComponentSchema {
  info: {
    displayName: 'Contact'
    icon: 'address-book'
    description: ''
  }
  attributes: {
    email: EmailAttribute
    phone: StringAttribute
    address: TextAttribute
  }
}

export interface DataEntry extends ComponentSchema {
  info: {
    displayName: 'Entry'
    icon: 'clipboard-list'
    description: ''
  }
  attributes: {
    key: StringAttribute
    value: TextAttribute & RequiredAttribute
  }
}

export interface DataSet extends ComponentSchema {
  info: {
    displayName: 'Set'
    icon: 'align-justify'
  }
  attributes: {
    value: StringAttribute & RequiredAttribute
  }
}

export interface PageContactUs extends ComponentSchema {
  info: {
    displayName: 'Contact Us'
    icon: 'mail-bulk'
    description: ''
  }
  attributes: {
    pathname: StringAttribute & RequiredAttribute & DefaultTo<'/'>
    contact: ComponentAttribute<'data.contact'>
  }
}

export interface PageHome extends ComponentSchema {
  info: {
    displayName: 'Home'
    icon: 'home'
    description: ''
  }
  attributes: {
    pathname: StringAttribute & RequiredAttribute & DefaultTo<'/'>
    hero: ComponentAttribute<'ui.card'>
    features: ComponentAttribute<'ui.card', true>
  }
}

export interface SharedMetaSocial extends ComponentSchema {
  info: {
    displayName: 'metaSocial'
    icon: 'project-diagram'
  }
  attributes: {
    socialNetwork: EnumerationAttribute<['Facebook', 'Twitter']> & RequiredAttribute
    title: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 60
      }>
    description: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 65
      }>
    image: MediaAttribute
  }
}

export interface SharedSeo extends ComponentSchema {
  info: {
    displayName: 'seo'
    icon: 'search'
    description: ''
  }
  attributes: {
    metaTitle: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 60
      }>
    metaDescription: StringAttribute &
      SetMinMaxLength<{
        minLength: 25
        maxLength: 160
      }>
    metaImage: MediaAttribute
    metaSocial: ComponentAttribute<'shared.meta-social', true>
    keywords: TextAttribute
    metaRobots: StringAttribute
    structuredData: JSONAttribute
    metaViewport: StringAttribute
    canonicalURL: StringAttribute
  }
}

export interface UiCard extends ComponentSchema {
  info: {
    displayName: 'Card'
    icon: 'address-card'
    description: ''
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
    displayName: 'Grid'
    icon: 'table'
    description: ''
  }
  attributes: {
    visible: BooleanAttribute & RequiredAttribute & DefaultTo<true>
    children: ComponentAttribute<'data.entry', true> &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
  }
}

export interface UiHeadline extends ComponentSchema {
  info: {
    displayName: 'Headline'
    icon: 'heading'
    description: ''
  }
  attributes: {
    title: TextAttribute
    subtitle: TextAttribute
  }
}

export interface UiLink extends ComponentSchema {
  info: {
    displayName: 'Link'
    icon: 'link'
    description: ''
  }
  attributes: {
    url: StringAttribute & RequiredAttribute
    title: StringAttribute
  }
}

export interface UiParagraph extends ComponentSchema {
  info: {
    displayName: 'Paragraph'
    icon: 'envelope-open-text'
  }
  attributes: {
    value: RichTextAttribute & RequiredAttribute
  }
}

export interface UiSection extends ComponentSchema {
  info: {
    displayName: 'Section'
    icon: 'pager'
    description: ''
  }
  attributes: {
    visible: BooleanAttribute & RequiredAttribute & DefaultTo<true>
    heading: ComponentAttribute<'ui.card'>
    button: ComponentAttribute<'ui.link'>
  }
}

export interface UiTab extends ComponentSchema {
  info: {
    displayName: 'Tab'
    icon: 'clone'
    description: ''
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    pane: ComponentAttribute<'ui.card'> & RequiredAttribute
  }
}

export interface UiText extends ComponentSchema {
  info: {
    displayName: 'Text'
    icon: 'indent'
    description: ''
  }
  attributes: {
    visible: BooleanAttribute & RequiredAttribute & DefaultTo<true>
    children: ComponentAttribute<'ui.paragraph', true> &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
  }
}

declare global {
  namespace Strapi {
    interface Schemas {
      'admin::permission': AdminPermission
      'admin::user': AdminUser
      'admin::role': AdminRole
      'admin::api-token': AdminApiToken
      'plugin::upload.file': PluginUploadFile
      'plugin::upload.folder': PluginUploadFolder
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission
      'plugin::users-permissions.role': PluginUsersPermissionsRole
      'plugin::users-permissions.user': PluginUsersPermissionsUser
      'plugin::i18n.locale': PluginI18NLocale
      'plugin::email-designer.email-template': PluginEmailDesignerEmailTemplate
      'plugin::menus.menu': PluginMenusMenu
      'plugin::menus.menu-item': PluginMenusMenuItem
      'api::category.category': ApiCategoryCategory
      'api::contact.contact': ApiContactContact
      'api::email.email': ApiEmailEmail
      'api::post.post': ApiPostPost
      'api::translation.translation': ApiTranslationTranslation
      'api::website.website': ApiWebsiteWebsite
      'data.contact': DataContact
      'data.entry': DataEntry
      'data.set': DataSet
      'page.contact-us': PageContactUs
      'page.home': PageHome
      'shared.meta-social': SharedMetaSocial
      'shared.seo': SharedSeo
      'ui.card': UiCard
      'ui.grid': UiGrid
      'ui.headline': UiHeadline
      'ui.link': UiLink
      'ui.paragraph': UiParagraph
      'ui.section': UiSection
      'ui.tab': UiTab
      'ui.text': UiText
    }
  }
}
