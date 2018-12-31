// Define Dependencies
const { dest, src } = require('gulp')
const browserSync = require('browser-sync')
const config = require('../../config').fonts
const handleErrors = require('../../utilities/handle-errors')
const plumber = require('gulp-plumber')

// Task
function fonts () {
  browserSync.notify('Rebuilding Fonts&hellip;')

  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(dest(config.dest))
}

module.exports = fonts
