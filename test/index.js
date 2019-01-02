// Define Dependencies
var test = require('tape')
var standard = require('standard')

// Define Tests
test('Gulp tasks adhere to JavaScript Standard Style', function (t) {
  // Lint Gulp files with standard
  standard.lintFiles(['gulpfile.js/**/*'], function (err, res) {
    // If there are no lint errors, pass test
    if (res.errorCount === 0 && res.warningCount === 0) {
      t.pass('passed standard')
    }

    // If there are lint errors, fail test
    if (err) {
      return t.fail(err)
    }

    // Display each lint error
    res.results.forEach(function (result) {
      if (result.errorCount || result.warningCount) {
        result.messages.forEach(function (msg) {
          t.fail('' +
            result.filePath.replace(process.cwd(), '') +
            ':' + msg.line + ':' + msg.column + ': ' +
            msg.message + ' (' + msg.ruleId + ')')
        })
      }
    })

    t.end()
  })
})
