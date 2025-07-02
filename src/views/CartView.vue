<template>
    <section class="bg-black text-white min-h-screen pt-24 px-4">
      <div class="container mx-auto">
        <h1 class="text-3xl font-serif text-center mb-8">Your Cart</h1>
  
        <div v-if="cart.items.length === 0" class="text-center text-gray-400 mt-16">
          <p>Your cart is empty.</p>
          <RouterLink
            to="/products"
            class="mt-6 inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-sm transition"
          >
            Continue Shopping
          </RouterLink>
        </div>
  
        <div v-else class="space-y-6">
          <div
            v-for="item in cart.items"
            :key="item.id"
            class="flex flex-col sm:flex-row items-center justify-between border-b border-gray-800 pb-6"
          >
            <!-- Product Info -->
            <div class="flex items-center space-x-4 w-full sm:w-auto">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-24 h-24 object-cover rounded"
              />
              <div>
                <h3 class="text-lg font-semibold">{{ item.name }}</h3>
                <p class="text-amber-400">${{ item.price }}</p>
                <p class="text-sm text-gray-500 capitalize">{{ item.type }}</p>
              </div>
            </div>
  
            <!-- Controls -->
            <div class="mt-4 sm:mt-0 flex items-center justify-between w-full sm:w-auto space-x-4">
              <div class="flex items-center border border-gray-700 rounded-sm">
                <button
                  @click="decreaseQuantity(item.id)"
                  :disabled="item.quantity === 1"
                  class="px-3 py-1 text-lg disabled:text-gray-600 hover:text-rose-600"
                >
                  −
                </button>
                <span class="px-4 text-white text-base">{{ item.quantity }}</span>
                <button
                  @click="increaseQuantity(item.id)"
                  class="px-3 py-1 text-lg hover:text-rose-600"
                >
                  +
                </button>
              </div>
  
              <button
                @click="removeFromCart(item.id)"
                class="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
  
          <!-- Cart Total -->
          <div class="flex flex-col sm:flex-row justify-between items-center mt-10 border-t border-gray-800 pt-6">
            <p class="text-lg font-medium mb-4 sm:mb-0">Total:</p>
            <p class="text-2xl text-amber-400 font-semibold">${{ cart.totalPrice }}</p>
          </div>
  
          <div class="text-right mt-6">
            <RouterLink to="/checkout"
              v-if="cart.items.length > 0"
              class="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-sm transition"
            >
              Proceed to Checkout
          </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { useCartStore } from '@/stores/cart'
  import { onMounted } from 'vue'
  
  export default {
    name: 'CartPage',
    setup() {
      const cart = useCartStore()
      onMounted(() => {
        cart.loadCart()
      })
  
      const increaseQuantity = (id) => {
        const item = cart.items.find((i) => i.id === id)
        if (item) cart.updateQuantity(id, item.quantity + 1)
      }
  
      const decreaseQuantity = (id) => {
        const item = cart.items.find((i) => i.id === id)
        if (item && item.quantity > 1) cart.updateQuantity(id, item.quantity - 1)
      }
  
      const removeFromCart = (id) => {
        cart.removeFromCart(id)
      }
  
      return {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }
    },
  }
  </script>
  