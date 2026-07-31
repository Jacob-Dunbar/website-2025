<script>
export default {
  name: "AnimatedBackground",

  data() {
    return {};
  },

  props: {
    static: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    circles() {
      const count = Math.ceil(window.innerWidth / 190);

      return Array.from({ length: count }, () => ({
        duration: 8 + Math.random() * 12,
        delay: -Math.random() * 12,
        distance: 300 + Math.random() * 100,
        opacity: 0.4 + Math.random() * 0.6,
        show: Math.random() > (window.innerWidth > 500 ? 0.7 : 0.3),
        static: this.static ? true : Math.random() > 0.7,
        top: 10 + Math.random() * 80,
      }));
    },
  },
};
</script>

<template>
  <div class="absolute inset-0 flex flex-col overflow-hidden -gap-2">
    <div class="flex flex-1 overflow-hidden">
      <div
        v-for="(circle, index) in circles"
        :key="index"
        class="animated-background blur-xs relative overflow-hidden opacity-60"
        :class="circle.static ? 'opacity-40' : 'opacity-70'"
      >
        <div
          ref="blobs"
          v-if="circle.show"
          class="blob bg-[#3b88b2] rounded-full blur-3xl w-full"
          :class="circle.static && 'static'"
          :style="{
            '--duration': `${circle.duration}s`,
            '--delay': `${circle.delay}s`,
            '--distance': `${circle.distance}px`,
            opacity: `${circle.opacity}`,
            top: circle.static ? `${circle.top}%` : null,
          }"
        >
          <div v-if="[1, 2, 4, 5, 6, 9].includes(index)" class="w-full h-1/2 bg-green-600 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>

    <div class="flex flex-1 flex-row-reverse overflow-hidden">
      <div
        v-for="(circle, index) in circles"
        :key="index"
        class="animated-background blur-xs relative overflow-hidden opacity-60"
        :class="static ? 'opacity-40' : 'opacity-70'"
      >
        <div
          ref="blobs"
          v-if="circle.show"
          class="blob bg-[#3b88b2] rounded-full blur-3xl w-full"
          :class="{ static }"
          :style="{
            '--duration': `${circle.duration}s`,
            '--delay': `${circle.delay}s`,
            '--distance': `${circle.distance}px`,
            opacity: `${circle.opacity}`,
            top: static ? `${circle.top}%` : null,
          }"
        >
          <div v-if="[1, 4, 5, 6, 9].includes(index)" class="w-full h-1/2 bg-green-600 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blob {
  width: 100%;
  aspect-ratio: 1/3;
  will-change: transform;

  animation: float var(--duration) ease-in-out infinite alternate;
  animation-delay: var(--delay);
}

.blob.static {
  animation: none;
}

.animated-background {
  width: 190px;
  flex-shrink: 0;
}

@keyframes float {
  from {
    transform: translate3d(0px, calc(var(--distance) * -1), 0);
  }

  to {
    transform: translate3d(0px, var(--distance), 0);
  }
}
</style>
