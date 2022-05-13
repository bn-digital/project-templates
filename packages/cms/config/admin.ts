import * as fs from 'fs'
import * as path from 'path'
import { v5 } from 'uuid'

import { name } from './name'

const forgotPasswordTemplate = fs.readFileSync(path.join(process.cwd(), 'src', 'templates', 'forgot-password.ejs'), { encoding: 'utf-8' })

export default ({ env }: { env: EnvFunction }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', v5(name, '84a275d4-be64-454c-92a7-d3b046e24dc6')),
  },
  watchIgnoreFiles: ['**/graphql/**/*.graphql*', '**/config/sync/**', '**/database/data.sqlite*'],
  forgotPassword: {
    from: env('MAIL_FROM', `no-reply@${name}.dev`),
    replyTo: env('MAIL_TO', `no-reply@${name}.dev`),
    emailTemplate: { subject: `Reset password`, html: forgotPasswordTemplate, text: forgotPasswordTemplate },
  },
})
