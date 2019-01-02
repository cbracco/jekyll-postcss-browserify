// Define Dependencies
const { dest, src } = require('gulp')
const config = require('../../config').optimize.scripts
const handleErrors = require('../../utilities/handle-errors')
const plumber = require('gulp-plumber')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

// Task
function optimizeScripts () {
  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(uglify(config.processors.uglify))
    .pipe(rename(config.processors.rename))
    .pipe(dest(config.dest))
}

module.exports = optimizeScripts
