'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(data) {
      console.log(data)
      console.log(strapi.plugins['email'])
      await strapi.plugins['email'].services.email.send({
        to: process.env.MAILGUN_MAIL_TO,
        from: `${data.firstName} ${data.lastName} <${data.email}>`,
        subject: `Contact form request from www.bndigital.co`,
        text: `New Contact form requrest appeared on https://hop-capital.com`,
      })
    },
  },
}
