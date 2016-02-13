// Define Dependencies
var browserSync = require('browser-sync')
var changed = require('gulp-changed')
var config = require('../../config').images
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var plumber = require('gulp-plumber')

// Images (gulp images)
gulp.task('images', function () {
  browserSync.notify('Rebuilding Images&hellip;')

  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
})
