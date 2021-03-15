'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(data) {
      console.log(data)
      await strapi.plugins['email'].services.email.send({
        to: 'customers@my-store.io',
        from: 'noreply@my-store.io',
        subject: 'New contact form request',
        text: 'Check out this amazing new product :)',
      })
    },
  },
}
