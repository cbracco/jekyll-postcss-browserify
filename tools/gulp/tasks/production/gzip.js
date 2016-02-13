// Define Dependencies
var gulp = require('gulp')
var gzip = require('gulp-gzip')
var config = require('../../config').gzip

// Gzip (gulp gzip)
gulp.task('gzip', function () {
  return gulp.src(config.src)
    .pipe(gzip(config.options))
    .pipe(gulp.dest(config.dest))
})
