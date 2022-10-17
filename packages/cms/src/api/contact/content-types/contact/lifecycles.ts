export default {
  async afterCreate(event: Strapi.Database.AfterLifecycleEvent<{ email: string; subject: string; text: string; name: string }>) {
    const templateService: Strapi.EmailDesigner.TemplateService = strapi.plugin('email-designer').services.email
    const { result } = event
    const template = await templateService.findOne({ name: 'contact-form' })
    strapi.entityService
      .create<'plugin::email-emitter.email', Strapi.EmailEmitter.EmailEntity>('plugin::email-emitter.email', {
        data: {
          payload: {
            name: result.name,
            email: result.email,
            subject: result.subject,
            text: result.text,
          },
          template: template?.id ?? null,
          scheduled: true,
        },
      })
      .then((result: Strapi.EmailEmitter.EmailEntity) => strapi.log.info(`Email ${result.id}created`))
  },
}
