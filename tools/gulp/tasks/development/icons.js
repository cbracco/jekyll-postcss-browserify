// Define Dependencies
var browserSync = require('browser-sync')
var config = require('../../config').icons
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var plumber = require('gulp-plumber')
var svgSprite = require('gulp-svg-sprite')

// Icons (gulp icons)
gulp.task('icons', function () {
  browserSync.notify('Rebuilding Icons&hellip;')

  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(svgSprite(config.processors.sprite))
    .pipe(gulp.dest(config.dest))
})
