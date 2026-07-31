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
  <section id="hero" class="w-full bg-main-dark text-main-light flex h-[70vh] justify-center relative">
    <div class="mx-5 flex flex-col md:items-start justify-center max-w-7xl w-full] gap-22 py-12 z-10 relative">
      <h2 class="absolute top-2 left-0 md:text-xl uppercase opacity-55">{{ title }}</h2>

      <div
        class="md:w-full text-4xl px-5 md:text-7xl text-center text-main-light/80 flex flex-col gap-8 mb-10 [&_span]:italic [&_span]:text-sky-700 [&_span]:font-semibold"
      >
        <slot></slot>
      </div>
    </div>

    <AnimatedBackground />
  </section>
</template>
