import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { templateCompilerOptions } from "@tresjs/core";

export default defineConfig({
  plugins: [...templateCompilerOptions, tailwindcss()],
});
