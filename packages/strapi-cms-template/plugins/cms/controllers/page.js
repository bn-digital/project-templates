const { findOne, find } = require('./cms')

module.exports = {
  async findOneBySlug(ctx, populate = {}) {
    return findOne('page', ctx, populate)
  },
  async find(ctx, populate = {}) {
    return find('page', ctx, populate)
  },
}
