import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '主页',
        component: Home
    },
    {
        path: '/login',
        name: '登录',
        component: () => import( '../views/Login.vue')
    },
    {
        path: '/reg',
        name: '注册',
        component: () => import( '../views/Register.vue')
    },
    {
        path: '/ok',
        name: '登录成功',
        component: () => import('../views/LoginOk.vue')
    },
    {
        path: '/goods',
        name: '商品列表',
        component: () => import('../views/Goods.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
