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

  mounted() {
    if (!this.static) {
      window.addEventListener("mousemove", this.handleMouseMove);
    }
  },

  beforeUnmount() {
    if (!this.static) {
      window.removeEventListener("mousemove", this.handleMouseMove);
    }
  },

  computed: {
    circles() {
      const count = Math.ceil(window.innerWidth / 125);

      return Array.from({ length: count }, () => ({
        duration: 6 + Math.random() * 6,
        delay: -Math.random() * 12,
        distance: 150 + Math.random() * 100,

        left: 10 + Math.random() * 80,
        top: 10 + Math.random() * 80,
      }));
    },
  },

  methods: {
    handleMouseMove(e) {
      this.$refs.blobs.forEach((blob) => {
        const rect = blob.getBoundingClientRect();

        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = cx - e.clientX;
        const dy = cy - e.clientY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDistance = 250;

        if (distance < maxDistance) {
          const strength = Math.pow(1 - distance / maxDistance, 1.5) * 80;
          const angle = Math.atan2(dy, dx);

          const offsetX = Math.cos(angle) * strength;
          const offsetY = Math.sin(angle) * strength;

          blob.style.setProperty("--mouseX", `${offsetX}px`);
          blob.style.setProperty("--mouseY", `${offsetY}px`);
        } else {
          blob.style.setProperty("--mouseX", "0px");
          blob.style.setProperty("--mouseY", "0px");
        }
      });
    },
  },
};
</script>

<template>
  <div class="absolute inset-0 flex overflow-hidden">
    <div v-for="(circle, index) in circles" :key="index" class="animated-background relative blur-xs overflow-hidden">
      <div
        class="blob-wrapper"
        :class="{ static }"
        :style="{
          '--duration': `${circle.duration}s`,
          '--delay': `${circle.delay}s`,
          '--distance': `${circle.distance}px`,
          left: static ? `${circle.left}%` : null,
          top: static ? `${circle.top}%` : null,
        }"
      >
        <div ref="blobs" class="blob bg-main-light rounded-full blur-3xl"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blob-wrapper {
  width: 100%;

  animation: float var(--duration) ease-in-out infinite alternate;
  animation-delay: var(--delay);
}

.blob-wrapper.static {
  position: absolute;
  width: 120%;
  aspect-ratio: 1;
  opacity: 0.5;

  transform: translate(-50%, -50%);
  animation: none;
}

.blob {
  width: 100%;
  aspect-ratio: 1;

  opacity: 0.25;

  transform: translate(var(--mouseX, 0px), var(--mouseY, 0px));

  transition: transform 0.35s ease, opacity 0.4s ease;
}

.animated-background {
  width: 125px;
  flex-shrink: 0;
}

.animated-background:hover .blob {
  opacity: 0.3;
}

.animated-background:hover .blob:not(.static) {
  opacity: 0.22;
}

@keyframes float {
  from {
    transform: translate3d(-20px, calc(var(--distance) * -1), 0);
  }

  to {
    transform: translate3d(20px, var(--distance), 0);
  }
}
</style>
