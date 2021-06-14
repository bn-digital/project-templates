module.exports = {
  definition: `
    extend type Query {
      postBySlug(slug: String!): BlogPost
      categoryBySlug(slug: String!): BlogCategory
    }
  `,
  resolver: {
    Query: {
      posts: {
        resolver: 'plugins::blog.post.find',
      },
      post: {
        resolver: 'plugins::blog.post.findOne',
      },
      category: {
        resolver: 'plugins::blog.category.findOne',
      },
      postBySlug: {
        resolver: 'plugins::blog.post.findOneBySlug',
      },
      categories: {
        resolver: 'plugins::blog.category.find',
      },
      categoryBySlug: {
        resolver: 'plugins::blog.category.findOneBySlug',
      },
    },
  },
}
