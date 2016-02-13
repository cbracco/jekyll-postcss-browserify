// Define Dependencies
var gulp = require('gulp')
var runSequence = require('run-sequence')

// Build (gulp build)
gulp.task('build', function (callback) {
  runSequence(
    'clean',
    [
      'styles',
      'scripts',
      'images',
      'icons',
      'favicons',
      'fonts'
    ],
    'jekyll',
    callback
  )
})
