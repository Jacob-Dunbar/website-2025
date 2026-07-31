<script>
import BaseButton from "./BaseButton.vue";
import PageDivider from "./PageDivider.vue";

export default {
  name: "MobileMenu",

  data() {
    return {
      menuOpen: false,
      email: "jacob.dunbar@googlemail.com",
      emailCopied: false,
    };
  },
  props: {
    darkLogo: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BaseButton,
    PageDivider,
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
    document.addEventListener("keydown", this.handleKeydown);
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
    document.removeEventListener("keydown", this.handleKeydown);
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    closeMenu() {
      this.menuOpen = false;
    },

    handleClickOutside(event) {
      if (this.menuOpen && !this.$refs.menu.contains(event.target)) {
        this.closeMenu();
      }
    },

    handleKeydown(event) {
      if (event.key === "Escape") {
        this.closeMenu();
      }
    },

    handleScroll() {
      this.closeMenu();
    },

    copyEmail() {
      navigator.clipboard.writeText(this.email);

      this.emailCopied = true;

      setTimeout(() => {
        this.emailCopied = false;
      }, 1500);
    },
  },
  watch: {
    $route() {
      this.closeMenu();
    },
  },
  computed: {
    isDevelopment() {
      return this.$route.path.includes("/development");
    },
    cv() {
      return this.isDevelopment
        ? {
            href: "/Jacob-Dunbar-Dev-CV.pdf",
            filename: "Jacob-Dunbar-Dev-CV.pdf",
          }
        : {
            href: "/Jacob-Dunbar-Design-CV.pdf",
            filename: "Jacob-Dunbar-Design-CV.pdf",
          };
    },
  },
};
</script>

<template>
  <div class="relative" ref="menu">
    <button @click="toggleMenu" class="rounded-lg cursor-pointer transition hover:bg-main-dark/20">
      <font-awesome-icon size="lg" icon="bars" />
    </button>

    <Transition name="blob">
      <div
        v-if="menuOpen"
        class="absolute -top-3 -right-2 rounded-2xl pt-3 pb-6 px-2 flex flex-col backdrop-blur-md shadow-xl"
        :class="darkLogo ? 'bg-main-dark/20' : 'bg-main-light/20'"
      >
        <div class="flex justify-end">
          <button @click="closeMenu" class="rounded-lg p-2 hover:bg-main-dark/10 transition">
            <font-awesome-icon size="lg" icon="xmark" />
          </button>
        </div>

        <div class="px-4 pt-2 flex flex-col gap-3">
          <router-link
            to="/design"
            class="flex cursor-pointer w-full items-center rounded-lg gap-2 px-6 py-4 bg-main-dark/20 hover:bg-main-dark/15"
          >
            Design Portfolio
            <font-awesome-icon icon="arrow-right-long" />
          </router-link>

          <router-link
            to="/development"
            class="flex cursor-pointer w-full items-center rounded-lg gap-2 px-6 py-4 bg-main-dark/20 hover:bg-main-dark/15"
          >
            Development Portfolio
            <font-awesome-icon icon="arrow-right-long" />
          </router-link>

          <PageDivider class="my-2 opacity-50" />

          <BaseButton :href="cv.href" :download="cv.filename" icon="download"> Download CV </BaseButton>

          <PageDivider class="my-2 opacity-50" />

          <button
            @click="copyEmail"
            class="flex cursor-pointer w-full items-center rounded-lg gap-2 px-6 py-4 bg-main-dark/20 hover:bg-main-dark/15 active:bg-main-dark/20"
          >
            jacob.dunbar@googlemail.com
            <font-awesome-icon :icon="emailCopied ? 'check' : 'copy'" />
          </button>

          <div class="flex gap-2">
            <a
              href="https://linkedin.com/in/jacob--dunbar"
              target="_blank"
              class="flex items-center gap-3 px-6 py-4 bg-main-dark text-main-light rounded-lg flex-1 justify-center hover:bg-main-dark/80"
            >
              LinkedIn
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>

            <a
              href="https://github.com/Jacob-Dunbar"
              target="_blank"
              class="flex items-center gap-3 px-6 py-4 bg-main-dark text-main-light rounded-lg flex-1 justify-center hover:bg-main-dark/80"
            >
              GitHub
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.blob-enter-active,
.blob-leave-active {
  transition: transform 0.4s cubic-bezier(0.34, 1.4, 0.64, 1), opacity 0.2s ease;
  transform-origin: top right;
}

.blob-enter-from,
.blob-leave-to {
  opacity: 0;
  transform: scale(0.2);
}

.blob-enter-to,
.blob-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
