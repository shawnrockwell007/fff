<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-radial from-blush/40 via-ivory to-ivory z-0" />
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-muted-rose/20 rounded-full blur-3xl animate-float" />
    <div
      class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-warm-beige/40 rounded-full blur-3xl animate-float"
      style="animation-delay: 2s;"
    />

    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <div :style="heroContentStyles">
        <span class="inline-block py-2 px-5 rounded-full bg-white/80 backdrop-blur-md border-2 border-muted-rose/30 text-xs font-semibold tracking-[0.2em] text-muted-rose mb-8 uppercase shadow-sm">
          Discreet Pleasures
        </span>

        <h1 class="text-6xl md:text-7xl lg:text-8xl font-thin text-charcoal mb-8 leading-tight tracking-tight">
          Discover the <br />
          <span class="font-light italic text-muted-rose">
            essence of desire
          </span>
        </h1>

        <p class="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
          A sanctuary for your senses. Experience our curated collection of
          adult products for Fetish and BDSM lovers who value discretion above all.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <RouterLink to="/collections">  
            <Button variant="primary" :icon="true">
              Explore Collection
            </Button>
          </RouterLink>
          <RouterLink to="/about">  
          <Button variant="secondary">Our Rituals</Button>
          </RouterLink>
        </div>
      </div>

      <!-- Floating Trust Badges -->
      <div :style="badgesContainerStyles" class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div
          v-for="(item, i) in trustBadges"
          :key="i"
          class="flex items-center justify-center gap-3 p-5 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-muted-rose/20 transition-all duration-300 shadow-md"
          :style="getBadgeStyles(i)"
          @mouseenter="handleBadgeHover(i, true)"
          @mouseleave="handleBadgeHover(i, false)"
        >
          <component :is="item.icon" class="w-6 h-6 text-muted-rose" />
          <span class="text-sm tracking-wide text-charcoal font-medium">
            {{ item.text }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from './ui/Button.vue'
import { Sparkles, Wind, Droplets } from 'lucide-vue-next'

export default {
  name: 'Hero',
  components: {
    Button,
    Sparkles,
    Wind,
    Droplets
  },
  data() {
    return {
      heroContentOpacity: 0,
      heroContentY: 30,
      badgesOpacity: 0,
      hoveredBadgeIndex: null,
      trustBadges: [
        {
          icon: 'Sparkles',
          text: 'Ethically Sourced'
        },
        {
          icon: 'Droplets',
          text: 'Body Safe Materials'
        },
        {
          icon: 'Wind',
          text: 'Discreet Shipping'
        }
      ]
    }
  },
  computed: {
    heroContentStyles() {
      return {
        opacity: this.heroContentOpacity,
        transform: `translateY(${this.heroContentY}px)`,
        transition: 'opacity 1s ease-out, transform 1s ease-out'
      }
    },
    badgesContainerStyles() {
      return {
        opacity: this.badgesOpacity,
        transition: 'opacity 1s ease-out 0.5s'
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.heroContentOpacity = 1
      this.heroContentY = 0
    }, 50)

    setTimeout(() => {
      this.badgesOpacity = 1
    }, 550)
  },
  methods: {
    getBadgeStyles(index) {
      const isHovered = this.hoveredBadgeIndex === index
      return {
        transform: isHovered ? 'translateY(-5px) scale(1.03)' : 'translateY(0) scale(1)',
        boxShadow: isHovered ? '0 10px 25px rgba(199, 133, 142, 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
      }
    },
    handleBadgeHover(index, isHovered) {
      this.hoveredBadgeIndex = isHovered ? index : null
    }
  }
}
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.bg-gradient-radial {
  background: radial-gradient(circle at center, var(--tw-gradient-stops));
}
</style>