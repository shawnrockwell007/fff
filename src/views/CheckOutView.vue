<template>
  <section class="bg-black text-gray-200 pt-24 pb-32 min-h-screen px-4">
    <div class="max-w-2xl mx-auto">
      <!-- Header with progress indicator -->
      <div class="mb-12 text-center">
        <h1 class="text-3xl md:text-4xl font-serif font-medium mb-6">Complete Your Order</h1>
        <div class="flex justify-center items-center mb-8">
          <div class="flex-1 h-px bg-gray-700"></div>
          <div class="mx-4 text-xs uppercase tracking-widest text-amber-400">Secure Checkout</div>
          <div class="flex-1 h-px bg-gray-700"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Delivery Section -->
        <div class="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <h2 class="text-xl font-medium mb-6 pb-2 border-b border-zinc-800">
            Delivery Method
          </h2>

          <div class="space-y-4">
            <label class="flex items-start p-4 rounded-lg border border-zinc-800 hover:border-amber-400 transition-colors cursor-pointer">
              <input type="radio" value="standard" v-model="deliveryType" class="mt-1 mr-3 h-4 w-4 text-rose-600 focus:ring-rose-500 border-zinc-600" />
              <div>
                <h3 class="font-medium">Standard Delivery</h3>
                <p class="text-sm text-gray-400 mt-1">Discreet packaging delivered to your location</p>
              </div>
            </label>

            <label class="flex items-start p-4 rounded-lg border border-zinc-800 hover:border-amber-400 transition-colors cursor-pointer">
              <input type="radio" value="pickup" v-model="deliveryType" class="mt-1 mr-3 h-4 w-4 text-rose-600 focus:ring-rose-500 border-zinc-600" />
              <div>
                <h3 class="font-medium">Private Delivery</h3>
                <p class="text-sm text-gray-400 mt-1">Generate a unique code for third party collection</p>
              </div>
            </label>
          </div>

          <!-- Delivery Details -->
          <div v-if="deliveryType === 'standard'" class="mt-6 space-y-4">
            <div>
              <label class="block text-sm text-gray-400 mb-1">Full Name</label>
              <input v-model="delivery.name" type="text" placeholder="Your full name" class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-rose-600 focus:border-rose-600 transition-colors placeholder-gray-500" />
            </div>
            <div>
              <label class="block text-sm text-gray-400 mb-1">Phone Number</label>
              <input v-model="delivery.phone" type="tel" placeholder="+1 (___) ___-____" class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-rose-600 focus:border-rose-600 transition-colors placeholder-gray-500" />
            </div>
            <div>
              <label class="block text-sm text-gray-400 mb-1">Delivery Address</label>
              <textarea v-model="delivery.address" placeholder="Full delivery address" class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-rose-600 focus:border-rose-600 transition-colors placeholder-gray-500 h-24"></textarea>
            </div>
          </div>

          <!-- Code Display -->
          <div v-if="deliveryType === 'pickup'" class="mt-6">
            <div class="bg-zinc-800 border border-amber-400 border-opacity-20 p-4 rounded-lg">
              <p class="text-sm text-gray-400 mb-2">Your private pickup code:</p>
              <div class="text-amber-400 font-mono text-xl text-center p-3 bg-black rounded break-all">
                {{ pickupCode }}
              </div>
              <p class="text-xs text-gray-500 mt-3">
                Save this code securely. You'll need it to collect your order from one of our private locations.
              </p>
            </div>
          </div>
        </div>

        <!-- Payment Section -->
        <div class="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <h2 class="text-xl font-medium mb-6 pb-2 border-b border-zinc-800">
            Payment Method
          </h2>

          <div v-if="deliveryType" class="space-y-4">
            <!-- Disabled Card Option -->
            <div class="p-4 rounded-lg border border-zinc-800 bg-zinc-800 opacity-70">
              <label class="flex items-start cursor-not-allowed">
                <input type="radio" disabled class="mt-1 mr-3 h-4 w-4 text-gray-500 border-zinc-600" />
                <div>
                  <h3 class="font-medium text-gray-500">Credit/Debit Card</h3>
                  <p class="text-sm text-rose-500 mt-1">
                    Card payments are currently unavailable due to security updates. Please use Bitcoin for secure transactions.
                  </p>
                </div>
              </label>
            </div>

            <!-- Bitcoin Option -->
            <label class="flex items-start p-4 rounded-lg border border-zinc-800 hover:border-amber-400 transition-colors cursor-pointer">
              <input type="radio" v-model="paymentMethod" value="btc" class="mt-1 mr-3 h-4 w-4 text-rose-600 focus:ring-rose-500 border-zinc-600" />
              <div>
                <h3 class="font-medium">Bitcoin (BTC)</h3>
                <p class="text-sm text-gray-400 mt-1">Complete checkout with bitcoin payment</p>
              </div>
            </label>

            <button 
              @click="paymentMethod ? showPaymentModal() : null"
              :disabled="!paymentMethod || loadingRates"
              :class="[
                'w-full mt-6 py-3 rounded-lg font-medium tracking-wider transition-all',
                paymentMethod && !loadingRates
                  ? 'bg-rose-600 hover:bg-rose-700 text-white'
                  : 'bg-zinc-800 text-gray-500 cursor-not-allowed'
              ]"
            >
              {{ loadingRates ? 'Loading exchange rates...' : 'Complete Secure Payment' }}
            </button>
          </div>

          <div v-else class="text-center py-8">
            <svg class="w-12 h-12 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-gray-500">Please select a delivery method first</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Optimized Payment Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-zinc-900 rounded-xl border border-zinc-800 w-full max-w-md mx-auto my-8 flex flex-col" style="min-height: auto; max-height: 90vh;">
        <!-- Modal Header -->
        <div class="p-6 border-b border-zinc-800 sticky top-0 bg-zinc-900 z-10">
          <div class="flex justify-between items-center">
            <h3 class="text-xl font-medium">Bitcoin Payment</h3>
            <button @click="showModal = false" class="text-gray-400 hover:text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Scrollable Content Area -->
        <div class="p-6 overflow-y-auto flex-grow space-y-6">
          <!-- Payment Instructions -->
          <div class="bg-zinc-800 border border-amber-400 border-opacity-20 rounded-lg p-4">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="text-sm font-medium text-white mb-1">Payment Instructions</p>
                <p class="text-sm text-gray-400">
                  Send exactly <span class="text-amber-400">{{ cryptoAmount }} BTC</span> to the address below.
                </p>
                
              </div>
            </div>
          </div>

          <!-- QR Code -->
          <div class="text-center">
            <div class="bg-white p-3 rounded-lg inline-block mb-3">
              <img 
                :src="selectedWallet.barcode" 
                alt="Payment QR Code" 
                class="w-40 h-40 object-contain mx-auto"
              />
            </div>
            <p class="text-sm text-gray-400">Scan QR code or copy wallet address below</p>
          </div>

          <!-- Wallet Address -->
          <div>
            <label class="block text-xs text-gray-400 mb-2 uppercase tracking-wider">Wallet Address</label>
            <div class="bg-zinc-800 border border-zinc-700 rounded-lg p-3 flex items-center">
              <span class="font-mono text-sm text-amber-400 break-all">{{ selectedWallet.address }}</span>
              <button 
                @click="copyToClipboard(selectedWallet.address)"
                class="ml-2 text-rose-600 hover:text-rose-500 transition-colors flex-shrink-0"
                title="Copy to clipboard"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Amount Due -->
          <div class="bg-black border border-amber-400 border-opacity-20 rounded-lg p-4">
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm text-gray-400">Amount Due:</span>
              <span class="font-mono text-amber-400 text-sm md:text-base">
                {{ cryptoAmount }} BTC
              </span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-400">≈</span>
              <span class="font-mono text-sm md:text-base">{{ formatCurrency(parseFloat(cart.totalPrice)) }}</span>
            </div>
            <p class="text-xs text-amber-400 mt-2 text-center">
              Current rate: 1 BTC = {{ formatCurrency(btcPrice) }}
            </p>
          </div>
        </div>

        <!-- Fixed Footer Button -->
        <div class="p-4 bg-zinc-800 border-t border-zinc-800 sticky bottom-0">
          <button 
            @click="sendOrderDetails"
            class="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-medium transition-colors"
          >
            I've Sent Payment
          </button>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showConfirmationModal" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div class="bg-zinc-900 rounded-xl border border-zinc-800 max-w-md w-full overflow-hidden">
        <div class="p-6 border-b border-zinc-800">
          <div class="flex justify-between items-center">
            <h3 class="text-xl font-medium">
              Payment Submitted
            </h3>
            <button @click="showConfirmationModal = false" class="text-gray-400 hover:text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="p-6">
          <div class="bg-zinc-800 border border-green-400 border-opacity-20 rounded-lg p-4 mb-6">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="text-sm font-medium text-white mb-1">Payment Received</p>
                <p class="text-sm text-gray-400">
                  Your payment details have been submitted successfully. We are verifying your payment and will send a confirmation email once completed.
                </p>
                <p class="text-xs text-green-400 mt-2">
                  Please allow up to 30 minutes for payment verification.
                </p>
              </div>
            </div>
          </div>

          <div class="text-center">
            <svg class="w-16 h-16 mx-auto text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 class="text-lg font-medium mb-2">Thank You For Your Order</h3>
            <p class="text-sm text-gray-400">
              Your order reference: <span class="font-mono text-amber-400">{{ orderReference }}</span>
            </p>
          </div>
        </div>

        <div class="p-4 bg-zinc-800 border-t border-zinc-800 flex justify-center">
          <button 
            @click="showConfirmationModal = false"
            class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- Toast Notification for Copied Address -->
    <div v-if="showCopyNotification" class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div class="bg-zinc-800 border border-amber-400 rounded-lg shadow-lg px-4 py-3 flex items-center animate-fade">
        <svg class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        <div>
          <p class="text-sm font-medium text-white">Address copied to clipboard!</p>
          <p class="text-xs text-amber-400">Please double-check the address matches exactly before sending.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
import axios from 'axios'

const cart = useCartStore()
const deliveryType = ref('')
const paymentMethod = ref(null)
const showModal = ref(false)
const showConfirmationModal = ref(false)
const showCopyNotification = ref(false)
const btcPrice = ref(45000) // Default fallback price
const loadingRates = ref(false)
const ratesError = ref(null)
const orderReference = ref(
Math.random().toString(36).substring(2, 10).toUpperCase()
)

// Fetch live BTC price from CoinGecko
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
  ratesError.value = 'Failed to load current BTC price. Using last known rate.'
  // Fallback to localStorage cached price or default
  const lastPrice = localStorage.getItem('lastBtcPrice')
  if (lastPrice) {
    btcPrice.value = parseFloat(lastPrice)
  }
} finally {
  loadingRates.value = false
}
}

// Convert cart total to BTC amount
const cryptoAmount = computed(() => {
const total = parseFloat(cart.totalPrice) || 0
return (total / btcPrice.value).toFixed(6)
})

// Initialize and refresh rates periodically
onMounted(() => {
// Check if we have a recent cached price
const lastUpdate = localStorage.getItem('lastBtcPriceUpdate')
if (lastUpdate && Date.now() - parseInt(lastUpdate) < 5 * 60 * 1000) {
  btcPrice.value = parseFloat(localStorage.getItem('lastBtcPrice')) || 45000
}

fetchExchangeRates()
// Refresh every 60 seconds
const interval = setInterval(fetchExchangeRates, 60000)

// Cleanup interval when component unmounts
return () => clearInterval(interval)
})

const delivery = ref({
name: '',
phone: '',
address: '',
})

const pickupCode = ref(
Math.random().toString(36).substring(2, 10).toUpperCase()
)

// Three BTC wallet addresses
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

// Select one random wallet to display
const selectedWallet = computed(() => {
return btcWallets[Math.floor(Math.random() * btcWallets.length)]
})

function copyToClipboard(text) {
try {
  navigator.clipboard.writeText(text).then(() => {
    showCopyNotification.value = true
    setTimeout(() => showCopyNotification.value = false, 3000)
  }).catch(err => {
    console.error('Failed to copy:', err)
    // Fallback for older browsers
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

function showPaymentModal() {
if (deliveryType.value === 'standard' && (!delivery.value.name || !delivery.value.address)) {
  alert('Please complete all delivery details first')
  return
}
showModal.value = true
}

async function sendOrderDetails() {
try {
  // Prepare order data
  const orderData = {
    orderReference: orderReference.value,
    deliveryType: deliveryType.value,
    paymentMethod: paymentMethod.value,
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
      price: item.price
    }))
  }
  
  // Send to Telegram bot (replace with your actual bot token and chat ID)
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID
  
  const message = `💰 New Payment Received 💰
  
🔹 Order Reference: ${orderData.orderReference}
🔹 Payment Method: ${orderData.paymentMethod.toUpperCase()}
🔹 Amount: ${orderData.amount} USD
🔹 BTC Amount: ${orderData.cryptoAmount} BTC
🔹 Selected Wallet Address: ${orderData.walletAddress}
🔹 All Available Wallet Addresses:
${orderData.allWalletAddresses.map((addr, i) => `   ${i+1}. ${addr}`).join('\n')}

${
orderData.deliveryType === 'standard' ? 
`📦 Delivery Details:
👤 Name: ${orderData.deliveryDetails.name}
📞 Phone: ${orderData.deliveryDetails.phone}
🏠 Address: ${orderData.deliveryDetails.address}` 
: 
`🔐 Pickup Code: ${orderData.pickupCode}`
}

🛒 Products Ordered:
${orderData.products.map(p => `- ${p.name} (Qty: ${p.quantity}) - ${formatCurrency(p.price)}`).join('\n')}
`

  await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    chat_id: chatId,
    text: message
  })
  
  // Close payment modal and show confirmation
  showModal.value = false
  showConfirmationModal.value = true
  
} catch (error) {
  console.error('Error submitting order:', error)
  alert('There was an error submitting your payment. Please try again.')
}
}
</script>

<style scoped>
/* Animation for copy notification */
@keyframes fadeInOut {
0% { opacity: 0; transform: translateY(10px); }
10% { opacity: 1; transform: translateY(0); }
90% { opacity: 1; transform: translateY(0); }
100% { opacity: 0; transform: translateY(-10px); }
}

.animate-fade {
animation: fadeInOut 3s ease-in-out forwards;
}

/* Custom scrollbar */
::-webkit-scrollbar {
width: 6px;
}
::-webkit-scrollbar-track {
background: #1a1a1a;
}
::-webkit-scrollbar-thumb {
background: #4b5563;
border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
background: #6b7280;
}

/* Mobile optimizations */
@media (max-width: 640px) {
.max-w-md {
  width: 95%;
  margin: 0.5rem auto;
}

.p-6 {
  padding: 1rem;
}

.text-xl {
  font-size: 1.25rem;
}

.w-40 {
  width: 160px;
  height: 160px;
}
}
</style>