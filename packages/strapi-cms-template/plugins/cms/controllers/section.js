const { findOne, find } = require('./cms')

module.exports = {
  async findOneBySlug(ctx, populate = {}) {
    return findOne('section', ctx, populate)
  },
  async find(ctx, populate = {}) {
    return find('section', ctx, populate)
  },
}
