<script>
import AppNavbar from "./components/AppNavbar.vue";
import Todo from "./components/Todo.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Todo,
    AppNavbar,
    Footer,
  },
};
</script>

<template>
  <div class="min-h-screen flex flex-col !bg-main-dark">
    <Todo />
    <AppNavbar />
    <main class="flex-1 flex flex-col min-h-0 pt-22">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
