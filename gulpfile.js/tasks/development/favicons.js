// Define Dependencies
const { dest, src } = require('gulp')
const browserSync = require('browser-sync')
const changed = require('gulp-changed')
const config = require('../../config').favicons
const handleErrors = require('../../utilities/handle-errors')
const plumber = require('gulp-plumber')

// Task
function favicons () {
  browserSync.notify('Rebuilding Favicons&hellip;')

  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(changed(config.dest))
    .pipe(dest(config.dest))
}

module.exports = favicons
