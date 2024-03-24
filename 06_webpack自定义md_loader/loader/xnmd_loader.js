const { marked } = require("marked")
const hljs = require("highlight.js")
module.exports = function (content) {
    // 高亮设置
    marked.setOptions({
        highlight: function (code, lang) {
            return hljs.highlight(lang, code).value
        }
    })
    // 将md语法转为html元素结构
    const htmlContent = marked(content)
    console.log(htmlContent);
    // 返回的结果必须是模块化内容
    const innerContent = "`" + htmlContent + "`";
    const moduleConntent = `var code = ${innerContent}; export default code`

    return moduleConntent
}