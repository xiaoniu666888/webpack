const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 导出配置信息
module.exports = {
    mode: "development",
    entry: "./src/main.js",
    devtool: false,
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    resolveLoader: {
        modules: ["./loader", "node_modules"]
    },
    module: {
        rules: [
            // js
            {
                test: /\.js$/,
                use: {
                    loader: "xn_loader1.js",
                }
            },
            // md
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "xnmd_loader.js"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}