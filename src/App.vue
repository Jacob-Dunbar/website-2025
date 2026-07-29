<script>
import AppNavbar from "./components/AppNavbar.vue";
import Todo from "./components/Todo.vue";

export default {
  components: {
    Todo,
    AppNavbar,
  },
};
</script>

<template>
  <div class="fixed inset-0 -z-10 bg-[#f0eee6]"></div>

  <div class="min-h-screen flex flex-col">
    <Todo />
    <AppNavbar />
    <main class="flex-1 flex flex-col min-h-0 pt-22">
      <router-view />
    </main>
    <div
      class="w-full py-6 text-main-dark/80 mt-20 flex justify-center items-center border-t border-main-dark/30 text-sm"
    >
      Designed & built by Jacob Dunbar © 2026
    </div>
  </div>
</template>
