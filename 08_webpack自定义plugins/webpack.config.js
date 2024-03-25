const path = require("path")
const AutoUploadWebpackPlugin = require("./plugins/AutoUploadWebpackPlugin")
module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        clean: true
    },
    plugins: [
        new AutoUploadWebpackPlugin()
    ]
}