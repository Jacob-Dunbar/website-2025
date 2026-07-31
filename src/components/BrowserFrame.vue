<script>
export default {
  props: {
    url: {
      type: String,
      default: "localhost:3000",
    },
  },
};
</script>

<template>
  <div class="overflow-hidden max-w-7xl rounded-xl border border-slate-200 bg-white shadow-lg">
    <div class="flex items-center gap-3 border-b border-slate-200 bg-main-dark px-4 py-3">
      <div class="flex gap-2">
        <div class="h-3 w-3 rounded-full bg-red-400"></div>
      </div>

      <div class="flex-1 rounded-md bg-main-light/30 px-3 py-1 text-xs text-main-light shadow-sm">
        {{ url }}
      </div>
    </div>

    <div class="w-full flex items-center justify-center">
      <slot></slot>
    </div>
  </div>
</template>
