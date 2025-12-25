<template>
  <div>
    <Hero />

    <!-- Transition Section -->
    <div class="py-20 flex justify-center">
      <div class="h-24 w-[1px] bg-gradient-to-b from-transparent via-muted-rose/30 to-transparent" />
    </div>


    <Newsletter />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Newsletter from '../components/Newsletter.vue'

export default {
  name: 'Home',
  components: { Hero, Newsletter },
  data() {
    return {
      philosophyItems: [
        'Cruelty-free & Vegan',
        'Sustainably Packaged',
        'Dermatologist Tested'
      ]
    }
  }
}
</script>
