// Define Dependencies
const { dest, src } = require('gulp')
const collect = require('gulp-rev-collector')
const config = require('../../config').revision.collect

// Task
function revisionCollect () {
  return src(config.src)
  .pipe(collect())
  .pipe(dest(config.dest))
}

module.exports = revisionCollect
