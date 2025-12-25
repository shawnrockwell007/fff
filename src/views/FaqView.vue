<template>
  <section class="min-h-screen pt-32 pb-20 px-6 relative bg-ivory">
    <!-- Background decorations -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-blush/20 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-20 left-10 w-80 h-80 bg-warm-beige/30 rounded-full blur-3xl pointer-events-none" />
    
    <div class="max-w-3xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-12">
        <span class="inline-block py-2 px-5 rounded-full bg-white/80 backdrop-blur-md border-2 border-muted-rose/30 text-xs font-semibold tracking-[0.2em] text-muted-rose mb-6 uppercase shadow-sm">
          Help Center
        </span>
        <h1 class="text-4xl md:text-5xl font-thin text-charcoal mb-4 tracking-tight">
          Frequently Asked <span class="italic text-muted-rose font-light">Questions</span>
        </h1>
        <div class="flex items-center justify-center gap-4 mt-6">
          <div class="flex-1 h-px bg-warm-beige/50 max-w-xs"></div>
          <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div class="flex-1 h-px bg-warm-beige/50 max-w-xs"></div>
        </div>
        <p class="text-gray-600 mt-6 font-light max-w-xl mx-auto">
          Everything you need to know about payments, delivery, and security
        </p>
      </div>

      <!-- Crypto Payments Section -->
      <div class="mb-10">
        <h2 class="text-xl font-medium text-charcoal mb-6 flex items-center gap-2">
          <div class="w-1 h-6 bg-muted-rose rounded-full"></div>
          Crypto Payments
        </h2>
        
        <div class="space-y-4">
          <!-- BTC Payment -->
          <div class="group">
            <button
              @click="toggleItem('btc')"
              class="w-full text-left bg-white/80 backdrop-blur-md border-2 border-white/40 rounded-2xl p-6 transition-all duration-300 hover:border-muted-rose/30 hover:shadow-lg"
            >
              <div class="flex items-start gap-4">
                <div :class="['p-2.5 rounded-xl bg-muted-rose/10 flex-shrink-0 transition-all duration-300', openItems.btc ? 'scale-110 bg-muted-rose/20' : '']">
                  <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-base font-medium text-charcoal mb-1">How to pay with Bitcoin (BTC)</h3>
                </div>
                <svg :class="['w-5 h-5 text-muted-rose flex-shrink-0 transition-transform duration-300', openItems.btc ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div :class="['overflow-hidden transition-all duration-300', openItems.btc ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0']">
                <div class="pl-14 text-gray-600 leading-relaxed text-sm">
                  <ol class="space-y-2.5 list-decimal pl-5">
                    <li>Select Bitcoin as your payment method at checkout</li>
                    <li>We'll generate a unique BTC wallet address for your order</li>
                    <li>Send the exact amount shown (network fees may apply)</li>
                    <li>Wait for blockchain confirmation (typically 10-30 minutes)</li>
                    <li>You'll receive email confirmation once payment is verified</li>
                  </ol>
                  <div class="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start gap-2">
                    <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Note: BTC prices are locked for 15 minutes after order creation</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Delivery Options Section -->
      <div class="mb-10">
        <h2 class="text-xl font-medium text-charcoal mb-6 flex items-center gap-2">
          <div class="w-1 h-6 bg-muted-rose rounded-full"></div>
          Delivery Options
        </h2>
        
        <div class="space-y-4">
          <!-- Private Pickup -->
          <div class="group">
            <button
              @click="toggleItem('pickup')"
              class="w-full text-left bg-white/80 backdrop-blur-md border-2 border-white/40 rounded-2xl p-6 transition-all duration-300 hover:border-muted-rose/30 hover:shadow-lg"
            >
              <div class="flex items-start gap-4">
                <div :class="['p-2.5 rounded-xl bg-muted-rose/10 flex-shrink-0 transition-all duration-300', openItems.pickup ? 'scale-110 bg-muted-rose/20' : '']">
                  <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-base font-medium text-charcoal mb-1">How to generate a private pickup code</h3>
                </div>
                <svg :class="['w-5 h-5 text-muted-rose flex-shrink-0 transition-transform duration-300', openItems.pickup ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div :class="['overflow-hidden transition-all duration-300', openItems.pickup ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0']">
                <div class="pl-14 text-gray-600 leading-relaxed text-sm">
                  <ul class="space-y-2.5 list-disc pl-5">
                    <li>Select "Private Pickup" as your delivery method</li>
                    <li>A unique 8-digit code will be generated automatically</li>
                    <li>Save this code securely, you'll need it to collect your order</li>
                    <li>Share the code with our customer care to process delivery</li>
                  </ul>
                  <div class="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 flex items-start gap-2">
                    <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Never share your pickup code with unauthorized persons</span>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <!-- Standard Delivery -->
          <div class="group">
            <button
              @click="toggleItem('delivery')"
              class="w-full text-left bg-white/80 backdrop-blur-md border-2 border-white/40 rounded-2xl p-6 transition-all duration-300 hover:border-muted-rose/30 hover:shadow-lg"
            >
              <div class="flex items-start gap-4">
                <div :class="['p-2.5 rounded-xl bg-muted-rose/10 flex-shrink-0 transition-all duration-300', openItems.delivery ? 'scale-110 bg-muted-rose/20' : '']">
                  <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-base font-medium text-charcoal mb-1">Standard Delivery Information</h3>
                </div>
                <svg :class="['w-5 h-5 text-muted-rose flex-shrink-0 transition-transform duration-300', openItems.delivery ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div :class="['overflow-hidden transition-all duration-300', openItems.delivery ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0']">
                <div class="pl-14 text-gray-600 leading-relaxed text-sm">
                  <ul class="space-y-2.5 list-disc pl-5">
                    <li>Packages arrive in discreet, unmarked packaging</li>
                    <li>Delivery times: 3-5 business days after payment confirmation</li>
                    <li>Tracking information provided via encrypted email</li>
                    <li>Signature may be required upon delivery</li>
                    <li>Contact support if package doesn't arrive within 7 days</li>
                  </ul>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Security & Support Section -->
      <div class="mb-10">
        <h2 class="text-xl font-medium text-charcoal mb-6 flex items-center gap-2">
          <div class="w-1 h-6 bg-muted-rose rounded-full"></div>
          Security & Support
        </h2>
        
        <div class="space-y-4">
          <!-- Privacy -->
          <div class="group">
            <button
              @click="toggleItem('privacy')"
              class="w-full text-left bg-white/80 backdrop-blur-md border-2 border-white/40 rounded-2xl p-6 transition-all duration-300 hover:border-muted-rose/30 hover:shadow-lg"
            >
              <div class="flex items-start gap-4">
                <div :class="['p-2.5 rounded-xl bg-muted-rose/10 flex-shrink-0 transition-all duration-300', openItems.privacy ? 'scale-110 bg-muted-rose/20' : '']">
                  <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-base font-medium text-charcoal mb-1">Is my purchase information private?</h3>
                </div>
                <svg :class="['w-5 h-5 text-muted-rose flex-shrink-0 transition-transform duration-300', openItems.privacy ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div :class="['overflow-hidden transition-all duration-300', openItems.privacy ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0']">
                <div class="pl-14 text-gray-600 leading-relaxed text-sm">
                  <p>
                    Absolutely. We use end-to-end encryption for all transactions and communications. 
                    Your personal details are never shared with third parties, and all packages 
                    are shipped in plain, discreet packaging with no identifying marks.
                  </p>
                </div>
              </div>
            </button>
          </div>

          <!-- Returns -->
          <div class="group">
            <button
              @click="toggleItem('returns')"
              class="w-full text-left bg-white/80 backdrop-blur-md border-2 border-white/40 rounded-2xl p-6 transition-all duration-300 hover:border-muted-rose/30 hover:shadow-lg"
            >
              <div class="flex items-start gap-4">
                <div :class="['p-2.5 rounded-xl bg-muted-rose/10 flex-shrink-0 transition-all duration-300', openItems.returns ? 'scale-110 bg-muted-rose/20' : '']">
                  <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-base font-medium text-charcoal mb-1">What is your return policy?</h3>
                </div>
                <svg :class="['w-5 h-5 text-muted-rose flex-shrink-0 transition-transform duration-300', openItems.returns ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div :class="['overflow-hidden transition-all duration-300', openItems.returns ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0']">
                <div class="pl-14 text-gray-600 leading-relaxed text-sm">
                  <p>
                    Due to the nature of our products, we generally don't accept returns. However, 
                    if you receive a defective or incorrect item, contact support within 48 hours 
                    of delivery with photos/video evidence. We'll provide a replacement or store 
                    credit for verified issues.
                  </p>
                </div>
              </div>
            </button>
          </div>

          <!-- Security -->
          <div class="group">
            <button
              @click="toggleItem('security')"
              class="w-full text-left bg-white/80 backdrop-blur-md border-2 border-white/40 rounded-2xl p-6 transition-all duration-300 hover:border-muted-rose/30 hover:shadow-lg"
            >
              <div class="flex items-start gap-4">
                <div :class="['p-2.5 rounded-xl bg-muted-rose/10 flex-shrink-0 transition-all duration-300', openItems.security ? 'scale-110 bg-muted-rose/20' : '']">
                  <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-base font-medium text-charcoal mb-1">How do you ensure transaction security?</h3>
                </div>
                <svg :class="['w-5 h-5 text-muted-rose flex-shrink-0 transition-transform duration-300', openItems.security ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div :class="['overflow-hidden transition-all duration-300', openItems.security ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0']">
                <div class="pl-14 text-gray-600 leading-relaxed text-sm">
                  <p>
                    We use military-grade encryption for all transactions. Crypto payments are 
                    processed through secure, non-custodial wallets. For pickup orders, each 
                    transaction uses a unique, one-time code. We never store your full payment 
                    details on our servers.
                  </p>
                </div>
              </div>
            </button>
          </div>

          <!-- Support -->
          <div class="group">
            <button
              @click="toggleItem('support')"
              class="w-full text-left bg-white/80 backdrop-blur-md border-2 border-white/40 rounded-2xl p-6 transition-all duration-300 hover:border-muted-rose/30 hover:shadow-lg"
            >
              <div class="flex items-start gap-4">
                <div :class="['p-2.5 rounded-xl bg-muted-rose/10 flex-shrink-0 transition-all duration-300', openItems.support ? 'scale-110 bg-muted-rose/20' : '']">
                  <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-base font-medium text-charcoal mb-1">How can I contact customer support?</h3>
                </div>
                <svg :class="['w-5 h-5 text-muted-rose flex-shrink-0 transition-transform duration-300', openItems.support ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div :class="['overflow-hidden transition-all duration-300', openItems.support ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0']">
                <div class="pl-14 text-gray-600 leading-relaxed text-sm">
                  <p>
                    For fastest response, use the encrypted messaging system in your account dashboard. 
                    You can also visit our <RouterLink to="/contact" class="text-muted-rose font-medium hover:underline">Contact Support</RouterLink> page. 
                    Average response time is 12-24 hours. Include your order reference number for order-specific inquiries.
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Contact Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        <div class="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/40">
          <div class="w-12 h-12 rounded-full bg-muted-rose/10 flex items-center justify-center mb-3">
            <svg class="w-6 h-6 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-sm font-semibold text-charcoal mb-1 uppercase tracking-wide">Email Us</h3>
          <p class="text-xs text-gray-600">Response within 24h</p>
        </div>

        <div class="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/40">
          <div class="w-12 h-12 rounded-full bg-muted-rose/10 flex items-center justify-center mb-3">
            <svg class="w-6 h-6 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-sm font-semibold text-charcoal mb-1 uppercase tracking-wide">Support Hours</h3>
          <p class="text-xs text-gray-600">Mon-Fri: 9AM-6PM EST</p>
        </div>

        <div class="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/40">
          <div class="w-12 h-12 rounded-full bg-muted-rose/10 flex items-center justify-center mb-3">
            <svg class="w-6 h-6 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-sm font-semibold text-charcoal mb-1 uppercase tracking-wide">Secure Support</h3>
          <p class="text-xs text-gray-600">Confidential assistance</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openItems = ref({
  btc: false,
  pickup: false,
  delivery: false,
  privacy: false,
  returns: false,
  security: false,
  support: false
})

const toggleItem = (item) => {
  openItems.value[item] = !openItems.value[item]
}
</script>

<style scoped>
/* Custom selection */
::selection {
  background-color: rgba(199, 133, 142, 0.3);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>