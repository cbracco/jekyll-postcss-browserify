// Define Dependencies
const config = require('../config').clean
const del = require('del')

// Task
function clean () {
  return del([config.src])
}

module.exports = clean
