const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');
// 清理打包输出时的文件夹 /dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * 本配置文件用于预先打包基础插件，减少开发过程中的打包时间。
 */
module.exports = {
    // 使用production模式，减少包大小
    mode: 'production',
    entry: {
        // vendor: ['vue/dist/vue.runtime.esm.js', 'axios', 'vue-router']
        vue: ['vue/dist/vue.runtime.esm.js'],
        'vuex': ['vuex'],
        'vueRouter': ['vue-router/dist/vue-router.esm.js'],
        axios: ['axios']
    },
    output: {
        // 输出文件名
        filename: '[name].dll.js',
        // 输出文件存放地址
        path: path.resolve(__dirname, './public/dll'),
        // 全局库名
        library: 'dll_[name]',
        libraryTarget: 'umd'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new DllPlugin({
            /*  
            该插件的name属性值需要和 output.library保存一致，该字段值，也就是输出的 manifest.json文件中name字段的值。
            比如在jquery.manifest文件中有 name: '_dll_jquery'
            */
            name: 'dll_[name]',
            /* 生成manifest文件输出的位置和文件名称 */
            path: path.join(__dirname, './public/dll', '[name].manifest.json'),
        })
    ]
}