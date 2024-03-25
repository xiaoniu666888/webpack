const { NodeSSH } = require("node-ssh")
class AutoUploadWebpackPlugin {
    apply(complier) {
        // console.log("AutoUploadWebpackPlugin组件被注册")
        complier.hooks.afterEmit.tapAsync("AutoPlugin", async (compilation, callback) => {
            // 获取输出文件夹路径
            const outputPath = compilation.outputOptions.path
            console.log(outputPath)

            // await this.connectServer()
            callback()
        })
    }

    // 连接远程服务器

}

module.exports = AutoUploadWebpackPlugin