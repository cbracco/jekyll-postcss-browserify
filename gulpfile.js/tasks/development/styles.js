// Define Dependencies
const { dest, src } = require('gulp')
const atImport = require('postcss-import')
const browserSync = require('browser-sync')
const config = require('../../config').styles
const cssnext = require('postcss-cssnext')
const handleErrors = require('../../utilities/handle-errors')
const mqpacker = require('css-mqpacker')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const removeRoot = require('postcss-remove-root')
const size = require('gulp-size')
const sourcemaps = require('gulp-sourcemaps')
const url = require('postcss-url')

// Task
function styles () {
  browserSync.notify('Rebuilding Styles&hellip;')

  var process = [
    atImport,
    url,
    cssnext(config.processors.cssnext),
    mqpacker(config.processors.mqpacker),
    removeRoot
  ]

  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(sourcemaps.init())
    .pipe(postcss(process))
    .pipe(size({
      title: 'Total CSS (unminified): ',
      showFiles: true,
      pretty: true
    }))
    .pipe(size({
      title: 'Total CSS (unminified & gzipped): ',
      showFiles: true,
      pretty: true,
      gzip: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(config.dest))
    .pipe(browserSync.stream())
}

module.exports = styles
