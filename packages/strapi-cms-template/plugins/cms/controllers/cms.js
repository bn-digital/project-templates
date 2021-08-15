const _ = require('lodash')
const { sanitizeEntity } = require('strapi-utils')
/** @type {string} */
const pluginId = require('../package.json').strapi.name.toLowerCase()

async function findOne(modelId, ctx, populate = {}) {
  let data = null
  if (_.has(ctx.query, '_q')) {
    data = await strapi.query(modelId, pluginId).search(ctx.query, populate)
  } else {
    data = await strapi.query(modelId, pluginId).findOne(ctx.params)
  }
  ctx.body = data ? sanitizeEntity(data, { model: strapi.getModel(modelId, pluginId) }) : data
}

async function find(modelId, ctx, populate = {}) {
  let data = []
  if (_.has(ctx.query, '_q')) {
    data = await strapi.query(modelId, pluginId).search(ctx.query, populate)
  } else {
    data = await strapi.query(modelId, pluginId).find(ctx.query, populate)
  }
  ctx.body = data.map(datum => sanitizeEntity(datum, { model: strapi.getModel(modelId, pluginId) }))
}

module.exports = {
  category: () => require('./category'),
  page: () => require('./page'),
  section: () => require('./section'),
  website: () => require('./website'),
  find, findOne,
}
