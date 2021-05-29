module.exports = {
  definition: `
    extend type Content {
      section: ComponentOrganismsSection
    }
  `,
  resolvers: {
    Content: {
      section: {
        description: 'Return first section from stack',
        resolver: async obj => {
          const sections = await obj.sections
          return sections.length > 0 ? obj.sections[0] : null
        },
      },
    },
  },
}
