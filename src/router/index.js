// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ContactUs from '../views/ContactUs.vue'
import AboutUs from '../views/AboutUs.vue'
import Home from '../views/Home.vue'
import Implements from '../views/Implements.vue'
import Spares from '../views/Spares.vue'

import MechanicSupport from '../views/MechanicSupport.vue'
import ImplementDetails from '../views/ImplementDetails.vue'
import PlaceEnquiry from '../views/PlaceEnquiry.vue'
import UsedTractorDetails from '../views/UsedTractorDetails.vue'
import OtherServices from '../views/OtherServices.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/ContactUs', name: 'ContactUs', component: ContactUs },
  { path: '/AboutUs', name: 'AboutUs', component: AboutUs },
  { path: '/Implements', name: 'Implements', component: Implements },
  { path: '/Spares', name: 'Spares', component: Spares },
  { path: '/MechanicSupport', name: 'MechanicSupport', component: MechanicSupport },
  { path: '/OtherServices', name: 'OtherServices', component: OtherServices },
  { path: '/ImplementDetails/:productId', name: 'ImplementDetails', component: ImplementDetails },
  { path: '/UsedTractorDetails/:productId', name: 'UsedTractorDetails', component: UsedTractorDetails },
  { path: '/PlaceEnquiry/:selectedVariant', name: 'PlaceEnquiry', component: PlaceEnquiry }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top when navigating to a new route
    return { top: 0 }
  }
})

export default router
