<template>
  <section id="collections" class="py-32 px-6 relative">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20">
        <h2
          :style="titleStyles"
          class="text-4xl md:text-5xl font-light text-gray-800 mb-6"
          ref="titleRef"
        >
          Curated Essentials
        </h2>
        <p
          :style="descriptionStyles"
          class="text-gray-600 max-w-2xl mx-auto font-light"
          ref="descriptionRef"
        >
          Discover our most loved rituals, crafted with intention to bring the
          spa experience into your daily sanctuary.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FrostedCard
          v-for="(product, index) in products"
          :key="index"
          :delay="index * 0.1"
          class="group cursor-pointer"
        >
          <div class="p-4">
            <div class="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
              <div
                :class="`absolute inset-0 ${product.color} opacity-20`"
              />
              <img
                :src="product.image"
                :alt="product.title"
                class="w-full h-full object-cover transition-transform duration-600"
                :style="getImageStyles(index)"
                @mouseenter="handleImageHover(index, true)"
                @mouseleave="handleImageHover(index, false)"
              />
              <div class="absolute top-4 right-4">
                <span class="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs tracking-widest uppercase">
                  {{ product.category }}
                </span>
              </div>
            </div>

            <div class="flex items-end justify-between px-2 pb-2">
              <div>
                <h3 class="text-xl font-light text-gray-800 mb-1 group-hover:text-muted-rose transition-colors">
                  {{ product.title }}
                </h3>
                <p class="text-gray-500 font-light">{{ product.price }}</p>
              </div>
              <Button variant="ghost" class="!px-4 !py-2 text-xs">
                Add
              </Button>
            </div>
          </div>
        </FrostedCard>
      </div>
    </div>
  </section>
</template>

<script>
import FrostedCard from './ui/FrostedCard.vue'
import Button from './ui/Button.vue'

export default {
  name: 'CollectionSection',
  components: {
    FrostedCard,
    Button
  },
  data() {
    return {
      titleVisible: false,
      descriptionVisible: false,
      hoveredImageIndex: null,
      products: [
        {
          title: 'Morning Dew Serum',
          category: 'Hydration',
          price: '$85',
          image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
          color: 'bg-blue-50'
        },
        {
          title: 'Rose Quartz Roller',
          category: 'Tools',
          price: '$45',
          image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
          color: 'bg-pink-50'
        },
        {
          title: 'Midnight Recovery',
          category: 'Night Care',
          price: '$110',
          image: 'https://images.unsplash.com/photo-1556228720-19de7526909f?auto=format&fit=crop&q=80&w=800',
          color: 'bg-indigo-50'
        }
      ]
    }
  },
  computed: {
    titleStyles() {
      return {
        opacity: this.titleVisible ? 1 : 0,
        transform: `translateY(${this.titleVisible ? 0 : 20}px)`,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }
    },
    descriptionStyles() {
      return {
        opacity: this.descriptionVisible ? 1 : 0,
        transform: `translateY(${this.descriptionVisible ? 0 : 20}px)`,
        transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
      }
    }
  },
  mounted() {
    this.setupIntersectionObservers()
  },
  beforeUnmount() {
    if (this.titleObserver) {
      this.titleObserver.disconnect()
    }
    if (this.descriptionObserver) {
      this.descriptionObserver.disconnect()
    }
  },
  methods: {
    setupIntersectionObservers() {
      const options = {
        root: null,
        threshold: 0.1
      }

      // Title observer
      this.titleObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.titleVisible) {
            this.titleVisible = true
          }
        })
      }, options)

      // Description observer
      this.descriptionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.descriptionVisible) {
            this.descriptionVisible = true
          }
        })
      }, options)

      if (this.$refs.titleRef) {
        this.titleObserver.observe(this.$refs.titleRef)
      }
      if (this.$refs.descriptionRef) {
        this.descriptionObserver.observe(this.$refs.descriptionRef)
      }
    },
    getImageStyles(index) {
      const isHovered = this.hoveredImageIndex === index
      return {
        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
      }
    },
    handleImageHover(index, isHovered) {
      this.hoveredImageIndex = isHovered ? index : null
    }
  }
}
</script>

<style scoped>
.transition-transform {
  transition-property: transform;
}

.duration-600 {
  transition-duration: 600ms;
}
</style>