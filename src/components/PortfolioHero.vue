<script>
import AnimatedBackground from "./AnimatedBackground.vue";

export default {
  name: "PortfolioHero",
  components: {
    AnimatedBackground,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <section class="w-full bg-main-dark text-main-light flex md:h-[50vh] justify-center relative">
    <div class="mx-5 flex flex-col md:flex-row md:items-center max-w-7xl gap-12 py-12 z-0">
      <div class="md:w-3/5">
        <h2 class="text-5xl leading-16 md:leading-20 md:text-7xl">
          {{ title }}
        </h2>
      </div>

      <div class="md:w-2/5 text-lg font-light leading-relaxed flex flex-col gap-4">
        <slot></slot>
      </div>
    </div>

    <AnimatedBackground />
  </section>
</template>
