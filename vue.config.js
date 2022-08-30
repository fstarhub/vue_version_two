const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  // devServer:{
  //   proxy:"http://localhost:8085"
  // }

  devServer: {
    proxy: {
      '/api': {//匹配所有以'/api'开头的请求路径
        target: 'http://localhost:8000',//代理目标基础路径
        // ws: true,//用于支持websocket
        changeOrigin: true,//用于控制请求域中的host值
        pathRewrite:{'^/api':''},//发送给服务器的路径中去除前缀的/api
      },
    }
  }
})
