import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/login';
import Home from "@/components/home";
import Welcome from "@/components/Welcome";
import Users from "@/view/user/Users";
import Rights from "@/view/power/Rights";
import Roles from "@/view/power/Roles";
import Cate from "@/view/goods/Cate";
import Params from "@/view/goods/Params";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Cate
      },
      {
        path: '/params',
        component: Params
      }
    ]
  }
]


const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to,from,next) => {
  if(to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login');
  next()

})

export default router
