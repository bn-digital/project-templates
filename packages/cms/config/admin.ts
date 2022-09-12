import * as fs from 'fs'
import * as path from 'path'

import { domain, generateSecret, workingDir } from './'

const forgotPasswordTemplate = fs.readFileSync(path.join(workingDir, 'src', 'templates', 'forgot-password.ejs'), { encoding: 'utf-8' })

export default ({ env }: Strapi.Env) => ({
  auth: {
    secret: env('AUTH_SECRET', generateSecret('AUTH_SECRET')),
  },
  apiToken: { salt: env('API_TOKEN_SALT', generateSecret('API_TOKEN_SALT')) },
  watchIgnoreFiles: ['**/graphql/**/*.graphql*', '**/config/sync/**', '**/types/**/*.d.ts', '**/database/data.sqlite*'],
  forgotPassword: {
    from: env('SMTP_MAIL_FROM', `no-reply@${domain}`),
    replyTo: env('SMTP_MAIL_TO', `no-reply@${domain}`),
    emailTemplate: { subject: `Reset password`, html: forgotPasswordTemplate, text: forgotPasswordTemplate },
  },
})
