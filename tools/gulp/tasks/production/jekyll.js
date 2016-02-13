// Define Dependencies
var config = require('../../config').jekyll.production
var cp = require('child_process')
var gulp = require('gulp')

// Jekyll (gulp jekyll:production)
gulp.task('jekyll:production', function (done) {
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
