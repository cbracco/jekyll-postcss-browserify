// Define Dependencies
var config = require('../../config').optimize.icons
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var plumber = require('gulp-plumber')

// Optimize icons (gulp optimize:icons)
gulp.task('optimize:icons', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(gulp.dest(config.dest))
})
