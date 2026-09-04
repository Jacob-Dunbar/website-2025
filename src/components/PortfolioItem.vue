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
    to2: String,
    reverse: Boolean,
    journal: {
      type: Boolean,
      Default: false,
    },
    inProgress: {
      type: Boolean,
      Default: false,
    },
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

    <div class="md:w-1/3 flex flex-col items-start gap-6 md:gap-5">
      <h2 class="text-3xl font-bold text-main-dark">
        {{ title }}
      </h2>

      <span
        v-if="inProgress"
        class="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-gray-800 text-gray-100 align-middle ml-2"
      >
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-80 animate-ping"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-gray-100"></span>
        </span>

        In progress
      </span>

      <div class="flex flex-wrap gap-3 text-[10pt] font-semibold uppercase text-main-dark/40">
        <span class="border px-2 py-[2px] rounded-md" v-for="(tag, index) in tags" :key="tag">
          {{ tag }}
        </span>
      </div>

      <p class="text-main-dark/70">
        {{ description }}
      </p>

      <BaseButton v-if="journal" :to="to"> View Project Journal </BaseButton>

      <div v-else-if="tags.length > 1" class="flex flex-col gap-2">
        <BaseButton :to="to">{{ tags[0] }} case study </BaseButton>
        <BaseButton :to="to2">{{ tags[1] }} case study </BaseButton>
      </div>

      <BaseButton v-else :to="to"> View case study </BaseButton>
    </div>
  </div>
</template>
