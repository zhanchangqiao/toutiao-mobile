import Vue from 'vue'
import VueRouter from 'vue-router'
import { Dialog } from 'vant'
import store from '@/store/'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '', // 默认路由
        name: 'home',
        component: () => import('@/views/home'),
        meta: { requiresAuth: false }
      },
      {
        path: '/vadio', // 默认路由
        name: 'vadio',
        component: () => import('@/views/vadio'),
        meta: { requiresAuth: false }
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa'),
        meta: { requiresAuth: false }
      },
      {
        path: '/my', // 默认路由
        name: 'my',
        component: () => import('@/views/my'),
        meta: { requiresAuth: false }
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search'),
    meta: { requiresAuth: false }
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import('@/views/article'),
    meta: { requiresAuth: false },
    props: true
  },
  {
    path: '/userchat',
    name: 'userchat',
    component: () => import('@/views/user-chat'),
    meta: { requiresAuth: true }
  },
  {
    path: '/user/profile',
    name: 'userprofile',
    component: () => import('@/views/userprofile'),
    meta: { requiresAuth: false }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 判断页面是否需要登录才能访问
  if (to.meta.requiresAuth) {
    // 如果已登录，则直接通过
    if (store.state.user) {
      return next()
    }

    // 没有登录，提示是否登录
    Dialog.confirm({
      title: '访问提示',
      message: '该功能需要登录才能访问，确认登录吗'
    }).then(() => { // 确认执行这里
      router.replace({
        name: 'login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
    }).catch(() => { // 取消执行这里
      // 取消了，中断路由导航
      next(false)
    })
  } else {
    /// 不需要登录状态的页面，直接过去
    next()
  }
})
export default router
