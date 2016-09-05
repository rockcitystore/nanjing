/**
 * Created by root on 16/8/31.
 */

"use strict";
const http = require('http');
const Koa = require('koa');
const app = new Koa();
const ENV = process.env.NODE_DEV || app.env;
const loger = require("./utils/loger").getLogger('brandService.js');
const Router = require('koa-router');
const router = new Router();
const fs = require('fs');
const csrf = require('koa-csrf');
const convert = require('koa-convert');
const session = require('koa-session')(null, app);
const serve = require('koa-static');
const views = require('koa-views');
const path = require('path');
const bodyParser = require('koa-bodyparser');

//load actions
((path) => {
    fs.readdir(path, (err, files) => {
        if (!err) {
            files.forEach((item) => {
                let tmpPath = path + '/' + item;
                let prefix = `/${item.split('.')[0]}`;
                fs.stat(tmpPath, (err1, stats) => {
                    if (!err1 && !stats.isDirectory()) {
                        loger.info('load action :' + tmpPath);
                        require(tmpPath)(router, prefix);
                    }
                })
            });
        }
    });
})('./actions');

//server config
let server = http.createServer(app.callback()).listen(3000);
loger.info(`nanjing listening on ${server._connectionKey} in ${ENV}`);

app.name = "DejiBrandService";
//session config for csrf //https://github.com/koajs/examples/blob/51b25ff27171ce88aa6c30a671068515225ad6e8/csrf/app.js
app.keys = ['session key', 'csrf for dejidev'];

app.use((ctx, next)=> {//日志
    const start = new Date();
    next();
    loger.info(`${ctx.method}\t${ctx.url}\t${ new Date() - start }\t${JSON.stringify(ctx.request.body)}\t${JSON.stringify(ctx.request.query)}\t${JSON.stringify(ctx.request.params)}`);
})
    .use(convert(csrf())) //跨域
    .use(convert(serve(path.join(__dirname + '/assets'))))//静态文件
    .use(views(path.join(__dirname + '/assets/views'), {extension: 'ejs'}))//engine
    .use(router.routes())//路由
    .use(router.allowedMethods()) //允许方法
    .use(bodyParser())
    .on('error', app.onerror)//错误处理
;
//uncaughtException handler
process.on('uncaughtException', function (err) {
    loger.error(err);
    loger.error('uncaughtException : ' + err.message);
    // process.exit(1)
});


//socket config
// const io = require('socket.io')(server);
// io.sockets.on('connection', function (socket) {
//     loger.debug(socket.handshake.address + ' has connected');
//     socket.emit('socket.io connection recevied', 'connection recevied');
//     socket.on('disconnect', function () {
//         loger.debug(socket.handshake.address + ' has disconnected');
//     });
// });
// module.exports = io;