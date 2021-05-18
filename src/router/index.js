import AppIndex from "@/components/home/Appindex";
import Index from "@/components/Index";
import Login from "@/components/Login";
import ManageIndex from "@/components/manage/ManageIndex";
import Register from "@/components/Register";
import OrderIndex from "@/components/room/OrderIndex";
import RoomIndex from "@/components/room/RoomIndex";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { auth: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { auth: false },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { auth: false },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { auth: true },
  },
  {
    path: "/index",
    name: "AppIndex",
    component: Index,
    meta: { auth: true },
    children: [
      {
        path: "/index",
        name: "AppIndex",
        component: AppIndex,
        meta: { auth: true },
      },
      {
        path: "/room",
        name: "Room",
        component: RoomIndex,
        meta: { auth: true },
      },
      {
        path: "/orders",
        name: "order",
        component: OrderIndex,
        meta: { auth: true },
      },
      {
        path: "manage",
        name: "Manage",
        component: ManageIndex,
        meta: { auth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((m) => m.meta.auth)) {
    // 对路由进行验证
    if (sessionStorage.getItem("phone") !== null) {
      // 已经登陆
      next(); // 正常跳转到你设置好的页面
    } else {
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
