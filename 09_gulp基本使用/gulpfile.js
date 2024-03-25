const { src, dest, series, parallel, watch } = require("gulp")

const foo = (cb) => {
    setTimeout(() => {
        console.log("foo执行")
        cb()
    }, 2000)
}

const bar = (cb) => {
    setTimeout(() => {
        console.log("bar执行")
        cb()
    }, 1000)
}
// 复制文件
const copy = () => {
    return src('./src/**/*.js')
        .pipe(dest("dist/"))
}
// 串行执行
const all = series(foo, bar)
// 并行执行
const pAll = parallel(bar, foo)
// 监听
watch("./src/**/*.js", copy)

// 导出
module.exports = {
    foo,
    bar,
    copy,
    all,
    pAll
}