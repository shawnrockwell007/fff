<template>
  <button
    :class="buttonClasses"
    v-bind="$attrs"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    :style="buttonStyles"
  >
    <slot></slot>
    <svg
      v-if="icon"
      class="ml-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'Button',
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'ghost'].includes(value)
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isHovered: false,
      isPressed: false,
      translateY: 0,
      scale: 1
    }
  },
  computed: {
    baseStyles() {
      return 'inline-flex items-center justify-center px-8 py-3 rounded-full transition-all duration-300 text-sm tracking-widest uppercase font-semibold'
    },
    variantStyles() {
      const variants = {
        primary: 'bg-muted-rose text-white hover:bg-[#A05662] shadow-lg hover:shadow-xl border border-transparent',
        secondary: 'bg-white/90 text-charcoal border-2 border-muted-rose hover:bg-muted-rose hover:text-white shadow-md hover:shadow-lg',
        ghost: 'bg-transparent text-charcoal hover:text-muted-rose hover:bg-muted-rose/10 border border-transparent hover:border-muted-rose'
      }
      return variants[this.variant]
    },
    buttonClasses() {
      return `${this.baseStyles} ${this.variantStyles}`
    },
    buttonStyles() {
      return {
        transform: `translateY(${this.translateY}px) scale(${this.scale})`,
        transition: 'transform 0.3s ease'
      }
    }
  },
  methods: {
    handleMouseEnter() {
      this.isHovered = true
      this.translateY = -2
      this.scale = 1.02
    },
    handleMouseLeave() {
      this.isHovered = false
      this.translateY = 0
      this.scale = 1
    },
    handleMouseDown() {
      this.isPressed = true
      this.scale = 0.98
    },
    handleMouseUp() {
      this.isPressed = false
      this.scale = this.isHovered ? 1.02 : 1
    }
  }
}
</script>