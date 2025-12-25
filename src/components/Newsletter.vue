<template>
  <section class="py-32 px-6 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-warm-beige/40" />

    <div class="max-w-4xl mx-auto relative z-10">
      <div
        :style="cardStyles"
        ref="cardRef"
        class="relative bg-white/90 backdrop-blur-xl rounded-[3rem]
               p-12 md:p-20 text-center border-2 border-muted-rose/30
               shadow-2xl"
      >
        <h2 class="text-3xl md:text-5xl font-light text-charcoal mb-6">
          Join the Inner Circle
        </h2>

        <p class="text-gray-700 mb-10 max-w-xl mx-auto leading-relaxed">
          Receive mindful rituals, exclusive early access to new collections,
          and wellness inspiration directly to your inbox.
        </p>

        <form
          class="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
          @submit.prevent="handleSubmit"
        >
          <input
            type="email"
            v-model="email"
            placeholder="Your email address"
            class="flex-1 px-6 py-4 rounded-full bg-white
                   border-2 border-muted-rose/30 focus:outline-none
                   focus:ring-2 focus:ring-muted-rose
                   text-charcoal placeholder:text-gray-500"
            required
          />
          <Button type="submit" variant="primary">
            Subscribe
          </Button>
        </form>

        <p class="mt-8 text-xs text-gray-500 tracking-wide uppercase font-medium">
          No spam, just serenity. Unsubscribe anytime.
        </p>

        <!-- ✅ MOBILE-SAFE TOAST -->
        <Transition name="toast">
          <div
            v-if="toast.show"
            class="absolute -bottom-16 left-1/2 -translate-x-1/2
                   w-[90%] max-w-sm
                   bg-emerald-50 border border-emerald-300
                   rounded-2xl px-5 py-4
                   shadow-xl backdrop-blur-md"
          >
            <p class="text-sm text-emerald-900 font-semibold leading-snug">
              Subscription successful
            </p>
            <p class="text-xs text-emerald-700 mt-1 leading-snug">
              You’re now part of the Inner Circle.
            </p>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script>
import Button from './ui/Button.vue'

export default {
  name: 'Newsletter',
  components: { Button },
  data() {
    return {
      email: '',
      isVisible: false,
      toast: {
        show: false
      }
    }
  },
  computed: {
    cardStyles() {
      return {
        opacity: this.isVisible ? 1 : 0,
        transform: `scale(${this.isVisible ? 1 : 0.95})`,
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }
    }
  },
  mounted() {
    this.setupIntersectionObserver()
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect()
  },
  methods: {
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) this.isVisible = true
          })
        },
        { threshold: 0.1 }
      )

      if (this.$refs.cardRef) {
        this.observer.observe(this.$refs.cardRef)
      }
    },
    handleSubmit() {
      if (!this.email) return

      console.log('Subscribed:', this.email)
      this.email = ''
      this.showToast()
    },
    showToast() {
      this.toast.show = true
      setTimeout(() => {
        this.toast.show = false
      }, 3200)
    }
  }
}
</script>

<style scoped>
/* Smooth toast animation */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.35s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 14px);
}
</style>
