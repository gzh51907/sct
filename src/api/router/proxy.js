const express = require('express');
const Router = express.Router();

var proxy = require('http-proxy-middleware');
// 山城通
let sctMiddleware = proxy({ 
    // 要代理的目标服务器
    target: 'http://ykt1.cqaxfpw.com:5010', 
    changeOrigin: true,
    pathRewrite: {
        '^/sct': '/', // 删除路径中多余的字符
    },
})
Router.get('/*',sctMiddleware)

module.exports = Router;