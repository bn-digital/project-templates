import { getEmailContentApiService, getEmailDesignerEmailService } from '../../uid'

export default {
  beforeCreate(event: Strapi.Database.BeforeLifecycleEvent) {
    event.params.data.publishedAt = null
    event.params.data.status = null
  },
  beforeUpdate(event: Strapi.Database.BeforeLifecycleEvent) {
    if (!event.params.data.publishedAt) {
      event.params.data.status = null
    }
  },
  async afterUpdate({ result }: Strapi.Database.AfterLifecycleEvent<Strapi.Email.EmailEntity>) {
    const emailDesignerEmailService: Strapi.EmailDesigner.EmailService = getEmailDesignerEmailService(strapi)
    const emailService = getEmailContentApiService(strapi)
    const emailConfig: Strapi.Email.Settings = strapi.config.get('plugin.email').settings
    const email: Strapi.Email.EmailEntity = await emailService.findOne(result.id, { populate: 'template' })
    let deliveryStatus = email.status
    const to = email.email ?? emailConfig.defaultReplyTo
    const from = emailConfig.defaultFrom
    if (!deliveryStatus && email.publishedAt) {
      try {
        if (!email.template) {
          deliveryStatus = 'invalid'
          strapi.log.warn(`[email] No template configured for email #${email.id}`)
        } else {
          const emailDelivery = await emailDesignerEmailService.sendTemplatedEmail(
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
          deliveryStatus = emailDelivery?.response.startsWith('250') ? 'sent' : 'failed'
          if (deliveryStatus === 'sent') {
            strapi.log.info(`[email] Email #${email.id} was sent successfully to ${to}`)
          } else {
            strapi.log.error(`[email] Email #${email.id} was not delivered. Reason: ${emailDelivery.response}`)
          }
          await emailService.update(email.id, { data: { status: deliveryStatus, email: to, publishedAt: new Date() } })
        }
      } catch (e) {
        deliveryStatus = 'failed'
        strapi.log.error(`[email] Failed to find template for email #${email.id}`)
        await emailService.update(email.id, { data: { status: deliveryStatus, email: to, publishedAt: new Date() } })
      }
    }
  },
}
