// Define Dependencies
var config = require('../../config').optimize.images
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var imagemin = require('gulp-imagemin')
var plumber = require('gulp-plumber')

// Optimize Images (gulp optimize:images)
gulp.task('optimize:images', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(imagemin(config.processors.imagemin))
    .pipe(gulp.dest(config.dest))
})
