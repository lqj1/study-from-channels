import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
  },
  {
    // 一级路由渲染到根组件中的 router-view
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '', //  默认子路由
        name: 'home',
        component: () => import('@/views/home/')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa/')
      },
      {
        path: '/my', //  默认子路由
        name: 'my',
        component: () => import('@/views/my/')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/')
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/')
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import('@/views/article/'),
    props: true // 知识点，将动态路由参数映射到组件的props中，无论是访问还是维护都很方便
  }
]

const router = new VueRouter({
  routes
})

export default router
