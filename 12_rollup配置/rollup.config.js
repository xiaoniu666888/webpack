
const babel = require("@rollup/plugin-babel")
const terser = require("@rollup/plugin-terser")
module.exports = {
    input: "./src/index.js",
    output: {
        format: "umd",
        file: "./dist/bundle.umd.js"
    },
    plugins: [
        babel({
            babelHelpers: "bundled",
            exclude: /node_modules/
        }),
        terser()
    ],
}