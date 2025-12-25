<template>
  <section class="min-h-screen pt-32 pb-20 px-6 relative bg-ivory">
    <!-- Background decoration -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-blush/20 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-20 left-10 w-80 h-80 bg-warm-beige/30 rounded-full blur-3xl pointer-events-none" />
    
    <div class="max-w-3xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-12">
        <span class="inline-block py-2 px-5 rounded-full bg-white/80 backdrop-blur-md border-2 border-muted-rose/30 text-xs font-semibold tracking-[0.2em] text-muted-rose mb-6 uppercase shadow-sm">
          Get In Touch
        </span>
        <h1 class="text-4xl md:text-5xl font-thin text-charcoal mb-4 tracking-tight">
          Customer <span class="italic text-muted-rose font-light">Support</span>
        </h1>
        <div class="flex items-center justify-center gap-4 mt-6">
          <div class="flex-1 h-px bg-warm-beige/50 max-w-xs"></div>
          <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <div class="flex-1 h-px bg-warm-beige/50 max-w-xs"></div>
        </div>
        <p class="text-gray-600 mt-6 font-light max-w-xl mx-auto">
          We're here to help. Fill out the form below and our team will get back to you as soon as possible.
        </p>
      </div>

      <!-- Contact Form Card -->
      <div class="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 border-2 border-white/40 shadow-xl">
        <form @submit.prevent="submitSupportRequest" class="space-y-6">
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm text-gray-600 mb-2 font-medium uppercase tracking-wide">
              Email Address
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                v-model="supportForm.email"
                type="email"
                id="email"
                required
                placeholder="your@email.com"
                class="w-full bg-white/90 border-2 border-warm-beige rounded-2xl pl-12 pr-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-muted-rose focus:border-muted-rose transition-all placeholder-gray-400"
              >
            </div>
          </div>

          <!-- Subject Field -->
          <div>
            <label for="subject" class="block text-sm text-gray-600 mb-2 font-medium uppercase tracking-wide">
              Subject
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <input
                v-model="supportForm.subject"
                type="text"
                id="subject"
                required
                placeholder="What's this about?"
                class="w-full bg-white/90 border-2 border-warm-beige rounded-2xl pl-12 pr-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-muted-rose focus:border-muted-rose transition-all placeholder-gray-400"
              >
            </div>
          </div>

          <!-- Message Field -->
          <div>
            <label for="message" class="block text-sm text-gray-600 mb-2 font-medium uppercase tracking-wide">
              Your Message
            </label>
            <textarea
              v-model="supportForm.message"
              id="message"
              rows="6"
              required
              placeholder="Describe your issue in detail..."
              class="w-full bg-white/90 border-2 border-warm-beige rounded-2xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-muted-rose focus:border-muted-rose transition-all placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-4 rounded-full font-semibold text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            :class="isSubmitting 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-muted-rose text-white hover:bg-[#A05662] hover:scale-105'"
          >
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else class="flex items-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
            <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>

      <!-- Contact Info Cards -->
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

    <!-- Success Toast -->
    <transition name="toast">
      <div v-if="showSuccess" class="fixed bottom-8 right-8 z-50">
        <div class="bg-white border-2 border-green-400 rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 backdrop-blur-xl">
          <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <div>
            <p class="text-sm font-semibold text-charcoal">Message Sent!</p>
            <p class="text-xs text-gray-600">We'll get back to you soon</p>
          </div>
        </div>
      </div>
    </transition>

    <!-- Error Toast -->
    <transition name="toast">
      <div v-if="showError" class="fixed bottom-8 right-8 z-50">
        <div class="bg-white border-2 border-red-400 rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 backdrop-blur-xl">
          <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </div>
          <div>
            <p class="text-sm font-semibold text-charcoal">Error</p>
            <p class="text-xs text-gray-600">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const supportForm = ref({
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

const submitSupportRequest = async () => {
  isSubmitting.value = true
  showError.value = false

  try {
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

    const message = `📩 New Support Request\n\n` +
      `📧 Email: ${supportForm.value.email}\n` +
      `📌 Subject: ${supportForm.value.subject}\n` +
      `📝 Message:\n${supportForm.value.message}`

    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message
    })

    // Reset form and show success
    supportForm.value = { email: '', subject: '', message: '' }
    showSuccess.value = true
    setTimeout(() => showSuccess.value = false, 4000)
  } catch (error) {
    console.error('Error sending support request:', error)
    errorMessage.value = 'Failed to send message. Please try again.'
    showError.value = true
    setTimeout(() => showError.value = false, 4000)
  } finally {
    isSubmitting.value = false
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

/* Custom selection */
::selection {
  background-color: rgba(199, 133, 142, 0.3);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  background: #F4E4D7;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb {
  background: #C7858E;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #A05662;
}

/* Loading spinner animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>