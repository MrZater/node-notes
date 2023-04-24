// 静态资源服务器 
// localhost:9529/ -->> public/index.html 页面
// localhost:9529/css/index.css-->> public/css/index.css 文件内容
// 导入http模块
const URL = require('url')
const http = require('http');
const path = require('path');
const fs = require('fs');
const net = require('net');

// /**
//  * 获取文件状态
//  * @param {*} filename 
//  * @returns 
//  */
// async function getStat(filename) {
//     try {
//         // 是文件或文件夹
//         return await fs.promises.stat(filename)
//     } catch {
//         // 不是文件或文件夹
//         return null
//     }

// }
// /**
//  * 得到要处理的文件内容
//  */
// async function getFileContent(url) {
//     const urlObj = URL.parse(url)
//     let filename;
//     filename = path.resolve(__dirname, 'public', urlObj.pathname.substring(1))
//     let stat = await getStat(filename)

//     if (!stat) {
//         // 文件不存在
//         return null
//     } else if (stat.isDirectory()) {
//         // 文件是一个目录
//         filename = path.resolve(
//             __dirname,
//             'public',
//             urlObj.pathname.substring(1),
//             'index.html'
//         );
//         stat = await getStat(filename)
//         if (!stat) {
//             return null
//         } else {
//             return await fs.promises.readFile(filename)
//         }
//     } else {
//         return await fs.promises.readFile(filename)
//     }
// }

// async function handle(req, res) {
//     const info = await getFileContent(req.url)
//     if (!info) {
//         res.statusCode = 404
//         res.write('Resouce is not exist')
//     } else {
//         res.write(info)
//     }
//     res.end()
// }


// const server = http.createServer(handle)
// server.listen(9528)
// server.on('listening', () => {
//     console.log('server listen 9528')
// })

// const URL = require('url')
// const http = require('http');
// const path = require('path');
// const fs = require('fs');
// const net = require('net')

// const socket = net.createConnection({
//     host: 'duyi.ke.qq.com',
//     port: 80
// }, () => {
//     console.log('连接成功！')
// })
// socket.on('data', (chunk) => {
//     console.log(chunk.toString('utf-8'), '来自服务器的消息')
// })
// socket.write(`GET / HTTP/1.1
// Host: duyi.ke.qq.com
// Connection: keep-alive

// `)


const server = net.createServer()
server.listen(1010)
server.on('listening', () => {
    console.log('server listen 1010')
})
server.on('connection', socket => {
    console.log('有客户端链接到服务器了')
    socket.on('data', async chunk => {
        const filename = path.resolve(__dirname, './test1.png')
        const bodyBuffer = await fs.promises.readFile(filename)
        const headerBuffer = Buffer.from(`HTTP/1.1 200 OK
Content-Type: image/jpeg

`, 'utf-8')
        const result = Buffer.concat([headerBuffer, bodyBuffer])
        socket.write(result)
        socket.end()
    })
    socket.on('end', () => {
        console.log('客户端链接关闭')
    })
})