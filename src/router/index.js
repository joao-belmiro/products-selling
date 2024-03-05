import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout.vue'

Vue.use(VueRouter)

const routes = [
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
