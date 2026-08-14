<script>
import { TresCanvas } from "@tresjs/core";
import { Environment } from "@tresjs/cientos";

import SpinningCube from "./SpinningCube.vue";

export default {
  name: "PortfolioHero",
  components: {
    TresCanvas,
    SpinningCube,
    Environment,
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
  <section id="hero" class="w-full h-screen flex items-center justify-center relative overflow-hidden">
    <div
      class="bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_60%)] w-full max-w-7xl h-full relative"
    >
      <div
        class="w-full h-full mx-5 absolute top-0 left-0 flex flex-col md:flex-row z-20 pt-24 md:pt-0 justify-between"
      >
        <div class="text-main-light text-5xl md:text-6xl w-3/4 md:w-1/3 flex flex-col justify-center">
          <h2>{{ title }}</h2>
          <h2>Portfolio.</h2>
          <button v-if="title === 'UX/UI Design'" class="mr-auto hidden md:flex">
            <router-link
              to="/development"
              class="text-lg hover:bg-main-light/10 mt-5 text-main-light/50 rounded-md py-2 md:px-3"
            >
              See my development work
            </router-link>
          </button>

          <button v-else class="mr-auto">
            <router-link
              to="/design"
              class="text-lg hover:bg-main-light/10 mt-5 text-main-light/50 rounded-md py-2 md:px-3"
            >
              See my design work
            </router-link>
          </button>
        </div>

        <div
          class="text-main-light text-xl w-2/3 md:w-[28%] flex md:text-right flex-col pb-12 md:pb-0 justify-center items-end pr-5"
        >
          <slot></slot>
        </div>
        <font-awesome-icon
          @click="$emit('toFirst')"
          class="absolute right-10 md:left-1/2 bottom-14 -translate-x-1/2 !size-8 md:!size-6 text-main-light/50 cursor-pointer transition-all duration-300 ease-out hover:scale-125 hover:text-main-light/70"
          icon="arrow-down-long"
        />
      </div>

      <TresCanvas :alpha="true" :clear-alpha="0">
        <TresPerspectiveCamera :position="[0, 0, 5]" :look-at="[0, 0, 0]" />

        <Environment preset="studio" />
        <TresAmbientLight :intensity="0.1" />
        <TresDirectionalLight :position="[3, 5, 4]" :intensity="2" />

        <SpinningCube :design="title === 'UX/UI Design'" />
      </TresCanvas>
    </div>
  </section>
</template>
