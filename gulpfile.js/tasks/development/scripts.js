// Define Dependencies
const { dest } = require('gulp')
const browserify = require('browserify')
const browserSync = require('browser-sync')
const bundleLogger = require('../../utilities/bundle-logger')
const config = require('../../config').scripts
const handleErrors = require('../../utilities/handle-errors')
const plumber = require('gulp-plumber')
const sourceStream = require('vinyl-source-stream')
const watchify = require('watchify')

// Task
function scripts (done) {
  browserSync.notify('Rebuilding Scripts&hellip;')

  let bundleQueue = config.bundleConfigs.length

  let browserifyThis = function (bundleConfig) {
    let bundler = browserify({
      // Required watchify args
      cache: {}, packageCache: {}, fullPaths: false,
      // Specify the entry point of your app
      entries: bundleConfig.entries,
      // Add file extentions to make optional in your requires
      extensions: config.extensions,
      // Enable source maps!
      debug: config.debug
    })

    let bundle = function () {
      // Log when bundling starts
      bundleLogger.start(bundleConfig.outputName)

      return bundler
        .bundle()
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(sourceStream(bundleConfig.outputName))
        .pipe(dest(bundleConfig.dest))
        .on('finish', reportFinished)
    }

    if (global.isWatching) {
      // Wrap with watchify and rebundle on changes
      bundler = watchify(bundler)
      // Rebundle on update
      bundler.on('update', bundle)
    }

    let reportFinished = function () {
      // Log when bundling completes
      bundleLogger.end(bundleConfig.outputName)

      if (bundleQueue) {
        bundleQueue--
        if (bundleQueue === 0) {
          // If queue is empty, tell gulp the task is complete.
          // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
          done()
        }
      }
    }

    return bundle()
  }

  // Start bundling with Browserify for each bundleConfig specified
  config.bundleConfigs.forEach(browserifyThis)
}

module.exports = scripts
