const { findOne, find } = require('../services')

module.exports = {
  findOne: async (ctx, populate = {}) => await findOne('meta', ctx, populate),
  find: async (ctx, populate = {}) => await find('meta', ctx, populate),
}
