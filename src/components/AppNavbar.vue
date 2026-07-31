<script>
import BaseButton from "./BaseButton.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
  name: "AppNavbar",
  data() {
    return {
      lastScrollY: 0,
      collapsed: false,
      darkLogo: false,
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
  watch: {
    $route() {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.setupObserver();
        });
      });
    },
  },
  mounted() {
    this.lastScrollY = window.scrollY;
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("click", this.handleClickOutside);
    document.addEventListener("keydown", this.handleKeydown);

    this.setupObserver();
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.handleClickOutside);
    document.removeEventListener("keydown", this.handleKeydown);
    this.observer.disconnect();
  },
  methods: {
    setupObserver() {
      const hero = document.getElementById("hero");

      if (!hero) {
        setTimeout(() => this.setupObserver(), 100);
        return;
      }

      this.observer = new IntersectionObserver(
        ([entry]) => {
          console.log("intersecting:", entry.isIntersecting);
          this.darkLogo = !entry.isIntersecting;
        },
        {
          threshold: 0,
          rootMargin: "-80px 0px 0px 0px",
        }
      );

      this.observer.observe(hero);
    },
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
      'fixed top-0 left-0 right-0 z-50 px-5 justify-center flex text-main-dark py-5 transition-all duration-300',
      expanded ? 'h-22' : 'h-10',
    ]"
  >
    <div class="absolute inset-0 backdrop-blur pointer-events-none"></div>
    <div
      class="flex flex-1 z-10 max-w-7xl items-center justify-between"
      :class="darkLogo ? 'text-main-dark' : 'text-main-light'"
    >
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
          class="mb-[2px] transition-all duration-600 ease-in-out"
          :class="[
            darkLogo ? 'bg-main-dark' : 'bg-main-light',
            expanded ? 'size-[8px] rotate-90 mb-[4px]' : 'size-[16px] mb-[10px]',
          ]"
        ></div>
      </router-link>

      <transition>
        <MobileMenu v-if="expanded" :darkLogo="darkLogo" class="md:hidden transition" />
      </transition>

      <transition>
        <nav ref="navbar" v-if="expanded" class="hidden md:flex items-center gap-4">
          <router-link
            to="/design"
            class="rounded-lg px-4 py-2 transition"
            :class="[darkLogo ? 'hover:bg-main-dark/20' : 'hover:bg-main-light/20']"
          >
            Design
          </router-link>

          <router-link
            to="/development"
            class="rounded-lg px-4 py-2 transition"
            :class="[darkLogo ? 'hover:bg-main-dark/20' : 'hover:bg-main-light/20']"
          >
            Development
          </router-link>

          <div class="relative" ref="contactMenu">
            <button
              @click="toggleContact"
              class="rounded-lg px-4 py-2 cursor-pointer transition relative"
              :class="[
                darkLogo ? 'hover:bg-main-dark/20' : 'hover:bg-main-light/20',
                contactOpen
                  ? darkLogo
                    ? 'bg-main-dark/20 !backdrop-blur'
                    : 'bg-main-light/20 !backdrop-blur'
                  : 'hover:bg-main-dark/20',
              ]"
            >
              Contact
            </button>

            <Transition name="blob">
              <div v-if="contactOpen" class="absolute left-1/2 top-full mt-4 -translate-x-1/2">
                <div
                  class="contact-popover rounded-lg bg-main-dark/20 backdrop-blur flex flex-col p-6 gap-4"
                  :class="[darkLogo ? 'bg-main-dark/20' : 'bg-main-light/20']"
                >
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

          <BaseButton
            :class="darkLogo ? '!bg-main-dark !text-main-light' : '!bg-main-light !text-main-dark'"
            :href="cv.href"
            :download="cv.filename"
            icon="download"
          >
            Download CV
          </BaseButton>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
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
