const path = require('path');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    configureWebpack: {
        plugins: [
            // 检测打包后的文件插件
            // new BundleAnalyzerPlugin(),
            // 配置DllPlugin插件
            new DllReferencePlugin({
                manifest: require('./public/dll/vue.manifest.json')
            }),
            new DllReferencePlugin({
                manifest: require('./public/dll/vueRouter.manifest.json')
            }),
            new DllReferencePlugin({
                manifest: require('./public/dll/vuex.manifest.json')
            }),
            new DllReferencePlugin({
                manifest: require('./public/dll/axios.manifest.json')
            }),
        ],
        resolve: {
            // 路径别名
            alias: {
                '@api': path.resolve(__dirname, './src/api'),
                '@components':  path.resolve(__dirname, './src/components'),
            }
        }

    },
    devServer: {
        // 配置代理
        proxy: {
            '/test': {
                target: 'https://webapi.acfun.cn',
                pathRewrite: {
                    '/test': ''
                },
                // 允许跨域
                changeOrigin: true
            },
            '/': {
                target: '/',
                // 允许跨域
                changeOrigin: true
            }
        }
    }
}