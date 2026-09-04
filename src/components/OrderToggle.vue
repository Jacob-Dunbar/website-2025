<script>
export default {
  name: "OrderToggle",

  props: {
    reversed: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:reversed"],

  methods: {
    setOrder(value) {
      this.$emit("update:reversed", value);
    },
  },
};
</script>

<template>
  <div class="inline-flex rounded-full bg-main-dark/10 p-1">
    <div class="relative flex w-72">
      <div
        class="absolute inset-y-0 left-0 w-1/2 rounded-full bg-main-dark shadow transition-transform duration-300"
        :class="reversed ? 'translate-x-full' : 'translate-x-0'"
      ></div>

      <button
        class="relative z-10 flex-1 py-2 text-center text-sm font-medium transition-colors duration-300 cursor-pointer"
        :class="!reversed ? 'text-main-light' : 'text-main-dark'"
        @click="setOrder(false)"
      >
        Chronological
      </button>

      <button
        class="relative z-10 flex-1 py-2 text-center text-sm font-medium transition-colors duration-300 cursor-pointer"
        :class="reversed ? 'text-main-light' : 'text-main-dark'"
        @click="setOrder(true)"
      >
        Reverse
      </button>
    </div>
  </div>
</template>
