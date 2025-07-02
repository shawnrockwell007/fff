import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllProductsView from '@/views/AllProductsView.vue'
import CartView from '@/views/CartView.vue'
import CheckOutView from '@/views/CheckOutView.vue'
import FaqView from '@/views/FaqView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/products',
      name: 'all-products',
      component: AllProductsView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckOutView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      
    }
    
  ],
})

export default router
