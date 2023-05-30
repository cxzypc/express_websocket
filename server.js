let express = require('express')
//服务器初始化
let server = express()
// webSocket 通信,并引入server实例
const expressWs = require('express-ws')(server)

// 使用6066端口
server.listen(6066)
// 跨域设置
server.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// 普通HTTP请求编写
server.use('/test/chushi', async (req, res) => {
    res.status(200).send("666")
})

// websocket请求编写
server.ws('/test/websocket', (ws, req) => {
    console.log("页面发起websocket连接请求")
    ws.send("服务器返回数据：连接成功")
    // console.log(req.query)

    let interval
    interval = setInterval(() => {
        if (ws.readyState === ws.OPEN) {
            ws.send(Math.random().toFixed(2))
        } else {
            clearInterval(interval)
        }
    }, 1000)

    // 前端send的值
    ws.on("message", msg => {
        // console.log(typeof(msg))
        // console.log(msg)
        ws.send(msg)
    })
})