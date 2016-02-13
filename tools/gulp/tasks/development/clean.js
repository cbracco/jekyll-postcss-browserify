// Define Dependencies
var config = require('../../config').clean
var del = require('del')
var gulp = require('gulp')

// Clean (gulp clean)
gulp.task('clean', function () {
  del.sync([config.src])
})
