const { sanitizeEntity } = require('strapi-utils')
const _ = require('lodash')

module.exports = {
  async findOneBySlug(ctx) {
    let data = await strapi.query('post', 'blog').findOne({ slug: ctx.params.slug })
    ctx.body = data ? sanitizeEntity(data, { model: strapi.query('post', 'blog').model }) : data
  },
  async findOne(ctx) {
    let data = await strapi.query('post', 'blog').findOne(ctx.params)
    ctx.body = data ? sanitizeEntity({ ...data }, { model: strapi.query('post', 'blog').model }) : data
  },
  async find(ctx, populate = {}) {
    let data
    if (_.has(ctx.query, '_q')) {
      data = await strapi.query('post', 'blog').search(ctx.query, populate)
    } else {
      data = await strapi.query('post', 'blog').find(ctx.query, populate)
    }
    ctx.body = data.map(it => sanitizeEntity({ ...it }, { model: strapi.query('post', 'blog').model }))
  },
}
