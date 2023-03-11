import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/HelpView.vue'
import AboutView from '../views/AboutView.vue'
import ConsultServe from '../views/ConsultServe.vue'
import listaView from '../views/listaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },  
  {
    path: '/consult',
    name: 'consult',
    component: ConsultServe
  },
  {
    path: '/lista',
    name: 'lista',
    component: listaView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
