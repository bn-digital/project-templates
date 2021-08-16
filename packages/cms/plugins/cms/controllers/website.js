const { findOne, find } = require('../services')

module.exports = {
  findOne: async (ctx, populate = {}) => await findOne('website', ctx, populate),
}
