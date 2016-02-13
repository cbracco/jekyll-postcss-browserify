// Define Dependencies
var gulp = require('gulp')
var collect = require('gulp-rev-collector')
var config = require('../../config').revision.collect

// Revision Collect (gulp revision:collect)
gulp.task('revision:collect', function () {
  return gulp.src(config.src)
  .pipe(collect())
  .pipe(gulp.dest(config.dest))
})
