const path = require('path')

// 导出配置信息
module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "bulid.js",
        path: path.resolve(__dirname, "./dist")
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
    }
}