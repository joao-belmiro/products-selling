import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home-view',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/clients',
          name: 'clients-view',
          component: () => import('../views/ClientsView.vue')
        },
        {
          path: '/new-client',
          name: 'new-client',
          component: () => import('../views/FormClient.vue')
        },
        {
          path: '/update-client/:id',
          name: 'update-client',
          component: () => import('../views/FormClient.vue')
        },
        {
          path: '/products',
          name: 'products-view',
          component: () => import('../views/ProductsView.vue')
        },
        {
          path: '/new-product',
          name: 'new-product',
          component: () => import('../views/FormProduct.vue')
        },
        {
          path: '/update-product/:id',
          name: 'update-product',
          component: () => import('../views/FormProduct.vue')
        },
        {
          path: '/carts',
          name: 'carts',
          component: () => import('../views/CartView.vue')
        },
        {
          path: '/new-cart',
          name: 'new-cart',
          component: () => import('../views/FormCart.vue')
        }
      ]
    }
  ]
})

export default router
