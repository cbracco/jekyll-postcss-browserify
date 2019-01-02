// Define Dependencies
const { dest, src } = require('gulp')
const config = require('../../config').revision
const rev = require('gulp-rev')

// Task
function revision () {
  return src(config.src.assets, { base: config.src.base })
    .pipe(dest(config.dest.assets))
    .pipe(rev())
    .pipe(dest(config.dest.assets))
    .pipe(rev.manifest({ path: config.dest.manifest.name }))
    .pipe(dest(config.dest.manifest.path))
}

module.exports = revision
