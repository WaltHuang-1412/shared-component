const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryExport: 'default',
      assetModuleFilename: 'images/[hash][ext]'
    }
  },
  chainWebpack: (config) => {
    config.module.rule('images').set('parser', {
      dataUrlCondition: {
        maxSize: 4 * 1024 // 4KiB
      }
    })
  }
})
