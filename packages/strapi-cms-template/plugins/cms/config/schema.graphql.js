const pluginId = require('../package.json').strapi.name.toLowerCase()

module.exports = {
  definition: `
    extend type Query {
      websiteByDomain(domain: String!): CmsWebsite
      pageBySlug(slug: String!): CmsPage
      sectionBySlug(slug: String!): CmsSection
      categoryBySlug(slug: String!): CmsCategory
    }
    extend type CmsSection {
      card: ComponentOrganismsCard
    }
    `,
  resolver: {
    Query: {
      websiteByDomain: {
        resolver: `plugins::${pluginId}.website.findOneByDomain`,
      },
      sections: {
        resolver: `plugins::${pluginId}.section.find`,
      },
      sectionBySlug: {
        resolver: `plugins::${pluginId}.section.findOneBySlug`,
      },
      pages: {
        resolver: `plugins::${pluginId}.page.find`,
      },
      page: {
        resolver: `plugins::${pluginId}.page.findOneBySlug`,
      },
      categories: {
        resolver: `plugins::${pluginId}.category.find`,
      },
      category: {
        resolver: `plugins::${pluginId}.category.findOneBySlug`,
      },
    },
    CmsSection: {
      card: {
        resolverOf: `plugins::${pluginId}.sections.card`,
        resolver: (root) => root.cards ? root.cards[0]: {}
      }
    }
  },
}
