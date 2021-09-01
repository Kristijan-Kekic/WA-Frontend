import Vue from 'vue'
import VueRouter from 'vue-router'
import Edit from '../views/Edit.vue'
import Pregled from '../views/Pregled.vue'
import AvgGrade from '../views/AvgGrade.vue'
import Home from '../views/Home.vue'
import Dodaj from '../views/Add.vue'
import Uredi from '../views/Change.vue'
import Uredi_id from '../views/Change_id.vue'
import Login_reg from '../views/Login_reg.vue'
import Registracija from '../views/Registracija.vue'

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
  },
  {
    path: '/edit/change',
    name: 'Uredi',
    component: Uredi
  },
  {
    path: '/edit/change/:id',
    name: 'Uredi_id',
    component: Uredi_id
  },
  {
    path: '/pregled/avggrade',
    name: 'AvgGrade',
    component: AvgGrade
  },
  {
    path: '/login_reg',
    name: 'Login_reg',
    component: Login_reg
  },
  {
    path: '/registracija',
    name: 'Registracija',
    component: Registracija
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
