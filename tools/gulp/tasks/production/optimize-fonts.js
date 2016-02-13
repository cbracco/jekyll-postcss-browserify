// Define Dependencies
var config = require('../../config').optimize.fonts
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var plumber = require('gulp-plumber')

// Optimize fonts (gulp optimize:fonts)
gulp.task('optimize:fonts', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(gulp.dest(config.dest))
})
