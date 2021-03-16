exports.activate = function () {
  // Do work when the extension is activated
}

exports.deactivate = function () {
  // Clean up state before the extension is deactivated
}

nova.commands.register('json-minifier.minifyJSON', (editor) => {
  const minify = require('minify.json.js')

  editor.edit(function (e) {
    const range = new Range(0, editor.document.length)
    const text = editor.getTextInRange(range)
    const minified = minify.minifyJSON(text)
    e.replace(range, minified)
  })
})
