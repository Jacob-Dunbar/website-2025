<script>
export default {
  name: "CaseStudyContainer",
};
</script>

<template>
  <div class="max-w-7xl min-w-0 !mx-5 flex flex-col gap-12 md:gap-28">
    <div class="max-w-full">
      <h1 class="text-5xl md:text-6xl inline">
        Project Highlights
        <span class="inline-block bg-main-dark size-[9px] ml-3"></span>
      </h1>
    </div>
    <slot></slot>
  </div>
</template>
