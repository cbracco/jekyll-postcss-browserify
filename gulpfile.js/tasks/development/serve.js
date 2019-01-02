// Define Dependencies
const { series, watch } = require('gulp')
const browserSync = require('browser-sync').create()
const config = require('../../config')
const favicons = require('./favicons')
const fonts = require('./fonts')
const icons = require('./icons')
const images = require('./images')
const jekyll = require('./jekyll')
const scripts = require('./scripts')
const styles = require('./styles')

// Task
function reload (done) {
  browserSync.reload()
  done()
}

function serve () {
  browserSync.init(config.serve.development)
  watch(config.watch.jekyll, series(jekyll, reload))
  watch(config.watch.styles, series(styles))
  watch(config.watch.scripts, series(scripts))
  watch(config.watch.images, series(images, reload))
  watch(config.watch.icons, series(icons, reload))
  watch(config.watch.favicons, series(favicons, reload))
  watch(config.watch.fonts, series(fonts, reload))
}

module.exports = serve
