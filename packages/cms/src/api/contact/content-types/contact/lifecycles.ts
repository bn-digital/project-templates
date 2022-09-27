import { getEmailContentApiService, getEmailDesignerTemplateService } from '../../../email/uid'

export default {
  async afterCreate(event: Strapi.Database.AfterLifecycleEvent<{ email: string; subject: string; text: string; name: string }>) {
    const templateService = getEmailDesignerTemplateService(strapi)
    const emailService = getEmailContentApiService(strapi)
    const { result } = event
    const template = await templateService.findOne({ name: 'contact-form' })
    if (template) {
      const email: { id: string } = await emailService.create({
        data: {
          payload: {
            name: result.name,
            email: result.email,
            subject: result.subject,
            text: result.text,
          },
          template: template.id,
        },
      })
      await emailService.update(email.id, {
        data: {
          state: 'queued',
        },
      })
    }
  },
}
