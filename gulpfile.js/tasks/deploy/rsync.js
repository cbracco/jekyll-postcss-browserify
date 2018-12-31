// Define Dependencies
const { src } = require('gulp')
const config = require('../../config').rsync
const rsync = require('gulp-rsync')

// Task
function rsyncFiles () {
  return src(config.src)
    .pipe(rsync(config.options))
}

module.exports = rsyncFiles
