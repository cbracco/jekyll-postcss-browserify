// Define Dependencies
var config = require('../../config').optimize.favicons
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var plumber = require('gulp-plumber')

// Optimize Favicons (gulp optimize:favicons)
gulp.task('optimize:favicons', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(gulp.dest(config.dest))
})
