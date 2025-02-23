// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ContactUs from '../views/ContactUs.vue'
import AboutUs from '../views/AboutUs.vue'
import Home from '../views/Home.vue'
import Implements from '../views/Implements.vue'
import Spares from '../views/Spares.vue'
import UsedTractors from '../views/UsedTractors.vue'
import MechanicSupport from '../views/MechanicSupport.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/ContactUs', name: 'ContactUs', component: ContactUs },
  { path: '/AboutUs', name: 'AboutUs', component: AboutUs },
  { path: '/Implements', name: 'Implements', component: Implements },
  { path: '/Spares', name: 'Spares', component: Spares },
  { path: '/UsedTractors', name: 'UsedTractors', component: UsedTractors },
  { path: '/MechanicSupport', name: 'MechanicSupport', component: MechanicSupport }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
