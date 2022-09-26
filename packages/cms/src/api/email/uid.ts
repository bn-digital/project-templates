const ENTITY_UID = `api::email.email` as const

function getEmailContentApiService(strapi: Strapi.Strapi): Strapi.Email.EmailService {
  return strapi.service(ENTITY_UID)
}

function getEmailDesignerEmailService(strapi: Strapi.Strapi): Strapi.EmailDesigner.EmailService {
  return strapi.plugin('email-designer').service('email')
}

function getEmailDesignerTemplateService(strapi: Strapi.Strapi): Strapi.EmailDesigner.TemplateService {
  return strapi.plugin('email-designer').service('template')
}

export { ENTITY_UID as default, getEmailContentApiService, getEmailDesignerEmailService, getEmailDesignerTemplateService }
