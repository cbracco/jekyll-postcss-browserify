// Define Dependencies
const { dest, src } = require('gulp')
const config = require('../../config').optimize.html
const htmlmin = require('gulp-htmlmin')
const htmlreplace = require('gulp-html-replace')
const handleErrors = require('../../utilities/handle-errors')
const plumber = require('gulp-plumber')

// Task
function optimizeHtml () {
  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(htmlreplace(config.processors.htmlreplace))
    .pipe(htmlmin(config.processors.htmlmin))
    .pipe(dest(config.dest))
}

module.exports = optimizeHtml
