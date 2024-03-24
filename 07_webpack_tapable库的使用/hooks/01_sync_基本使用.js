const { SyncHook } = require("tapable")

class MarsComplier {
    constructor() {
        this.hooks = {
            // 1. 创建hooks
            syncHook: new SyncHook(["name", "age"])
        }

        // 2. 使用hooks监听事件
        this.hooks.syncHook.tap("event1", (name, age) => {
            console.log("event1事件执行了", name, age);
        })
        this.hooks.syncHook.tap("event2", (name, age) => {
            console.log("event2事件执行了", name, age);
        })
    }
}

const complier = new MarsComplier()
complier.hooks.syncHook.call("Mars", 18)