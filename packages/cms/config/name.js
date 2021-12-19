/**
 * Name is generated from package scope name, defined in package.json, i.e. leading chunk before slash (@app/cms - app)
 * @type {string}
 */
const name = require('../package.json').name.split('/')[0].toString().replace('@', '')

module.exports = name