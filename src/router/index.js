import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productsview from '../views/ProductsView.vue'
import categoryview from '../views/CategoryView.vue'
import loginview from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: productsview
    },
    {
      path: '/category',
      name: 'category',
      component: categoryview
    },
    {
      path: '/login',
      name: 'login',
      component: loginview
    },
  ]
})

export default router
