<script>
export default {
  name: "CaseStudyContainer",
};
</script>

<template>
  <div class="max-w-7xl min-w-0 !mx-5 flex flex-col gap-12 md:gap-28">
    <div class="lg:w-1/2 flex justify-start items-end gap-3">
      <h1 class="text-5xl md:text-6xl w-min md:w-auto">Project Highlights</h1>
      <div class="bg-main-dark mb-[3px] size-[9px]"></div>
    </div>
    <slot></slot>
  </div>
</template>
