<script>
import PageDivider from "./PageDivider.vue";

export default {
  name: "ChallengeSection",
  components: {
    PageDivider,
  },
  props: {
    title: {
      type: String,
      default: "The Challenge",
    },
    visual: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="max-w-7xl mx-5 md:mx-20 flex flex-col gap-12 md:gap-28">
    <div class="flex flex-col gap-10 md:gap-5 items-start lg:flex-row text-gray-800">
      <div class="lg:w-1/2 flex justify-start items-end gap-3">
        <h1 class="text-5xl md:text-6xl">
          {{ title }}
        </h1>
        <div class="bg-main-dark mb-[3px] size-[9px]"></div>
      </div>

      <div
        class="lg:w-1/2 flex flex-col items-start gap-7 md:gap-5 [&>p]:text-main-dark/80 [&>ul]:flex [&>ul]:text-main-dark/70 [&>ul]:flex-col [&>ul]:ml-5 [&>ul]:gap-2 [&>ul]:text-sm [&>ul]:[&>li]:flex [&>ul]:[&>li]:gap-2 [&>ul]:[&>li]:items-center"
      >
        <slot></slot>
      </div>
    </div>

    <div v-if="visual" class="*:w-full">
      <slot name="visual"></slot>
    </div>

    <PageDivider />
  </div>
</template>
