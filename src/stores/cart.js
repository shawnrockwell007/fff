import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    itemCount: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => {
      return state.items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', '')) || 0
        return sum + price * item.quantity
      }, 0).toFixed(2)
    },
  },

  actions: {
    addToCart(product) {
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
      this.saveCart()
    },

    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId)
      this.saveCart()
    },

    updateQuantity(productId, quantity) {
      const item = this.items.find((item) => item.id === productId)
      if (item && quantity > 0) {
        item.quantity = quantity
        this.saveCart()
      }
    },

    clearCart() {
      this.items = []
      this.saveCart()
    },

    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.items))
      localStorage.setItem('cartExpiry', (Date.now() + 2 * 60 * 60 * 1000).toString())
    },

    loadCart() {
      const expiry = localStorage.getItem('cartExpiry')
      const saved = localStorage.getItem('cart')

      if (!expiry || Date.now() > parseInt(expiry)) {
        this.clearCart()
      } else {
        this.items = saved ? JSON.parse(saved) : []
      }
    },
  },
})
