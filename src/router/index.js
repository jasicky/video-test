import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DigitalHuman from '../views/DigitalHuman.vue'
import Running from '../views/Running.vue'
import Sport from '../views/Sport.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/digital-human',
    name: 'DigitalHuman',
    component: DigitalHuman
  },
  {
    path: '/running',
    name: 'Running',
    component: Running
  },
  {
    path: '/sport',
    name: 'Sport',
    component: Sport
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
