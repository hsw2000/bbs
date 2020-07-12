const webpack = require('webpack')
module.exports = {
	pages:{
    index:{
      // page 的入口
        entry:'./src/pages/index/index.js', 
      // 模板来源
        template:'./src/pages/index/index.html',
      // 在 dist/index.html 的输出
        filename:'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title:'index',
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    management:{
        entry:'./src/pages/management/management.js',
        template:'./src/pages/management/management.html',
        filename:'management.html',
        title:'management',
        chunks: ["chunk-vendors", "chunk-common", "management"]
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/projects/bbs/' : '/',
  devServer: {
    proxy: {
      '/front': {
        target: 'http://zs2.lwydev.xyz'
      },
      '/back': {
        target: 'http://zs2.lwydev.xyz'
      }
    }
  }
}
