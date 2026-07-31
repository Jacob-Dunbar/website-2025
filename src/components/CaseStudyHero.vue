<script>
import AnimatedBackground from "./AnimatedBackground.vue";

export default {
  components: {
    AnimatedBackground,
  },
  props: {
    title: String,
    roles: Array,
    tools: Array,
    timeline: String,
  },

  computed: {
    summaryHeading() {
      return "uppercase text-xs tracking-widest text-gray-400";
    },
  },
};
</script>

<template>
  <div id="hero" class="bg-main-dark text-main-light w-full min-h-[70vh] flex justify-center relative">
    <div class="max-w-7xl mx-5 flex flex-col gap-18 py-12 z-10 md:py-22 md:items-center md:flex-row">
      <div class="lg:w-1/2">
        <h2 class="text-5xl md:text-7xl">
          {{ title }}
        </h2>
      </div>

      <div class="lg:w-1/2 flex flex-col gap-5">
        <slot></slot>

        <div class="flex flex-col gap-2">
          <h3 :class="summaryHeading">Role</h3>

          <ul class="flex gap-3 text-sm md:text-base font-medium">
            <li v-for="(role, index) in roles" :key="role" class="flex gap-3">
              {{ role }}
              <span v-if="index < roles.length - 1"> • </span>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-2 items-start">
          <h3 :class="summaryHeading">Tools</h3>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tool in tools"
              :key="tool"
              class="px-2 py-1 rounded-md bg-main-light/80 text-main-dark text-sm font-bold"
            >
              {{ tool }}
            </span>
          </div>
        </div>

        <div class="flex flex-col gap-2 items-start">
          <h3 :class="summaryHeading">Timeline</h3>

          <p class="text-sm md:text-base font-medium">
            {{ timeline }}
          </p>
        </div>
      </div>
    </div>

    <AnimatedBackground static />
  </div>
</template>
