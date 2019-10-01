const express = require('express');

const Router=express.Router();
// 引入其他接口路由
// 服务器代理
let proxyRouter = require('./proxy');
// let goodsRouter = require('./goods');

// 利用中间件格式化前端传入的参数(所有都进入)
Router.use(express.json(),express.urlencoded({extended:false}));
// 跨域
Router.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if(req.method=="OPTIONS") {// 在预请求中告诉浏览器这里允许跨域，让她发真实的请求过来吧
        res.sendStatus(200);
        // 等效于：res.status(200).send()
    }else{
        next();
    }
})

// 地址以/sct开头的请求，进入代理服务器
Router.use('/sct',proxyRouter);
// Router.use('/goods',goodsRouter);

// 导出中间件
module.exports = Router;