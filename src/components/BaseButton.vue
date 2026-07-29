<script>
export default {
  name: "BaseButton",

  props: {
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    download: {
      type: [Boolean, String],
      default: false,
    },
    icon: {
      type: String,
      default: "arrow-right-long",
    },
  },
};
</script>

<template>
  <router-link
    v-if="to"
    :to="to"
    class="flex items-center whitespace-nowrap gap-2 rounded-lg bg-main-dark px-6 py-4 md:px-4 md:py-2 text-main-light transition hover:bg-main-dark/80"
  >
    <slot></slot>
    <font-awesome-icon :icon="icon" />
  </router-link>

  <a
    v-else-if="href"
    :href="href"
    :download="download === true ? '' : download || null"
    class="flex items-center whitespace-nowrap gap-2 rounded-lg bg-main-dark px-6 py-4 md:px-4 md:py-2 text-main-light transition hover:bg-main-dark/80"
  >
    <slot></slot>
    <font-awesome-icon :icon="icon" />
  </a>
</template>
