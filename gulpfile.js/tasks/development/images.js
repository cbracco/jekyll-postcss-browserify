// Define Dependencies
const { dest, src } = require('gulp')
const browserSync = require('browser-sync')
const changed = require('gulp-changed')
const config = require('../../config').images
const handleErrors = require('../../utilities/handle-errors')
const plumber = require('gulp-plumber')

// Task
function images () {
  browserSync.notify('Rebuilding Images&hellip;')

  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(changed(config.dest))
    .pipe(dest(config.dest))
}

module.exports = images
