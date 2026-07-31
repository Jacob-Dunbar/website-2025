<script>
import RoadmapConnector from "./RoadmapConnector.vue";
import vueLogo from "../assets/stackLogos/vue.svg";
import bootstrapLogo from "../assets/stackLogos/bootstrap.svg";
import tailwindLogo from "../assets/stackLogos/tailwind.svg";
import vuexLogo from "../assets/stackLogos/vuex.svg";
import piniaLogo from "../assets/stackLogos/pinia.svg";
import jestLogo from "../assets/stackLogos/jest.svg";
import vitestLogo from "../assets/stackLogos/vitest.svg";

export default {
  name: "ModernisationRoadmap",
  props: {
    static: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    RoadmapConnector,
  },
  data() {
    return {
      stack: [
        {
          name: "Vue 2",
          image: vueLogo,
          after: false,
        },
        {
          name: "Vue 3",
          image: vueLogo,
          after: true,
        },
        {
          name: "Bootstrap",
          image: bootstrapLogo,
          after: false,
        },
        {
          name: "Tailwind",
          image: tailwindLogo,
          after: true,
        },
        {
          name: "Vuex",
          image: vuexLogo,
          after: false,
        },
        {
          name: "Pinia",
          image: piniaLogo,
          after: true,
        },
        {
          name: "Jest",
          image: jestLogo,
          after: false,
        },
        {
          name: "Vitest",
          image: vitestLogo,
          after: true,
        },
      ],
    };
  },
  methods: {
    onCompleteChange(complete, index) {
      this.stack[index + 1].complete = complete;
    },
  },
};
</script>

<template>
  <div
    class="grid grid-cols-3 md:grid-cols-4 gap-y-5 max-w-7xl w-full rounded-3xl bg-main-dark text-main-light [&_div]:border-main-light/30 p-6 xl:p-12"
  >
    <template v-for="(tech, index) in stack" :key="tech.name">
      <div
        class="rounded-lg text-center md:text-left p-4 z-10 flex flex-col md:flex-row transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] items-center border gap-4"
        :class="[
          tech.after ? 'border border-main-light/40 bg-gray-900 ' : '!bg-main-dark',
          tech.complete && ' scale-110 !border-sky-800 !bg-gray-800',
        ]"
      >
        <img :src="tech.image" :alt="tech.name" class="size-10 object-contain flex-shrink-0 grayscale" />

        <h4 class="text-lg">{{ tech.name }}.</h4>
      </div>

      <RoadmapConnector
        @complete-change="(complete) => onCompleteChange(complete, index)"
        v-if="index < stack.length - 1 && [0, 2, 4, 6].includes(index)"
        :static="static"
      />
    </template>
  </div>
</template>
