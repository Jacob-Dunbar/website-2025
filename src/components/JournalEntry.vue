<script>
import PageDivider from "./PageDivider.vue";

export default {
  name: "JournalEntry",
  components: {
    PageDivider,
  },
  props: {
    title: {
      type: String,
      default: "Journal Entry",
    },
    date: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    visual: {
      type: Boolean,
      default: false,
    },
    number: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<template>
  <article class="max-w-7xl mx-5 md:mx-20 flex flex-col gap-12 md:gap-28">
    <!-- Entry header + content -->
    <div class="flex flex-col gap-10 md:gap-5 items-start lg:flex-row text-gray-800">
      <!-- Header -->
      <div class="lg:w-1/2 flex flex-col items-start gap-4">
        <div class="flex items-center gap-3 text-sm text-main-dark/50">
          <span>Journal entry {{ number < 10 && 0 }}{{ number }}</span>

          <span v-if="date">→</span>

          <time v-if="date">{{ date }}</time>
        </div>

        <div class="flex items-end gap-3">
          <h1 class="text-5xl md:text-6xl">
            {{ title }}
          </h1>
        </div>

        <span
          v-if="status"
          class="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-black text-gray-100"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-white opacity-80 animate-ping"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
          </span>

          {{ status }}
        </span>
      </div>

      <!-- Content -->
      <div
        class="lg:w-1/2 flex flex-col mt-10 items-start gap-7 md:gap-5 [&>p]:text-main-dark/80 [&>ul]:flex [&>ul]:text-main-dark/70 [&>ul]:flex-col [&>ul]:ml-5 [&>ul]:gap-2 [&>ul]:text-sm [&>ul]:[&>li]:flex [&>ul]:[&>li]:gap-2 [&>ul]:[&>li]:items-center"
      >
        <slot></slot>
      </div>
    </div>

    <!-- Visual content -->
    <div v-if="visual" class="*:w-full [&_h2]:text-gray-700 [&_h3]:text-gray-600">
      <slot name="visual"></slot>
    </div>
  </article>
</template>
