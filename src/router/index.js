import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import ProductPage from '../pages/ProductPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '@/pages/ContactPage.vue' 
 
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/Product', component: ProductPage },
    { path: '/About', component: AboutPage },
    { path: '/Contact', component: ContactPage},
  ],
})
 
export default router