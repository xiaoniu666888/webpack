const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 导出配置信息
module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "bulid.js",
        path: path.resolve(__dirname, "./dist")
    },
    devServer: {
        hot: true,
        // host: "0.0.0.0",
        port: 8888
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // loader:" css-loader" 写法一
                // use: ["css-loader"]
                use: [

                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "webpack",
            template: "./index.html"
        })


    ]
}