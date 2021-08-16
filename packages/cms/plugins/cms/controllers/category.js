const { findOne, find } = require('../services')

module.exports = {
  findOne: async (ctx, populate = {}) => await findOne('category', { ...ctx, query: { slug: ctx.query.id } }, populate),
  find: async (ctx, populate = {}) => await find('category', ctx, populate),
}
