// Define Dependencies
var browserSync = require('browser-sync')
var changed = require('gulp-changed')
var config = require('../../config').favicons
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var plumber = require('gulp-plumber')

// Favicons (gulp favicons)
gulp.task('favicons', function () {
  browserSync.notify('Rebuilding Favicons&hellip;')

  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
})
