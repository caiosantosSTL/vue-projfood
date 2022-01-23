import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pedidos',
    name: 'Pedidos', //nome view
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Pedidos.vue') //modo alternativo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
