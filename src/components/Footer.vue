<script>
export default {
  components: {},
  data() {
    return {
      expanded: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkScroll, { passive: true });
    this.checkScroll();
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.checkScroll);
  },

  methods: {
    checkScroll() {
      const scrollBottom = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      this.expanded = scrollBottom >= pageHeight - 10;
    },
  },
};
</script>

<template>
  <div class="flex items-end bg-main-dark text-main-light/80 justify-center py-10 md:py-20 md:mt-10">
    <div
      :class="[
        'overflow-hidden whitespace-nowrap transition-all duration-900 ease-in-out',
        expanded ? 'w-[160px] md:w-[395px]' : 'w-[0px]',
      ]"
    >
      <h1 class="text-2xl md:text-[60px] leading-none">Jacob Dunbar</h1>
    </div>
    <div
      class="bg-main-light/80 mb-[2px]"
      :class="[
        ' bg-main-dark transition-all duration-600 ease-in-out',
        expanded ? 'size-[6px] md:size-[12px] rotate-90 md:mb-[4px]' : 'size-[20px] md:size-[60px] mb-[10px]',
      ]"
    ></div>
  </div>
</template>
