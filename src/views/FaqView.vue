<template>
    <section class="bg-black text-white min-h-screen pt-24 pb-16 px-4">
      <div class="container mx-auto max-w-4xl">
        <h1 class="text-3xl md:text-4xl font-serif text-center mb-8">Frequently Asked Questions</h1>
        
        <!-- Crypto Payments Section -->
        <div class="mb-12">
          <h2 class="text-2xl font-medium mb-6 text-rose-500 border-b border-zinc-700 pb-2">Crypto Payments</h2>
          
          <div class="space-y-6">
            <!-- BTC Payment -->
            <div class="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 class="text-xl font-medium mb-3 flex items-center">
                <svg class="w-6 h-6 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                How to pay with Bitcoin (BTC)
              </h3>
              <ol class="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Select Bitcoin as your payment method at checkout</li>
                <li>We'll generate a unique BTC wallet address for your order</li>
                <li>Send the exact amount shown (network fees may apply)</li>
                <li>Wait for blockchain confirmation (typically 10-30 minutes)</li>
                <li>You'll receive email confirmation once payment is verified</li>
              </ol>
              <p class="mt-3 text-sm text-amber-400">Note: BTC prices are locked for 15 minutes after order creation</p>
            </div>
            
            
          </div>
        </div>
        
        <!-- Delivery Options Section -->
        <div class="mb-12">
          <h2 class="text-2xl font-medium mb-6 text-rose-500 border-b border-zinc-700 pb-2">Delivery Options</h2>
          
          <div class="space-y-6">
            <!-- Private Pickup -->
            <div class="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 class="text-xl font-medium mb-3">How to generate a private pickup code</h3>
              <ul class="list-disc pl-5 space-y-2 text-gray-300">
                <li>Select "Private Pickup" as your delivery method</li>
                <li>A unique 8-digit code will be generated automatically</li>
                <li>Save this code securely you'll need it to collect your order</li>
                <li>Share the code with our customer care to process delivery</li>
              </ul>
              <div class="mt-4 p-3 bg-zinc-800 rounded text-sm text-amber-300">
                <svg class="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                Never share your pickup code with unauthorized persons
              </div>
            </div>
            
            <!-- Standard Delivery -->
            <div class="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 class="text-xl font-medium mb-3">Standard Delivery Information</h3>
              <ul class="list-disc pl-5 space-y-2 text-gray-300">
                <li>Packages arrive in discreet, unmarked packaging</li>
                <li>Delivery times: 3-5 business days after payment confirmation</li>
                <li>Tracking information provided via encrypted email</li>
                <li>Signature may be required upon delivery</li>
                <li>Contact support if package doesn't arrive within 7 days</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Other Common Questions -->
        <div>
          <h2 class="text-2xl font-medium mb-6 text-rose-500 border-b border-zinc-700 pb-2">Other Questions</h2>
          
          <div class="space-y-4">
            <!-- Privacy -->
            <div class="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 class="text-xl font-medium mb-2">Is my purchase information private?</h3>
              <p class="text-gray-300">
                Absolutely. We use end-to-end encryption for all transactions and communications. 
                Your personal details are never shared with third parties, and all packages 
                are shipped in plain, discreet packaging with no identifying marks.
              </p>
            </div>
            
            <!-- Returns -->
            <div class="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 class="text-xl font-medium mb-2">What is your return policy?</h3>
              <p class="text-gray-300">
                Due to the nature of our products, we generally don't accept returns. However, 
                if you receive a defective or incorrect item, contact support within 48 hours 
                of delivery with photos/video evidence. We'll provide a replacement or store 
                credit for verified issues.
              </p>
            </div>
            
            <!-- Security -->
            <div class="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 class="text-xl font-medium mb-2">How do you ensure transaction security?</h3>
              <p class="text-gray-300">
                We use military-grade encryption for all transactions. Crypto payments are 
                processed through secure, non-custodial wallets. For pickup orders, each 
                transaction uses a unique, one-time code. We never store your full payment 
                details on our servers.
              </p>
            </div>
            
            <!-- Support -->
            <div class="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 class="text-xl font-medium mb-2">How can I contact customer support?</h3>
              <p class="text-gray-300">
                For fastest response, use the encrypted messaging system in your account dashboard. 
                You can also email <span class="text-rose-400"><RouterLink to="/contact">Support</RouterLink></span> 
                 Average response time is 12-24 hours. Include your order 
                reference number for order-specific inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FAQPage',
    // You can add any necessary methods or data properties here
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>