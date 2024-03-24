const { SyncWaterfallHook } = require("tapable")
let count = 0;
class MarsComplier {
    constructor() {
        this.hooks = {
            // 1. 创建hooks
            // bail特点: 如果有返回值，那么可以阻断后续事件执行
            waterfallHook: new SyncWaterfallHook(["name", "age"])
        }

        // 2. 使用hooks监听事件
        this.hooks.waterfallHook.tap("event1", (name, age) => {
            console.log("event1事件执行了", name, age);
            return "曹操"
        })
        this.hooks.waterfallHook.tap("event2", (name, age) => {
            console.log("event2事件执行了", name, age);
        })
    }
}

const complier = new MarsComplier()
// 发出事件
setTimeout(() => {
    complier.hooks.waterfallHook.call("Mars", 18)
}, 1000)