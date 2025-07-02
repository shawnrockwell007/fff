<template>
    <section class="bg-black text-white min-h-screen pt-24 px-4">
      <div class="container mx-auto">
        <h1 class="text-3xl font-serif text-center mb-6">Collections</h1>
        <p class="text-2xl font-serif text-red-500 text-center mb-6">Only available products are listed here</p>
  
        <!-- Filter Navigation -->
        <div class="flex justify-center space-x-6 mb-10">
          <button
            v-for="type in ['outfit', 'toy', 'wellness']"
            :key="type"
            @click="selectedType = type"
            :class="[
              'uppercase font-medium tracking-wide transition-colors px-4 py-2 border-b-2',
              selectedType === type
                ? 'text-rose-600 border-rose-600'
                : 'text-gray-400 border-transparent hover:text-white',
            ]"
          >
            {{ type }}
          </button>
        </div>
  
        <!-- Product Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-zinc-900 rounded shadow hover:shadow-lg transition-shadow group"
          >
            <div class="relative aspect-[3/4] bg-gray-800">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover rounded-t"
                loading="lazy"
                @error="handleImageError($event, product)"
              />
              <span
                class="absolute top-3 left-3 bg-black bg-opacity-70 text-xs text-white px-2 py-1 rounded"
              >
                {{ product.type }}
              </span>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-medium mb-2 group-hover:text-rose-600 transition-colors">
                {{ product.name }}
              </h3>
              <p class="text-amber-400 mb-3">${{ product.price }}</p>
              
              <!-- Size Dropdown (only for outfits) -->
              <div v-if="product.type === 'outfit'" class="mb-3">
                <label class="block text-sm text-gray-400 mb-1">Select Size</label>
                <select
                  v-model="selectedSizes[product.id]"
                  class="w-full bg-zinc-800 border-2 text-white rounded px-3 py-2 text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition"
                  :class="{'border-rose-500': selectedSizes[product.id], 'border-zinc-600': !selectedSizes[product.id]}"
                >
                  <option value="" disabled selected>Choose your size</option>
                  <option v-for="size in product.sizes" :key="size" :value="size">
                    {{ size }}
                  </option>
                </select>
                <p v-if="selectedSizes[product.id]" class="text-xs text-rose-400 mt-1">
                  Selected: {{ selectedSizes[product.id] }}
                </p>
              </div>

              <button
                @click="addToCart(product)"
                class="w-full bg-rose-600 text-white py-2 rounded-sm transition flex items-center justify-center gap-2"
                :class="{
                  'opacity-50 cursor-not-allowed': product.type === 'outfit' && !selectedSizes[product.id],
                  'hover:bg-rose-700': !(product.type === 'outfit' && !selectedSizes[product.id])
                }"
              >
                <span>Add to Cart</span>
                <span v-if="product.type === 'outfit' && selectedSizes[product.id]" 
                      class="text-xs bg-black/30 px-2 py-1 rounded">
                  Size: {{ selectedSizes[product.id] }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Toast Notification -->
      <div v-if="showToast" class="fixed bottom-4 right-4 z-50">
        <div 
          class="text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade"
          :class="{
            'bg-green-600': toastType === 'success',
            'bg-red-600': toastType === 'error',
            'bg-yellow-600': toastType === 'warning'
          }"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              :d="toastIcon"
            />
          </svg>
          {{ toastMessage }}
        </div>
      </div>
    </section>
</template>

<script>
import { useProductStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import { mapState } from 'pinia'

export default {
  name: 'AllProducts',
  data() {
    return {
      selectedType: 'outfit',
      selectedSizes: {},
      showToast: false,
      toastMessage: '',
      toastType: 'success',
      toastTimeout: null
    }
  },
  computed: {
    ...mapState(useProductStore, ['products']),
    filteredProducts() {
      return this.products.filter((product) => product.type === this.selectedType)
    },
    toastIcon() {
      switch(this.toastType) {
        case 'success': return 'M5 13l4 4L19 7'
        case 'error': return 'M6 18L18 6M6 6l12 12'
        case 'warning': return 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        default: return 'M5 13l4 4L19 7'
      }
    }
  },
  methods: {
    addToCart(product) {
      if (product.type === 'outfit' && !this.selectedSizes[product.id]) {
        this.showToastMessage('Please select a size before adding this outfit to cart', 'warning')
        return
      }

      const cart = useCartStore()
      cart.addToCart({
        ...product,
        size: product.type === 'outfit' ? this.selectedSizes[product.id] : null
      })
      
      const sizeText = product.type === 'outfit' ? ` (Size: ${this.selectedSizes[product.id]})` : ''
      this.showToastMessage(`${product.name}${sizeText} added to cart!`, 'success')
      
      this.$set(this.selectedSizes, product.id, '')
    },
    handleImageError(event, product) {
      console.error('Image failed to load:', product.image)
    },
    showToastMessage(message, type = 'success') {
      this.toastMessage = message
      this.toastType = type
      this.showToast = true
      
      if (this.toastTimeout) {
        clearTimeout(this.toastTimeout)
      }
      
      this.toastTimeout = setTimeout(() => {
        this.showToast = false
      }, 3000)
    }
  },
  mounted() {
    const cart = useCartStore()
    cart.loadCart()
  },
  beforeUnmount() {
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout)
    }
  }
}
</script>

<style scoped>
/* Animation for toast notification */
@keyframes fade {
  0% { opacity: 0; transform: translateY(10px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
}

.animate-fade {
  animation: fade 3s ease-in-out;
}

.opacity-50 {
  opacity: 0.5;
}
.cursor-not-allowed {
  cursor: not-allowed;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #1a1a1a;
}
::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>