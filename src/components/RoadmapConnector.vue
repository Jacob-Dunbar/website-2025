<script>
export default {
  name: "RoadmapConnector",
  data() {
    return {
      progress: this.static ? 50 : 0,
      complete: false,
    };
  },
  props: {
    static: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["complete-change"],
  watch: {
    progress(newValue) {
      const complete = newValue >= 100;

      if (complete !== this.complete) {
        this.complete = complete;
        this.$emit("complete-change", complete);
      }
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

      const start = viewportHeight * 0.6;
      const end = viewportHeight * 0.2;

      const distance = start - end;
      const current = rect.top - end;

      this.progress = Math.min(130, Math.max(0, ((start - current) / distance) * 100));
    },
  },
};
</script>

<template>
  <div class="col-span-1 md:col-span-2 flex items-center overflow-visible relative">
    <div class="absolute h-[0px] inset-0 my-auto border-t-1 border-dashed overflow-visible border-main-dark/40"></div>

    <div
      class="absolute flex items-end left-0 my-auto transition-[width] overflow-visible -ml-5 duration-100 opacity-60"
      :style="{ width: `${progress}%` }"
    >
      <div class="ml-auto overflow-visible">
        <div
          class="h-[2px] w-4 rounded-full bg-sky-400"
          style="
            box-shadow: 0 0 8px 2px rgb(56 189 248), 0 0 16px 6px rgb(56 189 248 / 0.2),
              0 0 32px 12px rgb(56 189 248 / 0.2);
          "
        ></div>
      </div>
    </div>
  </div>
</template>
