<template>
  <section class="min-h-screen pt-32 pb-20 px-6 relative bg-ivory">
    <!-- Background decoration -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-blush/20 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-20 left-10 w-80 h-80 bg-warm-beige/30 rounded-full blur-3xl pointer-events-none" />
    
    <div class="max-w-5xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-12">
        <span class="inline-block py-2 px-5 rounded-full bg-white/80 backdrop-blur-md border-2 border-muted-rose/30 text-xs font-semibold tracking-[0.2em] text-muted-rose mb-6 uppercase shadow-sm">
          Secure Checkout
        </span>
        <h1 class="text-4xl md:text-5xl font-thin text-charcoal mb-4 tracking-tight">
          Complete Your <span class="italic text-muted-rose font-light">Order</span>
        </h1>
        <div class="flex items-center justify-center gap-4 mt-6">
          <div class="flex-1 h-px bg-warm-beige/50 max-w-xs"></div>
          <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <div class="flex-1 h-px bg-warm-beige/50 max-w-xs"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Delivery Section -->
        <div class="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-2 border-white/40 shadow-xl">
          <h2 class="text-2xl font-light text-charcoal mb-6 pb-4 border-b border-warm-beige/30">
            Delivery Method
          </h2>

          <div class="space-y-4">
            <label class="flex items-start p-5 rounded-2xl border-2 transition-all cursor-pointer group"
              :class="deliveryType === 'standard' ? 'border-muted-rose bg-muted-rose/5' : 'border-warm-beige/40 hover:border-muted-rose/50'">
              <input type="radio" value="standard" v-model="deliveryType" 
                class="mt-1.5 mr-4 h-5 w-5 text-muted-rose focus:ring-muted-rose border-warm-beige accent-muted-rose" />
              <div class="flex-1">
                <h3 class="font-medium text-charcoal mb-1">Standard Delivery</h3>
                <p class="text-sm text-gray-600">Discreet packaging delivered to your location</p>
              </div>
            </label>

            <label class="flex items-start p-5 rounded-2xl border-2 transition-all cursor-pointer group"
              :class="deliveryType === 'pickup' ? 'border-muted-rose bg-muted-rose/5' : 'border-warm-beige/40 hover:border-muted-rose/50'">
              <input type="radio" value="pickup" v-model="deliveryType" 
                class="mt-1.5 mr-4 h-5 w-5 text-muted-rose focus:ring-muted-rose border-warm-beige accent-muted-rose" />
              <div class="flex-1">
                <h3 class="font-medium text-charcoal mb-1">Private Collection</h3>
                <p class="text-sm text-gray-600">Generate a unique code for third party collection</p>
              </div>
            </label>
          </div>

          <!-- Delivery Details -->
          <div v-if="deliveryType === 'standard'" class="mt-6 space-y-4">
            <div>
              <label class="block text-sm text-gray-600 mb-2 font-medium uppercase tracking-wide">Full Name</label>
              <input v-model="delivery.name" type="text" placeholder="Your full name" 
                class="w-full bg-white/90 border-2 border-warm-beige rounded-2xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-muted-rose focus:border-muted-rose transition-all placeholder-gray-400" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-2 font-medium uppercase tracking-wide">Email</label>
              <input 
                v-model="delivery.email" 
                @blur="validateEmail"
                @input="emailError = ''"
                type="email" 
                placeholder="Your email address" 
                :class="emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-warm-beige focus:border-muted-rose focus:ring-muted-rose'"
                class="w-full bg-white/90 border-2 rounded-2xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 transition-all placeholder-gray-400" 
              />
              <transition name="fade">
                <p v-if="emailError" class="text-red-500 text-xs mt-2 flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ emailError }}
                </p>
              </transition>
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-2 font-medium uppercase tracking-wide">Delivery Address</label>
              <textarea v-model="delivery.address" placeholder="Full delivery address" 
                class="w-full bg-white/90 border-2 border-warm-beige rounded-2xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-muted-rose focus:border-muted-rose transition-all placeholder-gray-400 h-28 resize-none"></textarea>
            </div>
          </div>

          <!-- Code Display -->
          <div v-if="deliveryType === 'pickup'" class="mt-6">
            <div class="bg-muted-rose/10 border-2 border-muted-rose/30 p-5 rounded-2xl">
              <p class="text-sm text-gray-600 mb-3 font-medium">Your private collection code:</p>
              <div class="text-muted-rose font-mono text-2xl text-center p-4 bg-white rounded-xl break-all font-bold">
                {{ pickupCode }}
              </div>
              <p class="text-xs text-gray-500 mt-4 text-center">
                Save this code securely. You'll need it to collect your order.
              </p>
            </div>
          </div>
        </div>

        <!-- Payment Section -->
        <div class="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-2 border-white/40 shadow-xl">
          <h2 class="text-2xl font-light text-charcoal mb-6 pb-4 border-b border-warm-beige/30">
            Bitcoin Payment
          </h2>

          <div v-if="deliveryType" class="space-y-6">
            <!-- Payment Instructions -->
            <div class="bg-muted-rose/10 border-2 border-muted-rose/30 rounded-2xl p-4">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-muted-rose mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <p class="text-sm font-semibold text-charcoal mb-1">Payment Instructions</p>
                  <p class="text-sm text-gray-600">
                    Send exactly <span class="text-muted-rose font-bold">{{ cryptoAmount }} BTC</span> to the address below.
                  </p>
                </div>
              </div>
            </div>

            <!-- QR Code -->
            <div class="text-center">
              <div class="bg-white p-4 rounded-2xl inline-block shadow-md mb-3">
                <img 
                  :src="selectedWallet.barcode" 
                  alt="Payment QR Code" 
                  class="w-48 h-48 object-contain mx-auto"
                />
              </div>
              <p class="text-sm text-gray-600 font-light">Scan QR code or copy wallet address</p>
            </div>

            <!-- Wallet Address -->
            <div>
              <label class="block text-xs text-gray-600 mb-2 uppercase tracking-wider font-medium">Wallet Address</label>
              <div class="bg-white/90 border-2 border-warm-beige rounded-2xl p-4 flex items-center gap-2">
                <span class="font-mono text-xs md:text-sm text-muted-rose break-all flex-1">{{ selectedWallet.address }}</span>
                <button 
                  @click="copyToClipboard(selectedWallet.address)"
                  class="p-2 hover:bg-muted-rose/10 rounded-xl transition-all flex-shrink-0 group"
                  title="Copy to clipboard"
                >
                  <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Amount Due -->
            <div class="bg-charcoal/5 border-2 border-muted-rose/20 rounded-2xl p-5">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm text-gray-600 font-medium">Amount Due:</span>
                <span class="font-mono text-muted-rose text-lg font-bold">
                  {{ cryptoAmount }} BTC
                </span>
              </div>
              <div class="flex justify-between items-center mb-3">
                <span class="text-sm text-gray-600">Equivalent:</span>
                <span class="font-light text-charcoal">{{ formatCurrency(parseFloat(cart.totalPrice)) }}</span>
              </div>
              <div class="pt-3 border-t border-warm-beige/30">
                <p class="text-xs text-muted-rose text-center font-medium">
                  Current rate: 1 BTC = {{ formatCurrency(btcPrice) }}
                </p>
                <p v-if="loadingRates" class="text-xs text-gray-500 text-center mt-1">
                  Updating rates...
                </p>
              </div>
            </div>

            <!-- Submit Button -->
            <button 
              @click="sendOrderDetails"
              :disabled="deliveryType === 'standard' && (!delivery.name || !delivery.email || !delivery.address)"
              class="w-full py-4 rounded-full font-semibold text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              :class="(deliveryType === 'standard' && (!delivery.name || !delivery.email || !delivery.address))
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-muted-rose text-white hover:bg-[#A05662] hover:scale-105'"
            >
              <span>I've Sent Payment</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>

          <div v-else class="text-center py-12">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-warm-beige/30 flex items-center justify-center">
              <svg class="w-10 h-10 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <p class="text-gray-600 font-light">Please select a delivery method first</p>
          </div>
        </div>
      </div>

      <!-- Trust Badges -->
      
    </div>

    <!-- Confirmation Modal -->
    <transition name="modal">
      <div v-if="showConfirmationModal" class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-3xl border-2 border-muted-rose/30 max-w-md w-full overflow-hidden shadow-2xl">
          <!-- Modal Header -->
          <div class="p-6 bg-muted-rose/5 border-b-2 border-muted-rose/20">
            <div class="flex justify-between items-center">
              <h3 class="text-2xl font-light text-charcoal">
                Payment Submitted
              </h3>
              <button @click="showConfirmationModal = false" class="text-gray-400 hover:text-muted-rose transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Body -->
          <div class="p-8">
            <div class="text-center mb-6">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-light text-charcoal mb-2">Thank You For Your Order!</h3>
              <p class="text-sm text-gray-600 mb-4">
                Your payment details have been submitted successfully.
              </p>
              <div class="bg-warm-beige/30 rounded-2xl p-4 mb-4">
                <p class="text-xs text-gray-600 mb-1">Order Reference:</p>
                <p class="font-mono text-muted-rose text-lg font-bold">{{ orderReference }}</p>
              </div>
            </div>

            <div class="bg-green-50 border-2 border-green-200 rounded-2xl p-4 mb-6">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <p class="text-sm font-semibold text-green-800 mb-1">Payment Verification</p>
                  <p class="text-sm text-green-700">
                    We are verifying your payment and will send a confirmation email once completed.
                    For private delivery, your payment will be verified when you present your pick up code to process delivery.
                  </p>
                  <p class="text-xs text-green-600 mt-2 font-medium">
                    Please allow up to 30 minutes for verification.
                  </p>
                </div>
              </div>
            </div>

            <RouterLink to="/collections"><button 
              @click="closeAndRedirect"
              class="w-full bg-muted-rose text-white py-3 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-[#A05662] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Continue Shopping
            </button></RouterLink>
          </div>
        </div>
      </div>
    </transition>

    <!-- Toast Notification -->
    <transition name="toast">
      <div v-if="showCopyNotification" class="fixed bottom-8 right-8 z-50">
        <div class="bg-white border-2 border-muted-rose rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 backdrop-blur-xl">
          <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <div>
            <p class="text-sm font-semibold text-charcoal">Address copied!</p>
            <p class="text-xs text-gray-600">Please verify before sending</p>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const cart = useCartStore()
const deliveryType = ref('')
const showConfirmationModal = ref(false)
const showCopyNotification = ref(false)
const btcPrice = ref(45000)
const loadingRates = ref(false)
const orderReference = ref(
  Math.random().toString(36).substring(2, 10).toUpperCase()
)
const emailError = ref('')

// Fetch live BTC price
async function fetchExchangeRates() {
  try {
    loadingRates.value = true
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
    )
    btcPrice.value = response.data.bitcoin.usd
    localStorage.setItem('lastBtcPrice', btcPrice.value)
    localStorage.setItem('lastBtcPriceUpdate', Date.now())
  } catch (error) {
    console.error('Failed to fetch BTC price:', error)
    const lastPrice = localStorage.getItem('lastBtcPrice')
    if (lastPrice) {
      btcPrice.value = parseFloat(lastPrice)
    }
  } finally {
    loadingRates.value = false
  }
}

const cryptoAmount = computed(() => {
  const total = parseFloat(cart.totalPrice) || 0
  return (total / btcPrice.value).toFixed(6)
})

onMounted(() => {
  const lastUpdate = localStorage.getItem('lastBtcPriceUpdate')
  if (lastUpdate && Date.now() - parseInt(lastUpdate) < 5 * 60 * 1000) {
    btcPrice.value = parseFloat(localStorage.getItem('lastBtcPrice')) || 45000
  }

  fetchExchangeRates()
  const interval = setInterval(fetchExchangeRates, 60000)

  return () => clearInterval(interval)
})

const delivery = ref({
  name: '',
  email: '',
  address: '',
})

const pickupCode = ref(
  Math.random().toString(36).substring(2, 10).toUpperCase()
)

const btcWallets = [
  { 
    address: import.meta.env.VITE_BTC_WALLET_1, 
    barcode: 'btc_barcode_1.jpeg' 
  },
  {
    address: import.meta.env.VITE_BTC_WALLET_2, 
    barcode: 'btc_barcode_2.jpeg' 
  },
  { 
    address: import.meta.env.VITE_BTC_WALLET_3, 
    barcode: 'btc_barcode_3.jpeg' 
  }
]

const selectedWallet = computed(() => {
  return btcWallets[Math.floor(Math.random() * btcWallets.length)]
})

function copyToClipboard(text) {
  try {
    navigator.clipboard.writeText(text).then(() => {
      showCopyNotification.value = true
      setTimeout(() => showCopyNotification.value = false, 3000)
    }).catch(err => {
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
        showCopyNotification.value = true
        setTimeout(() => showCopyNotification.value = false, 3000)
      } catch (err) {
        console.error('Fallback copy failed:', err)
      }
      document.body.removeChild(textarea)
    })
  } catch (err) {
    console.error('Clipboard API not available:', err)
  }
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

function validateEmail() {
  if (!delivery.value.email) {
    emailError.value = ''
    return false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(delivery.value.email)) {
    emailError.value = 'Please enter a valid email address'
    return false
  }
  
  emailError.value = ''
  return true
}

async function sendOrderDetails() {
  if (deliveryType.value === 'standard') {
    if (!delivery.value.name || !delivery.value.email || !delivery.value.address) {
      return
    }
    
    if (!validateEmail()) {
      return
    }
  }

  try {
    const orderData = {
      orderReference: orderReference.value,
      deliveryType: deliveryType.value,
      paymentMethod: 'btc',
      amount: cart.totalPrice,
      cryptoAmount: cryptoAmount.value,
      walletAddress: selectedWallet.value.address,
      allWalletAddresses: btcWallets.map(w => w.address),
      ...(deliveryType.value === 'standard' ? {
        deliveryDetails: delivery.value
      } : {
        pickupCode: pickupCode.value
      }),
      products: cart.items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        size: item.size || 'N/A'
      }))
    }
    
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID
    
    const message = `💰 New Payment Received 💰
    
🔹 Order Reference: ${orderData.orderReference}
🔹 Payment Method: BTC
🔹 Amount: ${orderData.amount} USD
🔹 BTC Amount: ${orderData.cryptoAmount} BTC
🔹 Selected Wallet: ${orderData.walletAddress}

${
  orderData.deliveryType === 'standard' ? 
  `📦 Delivery Details:
👤 Name: ${orderData.deliveryDetails.name}
📧 Email: ${orderData.deliveryDetails.email}
🏠 Address: ${orderData.deliveryDetails.address}` 
  : 
  `🔐 Pickup Code: ${orderData.pickupCode}`
}

🛒 Products:
${orderData.products.map(p => `- ${p.name} ${p.size !== 'N/A' ? `(Size: ${p.size})` : ''} (Qty: ${p.quantity}) - $${p.price}`).join('\n')}
`

    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message
    })
    
    showConfirmationModal.value = true
    
  } catch (error) {
    console.error('Error submitting order:', error)
  }
}

function closeAndRedirect() {
  showConfirmationModal.value = false
  cart.clearCart()
  router.push('/collections')
}
</script>

<style scoped>
/* Fade transition for error message */
.fade-enter-active, .fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* Modal transitions */
.modal-enter-active, .modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

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

/* Custom selection */
::selection {
  background-color: rgba(199, 133, 142, 0.3);
}

/* Accent color for radio buttons */
input[type="radio"] {
  accent-color: #C7858E;
}
</style>