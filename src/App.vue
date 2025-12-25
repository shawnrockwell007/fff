<template>
  <div class="min-h-screen bg-ivory overflow-hidden selection:bg-muted-rose/20">
    <!-- Global gentle background gradient that moves slightly with scroll -->
    <div 
      :style="backgroundStyles" 
      class="fixed inset-0 z-0 pointer-events-none opacity-50"
    >
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blush/30 rounded-full blur-[100px]" />
      <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-warm-beige/30 rounded-full blur-[100px]" />
    </div>

    <!-- Navigation stays in App.vue for global cart access -->
    <Navigation />

    <!-- Router View for page content -->
    <main class="relative z-10">
      <router-view />
    </main>

    <footer class="relative z-10 py-12 text-center text-gray-400 text-sm font-light">
      <p>© 2025 Fetluxuria. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {
      scrollProgress: 0
    }
  },
  computed: {
    backgroundStyles() {
      const translateY = this.scrollProgress * 20
      return {
        transform: `translateY(${translateY}%)`,
        transition: 'transform 0.1s linear'
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      this.scrollProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0
    }
  }
}
</script>