const { AsyncSeriesHook } = require("tapable")
let count = 0;
class MarsComplier {
    constructor() {
        this.hooks = {
            // 1. 创建hooks
            // bail特点: 如果有返回值，那么可以阻断后续事件执行
            seriesHook: new AsyncSeriesHook(["name", "age"])
        }

        // 2. 使用hooks监听事件
        this.hooks.seriesHook.tapAsync("event1", (name, age, callback) => {
            setTimeout(() => {
                console.log("event1事件执行了", name, age);
                callback()
            }, 3000);

        })
        this.hooks.seriesHook.tapAsync("event2", (name, age, callback) => {
            setTimeout(() => {
                console.log("event2事件执行了", name, age);
                callback()
            }, 3000);
        })
    }
}

const complier = new MarsComplier()
// 发出事件
setTimeout(() => {
    complier.hooks.seriesHook.callAsync("Mars", 18, () => {
        console.log("所有任务都完成了")
    })
}, 0)