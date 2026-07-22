<script>
import RoadmapConnector from "./RoadmapConnector.vue";

export default {
  name: "ModernisationRoadmap",
  components: {
    RoadmapConnector,
  },
};
</script>

<template>
  <div class="grid grid-cols-[1fr_1rem_1fr] md:grid-cols-4 mx-auto">
    <div class="border border-main-dark/40 rounded-t-lg p-4 flex items-center gap-3">
      <img class="size-10 object-contain flex-shrink-0" src="../assets/stackLogos/bootstrap.svg" alt="" />
      <h4>Bootstrap</h4>
    </div>

    <RoadmapConnector></RoadmapConnector>

    <div class="bg-main-dark text-main-light rounded-t-lg p-4 flex items-center gap-3">
      <img class="size-10 object-contain flex-shrink-0" src="../assets/stackLogos/tailwind.svg" alt="" />
      <h4>Tailwind</h4>
    </div>

    <div class="border border-main-dark/40 bg-main-dark/10 border-t-0 rounded-b-lg p-4 flex items-center gap-3">
      <ul class="text-main-dark/80 text-sm list-disc ml-5">
        <li>Layout Structure</li>
        <li>Spacing System</li>
        <li>Responsive Design</li>
        <li>Visual Styling</li>
      </ul>
    </div>

    <div class="col-span-1 md:col-span-2"></div>

    <div class="border border-main-dark/40 bg-main-dark/10 border-t-0 rounded-b-lg p-4 flex items-center gap-3">
      <ul class="text-main-dark/80 text-sm list-disc ml-5">
        <li>Layout Structure</li>
        <li>Spacing System</li>
        <li>Responsive Design</li>
        <li>Visual Styling</li>
      </ul>
    </div>

    <div class="col-span-2 md:col-span-3"></div>

    <div class="relative h-18 w-1/2 border-r-2 border-dashed border-main-dark/40">
      <font-awesome-icon
        icon="plus"
        class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#cbcac4] p-[5px] text-sm"
      />
    </div>

    <div class="col-span-2 md:col-span-3"></div>

    <div class="bg-main-dark text-main-light rounded-t-lg p-4 flex items-center gap-3">
      <img class="size-10 object-contain flex-shrink-0" src="../assets/stackLogos/primevue.svg" alt="" />
      <h4>PrimeVue</h4>
    </div>

    <div class="col-span-2 md:col-span-3"></div>

    <div class="border border-main-dark/40 bg-main-dark/10 border-t-0 rounded-b-lg p-4 flex items-center gap-3">
      <ul class="text-main-dark/80 text-sm list-disc ml-5">
        <li>Layout Structure</li>
        <li>Spacing System</li>
        <li>Responsive Design</li>
        <li>Visual Styling</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
