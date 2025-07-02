<template>
  <div id="app">
    <header class="w-full bg-black text-white fixed top-0 z-50">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center">
          <button class="mr-4 lg:hidden" @click="toggleMenu" aria-label="Toggle menu">
            <component :is="isMenuOpen ? 'X' : 'MenuIcon'" :size="24" />
          </button>
          <a href="/" class="text-2xl font-serif tracking-wider text-amber-400">FETLUXURIA</a>
        </div>
        <nav class="hidden lg:flex space-x-8 text-sm font-medium">
          <RouterLink to="/products" class="hover:text-rose-600">COLLECTIONS</RouterLink>
          <RouterLink to="/about" class="hover:text-rose-600">ABOUT</RouterLink>
        </nav>
        <div class="flex items-center space-x-4">
          <RouterLink to="/cart" aria-label="Cart" class="relative hover:text-rose-600">
            <ShoppingBag :size="20" />
            <span class="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {{ cart.itemCount }}
            </span>
          </RouterLink>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'" class="lg:hidden fixed inset-0 bg-black bg-opacity-95 z-40 pt-20 transition-transform duration-300">
        <div class="flex justify-end p-4">
          <button @click="toggleMenu" class="text-gray-400 hover:text-white">
            <X :size="24" />
          </button>
        </div>
        <nav class="flex flex-col space-y-6 p-8 text-lg font-medium">
          <RouterLink 
            to="/products" 
            @click="toggleMenu"
            class="hover:text-rose-600 border-b border-gray-800 pb-2 transition-colors duration-300"
          >
            COLLECTIONS
          </RouterLink>
          <RouterLink 
            to="/about" 
            @click="toggleMenu"
            class="hover:text-rose-600 border-b border-gray-800 pb-2 transition-colors duration-300"
          >
            ABOUT
          </RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="w-full bg-black text-gray-400 py-16 border-t border-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 class="text-xl font-serif text-white mb-4">FETLUXURIA</h3>
            <p class="mb-6">
              Luxury intimate accessories for the discerning connoisseur.
              Crafted with passion, designed for pleasure.
            </p>
          </div>

          <div>
            <h4 class="text-white text-lg mb-4">Shop</h4>
            <ul class="space-y-2">
              <li>
                <RouterLink 
                  to="/products" 
                  class="hover:text-rose-600 transition-colors duration-300"
                >
                  Collections
                </RouterLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-white text-lg mb-4">Information</h4>
            <ul class="space-y-2">
              <li>
                <RouterLink 
                  to="/about" 
                  class="hover:text-rose-600 transition-colors duration-300"
                >
                  About Us
                </RouterLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-white text-lg mb-4">Customer Care</h4>
            <ul class="space-y-2">
              <li>
                <RouterLink to="/contact" class="hover:text-rose-600 transition-colors duration-300">
                  Contact Us
                </RouterLink>
              </li>
              <li>
                <RouterLink 
                  to="/faq" 
                  class="hover:text-rose-600 transition-colors duration-300"
                >
                  FAQs
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {{ new Date().getFullYear() }} FETLUXURIA. All rights reserved.</p>
          <p class="mt-2">
            Designed for those who appreciate the finer things in life.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ShoppingBag, MenuIcon, X } from 'lucide-vue-next'
import { useCartStore } from './stores/cart'
import { RouterLink } from 'vue-router'

export default {
  name: 'App',
  components: { 
    ShoppingBag, 
    MenuIcon, 
    X,
    RouterLink 
  },
  data() {
    return { 
      isMenuOpen: false,
      scrollPosition: 0
    }
  },
  setup() {
    const cart = useCartStore()
    cart.loadCart()
    return { cart }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto'
    },
  },
  watch: {
    isMenuOpen(newVal) {
      if (newVal) {
        this.scrollPosition = window.pageYOffset
      } else {
        window.scrollTo(0, this.scrollPosition)
      }
    }
  }
}
</script>

<style>
/* Prevent scrolling when menu is open */
body.menu-open {
  overflow: hidden;
  position: fixed;
  width: 100%;
}
</style>