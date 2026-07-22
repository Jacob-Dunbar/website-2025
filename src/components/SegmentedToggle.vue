<script>
export default {
  name: "SegmentedToggle",

  data() {
    return {
      selected: "",
      hasAnimated: false,
    };
  },

  props: {
    options: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    this.selected = this.options[0];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.animateHint();
          this.hasAnimated = true;
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(this.$el);

    this.observer = observer;
  },

  beforeUnmount() {
    this.observer?.disconnect();
  },

  methods: {
    animateHint() {
      setTimeout(() => {
        this.selected = this.options[1];
      }, 500);

      setTimeout(() => {
        this.selected = this.options[0];
      }, 1200);
    },
  },
};
</script>

<template>
  <div class="w-full flex flex-col gap-5 items-start">
    <div class="inline-flex rounded-full bg-main-dark/10 p-1">
      <div class="relative flex w-72">
        <div
          class="absolute inset-y-0 left-0 w-1/2 rounded-full bg-main-dark shadow transition-transform duration-300"
          :class="selected === options[0] ? 'translate-x-0' : 'translate-x-full'"
        ></div>

        <button
          class="relative z-10 flex-1 py-2 text-center text-sm font-medium transform-all duration-300 cursor-pointer"
          :class="selected === options[0] ? 'text-main-light' : 'text-main-dark'"
          @click="selected = options[0]"
        >
          {{ options[0] }}
        </button>

        <button
          class="relative z-10 flex-1 py-2 text-center text-sm font-medium transform-all duration-300 cursor-pointer"
          :class="selected === options[1] ? 'text-main-light' : 'text-main-dark'"
          @click="selected = options[1]"
        >
          {{ options[1] }}
        </button>
      </div>
    </div>

    <div class="bg-white p-6 border border-main-dark/30 text-main-dark/80 shadow-md rounded-xl w-full md:min-h-[600px]">
      <slot v-if="selected === options[0]" name="option0"></slot>
      <slot v-else name="option1"></slot>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
