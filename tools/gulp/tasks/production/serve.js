// Define Dependencies
var browserSync = require('browser-sync')
var config = require('../../config').serve.production
var gulp = require('gulp')

// Serve (gulp serve:production)
gulp.task('serve:production', ['build:production'], function () {
  browserSync(config)
})
