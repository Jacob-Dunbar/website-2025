<script>
export default {
  name: "ScrollNavigator",
  props: {
    sections: {
      type: Array,
      required: true,
    },
    darkLogo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hovered: false,
      activeSection: null,
      observer: null,
    };
  },
  mounted() {
    this.setupObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    setupObserver() {
      const options = {
        threshold: 0,
        rootMargin: "-120px 0px -70% 0px",
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, options);

      this.sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element) {
          this.observer.observe(element);
        }
      });
    },
    scrollTo(id) {
      const element = document.getElementById(id);

      if (element) {
        const navbarOffset = 100;

        const position = element.getBoundingClientRect().top + window.scrollY - navbarOffset;

        window.scrollTo({
          top: position,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<template>
  <div
    class="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 rounded-md p-4"
    :class="[darkLogo ? 'hover:bg-main-light' : 'hover:bg-main-dark']"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div class="flex items-center gap-4">
      <Transition name="fade">
        <div v-if="hovered" class="flex flex-col items-end gap-3">
          <button
            v-for="section in sections"
            :key="section.id"
            @click="scrollTo(section.id)"
            class="text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition cursor-pointer"
            :class="[
              darkLogo ? 'text-main-dark' : 'text-main-light',
              activeSection === section.id ? '!opacity-100' : 'opacity-60',
            ]"
          >
            {{ section.label }}
          </button>
        </div>
      </Transition>

      <Transition name="fade">
        <div class="flex flex-col transition-all duration-300 ease-out" :class="hovered ? 'gap-[26px]' : 'gap-3'">
          <button
            v-for="section in sections"
            :key="section.id"
            @click="scrollTo(section.id)"
            class="groupflex justify-end cursor-pointer"
          >
            <span
              class="block h-[2px] w-4 transition-all duration-300"
              :class="[darkLogo ? 'bg-main-dark' : 'bg-main-light', activeSection === section.id ? '' : 'opacity-40']"
            ></span>
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
