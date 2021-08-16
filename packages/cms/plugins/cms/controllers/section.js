const { findOne, find } = require('../services')

module.exports = {
  findOne: async (ctx, populate = {}) => await findOne('section', { ...ctx, query: { slug: ctx.query.id } }, populate),
  find: async (ctx, populate = {}) => await find('section', ctx, populate),
}
