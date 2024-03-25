// const { watch } = require("browser-sync")
const browserSync = require("browser-sync")
const { src, dest, watch, series, parallel } = require("gulp")
const babel = require("gulp-babel")
const htmlmin = require("gulp-htmlmin")
const inject = require("gulp-inject")
const less = require("gulp-less")
const terser = require("gulp-terser")

const htmlTask = () => {
    return src("./src/**.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest("./dist"))
}

const jsTask = () => {
    return src("./src/**/*.js", { base: "./src" })
        .pipe(babel({ presets: ["@babel/preset-env"] }))
        .pipe(terser({ mangle: { toplevel: true } }))
        .pipe(dest("./dist"))
}

const lessTask = () => {
    return src("./src/**/*.less", { base: "./src" })
        .pipe(less())
        .pipe(dest("./dist"))
}

const injectHtml = () => {
    return src("./dist/*.html")
        .pipe(inject(src(["./dist/**/*.js", "./dist/**/*.css"]), { relative: true }))
        .pipe(dest("./dist"))
}

const bs = browserSync.create();

const server = () => {
    bs.init({
        port: 8080,
        open: true,
        files: "./dist/*",
        server: {
            baseDir: "./dist"
        }

    })
}

const buildTask = series(parallel(htmlTask, jsTask, lessTask), injectHtml)
const serverTask = series(buildTask, server)
watch("./src/**", buildTask)

module.exports = {
    buildTask,
    serverTask
}