export default {
  async afterCreate(event: Strapi.Database.AfterLifecycleEvent<Strapi.Email.EmailEntity>) {
    const emailService = strapi.service<Strapi.Email.EmailService>('api::email.email')
    const email: Strapi.Email.EmailEntity = await emailService.findOne(event.result.id)
    await emailService.update(email.id, { data: { status: 'queued' } })
  },

  async afterUpdate({ result }: Strapi.Database.AfterLifecycleEvent<Strapi.Email.EmailEntity>) {
    const emailTemplateService: Strapi.EmailDesigner.EmailService = strapi.plugin('email-designer').service('email')
    const emailService = strapi.service<Strapi.Email.EmailService>('api::email.email')
    const emailConfig: Strapi.Email.Settings = strapi.config.get('plugin.email').settings
    const email: Strapi.Email.EmailEntity = await emailService.findOne(result.id, { populate: 'template' })
    let status: Strapi.Email.Status = email.status
    const to = email.email ?? emailConfig.defaultReplyTo
    const from = emailConfig.defaultFrom
    if (status === 'queued') {
      try {
        if (!email.template) {
          status = 'new'
          strapi.log.warn(`[email] No template configured for this email`)
        } else {
          const emailDelivery = await emailTemplateService.sendTemplatedEmail(
            {
              to,
              from,
              replyTo: to,
            },
            {
              templateReferenceId: email.template.templateReferenceId,
              subject: email.template.subject,
            },
            email.payload ?? {},
          )
          status = emailDelivery?.response.startsWith('250') ? 'sent' : 'failed'
          strapi.log.info(`[email] Email was sent successfully to ${to}`)
        }
      } catch (e) {
        strapi.log.error(`[email] Failed to find template for email ${email.id}`)
        status = 'failed'
      } finally {
        emailService.update(email.id, { data: { status } })
      }
    }
  },
}
