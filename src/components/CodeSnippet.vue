<script>
import { getHighlighter } from "../utils/shiki.js";

export default {
  props: {
    filename: String,
    code: String,
    lang: {
      type: String,
      default: "vue",
    },
    theme: {
      type: String,
      default: "github-dark",
    },
  },
  data() {
    return {
      highlightedCode: "",
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return;

        await this.highlightCode();

        this.observer.disconnect();
        this.observer = null;
      },
      {
        rootMargin: "200px",
      }
    );

    this.observer.observe(this.$el);
  },
  beforeUnmount() {
    this.observer?.disconnect();
  },
  methods: {
    async highlightCode() {
      const highlighter = await getHighlighter();

      this.highlightedCode = highlighter.codeToHtml(this.code, {
        lang: this.lang,
        theme: this.theme,
      });
    },
  },
};
</script>

<template>
  <div class="w-full min-w-0 max-w-full rounded-xl border border-slate-700 bg-slate-900 shadow-lg flex flex-col">
    <div class="flex min-w-0 items-center gap-2 border-b border-slate-700 px-4 py-3">
      <font-awesome-icon class="text-slate-400" icon="code" />

      <div class="ml-3 flex min-w-0 items-center gap-3">
        <span class="min-w-0 truncate text-xs font-medium tracking-wide text-slate-300">
          {{ filename }}
        </span>

        <span class="shrink-0 rounded-md bg-slate-700 px-2 py-0.5 text-[10px] uppercase tracking-wider text-slate-400">
          {{ lang }}
        </span>
      </div>
    </div>

    <div v-if="highlightedCode" class="w-full min-w-0 max-w-full overflow-hidden">
      <div class="w-full min-w-0 overflow-x-auto p-6 text-sm leading-7" v-html="highlightedCode"></div>
    </div>

    <div v-else class="animate-pulse p-6">
      <div class="mb-3 h-3 w-4/5 rounded bg-slate-700"></div>
      <div class="mb-3 h-3 w-3/5 rounded bg-slate-700"></div>
      <div class="mb-3 h-3 w-5/6 rounded bg-slate-700"></div>
      <div class="h-3 w-2/5 rounded bg-slate-700"></div>
    </div>
  </div>
</template>

<style scoped>
:deep(pre) {
  width: 100px !important;
}

:deep(code) {
  display: block;
}
</style>
