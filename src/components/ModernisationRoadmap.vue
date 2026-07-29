<script>
import RoadmapConnector from "./RoadmapConnector.vue";

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
};
</script>

<template>
  <div class="grid grid-cols-3 md:grid-cols-4 gap-y-5 max-w-7xl w-full">
    <div class="border border-main-dark/40 rounded-lg p-4 flex flex-col md:flex-row items-center gap-3">
      <img class="size-10 object-contain flex-shrink-0" src="../assets/stackLogos/vue.svg" alt="" />
      <h4>Vue 2</h4>
    </div>

    <RoadmapConnector :static="static"></RoadmapConnector>

    <div class="bg-main-dark text-main-light rounded-lg p-4 flex flex-col md:flex-row items-center gap-3">
      <img class="size-10 object-contain flex-shrink-0" src="../assets/stackLogos/vue.svg" alt="" />
      <h4>Vue 3</h4>
    </div>

    <div class="border border-main-dark/40 rounded-lg p-4 flex flex-col md:flex-row items-center gap-3">
      <img class="size-10 object-contain flex-shrink-0" src="../assets/stackLogos/bootstrap.svg" alt="" />
      <h4>Bootstrap</h4>
    </div>

    <RoadmapConnector :static="static"></RoadmapConnector>

    <div class="bg-main-dark text-main-light rounded-lg p-4 flex flex-col md:flex-row items-center gap-3">
      <img class="size-10 object-contain flex-shrink-0" src="../assets/stackLogos/tailwind.svg" alt="" />
      <h4>Tailwind</h4>
    </div>

    <div class="border border-main-dark/40 rounded-lg p-4 flex flex-col md:flex-row items-center gap-3">
      <img class="size-10 object-contain flex-shrink-0" src="../assets/stackLogos/vuex.svg" alt="" />
      <h4>Vuex</h4>
    </div>

    <RoadmapConnector :static="static"></RoadmapConnector>

    <div class="bg-main-dark text-main-light rounded-lg p-4 flex flex-col md:flex-row items-center gap-3">
      <img class="size-10 object-contain flex-shrink-0" src="../assets/stackLogos/pinia.svg" alt="" />
      <h4>Pinia</h4>
    </div>

    <div class="border border-main-dark/40 rounded-lg p-4 flex flex-col md:flex-row items-center gap-3">
      <img class="size-10 object-contain flex-shrink-0" src="../assets/stackLogos/jest.svg" alt="" />
      <h4>Jest</h4>
    </div>

    <RoadmapConnector :static="static"></RoadmapConnector>

    <div class="bg-main-dark text-main-light rounded-lg p-4 flex flex-col md:flex-row items-center gap-3">
      <img class="size-10 object-contain flex-shrink-0" src="../assets/stackLogos/vitest.svg" alt="" />
      <h4>Vitest</h4>
    </div>
  </div>
</template>
