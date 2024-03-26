module.exports = {
    input: "./src/index.js",
    output: [
        {
            format: "umd",
            name: "marsUtils",
            file: "./build/bundle.umd.js"
        },
        {
            format: "amd",
            file: "./build/bundle.amd.js"
        },
        {
            format: "cjs",
            file: "./build/bundle.cjs.js"
        },
        {
            format: "iife",
            name: "marsUtils",
            file: "./build/bundle.browser.js"
        }
    ]
}