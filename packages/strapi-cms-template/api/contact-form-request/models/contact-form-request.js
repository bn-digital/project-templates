'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(data) {
      try {
        await strapi.plugins['email-designer'].services.email.sendTemplatedEmail(
          {
            to: data.email, // required
            from: strapi.plugins['email'].settings.defaultFrom,
            replyTo: strapi.plugins['email'].settings.defaultReplyTo,
          },
          {
            templateId: 1,
          },
          {
            firstName: data.firstName,
            lastName: data.lastName,
          },
        )
      } catch (err) {
        strapi.log.debug('📺: ', err)
        return ctx.badRequest(null, err)
      }
    },
  },
}
