const { SyncBailHook } = require("tapable")

class MarsComplier {
    constructor() {
        this.hooks = {
            // 1. 创建hooks
            // bail特点: 如果有返回值，那么可以阻断后续事件执行
            bailHook: new SyncBailHook(["name", "age"])
        }

        // 2. 使用hooks监听事件
        this.hooks.bailHook.tap("event1", (name, age) => {
            console.log("event1事件执行了", name, age);
            return 666
        })
        this.hooks.bailHook.tap("event2", (name, age) => {
            console.log("event2事件执行了", name, age);
        })
    }
}

const complier = new MarsComplier()
complier.hooks.bailHook.call("Mars", 18)