<script>
export default {
  data() {
    return {};
  },
  props: {
    darkLogo: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="flex-1 min-h-0 h-full flex flex-col">
    <router-view :darkLogo="darkLogo" />
  </div>
</template>
