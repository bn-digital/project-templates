const pluginId = require('../package.json').strapi.name.toLowerCase()

module.exports = {
  definition: `
    extend type CmsSection {
      card: ComponentOrganismsCard
    }
    `,
  resolver: {
    CmsSection: {
      card: {
        resolverOf: `plugins::${pluginId}.sections.card`,
        resolver: root => (root.cards ? root.cards[0] : {}),
      },
    },
  },
}
