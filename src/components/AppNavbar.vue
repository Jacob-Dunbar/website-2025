<script>
import BaseButton from "./BaseButton.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
  name: "AppNavbar",
  data() {
    return {
      lastScrollY: 0,
      collapsed: false,
      hovering: false,
      contactOpen: false,
      email: "jacob.dunbar@googlemail.com",
      emailCopied: false,
    };
  },
  components: {
    BaseButton,
    MobileMenu,
  },
  mounted() {
    this.lastScrollY = window.scrollY;
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("click", this.handleClickOutside);
    document.addEventListener("keydown", this.handleKeydown);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.handleClickOutside);
    document.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    handleScroll() {
      this.contactOpen = false;

      const current = window.scrollY;

      if (current < 30) {
        this.collapsed = false;
      } else if (current > this.lastScrollY + 5) {
        this.collapsed = true;
      } else if (current < this.lastScrollY - 5) {
        this.collapsed = false;
      }

      this.lastScrollY = current;
    },
    toggleContact() {
      this.contactOpen = !this.contactOpen;
    },
    handleClickOutside(event) {
      if (this.contactOpen && !this.$refs.contactMenu.contains(event.target)) {
        this.contactOpen = false;
      }
    },
    handleKeydown(event) {
      if (event.key === "Escape") {
        this.contactOpen = false;
      }
    },
    copyEmail() {
      navigator.clipboard.writeText(this.email);

      this.emailCopied = true;

      setTimeout(() => {
        this.emailCopied = false;
      }, 1500);
    },
  },
  computed: {
    expanded() {
      return !this.collapsed || this.hovering;
    },
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
  <header
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    :class="[
      'fixed top-0 left-0 right-0 z-50 px-5 border-b justify-center border-main-dark/30 flex bg-main-light/60 text-main-dark py-5 backdrop-blur transition-all duration-300',
      expanded ? 'h-22' : 'h-10',
    ]"
  >
    <div class="flex flex-1 max-w-7xl items-center justify-between text-main-dark">
      <router-link to="/" class="flex gap-1 items-end">
        <div
          :class="[
            'overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out',
            expanded ? 'w-[222px]' : 'w-[0px]',
          ]"
        >
          <h1 class="text-4xl leading-none">Jacob Dunbar</h1>
        </div>
        <div
          class="bg-main-dark mb-[2px]"
          :class="[
            ' bg-main-dark transition-all duration-600 ease-in-out',
            expanded ? 'size-[8px] rotate-90 mb-[4px]' : 'size-[16px] mb-[10px]',
          ]"
        ></div>
      </router-link>

      <transition>
        <MobileMenu v-if="expanded" class="md:hidden transition" />
      </transition>

      <transition>
        <nav ref="navbar" v-if="expanded" class="hidden md:flex items-center gap-4">
          <router-link to="/design" class="rounded-lg px-4 py-2 transition hover:bg-main-dark/30"> Design </router-link>

          <router-link to="/development" class="rounded-lg px-4 py-2 transition hover:bg-main-dark/30">
            Development
          </router-link>

          <div class="relative" ref="contactMenu">
            <button
              @click="toggleContact"
              class="rounded-lg px-4 py-2 cursor-pointer transition relative"
              :class="contactOpen ? 'bg-[#b6b6b4]' : 'hover:bg-main-dark/30'"
            >
              Contact
              <div class="absolute top-full -mt-2 left-0 w-full">
                <div
                  class="extension h-6 bg-[#b6b6b4] rounded-b-lg"
                  :class="contactOpen ? 'extension-open' : 'extension-closed'"
                >
                  <div class="corner-blob left absolute right-full top-0 size-4 bg-main-light">
                    <div
                      class="absolute inset-0 bg-[#b6b6b4] [mask-image:radial-gradient(circle_at_0_0,transparent_70%,black_71%)]"
                    ></div>
                  </div>

                  <div class="corner-blob right absolute left-full top-0 size-4 bg-main-light">
                    <div
                      class="absolute inset-0 bg-[#b6b6b4] [mask-image:radial-gradient(circle_at_100%_0,transparent_70%,black_71%)]"
                    ></div>
                  </div>
                </div>
              </div>
            </button>

            <Transition name="blob">
              <div v-if="contactOpen" class="absolute left-1/2 top-full mt-2 -translate-x-1/2">
                <div class="contact-popover rounded-xl bg-[#b6b6b4] shadow- flex flex-col p-6 gap-4">
                  <button
                    @click="copyEmail"
                    class="flex cursor-pointer w-full items-center rounded-lg gap-3 px-8 py-3 bg-main-dark/10 hover:bg-main-dark/15 active:bg-main-dark/20"
                  >
                    jacob.dunbar@googlemail.com
                    <font-awesome-icon :icon="emailCopied ? 'check' : 'copy'" />
                  </button>

                  <div class="flex gap-3">
                    <a
                      href="https://linkedin.com/in/jacob--dunbar"
                      target="_blank"
                      class="flex items-center gap-3 px-4 py-3 bg-main-dark text-main-light rounded-lg flex-1 justify-center hover:bg-main-dark/80"
                    >
                      <font-awesome-icon :icon="['fab', 'linkedin']" />
                      LinkedIn
                    </a>

                    <a
                      href="https://github.com/Jacob-Dunbar"
                      target="_blank"
                      class="flex items-center gap-3 px-4 py-3 bg-main-dark text-main-light rounded-lg flex-1 justify-center hover:bg-main-dark/80"
                    >
                      <font-awesome-icon :icon="['fab', 'github']" />

                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <BaseButton :href="cv.href" :download="cv.filename" icon="download"> Download CV </BaseButton>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.extension {
  transition: height 0.2s ease, opacity 0.2s ease;
  overflow: visible;
}

.extension-closed {
  height: 0;
  opacity: 0;
}

.extension-open {
  height: 24px;
  opacity: 1;
}

.corner-blob.right {
  transition: transform 0.2s ease, opacity 0.2s ease;
  transform-origin: left;
}

.corner-blob.left {
  transition: transform 0.2s ease, opacity 0.2s ease;
  transform-origin: right;
}

.extension-closed .corner-blob {
  opacity: 0;
  transform: scale(0);
}

.extension-open .corner-blob {
  opacity: 1;
  transform: scale(1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.blob-enter-active,
.blob-leave-active {
  transition: transform 0.4s cubic-bezier(0.34, 1.4, 0.64, 1), opacity 0.2s ease;
  transform-origin: top center;
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
