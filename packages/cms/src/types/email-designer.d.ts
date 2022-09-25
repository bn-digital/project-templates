namespace Strapi {
  namespace EmailDesigner {
    type TemplateEntity = { id: number; templateReferenceId: number; sourceCodeToTemplateId?: number; name: string; subject: string }

    type EmailInput = {
      to: string
      from: string
      replyTo?: string
      cc?: string
      bcc?: string
      subject?: string
      body?: string
      attachments?: Array<any>
    }

    interface TemplateService {
      findOne(params: Partial<TemplateEntity>): Promise<TemplateEntity | null>
    }

    interface EmailService {
      sendTemplatedEmail<T = any>(email: EmailInput, template: Partial<TemplateEntity>, payload: T): Promise<{ response: string }>
    }
  }
}
