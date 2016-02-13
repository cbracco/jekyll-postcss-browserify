// Define Dependencies
var config = require('../../config').optimize.html
var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin')
var htmlreplace = require('gulp-html-replace')
var handleErrors = require('../../utilities/handleErrors')
var plumber = require('gulp-plumber')

// Optimize HTML (gulp optimize:html)
gulp.task('optimize:html', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(htmlreplace(config.processors.htmlreplace))
    .pipe(htmlmin(config.processors.htmlmin))
    .pipe(gulp.dest(config.dest))
})
