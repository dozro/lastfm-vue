const { defineConfig } = require('@vue/cli-service')

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = defineConfig({
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  chainWebpack: config => {
    if (process.env.VUE_CLI_BUILD_TARGET === 'lib') {
      config.plugins.delete('html')
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
    }
  }
})