const name = require('../package.json').name.split('/')[0].toString().replace('@', '').replace('-', '')

if (!name) {
  console.error(
    'Package name is not specified in package.json. Replace it with real app name in workspace format (e.g. @my-app/cms, where my-app is name of root package.json)',
  )
  process.exit(1)
} else if (name === 'bn-digital') {
  console.error(
    'Package name should be different then template one. Replace it with real app name in workspace format (e.g. @my-app/cms, where my-app is name of root package.json)',
  )
  process.exit(1)
} else {
  module.exports = name
}
