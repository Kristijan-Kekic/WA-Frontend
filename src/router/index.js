import Vue from 'vue'
import VueRouter from 'vue-router'
import Edit from '../views/Edit.vue'
import Pregled from '../views/Pregled.vue'
import Home from '../views/Home.vue'
import Dodaj from '../views/Add.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit',
    name: 'Uređivanje',
    component: Edit
  },
  {
    path: '/pregled',
    name: 'Pregled',
    component: Pregled
  },
  {
    path: '/edit/add',
    name: 'Dodaj',
    component: Dodaj
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
