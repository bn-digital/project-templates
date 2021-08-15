const { findOne } = require('./cms')

module.exports = {
  async findOneByDomain(ctx, populate = {}) {
    return findOne('website', ctx, populate)
  },
}
