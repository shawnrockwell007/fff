<template>
    <section class="bg-black text-gray-200 pt-24 pb-32 min-h-screen px-4">
      <div class="max-w-2xl mx-auto">
        <div class="mb-12 text-center">
          <h1 class="text-3xl md:text-4xl font-serif font-medium mb-6">Customer Support</h1>
          <div class="flex justify-center items-center mb-8">
            <div class="flex-1 h-px bg-gray-700"></div>
            <div class="mx-4 text-xs uppercase tracking-widest text-amber-400">We're Here to Help</div>
            <div class="flex-1 h-px bg-gray-700"></div>
          </div>
        </div>
  
        <div class="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <div class="mb-8">
            <h2 class="text-xl font-medium mb-4">Contact Our Support Team</h2>
            <p class="text-gray-400">
              Have questions or need assistance? Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </div>
  
          <form @submit.prevent="submitSupportRequest" class="space-y-6">
            <div>
              <label for="email" class="block text-sm text-gray-400 mb-1">Email Address</label>
              <input
                v-model="supportForm.email"
                type="email"
                id="email"
                required
                placeholder="your@email.com"
                class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-rose-600 focus:border-rose-600 transition-colors placeholder-gray-500"
              >
            </div>
  
            <div>
              <label for="subject" class="block text-sm text-gray-400 mb-1">Subject</label>
              <input
                v-model="supportForm.subject"
                type="text"
                id="subject"
                required
                placeholder="What's this about?"
                class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-rose-600 focus:border-rose-600 transition-colors placeholder-gray-500"
              >
            </div>
  
            <div>
              <label for="message" class="block text-sm text-gray-400 mb-1">Your Message</label>
              <textarea
                v-model="supportForm.message"
                id="message"
                rows="6"
                required
                placeholder="Describe your issue in detail..."
                class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-rose-600 focus:border-rose-600 transition-colors placeholder-gray-500"
              ></textarea>
            </div>
  
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-medium transition-colors disabled:bg-zinc-800 disabled:text-gray-500"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            </button>
          </form>
        </div>
  
        <!-- Success Notification -->
        <div v-if="showSuccess" class="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade z-50">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          Your message has been sent successfully!
        </div>
  
        <!-- Error Notification -->
        <div v-if="showError" class="fixed bottom-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade z-50">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          {{ errorMessage }}
        </div>
      </div>
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
      // Replace with your actual Telegram bot token and chat ID
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
      setTimeout(() => showSuccess.value = false, 3000)
    } catch (error) {
      console.error('Error sending support request:', error)
      errorMessage.value = 'Failed to send message. Please try again.'
      showError.value = true
      setTimeout(() => showError.value = false, 3000)
    } finally {
      isSubmitting.value = false
    }
  }
  </script>
  
  <style scoped>
  /* Animation for notifications */
  @keyframes fade {
    0% { opacity: 0; transform: translateY(10px); }
    10% { opacity: 1; transform: translateY(0); }
    90% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(10px); }
  }
  
  .animate-fade {
    animation: fade 3s ease-in-out;
  }
  
  /* Custom scrollbar for textarea */
  textarea::-webkit-scrollbar {
    width: 8px;
  }
  textarea::-webkit-scrollbar-track {
    background: #1a1a1a;
  }
  textarea::-webkit-scrollbar-thumb {
    background: #4b5563;
    border-radius: 4px;
  }
  </style>