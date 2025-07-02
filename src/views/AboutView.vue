<template>
  <section class="bg-black text-gray-200 min-h-screen">
    <!-- Background texture and accent lights -->
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-10"></div>
    <div class="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-rose-900/20 filter blur-3xl"></div>
    <div class="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-amber-900/20 filter blur-3xl"></div>

    <div class="container mx-auto px-6 py-32 relative z-10">
      <!-- Header with elegant divider -->
      <div class="text-center mb-20">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 font-[lust] tracking-tight">
          About <span class="text-rose-600 font-[lust-script]">FETLUXURIA</span>
        </h1>
        <div class="flex items-center justify-center mb-8">
          <div class="w-16 h-px bg-amber-400"></div>
          <p class="mx-4 text-amber-400 uppercase tracking-widest text-sm">Curated Luxury</p>
          <div class="w-16 h-px bg-amber-400"></div>
        </div>
        <p class="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light">
          Absolute discretion. Intimate tools for those who demand the finest.
        </p>
      </div>

      <!-- Brand Mission with animated reveal -->
      <div class="max-w-4xl mx-auto mb-24 text-center transform transition-all duration-500 hover:scale-[1.01]">
        <h2 class="text-3xl font-serif text-white mb-8 font-medium tracking-wide">
          <span class="border-b border-amber-400/30 pb-2">Who We Are</span>
        </h2>
        <p class="text-gray-400 leading-relaxed text-lg font-light">
          FETLUXURIA is not a manufacturer we are <span class="text-rose-500/90">connoisseurs of exquisite intimacy</span>.  
          Our mission is singular to connect discerning individuals with the world's most refined collection of intimate tools.  
          We partner exclusively with premium ateliers and master craftsmen to offer pieces that elevate personal pleasure with 
          <span class="text-amber-400/90">uncompromising elegance</span> and subtlety.
        </p>
      </div>

      <!-- Core Values with hover effects -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div class="p-8 hover:bg-gray-900/50 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-800">
          <div class="w-16 h-16 mx-auto mb-6 bg-rose-600/10 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h3 class="text-xl font-medium text-white mb-4 tracking-wide">Discreet Luxury</h3>
          <p class="text-gray-400 font-light">
            Every item is hand selected for its beauty and discretion packaged with complete anonymity and delivered with the utmost privacy.
          </p>
        </div>
        
        <div class="p-8 hover:bg-gray-900/50 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-800">
          <div class="w-16 h-16 mx-auto mb-6 bg-amber-400/10 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h3 class="text-xl font-medium text-white mb-4 tracking-wide">Curated Excellence</h3>
          <p class="text-gray-400 font-light">
            We source only from elite artisans and luxury maisons, ensuring each experience meets our exacting standards of excellence.
          </p>
        </div>
        
        <div class="p-8 hover:bg-gray-900/50 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-800">
          <div class="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-medium text-white mb-4 tracking-wide">Empowered Intimacy</h3>
          <p class="text-gray-400 font-light">
            We champion intimacy that is elegant, intentional, and unapologetically personal celebrating the freedom of self discovery.
          </p>
        </div>
      </div>

      <!-- Elegant quote section -->
      <div class="text-center max-w-2xl mx-auto px-4 py-12 border-t border-b border-gray-800/50">
        <svg class="w-12 h-12 mx-auto text-rose-600/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
        </svg>
        <blockquote class="text-2xl md:text-3xl font-serif italic text-rose-600/90 leading-relaxed mb-6">
          “Elegance is when your desires are met without saying a word.”
        </blockquote>
        <p class="text-sm text-gray-500 tracking-widest">— THE CURATORS</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
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
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap');

/* Fallback fonts */
.font-lust {
  font-family: 'Lust', 'Cormorant Garamond', serif;
  font-weight: 700;
}

.font-lust-script {
  font-family: 'Lust Script', 'Cormorant Garamond', serif;
  font-style: italic;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom selection color */
::selection {
  background: #be185d;
  color: white;
}
</style>