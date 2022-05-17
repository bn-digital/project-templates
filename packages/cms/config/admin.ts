import * as fs from 'fs'
import * as path from 'path'

import { domain, generateSecret, workingDir } from './'

const forgotPasswordTemplate = fs.readFileSync(path.join(workingDir, 'src', 'templates', 'forgot-password.ejs'), { encoding: 'utf-8' })

export default ({ env }: { env: EnvFunction }) => ({
  auth: {
    secret: env('AUTH_SECRET', generateSecret('auth.secret')),
  },
  apiToken: { salt: env('API_TOKEN_SALT', generateSecret('api-token.salt')) },
  watchIgnoreFiles: ['**/graphql/**/*.graphql*', '**/config/sync/**', '**/database/data.sqlite*'],
  forgotPassword: {
    from: env('MAIL_FROM', `no-reply@${domain}`),
    replyTo: env('MAIL_TO', `no-reply@${domain}`),
    emailTemplate: { subject: `Reset password`, html: forgotPasswordTemplate, text: forgotPasswordTemplate },
  },
})
