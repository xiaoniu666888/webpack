const path = require('path')

// 导出配置信息
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bulid.js",
        path: path.resolve(__dirname, "./dist")
    }
}