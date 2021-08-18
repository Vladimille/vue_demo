// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// import About from '../views/About.vue'
// import Home from '../views/Home.vue'
// import News from '../views/News.vue'
// import Message from '../views/Message.vue'
// import MsgDetail from '../views/MsgDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  //  n个路由
  routes: [
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    },
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/dashboard',
        component: () => import('../layout/index.vue'),
        children: [
          {
            path: '/dashboard',
            name: 'dashboard',
            meta: { title: '首页', icon: 'home' },
            component: () => import('../views/404.vue')
          }
        ]
    }
  ]
})
