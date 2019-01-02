// Define Dependencies
const { parallel, series } = require('gulp')
const clean = require('../../utilities/clean')
const favicons = require('./favicons')
const fonts = require('./fonts')
const icons = require('./icons')
const images = require('./images')
const jekyll = require('./jekyll')
const scripts = require('./scripts')
const styles = require('./styles')

// Task
function build (done) {
  return series(
    clean,
    parallel(
      styles,
      scripts,
      images,
      icons,
      favicons,
      fonts
    ),
    jekyll
  )(done)
}

module.exports = build
