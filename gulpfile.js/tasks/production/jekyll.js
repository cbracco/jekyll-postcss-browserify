// Define Dependencies
const config = require('../../config').jekyll.production
const cp = require('child_process')

// Task
function jekyll (done) {
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
