const fs = require('fs')
const path = require('path')
const name = require('./name')
const forgotPasswordTemplate = fs.readFileSync(path.join(__dirname, '..', 'src', 'templates', 'forgot-password.ejs'), { encoding: 'utf-8' })

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c8c036c43da279fccb02af9ef8b0ad97'),
  },
  watchIgnoreFiles: ['**/*.graphql', '**/config/sync/**'],
  forgotPassword: {
    from: env('MAIL_FROM', `no-reply@${name}.io`),
    replyTo: env('MAIL_TO', `no-reply@${name}.io`),
    emailTemplate: { subject: `Reset password`, html: forgotPasswordTemplate, text: forgotPasswordTemplate },
  },
})
