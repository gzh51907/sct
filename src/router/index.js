import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './routes'
//设置参数 mode && routes(注意不要写错)
let router = new VueRouter({
    mode: 'history',
    routes,
})

export default router;