const slugify = require('slugify')
module.exports = {
  lifecycles: {
    beforeCreate: async data => {
      if (data.section && data.section.title) {
        data.slug = slugify(data.section.title, { lower: true })
      }
      if (data.name) {
        data.slug = slugify(data.name, { lower: true })
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.section && data.section.title) {
        data.slug = slugify(data.section.title, { lower: true })
      }
      if (data.name) {
        data.slug = slugify(data.name, { lower: true })
      }
    },
  },
}
