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
  data() {
    return {
      darkLogo: false,
    };
  },
};
</script>

<template>
  <div class="min-h-screen flex flex-col !bg-main-dark">
    <Todo />
    <AppNavbar @update-dark-logo="darkLogo = $event" />
    <main class="flex-1 flex flex-col min-h-0">
      <router-view :darkLogo="darkLogo" />
    </main>
    <Footer />
  </div>
</template>
