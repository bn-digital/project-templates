const { findOne, find } = require('../services')

module.exports = {
  findOne: async (ctx, populate = {}) => await findOne('page', { ...ctx, query: { slug: ctx.query.id } }, populate),
  find: async (ctx, populate = {}) => await find('page', ctx, populate),
}
