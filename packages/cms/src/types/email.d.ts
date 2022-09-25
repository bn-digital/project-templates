namespace Strapi {
  namespace Email {
    type State = 'new' | 'queued' | 'sent' | 'failed'

    type EmailInput = {
      to: string
      from: string
      replyTo?: string
      subject?: string
      text?: string
      html?: string
    }

    type EmailEntity = {
      id: string
      email: string
      template: Strapi.EmailDesigner.TemplateEntity
      status: Strapi.Email.State
      payload: { [key: string]: string }
    }

    interface EmailProvider {
      send(email: EmailInput): Promise<{ response: string }>
    }

    type EmailService = Strapi.Service

    type Settings = {
      defaultFrom: string
      defaultReplyTo: string
    }
  }
}
