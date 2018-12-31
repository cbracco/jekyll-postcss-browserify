// Define Dependencies
const browserSync = require('browser-sync')
const config = require('../../config').jekyll.development
const cp = require('child_process')

// Task
function jekyll (done) {
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
}

module.exports = jekyll
