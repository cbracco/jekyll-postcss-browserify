// Define Dependencies
var config = require('../../config').optimize.styles
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var cssnano = require('cssnano')
var plumber = require('gulp-plumber')
var postcss = require('gulp-postcss')
var rename = require('gulp-rename')

// Optimize Styles (gulp optimize:styles)
gulp.task('optimize:styles', function () {
  var minify = [cssnano]

  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(postcss(minify))
    .pipe(rename(config.processors.rename))
    .pipe(gulp.dest(config.dest))
})
