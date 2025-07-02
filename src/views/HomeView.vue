<template>
  <div class="bg-black text-white min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <!-- Dark background with subtle texture -->
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] bg-black/90"></div>
      
      <div class="relative z-10 h-full flex items-center justify-center px-6">
        <div class="container mx-auto text-center">
          <!-- Main headline -->
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span class="text-white font-[lust]">Discreet </span>
            <span class="text-rose-600 font-[lust-script]">Pleasures</span>
          </h1>

          <!-- Elegant description -->
          <div class="max-w-2xl mx-auto mb-12">
            <p class="text-gray-300 text-lg md:text-xl font-serif italic leading-relaxed">
              "Exclusive, unmarked deliveries of premium adult products for Fetish, Kinkstar and BDSM lovers who value discretion above all."
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <RouterLink 
              to="/products" 
              class="bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-sm font-medium tracking-wider transition-all duration-300 border border-rose-600 hover:border-rose-700"
            >
              SHOP COLLECTION DISCREETLY
            </RouterLink>
            <button 
              class="border border-gray-500 hover:border-amber-400 text-gray-300 hover:text-amber-400 px-10 py-4 rounded-sm font-medium tracking-wider transition-all duration-300"
            >
              OUR PRIVACY PROMISE
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-0 right-0 z-10 text-center animate-bounce">
        <svg class="w-8 h-8 mx-auto text-white/60 hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- Privacy Commitment Section -->
    <section class="py-20 bg-gradient-to-b from-black to-gray-900">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-8">
            <span class="text-white font-[lust]">Your Privacy, </span>
            <span class="text-rose-600 font-[lust-script]">Our Priority</span>
          </h2>
          <div class="w-24 h-px bg-amber-400 mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Privacy Feature 1 -->
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-6 text-rose-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium mb-3 text-white">Anonymous Packaging</h3>
            <p class="text-gray-400 text-sm">Plain boxes with no identifying marks or return addresses</p>
          </div>
          
          <!-- Privacy Feature 2 -->
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-6 text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium mb-3 text-white">Discreet Billing</h3>
            <p class="text-gray-400 text-sm">Credit card statements show only our holding company name and crypto payment for full privacy</p>
          </div>
          
          <!-- Privacy Feature 3 -->
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-6 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium mb-3 text-white">Data Protection</h3>
            <p class="text-gray-400 text-sm">High grade encryption for all customer information</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'

export default {
  name: 'Home',
  setup() {
    const cart = useCartStore()
    const addToCart = (product) => {
      cart.addToCart(product)
    }
    return { addToCart }
  },
  mounted() {
    // Load luxury fonts
    const link = document.createElement('link');
    link.href = 'https://use.typekit.net/xyz.css'; // Replace with your actual font link
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
}
</script>

<style>
/* Fallback fonts - replace with your actual luxury font imports */
.font-lust {
  font-family: 'Lust', 'Cormorant Garamond', serif;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.font-lust-script {
  font-family: 'Lust Script', 'Cormorant Garamond', serif;
  font-weight: 400;
  font-style: italic;
}

.font-serif {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 500;
}

/* Animation for scroll indicator */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* Custom selection color */
::selection {
  background: #be185d;
  color: white;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>