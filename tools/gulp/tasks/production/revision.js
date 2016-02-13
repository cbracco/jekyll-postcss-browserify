// Define Dependencies
var gulp = require('gulp')
var rev = require('gulp-rev')
var config = require('../../config').revision

// Revision (gulp revision)
gulp.task('revision', function () {
  return gulp.src(config.src.assets, { base: config.src.base })
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev())
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev.manifest({ path: config.dest.manifest.name }))
    .pipe(gulp.dest(config.dest.manifest.path))
})
