const { marked } = require("marked")

module.exports = function (content) {

    // 将md语法转为html元素结构
    const htmlContent = marked(content)
    console.log(htmlContent);
    // 返回的结果必须是模块化内容
    const innerContent = "`" + htmlContent + "`";
    const moduleConntent = `var code = ${innerContent}; export default code`

    return moduleConntent
}