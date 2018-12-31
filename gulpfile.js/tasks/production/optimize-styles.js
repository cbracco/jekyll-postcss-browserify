// Define Dependencies
const { dest, src } = require('gulp')
const config = require('../../config').optimize.styles
const handleErrors = require('../../utilities/handle-errors')
const cssnano = require('cssnano')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const size = require('gulp-size')

// Task

function optimizeStyles () {
  const minify = [cssnano]

  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(postcss(minify))
    .pipe(rename(config.processors.rename))
    .pipe(size({
      title: 'Total CSS (minified): ',
      showFiles: true,
      pretty: true
    }))
    .pipe(size({
      title: 'Total CSS (minified & gzipped): ',
      showFiles: true,
      pretty: true,
      gzip: true
    }))
    .pipe(dest(config.dest))
}

module.exports = optimizeStyles
