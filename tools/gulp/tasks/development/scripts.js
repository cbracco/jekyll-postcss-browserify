// Define Dependencies
var browserSync = require('browser-sync')
var browserify = require('browserify')
var bundleLogger = require('../../utilities/bundleLogger')
var config = require('../../config').scripts
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var plumber = require('gulp-plumber')
var sourceStream = require('vinyl-source-stream')
var watchify = require('watchify')

// Scripts (gulp scripts)
gulp.task('scripts', function (callback) {
  browserSync.notify('Rebuilding Scripts&hellip;')

  var bundleQueue = config.bundleConfigs.length

  var browserifyThis = function (bundleConfig) {
    var bundler = browserify({
      // Required watchify args
      cache: {}, packageCache: {}, fullPaths: false,
      // Specify the entry point of your app
      entries: bundleConfig.entries,
      // Add file extentions to make optional in your requires
      extensions: config.extensions,
      // Enable source maps!
      debug: config.debug
    })

    var bundle = function () {
      // Log when bundling starts
      bundleLogger.start(bundleConfig.outputName)

      return bundler
        .bundle()
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(sourceStream(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('finish', reportFinished)
    }

    if (global.isWatching) {
      // Wrap with watchify and rebundle on changes
      bundler = watchify(bundler)
      // Rebundle on update
      bundler.on('update', bundle)
    }

    var reportFinished = function () {
      // Log when bundling completes
      bundleLogger.end(bundleConfig.outputName)

      if (bundleQueue) {
        bundleQueue--
        if (bundleQueue === 0) {
          // If queue is empty, tell gulp the task is complete.
          // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
          callback()
        }
      }
    }

    return bundle()
  }

  // Start bundling with Browserify for each bundleConfig specified
  config.bundleConfigs.forEach(browserifyThis)
})
