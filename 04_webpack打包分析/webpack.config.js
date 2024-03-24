const path = require('path');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
// 导出配置信息
module.exports = {
    mode: 'production',
    entry: {
        index: {
            import: './src/index.js',
            dependOn: "shared"
        },
        main: {
            import: './src/main.js',
            dependOn: "shared"
        },
        shared: ['axios']
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, './build'),
        clean: true
    },
    resolve: {
        extensions: ['.js', 'json', '.jsx']
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}