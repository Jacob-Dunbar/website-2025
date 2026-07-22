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
  </div>
</template>
