<script>
export default {
  name: "PhoneFrame",
};
</script>

<template>
  <div class="relative w-2/3 mx-auto max-w-[300px] p-2 bg-black border-4 border-gray-700 rounded-[2rem] shadow-xl">
    <div class="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full z-10"></div>

    <div class="absolute -left-[6px] top-20 w-[3px] h-8 bg-gray-700 rounded-l"></div>

    <div class="absolute -left-[6px] top-32 w-[3px] h-12 bg-gray-700 rounded-l"></div>

    <div class="absolute -right-[6px] top-24 w-[3px] h-16 bg-gray-700 rounded-r"></div>

    <div class="overflow-hidden rounded-[1.5rem]">
      <slot></slot>
    </div>
  </div>
</template>
