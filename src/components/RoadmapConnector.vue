<script>
export default {
  name: "RoadmapConnector",
  data() {
    return {
      progress: this.static ? 50 : 0,
    };
  },
  props: {
    static: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (!this.static) {
      window.addEventListener("scroll", this.updateProgress);
      this.updateProgress();
    }
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.updateProgress);
  },
  methods: {
    updateProgress() {
      const rect = this.$el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 0.67;
      const end = viewportHeight * 0.06;

      const distance = start - end;
      const current = rect.top - end;

      this.progress = Math.min(100, Math.max(0, ((start - current) / distance) * 100));
    },
  },
};
</script>

<template>
  <div class="col-span-1 md:col-span-2 flex items-center relative">
    <div class="absolute h-[0px] inset-0 my-auto border-t-2 border-dashed border-main-dark/40"></div>

    <div
      class="absolute left-0 my-auto border-t-2 border-main-dark transition-[width] duration-100"
      :style="{ width: `${progress}%` }"
    >
      <font-awesome-icon icon="angles-right" class="text-lg absolute right-[-15px] -top-[10px]" />
    </div>
  </div>
</template>
