const { AsyncParallelHook } = require("tapable")
let count = 0;
class MarsComplier {
    constructor() {
        this.hooks = {
            // 1. 创建hooks
            // bail特点: 如果有返回值，那么可以阻断后续事件执行
            parallelHook: new AsyncParallelHook(["name", "age"])
        }

        // 2. 使用hooks监听事件
        this.hooks.parallelHook.tapAsync("event1", (name, age) => {
            setTimeout(() => {
                console.log("event1事件执行了", name, age);
            }, 3000);

        })
        this.hooks.parallelHook.tapAsync("event2", (name, age) => {
            setTimeout(() => {
                console.log("event2事件执行了", name, age);
            }, 3000);
        })
    }
}

const complier = new MarsComplier()
// 发出事件
setTimeout(() => {
    complier.hooks.parallelHook.callAsync("Mars", 18)
}, 0)