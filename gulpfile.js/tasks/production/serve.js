// Define Dependencies
const browserSync = require('browser-sync')
const config = require('../../config').serve.production

// Task
function serveProduction () {
  browserSync.init(config)
}

module.exports = serveProduction
