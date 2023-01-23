import { defineStore } from "pinia"
import router from "@/router"

export const useShopStore = defineStore('shop-store', {
  state: () => ({
    data: [],
    category: [],
    categories: ['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'],
    singleProduct: {},
    isLoading: false,
    cart: [],
    favorites: [],
  }),
  getters: {

  },
  actions: {
    async getRandomProducts() {
      try {
        this.setLoading()
        const response = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => this.data = res)
      } catch (error) {
        router.push('/error')
      } finally {
        this.setLoading()
      }
    },
    async getProducts(path) {
      if (typeof path !== 'string' || path === undefined) return
      try {
        this.setLoading()
        const response = await fetch(`https://fakestoreapi.com/products/category/${path}`)
        .then(res => res.json())
        .then(res => this.category = res)
      } catch (error) {
        router.push('/error')
      } finally {
        this.setLoading()
      }
    },
    async getSingleProduct(id) {
      try {
        this.setLoading()
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(res => this.singleProduct = res)
      } catch (error) {
        router.push('/error')
      } finally {
        this.setLoading()
      }
    },
    setLoading() {
      this.isLoading = !this.isLoading
    }
  }
})