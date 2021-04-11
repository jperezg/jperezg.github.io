const pluginSass = require("eleventy-plugin-sass")

module.exports = (config) => {

  config.addPlugin(pluginSass, {
    watch: [
      'src/styles/*.scss'
    ]
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    templateFormats: [
      'html',
      '11ty.js',
      'jpg',
      'otf'
    ]
  }
}
