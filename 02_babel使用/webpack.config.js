const path = require('path');

module.exports = {
    mode: "none",
    devtool: "source-map",
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                targets: ">0.1%"
                            }]
                        ]
                    }
                }
            }
        ]
    }
}