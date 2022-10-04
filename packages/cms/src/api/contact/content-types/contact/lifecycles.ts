export default {
  async afterCreate(event: Strapi.Database.AfterLifecycleEvent<{ email: string; subject: string; text: string; name: string }>) {
    const templateService: Strapi.EmailDesigner.TemplateService = strapi.plugin('email-designer').services.email
    const emailService: Strapi.EmailEmitter.EmailService = strapi.plugin('email-emitter').services.email
    const { result } = event
    const template = await templateService.findOne({ name: 'contact-form' })
    if (template) {
      const email: { id?: string } = await emailService.create({
        data: {
          payload: {
            name: result.name,
            email: result.email,
            subject: result.subject,
            text: result.text,
          },
          template: template.id,
          scheduled: true
        },
      })
    }
  },
}
