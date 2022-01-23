import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/task11',
    name: 'Task11',
    component: () => import(/* webpackChunkName: "task11" */ '../views/Task11.vue')
  },
  {
    path: '/task12',
    name: 'Task12',
    component: () => import(/* webpackChunkName: "task12" */ '../views/Task12.vue')
  },
  {
    path: '/task21',
    name: 'Task21',
    component: () => import(/* webpackChunkName: "task21" */ '../views/Task21.vue')
  },
  {
    path: '/task22',
    name: 'Task22',
    component: () => import(/* webpackChunkName: "task22" */ '../views/Task22.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
