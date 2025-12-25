<template>
  <section class="min-h-screen pt-32 pb-20 px-6 relative bg-ivory">
    <!-- Background decoration -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-blush/20 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-20 left-10 w-80 h-80 bg-warm-beige/30 rounded-full blur-3xl pointer-events-none" />
    
    <div class="container mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block py-2 px-5 rounded-full bg-white/80 backdrop-blur-md border-2 border-muted-rose/30 text-xs font-semibold tracking-[0.2em] text-muted-rose mb-6 uppercase shadow-sm">
          Curated Selection
        </span>
        <h1 class="text-5xl md:text-6xl font-thin text-charcoal mb-6 tracking-tight">
          Our <span class="italic text-muted-rose font-light">Collections</span>
        </h1>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
          Discover our carefully curated selection of premium products
        </p>
      </div>

      <!-- Filter Navigation -->
      <div class="flex justify-center gap-4 mb-16 flex-wrap">
        <button
          v-for="type in filterTypes"
          :key="type.value"
          @click="selectedType = type.value"
          :class="[
            'px-8 py-3 rounded-full text-sm tracking-widest uppercase font-semibold transition-all duration-300',
            selectedType === type.value
              ? 'bg-muted-rose text-white shadow-lg scale-105'
              : 'bg-white/90 text-charcoal border-2 border-muted-rose/20 hover:border-muted-rose hover:scale-102'
          ]"
        >
          {{ type.label }}
        </button>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="group"
        >
          <div class="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <!-- Product Image -->
            <div class="relative aspect-[3/4] bg-warm-beige/20 overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                @error="handleImageError($event, product)"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <!-- Type Badge -->
              <span class="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-muted-rose px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-semibold shadow-md">
                {{ product.type }}
              </span>
            </div>

            <!-- Product Details -->
            <div class="p-4 md:p-6">
              <h3 class="text-base md:text-xl font-light text-charcoal mb-2 group-hover:text-muted-rose transition-colors duration-300">
                {{ product.name }}
              </h3>
              <p class="text-lg md:text-2xl font-light text-muted-rose mb-3 md:mb-4">${{ product.price }}</p>
              
              <!-- Size Selector (for outfits) -->
              <div v-if="product.type === 'outfit'" class="mb-3 md:mb-4">
                <label class="block text-xs md:text-sm text-gray-600 mb-2 tracking-wide uppercase font-medium">Select Size</label>
                <select
                  v-model="selectedSizes[product.id]"
                  class="w-full bg-white/90 border-2 text-charcoal rounded-full px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-muted-rose focus:border-muted-rose transition-all"
                  :class="{'border-muted-rose': selectedSizes[product.id], 'border-warm-beige': !selectedSizes[product.id]}"
                >
                  <option value="" disabled>Choose size</option>
                  <option v-for="size in product.sizes" :key="size" :value="size">
                    {{ size }}
                  </option>
                </select>
                <p v-if="selectedSizes[product.id]" class="text-xs text-muted-rose mt-1 md:mt-2 font-medium">
                  ✓ Selected: {{ selectedSizes[product.id] }}
                </p>
              </div>

              <!-- Add to Cart Button -->
              <button
                @click="addToCart(product)"
                class="w-full py-2 md:py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 font-semibold text-xs md:text-sm tracking-widest uppercase"
                :class="{
                  'bg-gray-300 text-gray-500': product.type === 'outfit' && !selectedSizes[product.id],
                  'bg-muted-rose text-white hover:bg-[#A05662] shadow-lg hover:shadow-xl hover:scale-105': !(product.type === 'outfit' && !selectedSizes[product.id])
                }"
              >
                <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span class="hidden md:inline">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="text-center py-20">
        <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-warm-beige/30 flex items-center justify-center">
          <svg class="w-12 h-12 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <h3 class="text-2xl font-light text-charcoal mb-2">No products available</h3>
        <p class="text-gray-600 font-light">Check back soon for new additions</p>
      </div>
    </div>

    <!-- Toast Notification -->
    <transition name="toast">
      <div v-if="showToast" class="fixed bottom-8 right-8 z-50">
        <div 
          class="px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-xl border-2"
          :class="{
            'bg-green-500/95 text-white border-green-400': toastType === 'success',
            'bg-red-500/95 text-white border-red-400': toastType === 'error',
            'bg-amber-500/95 text-white border-amber-400': toastType === 'warning'
          }"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              :d="toastIcon"
            />
          </svg>
          <span class="font-medium">{{ toastMessage }}</span>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import { useProductStore } from '@/stores/products'
import { useCartStore } from '@/stores/cartStore'
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
      toastTimeout: null,
      filterTypes: [
        { value: 'outfit', label: 'Outfits' },
        { value: 'toy', label: 'Toys' },
        { value: 'wellness', label: 'Wellness' }
      ]
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
        case 'warning': return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
        default: return 'M5 13l4 4L19 7'
      }
    }
  },
  methods: {
    addToCart(product) {
      if (product.type === 'outfit' && !this.selectedSizes[product.id]) {
        this.showToastMessage('Please select a size before adding to cart', 'warning')
        return
      }

      const cart = useCartStore()
      cart.addToCart({
        ...product,
        size: product.type === 'outfit' ? this.selectedSizes[product.id] : null
      })
      
      const sizeText = product.type === 'outfit' ? ` (Size: ${this.selectedSizes[product.id]})` : ''
      this.showToastMessage(`${product.name}${sizeText} added to cart!`, 'success')
      
      // Reset the size selection for this product
      if (product.type === 'outfit') {
        this.selectedSizes[product.id] = ''
      }
    },
    handleImageError(event, product) {
      console.error('Image failed to load:', product.image)
      event.target.src = 'https://via.placeholder.com/400x600/F4E4D7/C7858E?text=Product+Image'
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
/* Toast transitions */
.toast-enter-active, .toast-leave-active {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.8);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom selection color */
::selection {
  background-color: rgba(199, 133, 142, 0.3);
}

/* Disabled button styles */
button:disabled {
  cursor: not-allowed;
  transform: none !important;
}
</style>