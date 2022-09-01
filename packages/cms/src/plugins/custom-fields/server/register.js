'use strict'

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'color',
    plugin: 'custom-fields',
    type: 'string',
  })
  strapi.customFields.register({
    name: 'uuid',
    plugin: 'custom-fields',
    type: 'uid',
  })
}
