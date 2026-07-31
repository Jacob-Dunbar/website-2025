<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "PortfolioItem",
  components: {
    BaseButton,
  },
  props: {
    title: String,
    description: String,
    tags: {
      type: Array,
      default: () => [],
    },
    to: String,
    reverse: Boolean,
  },
};
</script>

<template>
  <div
    :class="['flex w-full md:items-center gap-10 lg:gap-22 flex-col', reverse ? 'md:flex-row-reverse' : 'md:flex-row']"
  >
    <div class="md:w-2/3">
      <slot> </slot>
    </div>

    <div class="md:w-1/3 flex flex-col gap-6 md:gap-5">
      <h2 class="text-3xl font-bold text-main-dark">
        {{ title }}
      </h2>

      <div class="flex flex-wrap gap-3 text-[10pt] font-semibold uppercase text-main-dark/40">
        <span class="border px-2 py-[2px] rounded-md" v-for="(tag, index) in tags" :key="tag">
          {{ tag }}
        </span>
      </div>

      <p class="text-main-dark/70">
        {{ description }}
      </p>

      <BaseButton :to="to"> View case study </BaseButton>
    </div>
  </div>
</template>
