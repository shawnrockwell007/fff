<template>
  <section class="min-h-screen pt-32 pb-20 px-6 relative bg-ivory">
    <!-- Background decoration -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-blush/20 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-20 left-10 w-80 h-80 bg-warm-beige/30 rounded-full blur-3xl pointer-events-none" />
    
    <div class="container mx-auto max-w-6xl relative z-10">
      <!-- Header -->
      <div class="text-center mb-12">
        <span class="inline-block py-2 px-5 rounded-full bg-white/80 backdrop-blur-md border-2 border-muted-rose/30 text-xs font-semibold tracking-[0.2em] text-muted-rose mb-6 uppercase shadow-sm">
          Shopping Cart
        </span>
        <h1 class="text-4xl md:text-5xl font-thin text-charcoal mb-4 tracking-tight">
          Your <span class="italic text-muted-rose font-light">Selection</span>
        </h1>
      </div>

      <!-- Empty Cart State -->
      <div v-if="cart.items.length === 0" class="text-center py-20">
        <div class="bg-white/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border-2 border-white/40 shadow-xl max-w-2xl mx-auto">
          <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-warm-beige/30 flex items-center justify-center">
            <svg class="w-12 h-12 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 class="text-2xl font-light text-charcoal mb-4">Your cart is empty</h2>
          <p class="text-gray-600 font-light mb-8">Discover our curated collection of premium products</p>
          <RouterLink
            to="/products"
            class="inline-flex items-center gap-2 bg-muted-rose text-white px-8 py-3 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-[#A05662] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Continue Shopping</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </RouterLink>
        </div>
      </div>

      <!-- Cart Items -->
      <div v-else class="space-y-6">
        <!-- Cart Items List -->
        <div class="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-2 border-white/40 shadow-xl">
          <div class="space-y-6">
            <div
              v-for="item in cart.items"
              :key="item.id"
              class="pb-6 border-b border-warm-beige/30 last:border-0 last:pb-0"
            >
              <!-- Top Row: Image and Info -->
              <div class="flex items-start gap-4 mb-4">
                <!-- Product Image -->
                <div class="w-24 h-24 rounded-2xl overflow-hidden bg-warm-beige/20 flex-shrink-0">
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-full h-full object-cover"
                  />
                </div>

                <!-- Product Info -->
                <div class="flex-1 min-w-0">
                  <h3 class="text-base md:text-lg font-light text-charcoal mb-1">{{ item.name }}</h3>
                  <div class="flex items-center gap-2 mb-1 flex-wrap">
                    <span class="bg-muted-rose/10 text-muted-rose px-2 py-0.5 rounded-full text-xs tracking-wide uppercase font-semibold">
                      {{ item.type }}
                    </span>
                    <span v-if="item.size" class="bg-warm-beige/40 text-charcoal px-2 py-0.5 rounded-full text-xs font-medium">
                      Size: {{ item.size }}
                    </span>
                  </div>
                  <p class="text-lg md:text-xl font-light text-muted-rose">${{ item.price }}</p>
                </div>
              </div>

              <!-- Bottom Row: Quantity Controls -->
              <div class="flex items-center justify-between sm:justify-end gap-4">
                <div class="flex items-center bg-white/90 border-2 border-warm-beige rounded-full overflow-hidden">
                  <button
                    @click="decreaseQuantity(item.id)"
                    :disabled="item.quantity === 1"
                    class="px-3 py-1.5 hover:bg-muted-rose hover:text-white transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-charcoal"
                  >
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <span class="px-3 py-1.5 text-charcoal font-medium text-sm min-w-[2rem] text-center">{{ item.quantity }}</span>
                  <button
                    @click="increaseQuantity(item.id)"
                    class="px-3 py-1.5 hover:bg-muted-rose hover:text-white transition-all duration-300"
                  >
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>

                <!-- Remove Button -->
                <button
                  @click="removeFromCart(item.id)"
                  class="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition-colors font-medium"
                  title="Remove item"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span class="hidden sm:inline">Remove</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Cart Summary -->
        <div class="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-2 border-white/40 shadow-xl">
          <div class="space-y-4">
            <!-- Subtotal -->
            <div class="flex justify-between items-center pb-4 border-b border-warm-beige/30">
              <span class="text-gray-600 font-light">Subtotal ({{ cart.items.length }} {{ cart.items.length === 1 ? 'item' : 'items' }})</span>
              <span class="text-xl font-light text-charcoal">${{ cart.totalPrice }}</span>
            </div>

            <!-- Shipping Info -->
            <div class="flex justify-between items-center pb-4 border-b border-warm-beige/30">
              <span class="text-gray-600 font-light">Shipping</span>
              <span class="text-sm text-muted-rose font-medium uppercase tracking-wide">Calculated at checkout</span>
            </div>

            <!-- Total -->
            <div class="flex justify-between items-center pt-2">
              <span class="text-xl font-light text-charcoal">Total</span>
              <span class="text-3xl font-light text-muted-rose">${{ cart.totalPrice }}</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mt-8">
            <RouterLink
              to="/products"
              class="flex-1 flex items-center justify-center gap-2 bg-white/90 text-charcoal border-2 border-muted-rose/20 px-6 py-3 rounded-full font-semibold text-sm tracking-widest uppercase hover:border-muted-rose hover:scale-102 transition-all duration-300 shadow-md"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Continue Shopping</span>
            </RouterLink>
            <RouterLink
              to="/checkout"
              class="flex-1 flex items-center justify-center gap-2 bg-muted-rose text-white px-6 py-3 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-[#A05662] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Proceed to Checkout</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </RouterLink>
          </div>
        </div>

        <!-- Trust Badges -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div class="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40">
            <svg class="w-6 h-6 text-muted-rose flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <div>
              <p class="text-sm font-medium text-charcoal">Secure Checkout</p>
              <p class="text-xs text-gray-600">SSL encrypted</p>
            </div>
          </div>
          <div class="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40">
            <svg class="w-6 h-6 text-muted-rose flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <div>
              <p class="text-sm font-medium text-charcoal">Discreet Packaging</p>
              <p class="text-xs text-gray-600">Privacy guaranteed</p>
            </div>
          </div>
          <div class="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40">
            <svg class="w-6 h-6 text-muted-rose flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
            <div>
              <p class="text-sm font-medium text-charcoal">Easy Returns</p>
              <p class="text-xs text-gray-600">30-day policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'
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

<style scoped>
/* Smooth transitions */
.transition-all {
  transition: all 0.3s ease;
}

/* Custom selection color */
::selection {
  background-color: rgba(199, 133, 142, 0.3);
}
</style>