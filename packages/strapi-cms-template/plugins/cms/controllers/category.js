const { findOne, find } = require('./cms')

module.exports = {
  async findOneBySlug(ctx, populate = {}) {
    return findOne('category', ctx, populate)
  },
  async find(ctx, populate = {}) {
    return find('category', ctx, populate)
  },
}
