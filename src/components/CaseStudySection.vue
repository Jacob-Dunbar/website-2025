<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div
    class="flex min-w-0 w-full md:items-center gap-12 lg:gap-24 flex-col-reverse lg:flex-col"
    :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <div class="min-w-0 w-full lg:w-2/3">
      <slot name="media"></slot>
    </div>

    <div
      class="flex min-w-0 full flex-col text-main-dark gap-6 lg:w-1/3 [&>h3]:text-2xl [&>p]:text-main-dark/80 [&>ul]:flex [&>ul]:text-main-dark/70 [&>ul]:flex-col [&>ul]:ml-5 [&>ul]:gap-2 [&>ul]:text-sm [&>ul]:[&>li]:flex [&>ul]:[&>li]:gap-2 [&>ul]:[&>li]:items-center"
    >
      <slot></slot>
    </div>
  </div>
</template>
