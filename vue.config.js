module.exports = {
 
  publicPath: '/',
  // publicPath: '/jyzt',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
   
  //  chainWebpack:config=>{
  //      // 通过 chainWebpack 调整图片的大小限制，我们将图片大小限制设置为 6kb，低于6kb的图片全部被内联，高于6kb的图片会放在单独的img文件夹中。
  //     const imagesRule = config.module.rule("images")
  //     imagesRule
  //       .use('url-loader')
  //       .loader('url-loader')
  //       .tap(options => Object.assign(options, { limit: 6144 }))
  //  },
      pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },

  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({ 
             remUnit: 192
          })
        ]
      }
    }
  },
  devServer: {
    port:8080,
    proxy: {
      '/api': {
        // target: 'http://10.0.90.193:8080',
        target: 'http://192.168.254.152:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' 
        }
      }
    },
  },
  lintOnSave: false,   // 取消 eslint 验证

}