// Define Dependencies
var config = require('../../config').optimize.scripts
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var plumber = require('gulp-plumber')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')

// Optimize Scripts (gulp optimize:scripts)
gulp.task('optimize:scripts', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(uglify(config.processors.uglify))
    .pipe(rename(config.processors.rename))
    .pipe(gulp.dest(config.dest))
})
