<script>
export default {
  name: "ImageCompare",

  props: {
    before: {
      type: String,
      required: true,
    },
    after: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      position: 20,
      targetPosition: 20,
      isDragging: false,
      containerRect: null,
      hasAnimated: false,
    };
  },

  mounted() {
    window.addEventListener("resize", this.updateRect);
    this.updateRect();
    this.createObserver();
    this.animate();
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updateRect);
  },

  computed: {
    beforeOpacity() {
      return 0.7 + (this.position / 100) * 0.2;
    },

    afterOpacity() {
      return 0.7 + ((100 - this.position) / 100) * 0.2;
    },

    beforeBlur() {
      return ((60 - this.position) / 50) * 8;
    },

    afterBlur() {
      return ((this.position - 40) / 50) * 8;
    },
  },

  methods: {
    updateRect() {
      if (this.$refs.container) {
        this.containerRect = this.$refs.container.getBoundingClientRect();
      }
    },

    createObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.playIntroAnimation();
          }
        },
        {
          threshold: 0.4,
        }
      );

      observer.observe(this.$refs.container);
    },

    playIntroAnimation() {
      const timeline = [
        { pos: 90, delay: 400 },
        { pos: 25, delay: 1200 },
      ];

      timeline.forEach((step) => {
        setTimeout(() => {
          this.targetPosition = step.pos;
        }, step.delay);
      });
    },

    animate() {
      this.position += (this.targetPosition - this.position) * 0.1;
      requestAnimationFrame(this.animate);
    },

    startDrag(e) {
      this.isDragging = true;
      this.updateRect();
      this.onDrag(e);
    },

    stopDrag() {
      this.isDragging = false;
    },

    onDrag(e) {
      if (!this.isDragging || !this.containerRect) return;

      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      if (!clientX) return;

      let percent = ((clientX - this.containerRect.left) / this.containerRect.width) * 100;

      if (percent < 0) percent = 0;
      if (percent > 100) percent = 100;

      this.targetPosition = percent;
    },
  },
};
</script>

<template>
  <div class="mx-5 max-w-7xl">
    <div
      ref="container"
      class="relative w-full overflow-hidden rounded-xl border bg-white border-main-dark/30 shadow-xl select-none cursor-ew-resize"
      @pointerdown="startDrag"
      @pointermove="onDrag"
      @pointerup="stopDrag"
      @pointercancel="stopDrag"
      @pointerleave="stopDrag"
    >
      <div class="absolute z-10 top-4 right-4 px-3 py-1 rounded-full bg-main-dark/20 backdrop-blur text-sm font-medium">
        After
      </div>
      <img
        :src="after"
        class="block w-full max-w-none"
        draggable="false"
        :style="{
          opacity: afterOpacity,
          filter: `blur(${afterBlur}px)`,
        }"
      />

      <div class="absolute inset-0 z-20 overflow-hidden">
        <div class="absolute inset-0 bg-white" :style="{ clipPath: `inset(0 ${100 - position}% 0 0)` }">
          <div
            class="absolute z-10 top-4 left-4 px-3 py-1 rounded-full bg-main-dark/20 backdrop-blur text-sm font-medium"
          >
            Before
          </div>
          <img
            :src="before"
            class="absolute inset-0 w-full h-full object-cover"
            :style="{
              opacity: beforeOpacity,
              filter: `blur(${beforeBlur}px)`,
            }"
            draggable="false"
          />
        </div>
      </div>

      <div class="absolute z-30 top-0 h-full w-[4px] bg-white shadow-lg" :style="{ left: position + '%' }">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-main-dark shadow-lg flex items-center justify-center text-main-light border-2 border-white"
        >
          <font-awesome-icon size="sm" icon="left-right" />
        </div>
      </div>
    </div>

    <p class="text-center text-xs text-gray-400 mt-2">Drag or swipe to compare</p>
  </div>
</template>
