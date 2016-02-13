// Define Dependencies
var browserSync = require('browser-sync')
var config = require('../../config').serve.development
var gulp = require('gulp')

// Serve (gulp serve)
gulp.task('serve', ['build'], function () {
  browserSync(config)
})
