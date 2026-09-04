import { createHighlighter } from "shiki";

let highlighter = null;

export async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-dark"],
      langs: ["vue", "vue-html", "javascript", "typescript", "tsx", "html", "css", "bash", "json"],
    });
  }

  return highlighter;
}
