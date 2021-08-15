const pluginId = require('../package.json').strapi.name.toLowerCase()

module.exports = {
  resolver: {
    Mutation: {
      createContact: {
        resolver: `plugins::${pluginId}.contact.create`,
      },
    },
  },
}
