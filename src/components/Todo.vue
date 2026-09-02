<script>
export default {
  name: "Todo",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<template>
  <div
    v-if="show"
    class="fixed z-[1000] top-0 left-0 max-w-[200px] opacity-75 bg-yellow-200 rounded-br-lg p-4 flex-col gap-2"
  >
    <h4>Todo</h4>
    <ul class="list-disc ml-5 text-xs">
      <li>case study hero section graphics</li>
      <li>styling system section graphic update</li>
      <li>tweak contact and mobile menu styling</li>
    </ul>
  </div>
</template>
