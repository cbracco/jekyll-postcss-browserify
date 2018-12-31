// Define Dependencies
const { dest, src } = require('gulp')
const config = require('../../config').gzip
const gzip = require('gulp-gzip')

// Task
function gzipFiles () {
  return src(config.src)
    .pipe(gzip(config.options))
    .pipe(dest(config.dest))
}

module.exports = gzipFiles
