import { createRouter, createWebHistory } from 'vue-router'
import CategoryVue from '@/components/CategoryPage/Category.vue'
import MainContainer from '@/components/MainContainer/MainContainer.vue'
import ProductPage from '@/components/ProductPage/ProductPage.vue'
import ErrorPage from '@/components/ErrorPage/ErrorPage.vue'
import Cart from '@/components/Cart/Cart.vue'
import Favorites from '@/components/Favorites/Favorites.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainContainer',
      component: MainContainer
    },
    {
      path: '/category/:category',
      name: 'Category',
      component: CategoryVue
    },
    {
      path: '/product/:productId',
      name: 'Product',
      component: ProductPage
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    }
  ]
})

export default router
