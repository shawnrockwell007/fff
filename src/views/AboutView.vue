<template>
  <section class="min-h-screen pt-32 pb-20 px-6 relative bg-ivory overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-blush/20 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-20 left-10 w-80 h-80 bg-warm-beige/30 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-muted-rose/5 rounded-full blur-3xl pointer-events-none" />
    
    <div class="container mx-auto max-w-5xl relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block py-2 px-5 rounded-full bg-white/80 backdrop-blur-md border-2 border-muted-rose/30 text-xs font-semibold tracking-[0.2em] text-muted-rose mb-6 uppercase shadow-sm">
          Our Story
        </span>
        <h1 class="text-5xl md:text-6xl font-thin text-charcoal mb-6 tracking-tight">
          About <span class="italic text-muted-rose font-light">FETLUXURIA</span>
        </h1>
        <div class="flex items-center justify-center gap-4 mt-6 mb-8">
          <div class="flex-1 h-px bg-warm-beige/50 max-w-xs"></div>
          <span class="text-muted-rose text-sm tracking-[0.3em] uppercase font-medium">Curated Luxury</span>
          <div class="flex-1 h-px bg-warm-beige/50 max-w-xs"></div>
        </div>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Absolute discretion. Intimate tools for those who demand the finest.
        </p>
      </div>

      <!-- Brand Mission -->
      <div class="mb-20">
        <div class="bg-white/80 backdrop-blur-xl rounded-3xl p-10 md:p-12 border-2 border-white/40 shadow-xl">
          <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-thin text-charcoal mb-4">
              Who <span class="italic text-muted-rose font-light">We Are</span>
            </h2>
            <div class="w-20 h-1 bg-gradient-to-r from-transparent via-muted-rose to-transparent mx-auto"></div>
          </div>
          <p class="text-gray-600 leading-relaxed text-base md:text-lg font-light text-center max-w-3xl mx-auto">
            FETLUXURIA is not a manufacturer—we are <span class="text-muted-rose font-medium">connoisseurs of exquisite intimacy</span>. 
            Our mission is singular: to connect discerning individuals with the world's most refined collection of intimate tools. 
            We partner exclusively with premium ateliers and master craftsmen to offer pieces that elevate personal pleasure with 
            <span class="text-muted-rose font-medium">uncompromising elegance</span> and subtlety.
          </p>
        </div>
      </div>

      <!-- Core Values -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-thin text-charcoal mb-4">
            Our <span class="italic text-muted-rose font-light">Values</span>
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-transparent via-muted-rose to-transparent mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Discreet Luxury -->
          <div class="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/40 hover:border-muted-rose/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="w-16 h-16 mx-auto mb-6 bg-muted-rose/10 rounded-2xl flex items-center justify-center group-hover:bg-muted-rose/20 transition-all duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-charcoal mb-4 text-center tracking-wide">Discreet Luxury</h3>
            <p class="text-gray-600 font-light text-center text-sm leading-relaxed">
              Every item is hand-selected for its beauty and discretion—packaged with complete anonymity and delivered with the utmost privacy.
            </p>
          </div>

          <!-- Curated Excellence -->
          <div class="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/40 hover:border-muted-rose/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="w-16 h-16 mx-auto mb-6 bg-muted-rose/10 rounded-2xl flex items-center justify-center group-hover:bg-muted-rose/20 transition-all duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-charcoal mb-4 text-center tracking-wide">Curated Excellence</h3>
            <p class="text-gray-600 font-light text-center text-sm leading-relaxed">
              We source only from elite artisans and luxury maisons, ensuring each experience meets our exacting standards of excellence.
            </p>
          </div>

          <!-- Empowered Intimacy -->
          <div class="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/40 hover:border-muted-rose/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="w-16 h-16 mx-auto mb-6 bg-muted-rose/10 rounded-2xl flex items-center justify-center group-hover:bg-muted-rose/20 transition-all duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-charcoal mb-4 text-center tracking-wide">Empowered Intimacy</h3>
            <p class="text-gray-600 font-light text-center text-sm leading-relaxed">
              We champion intimacy that is elegant, intentional, and unapologetically personal—celebrating the freedom of self-discovery.
            </p>
          </div>
        </div>
      </div>

      <!-- Elegant Quote Section -->
      <div class="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl rounded-3xl p-10 md:p-16 border-2 border-white/40 shadow-xl">
        <div class="text-center">
          <svg class="w-12 h-12 mx-auto text-muted-rose/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
          </svg>
          <blockquote class="text-2xl md:text-3xl font-light italic text-muted-rose leading-relaxed mb-6">
            "Elegance is when your desires are met without saying a word."
          </blockquote>
          <div class="w-16 h-px bg-warm-beige/50 mx-auto mb-4"></div>
          <p class="text-xs text-gray-500 tracking-[0.3em] uppercase font-medium">The Curators</p>
        </div>
      </div>

      <!-- Additional Info Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <!-- Our Promise -->
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/40">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-10 h-10 rounded-xl bg-muted-rose/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-charcoal mb-2">Our Promise</h3>
              <p class="text-sm text-gray-600 font-light leading-relaxed">
                Every product in our collection has been personally tested and vetted. We stand behind the quality, 
                craftsmanship, and discretion of every piece we offer.
              </p>
            </div>
          </div>
        </div>

        <!-- Sustainability -->
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/40">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-10 h-10 rounded-xl bg-muted-rose/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-muted-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-charcoal mb-2">Ethical Sourcing</h3>
              <p class="text-sm text-gray-600 font-light leading-relaxed">
                We partner only with artisans and brands that share our commitment to ethical production, 
                sustainable materials, and fair labor practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Optional: Add any initialization logic here
})
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

/* Animate on scroll (optional) */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group:hover {
  animation: fadeInUp 0.3s ease-out;
}
</style>