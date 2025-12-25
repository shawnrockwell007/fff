<template>
  <div>
    <nav :class="navClasses" :style="navStyles">
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-muted-rose/30 flex items-center justify-center border-2 border-muted-rose">
            <div class="w-4 h-4 rounded-full bg-muted-rose" />
          </div>
          <span class="text-2xl font-light tracking-widest text-charcoal">
            FETLUXURIA
          </span>
        </RouterLink>

        <div class="hidden md:flex items-center gap-12">
          <RouterLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="text-sm uppercase tracking-widest text-charcoal hover:text-muted-rose transition-colors font-medium"
            >
              {{ link.label }}
        </RouterLink>

        </div>

        <div class="flex items-center gap-6">
          <!-- Mobile Cart -->
  <RouterLink
    to="/cart"
    class="md:hidden relative text-charcoal hover:text-muted-rose transition-colors"
  >
    <ShoppingBag class="w-6 h-6" />
    <span
      v-if="cart.itemCount > 0"
      class="absolute -top-1 -right-1 bg-muted-rose text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold"
    >
      {{ cart.itemCount }}
    </span>
  </RouterLink>
          <RouterLink 
          to="/cart"
          class="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest text-charcoal hover:text-muted-rose transition-colors font-medium">
            <span>Cart</span>
            <ShoppingBag class="w-5 h-5" />
            <span v-if="cart.itemCount > 0" class="bg-muted-rose text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{{ cart.itemCount }}</span>
          </RouterLink>
          <button
            class="md:hidden text-charcoal hover:text-muted-rose transition-colors"
            @click="isMobileMenuOpen = true"
          >
            <Menu class="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu (rest remains the same) -->
    <transition
      name="fade"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-50 bg-ivory/98 backdrop-blur-xl flex flex-col items-center justify-center"
      >
        <button
          class="absolute top-8 right-6 text-charcoal hover:text-muted-rose transition-colors"
          @click="isMobileMenuOpen = false"
        >
          <X class="w-8 h-8" />
        </button>
        <div class="flex flex-col items-center gap-8">
          <RouterLink
              v-for="(link, i) in links"
              :key="link.to"
              :to="link.to"
              :style="getMobileLinkStyles(i)"
              class="text-3xl font-light text-charcoal hover:text-muted-rose transition-colors"
              @click="isMobileMenuOpen = false"
            >
              {{ link.label }}
        </RouterLink>

        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Menu, X, ShoppingBag } from 'lucide-vue-next'
import { useCartStore } from '../../src/stores/cartStore.js'

export default {
  name: 'Navigation',
  components: {
    Menu,
    X,
    ShoppingBag
  },
  setup() {
    const cart = useCartStore()
    cart.loadCart()
    return { cart }
  },
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      navY: -100,
      navOpacity: 0,
      links: [
        { label: 'Collections', to: '/collections' },
        { label: 'About', to: '/about' },
        { label: 'Support', to: '/support' },
        { label: 'FAQ', to: '/faq' }
      ],

      mobileLinksAnimated: false
    }
  },
  computed: {
    navClasses() {
      return `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        this.isScrolled 
          ? 'py-4 bg-white/95 backdrop-blur-xl border-b border-muted-rose/20 shadow-lg' 
          : 'py-8 bg-transparent'
      }`
    },
    navStyles() {
      return {
        transform: `translateY(${this.navY}px)`,
        opacity: this.navOpacity,
        transition: 'transform 0.8s ease-out, opacity 0.8s ease-out'
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.navY = 0
      this.navOpacity = 1
    }, 50)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    isMobileMenuOpen(newVal) {
      if (newVal) {
        this.mobileLinksAnimated = false
        this.$nextTick(() => {
          this.mobileLinksAnimated = true
        })
      }
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    getMobileLinkStyles(index) {
      if (!this.mobileLinksAnimated) {
        return {
          opacity: 0,
          transform: 'translateY(20px)'
        }
      }
      return {
        opacity: 1,
        transform: 'translateY(0)',
        transition: `opacity 0.3s ease-out ${index * 0.1}s, transform 0.3s ease-out ${index * 0.1}s`
      }
    },
    onBeforeEnter(el) {
      el.style.opacity = 0
    },
    onEnter(el, done) {
      setTimeout(() => {
        el.style.transition = 'opacity 0.3s ease-out'
        el.style.opacity = 1
        done()
      }, 10)
    },
    onLeave(el, done) {
      el.style.transition = 'opacity 0.3s ease-out'
      el.style.opacity = 0
      setTimeout(done, 300)
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>