// Define Dependencies
var browserSync = require('browser-sync')
var config = require('../../config').jekyll.development
var cp = require('child_process')
var gulp = require('gulp')

// Jekyll (gulp jekyll)
gulp.task('jekyll', function (done) {
  browserSync.notify('Rebuilding Jekyll&hellip;')

  return cp.spawn(
    'bundle',
    [
      'exec',
      'jekyll',
      'build',
      '-q',
      '--source=' + config.src,
      '--destination=' + config.dest,
      '--config=' + config.config
    ],
    {
      stdio: 'inherit'
    }
  )
  .on('close', done)
})
