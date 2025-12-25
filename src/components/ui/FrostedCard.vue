<template>
  <div
    :class="cardClasses"
    :style="cardStyles"
    ref="cardRef"
  >
    <!-- Subtle shine effect overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
    <div class="relative z-10">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrostedCard',
  props: {
    className: {
      type: String,
      default: ''
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isVisible: false,
      opacity: 0,
      translateY: 20
    }
  },
  computed: {
    cardClasses() {
      return `
        relative overflow-hidden
        bg-white/40 backdrop-blur-xl 
        border border-white/40 
        rounded-3xl 
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        hover:shadow-[0_20px_40px_rgb(212,165,165,0.15)]
        transition-shadow duration-500
        ${this.className}
      `
    },
    cardStyles() {
      return {
        opacity: this.opacity,
        transform: `translateY(${this.translateY}px)`,
        transition: `opacity 0.7s ease-out ${this.delay}s, transform 0.7s ease-out ${this.delay}s`
      }
    }
  },
  mounted() {
    this.setupIntersectionObserver()
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '-50px',
        threshold: 0
      }

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.isVisible) {
            this.isVisible = true
            this.animateIn()
          }
        })
      }, options)

      if (this.$refs.cardRef) {
        this.observer.observe(this.$refs.cardRef)
      }
    },
    animateIn() {
      // Trigger animation
      setTimeout(() => {
        this.opacity = 1
        this.translateY = 0
      }, 50)
    }
  }
}
</script>

