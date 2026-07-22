<script>
export default {
  name: "PortfolioHero",

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <section class="w-full bg-main-dark text-main-light flex justify-center">
    <div class="mx-5 flex flex-col md:flex-row md:items-center max-w-7xl gap-12 py-12 md:py-18">
      <div class="md:w-3/5">
        <h2 class="text-7xl">
          {{ title }}
        </h2>
      </div>

      <div class="md:w-2/5 text-lg leading-relaxed">
        <slot></slot>
      </div>
    </div>
  </section>
</template>
