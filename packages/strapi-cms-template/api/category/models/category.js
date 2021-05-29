const slugify = require('slugify')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async data => {
      if (data.title) {
        data.slug = slugify(data.title, { lower: true })
      }
      if (data.name) {
        data.slug = slugify(data.name, { lower: true })
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.title) {
        data.slug = slugify(data.title, { lower: true })
      }
      if (data.name) {
        data.slug = slugify(data.name, { lower: true })
      }
    },
  },
}
