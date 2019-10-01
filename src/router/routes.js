// 懒加载的方法
const Home = () => import('views/home/Home')
const Card = () => import('views/card/Card')
const Play = () => import('views/play/Play')
const Profile = () => import('views/profile/Profile')
const NotFound = () => import('views/NotFound')
const routes = [{
    path: '/',
    redirect: '/home'  //重定向
}, {
    path: '*',
    component: NotFound,  //404
}, {
    name: 'home',
    path: '/home',
    component: Home,
}, {
    name: 'play',
    path: '/play',
    component: Play,
}, {
    name: 'card',
    path: '/card',
    component: Card,
}, {
    name: 'profile',
    path: '/profile',
    component: Profile,
}
]

export default routes