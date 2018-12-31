// Define Dependencies
const { dest, src } = require('gulp')
const browserSync = require('browser-sync')
const config = require('../../config').icons
const handleErrors = require('../../utilities/handle-errors')
const plumber = require('gulp-plumber')
const svgSprite = require('gulp-svg-sprite')

// Task
function icons () {
  browserSync.notify('Rebuilding Icons&hellip;')

  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(svgSprite(config.processors.sprite))
    .pipe(dest(config.dest))
}

module.exports = icons
