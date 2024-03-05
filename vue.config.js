// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true,
//     lintOnSave: false, // 关闭语法检查
//     runtimeCompiler: true,
//     // 开启代理服务器
//     devServer: {
//         proxy: 'http://localhost:5000'
//       }
// })

module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
        }
    },
    transpileDependencies: true,
    lintOnSave: false, // 关闭语法检查
    runtimeCompiler: true,
    // 开启代理服务器 （方式一）
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },

    // 开启代理服务器 （方式二）
    devServer: {
        proxy: {
            '/atguigu': {
                target: 'http://localhost:5000',
                pathRewrite: {
                    '^/atguigu': ''
                },
                ws: true,  // 用于支持websocket
                changeOrigin: true  // 用于控制请求头中的host值
            },
            //   '/foo': {
            //     target: '<other_url>'
            //   }
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: {
                    '^/demo': ''
                },
                ws: true,  // 用于支持websocket
                changeOrigin: true  // 用于控制请求头中的host值
            },
        }
    }
}
