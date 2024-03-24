# pm2

## 安装

```shell
npm i pm2 -g
```

## 常用命令

###### 启动

```shell
pm2 start <项目名 >
```

###### 查看列表

```shell
pm2 list
```

###### 重启

```shell
pm2 restart <AppName>/<id>
```

###### 停止

```shell
pm2 stop <AppName>/<id>
```

###### 删除

```shell
pm2 delete <AppName>/<id>
```

###### 查看基本信息

```shell
pm2 info <AppName>/<id>
```

###### 查看日志

```shell
pm2 log <AppName>/<id>
```

###### 监控

```shell
pm2 monit <AppName>/<id>
```

## 配置

### 配置pm2.conf.json文件

```json
{
    "apps":{
        "name":"pm2_test_server",
        "script":"app.js",
        "watch":true,   // 监听文件变化是否自动重启
        "igonre_watch":[
            "node_modules",
            "logs"
        ],             // 忽略监听的文件
        "instances":4, // 进程数
        "error_file":"lgger/err.log",  // 错误日志存放的地方
        "out_file":"logs/out.log",      // console.log()打印的日志存放的地方
        "log_date_format": "YYYY-MM-DD HH:mm:ss"  // 每行日志都会加时间戳，如下
    }
}
```
### 配置完成后修改

```json
"prd": "cross-env NODE_ENV=production pm2 start pm2.conf.json"
```

