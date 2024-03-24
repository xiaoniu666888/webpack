const { SyncLoopHook } = require("tapable")
let count = 0;
class MarsComplier {
    constructor() {
        this.hooks = {
            // 1. 创建hooks
            // bail特点: 如果有返回值，那么可以阻断后续事件执行
            loopHook: new SyncLoopHook(["name", "age"])
        }

        // 2. 使用hooks监听事件
        this.hooks.loopHook.tap("event1", (name, age) => {
            if (count < 5) {
                console.log("event1事件执行了", name, age);
                count++
                return true
            }
        })
        this.hooks.loopHook.tap("event2", (name, age) => {
            console.log("event2事件执行了", name, age);
        })
    }
}

const complier = new MarsComplier()
// 发出事件
setTimeout(() => {
    complier.hooks.loopHook.call("Mars", 18)
}, 1000)