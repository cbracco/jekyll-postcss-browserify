// Define Dependencies
const { dest, src } = require('gulp')
const config = require('../../config').optimize.images
const handleErrors = require('../../utilities/handle-errors')
const imagemin = require('gulp-imagemin')
const plumber = require('gulp-plumber')

// Task
function optimizeImages () {
  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(imagemin(config.processors.imagemin))
    .pipe(dest(config.dest))
}

module.exports = optimizeImages
