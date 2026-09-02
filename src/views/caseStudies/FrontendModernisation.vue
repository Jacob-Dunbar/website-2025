<script>
import CaseStudySection from "../../components/CaseStudySection.vue";
import PageDivider from "../../components/PageDivider.vue";
import ChallengeSection from "../../components/ChallengeSection.vue";
import CaseStudyHero from "../../components/CaseStudyHero.vue";
import ModernisationRoadmap from "../../components/ModernisationRoadmap.vue";
import CaseStudyContainer from "../../components/CaseStudyContainer.vue";
import CodeSnippet from "../../components/CodeSnippet.vue";
import StylingSystemGraphic from "../../components/StylingSystemGraphic.vue";
import ScrollNavigator from "../../components/ScrollNavigator.vue";

export default {
  props: {
    darkLogo: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CaseStudyHero,
    CaseStudySection,
    PageDivider,
    ChallengeSection,
    CaseStudyContainer,
    ModernisationRoadmap,
    CodeSnippet,
    StylingSystemGraphic,
    ScrollNavigator,
  },
};
</script>

<template>
  <ScrollNavigator
    ref="scrollNavigator"
    :darkLogo="darkLogo"
    :sections="[
      { id: 'fm_hero', label: 'home' },
      { id: 'fm_challenge', label: 'The Challenge' },
      { id: 'vue3', label: 'Vue 3 Migration' },
      { id: 'styling', label: 'Styling System' },
      { id: 'state', label: 'State Managment' },
      { id: 'testing', label: 'Unit Testing' },
    ]"
  />
  <div class="flex flex-col w-full items-center gap-10 md:gap-28 pb-26 bg-main-light">
    <CaseStudyHero
      @toFirst="$refs.scrollNavigator.scrollTo('fm_challenge')"
      id="fm_hero"
      title="Frontend Modernisation Project"
      :roles="['Frontend Developer', 'UX/UI Designer']"
      :tools="['Vue 3', 'Tailwind', 'Typescript', 'Pinia', 'Vitest']"
      timeline="~1 year"
    >
      <p>
        The platform had evolved over several years, resulting in a frontend built on older technologies that were
        becoming increasingly difficult to maintain and extend.
      </p>
      <p>
        This modernisation project focused on upgrading the application's core architecture, introducing modern tooling
        and frontend practices to improve maintainability, developer experience, and support future feature development.
      </p>
    </CaseStudyHero>

    <ModernisationRoadmap class="px-5" />

    <PageDivider />

    <ChallengeSection id="fm_challenge">
      <p>
        The platform had grown significantly over several years, but parts of the frontend stack were becoming
        increasingly difficult to maintain. The application was built on Vue 2, Bootstrap, Vuex, and legacy tooling,
        creating friction when introducing new features and improving the developer experience.
      </p>

      <p>
        The goal was to modernise the frontend incrementally while keeping the platform stable for thousands of users
        across 140+ countries.
      </p>

      <ul>
        <li>
          <font-awesome-icon icon="circle-check" /> Migrate Vue 2 → Vue 3 without disrupting existing functionality
        </li>
        <li>
          <font-awesome-icon icon="circle-check" /> Replace Bootstrap with a more flexible Tailwind-based design system
        </li>
        <li><font-awesome-icon icon="circle-check" /> Introduce modern state management with Pinia</li>
        <li><font-awesome-icon icon="circle-check" /> Improve testing reliability and developer workflow</li>
      </ul>
    </ChallengeSection>

    <CaseStudyContainer>
      <CaseStudySection id="vue3">
        <template #media>
          <div class="relative">
            <div class="md:overflow-x-scroll flex flex-col md:flex-row gap-4 md:px-10 pb-5">
              <CodeSnippet
                class="md:w-[45%] md:flex-shrink-0"
                filename="Lifecycle Hooks"
                lang="javascript"
                :code="`// Vue 2
beforeDestroy() {
  this.unsubscribe()
}

// Vue 3
beforeUnmount() {
  this.unsubscribe()
}

`"
              />
              <CodeSnippet
                class="md:w-[45%] md:flex-shrink-0"
                filename="Application Initialisation"
                lang="javascript"
                :code="`// Vue 2
Vue.use(router)

new Vue({router})

// Vue 3
createApp(App)
.use(router)
.mount(
  '#app'
)

`"
              />
              <CodeSnippet
                class="md:w-[45%] md:flex-shrink-0"
                filename="Component Slots"
                lang="vue-html"
                :code="`<!-- Vue 2 -->
<template slot='header'>
  Example
</template>

<!-- Vue 3 -->
<template #header>
  Example
</template>

`"
              />
              <CodeSnippet
                class="md:w-[45%] md:flex-shrink-0"
                filename="Event Handling"
                lang="javascript"
                :code="`// Vue 2
EventBus.$emit(
  'updated'
)

// Vue 3
emitter.emit(
  'updated'
)

`"
              />
            </div>

            <div
              class="pointer-events-none hidden md:block absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-main-light to-transparent"
            ></div>

            <div
              class="pointer-events-none hidden md:block absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-main-light to-transparent"
            ></div>
          </div>
        </template>

        <h3>1. Vue 2 → Vue 3 Migration</h3>

        <p>
          The frontend was migrated from Vue 2 to Vue 3 to modernise the codebase while maintaining feature parity
          across the platform.
        </p>
        <p>
          The migration involved updating hundreds of components, replacing deprecated APIs, and resolving compatibility
          issues, creating a more maintainable foundation for future development.
        </p>

        <ul>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="layer-group" />
            Entire frontend application migrated
          </li>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="puzzle-piece" />
            100+ Components updated
          </li>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="sitemap" />
            Application structure updated
          </li>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="code-branch" />
            Legacy dependencies replaced
          </li>
        </ul>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="styling" reverse>
        <template #media>
          <StylingSystemGraphic />
        </template>

        <h3>2. Styling System Modernisation</h3>

        <p>
          The platform previously relied on Bootstrap for both styling utilities and UI components. As the application
          grew, this made it harder to maintain consistent patterns and customise the interface.
        </p>

        <p>
          The frontend was migrated to Tailwind CSS and PrimeVue, creating a more flexible styling system with reusable
          components that could be adapted to the needs of the platform.
        </p>

        <ul>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="wand-magic-sparkles" />
            Bootstrap utilities replaced
          </li>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="boxes-stacked" />
            Reusable component system introduced
          </li>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="sliders" />
            Custom styling layer created
          </li>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="arrow-trend-up" />
            Improved maintainability
          </li>
        </ul>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="state">
        <template #media>
          <div class="flex flex-col md:flex-row gap-5">
            <CodeSnippet
              class=""
              filename="Vuex State Managment"
              lang="javascript"
              :code="`export default {
  methods: {
    async loadUser() {
      await this.$store.dispatch(
        'fetchUser'
      )

      const user = this.$store.state.user

      this.$store.commit('SET_USER', {
          ...user,
          online: true
        }
      )
    }
  }
}

`"
            />
            <CodeSnippet
              class=""
              filename="Pinia State Managment"
              lang="javascript"
              :code="`import { useUserStore } from '@/stores/user'

export default {
  methods: {
    async loadUser() {
      const userStore = useUserStore()

      await userStore.fetchUser()

      userStore.user.online = true
    }
  }
}

`"
            />
          </div>
        </template>

        <h3>3. State Management Upgrade</h3>

        <p>
          The application previously used Vuex to manage shared application state across different areas of the
          platform.
        </p>

        <p>
          As part of the Vue 3 migration, state management was moved to Pinia, providing a simpler and more maintainable
          approach with less boilerplate and better integration with the Vue 3 ecosystem.
        </p>

        <ul>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="layer-group" />
            Store structure simplified
          </li>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="code-branch" />
            Native Vue 3 integration
          </li>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="cubes" />
            Modular store architecture
          </li>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="bolt" />
            Improved developer experience
          </li>
        </ul>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="testing" reverse>
        <template #media>
          <div class="flex gap-5">
            <CodeSnippet
              class="w-full"
              filename="Vuex State Managment"
              lang="bash"
              :code="`$ npm run test

RUN v3.2.4

✓ MessageItem.spec.ts
✓ Dashboard.spec.ts
✓ Search.spec.ts
✓ UserMenu.spec.ts

────────────────────────────────

Test Files 18 passed
Tests      146 passed
Duration   2.08s

Powered by Vitest ⚡

`"
            />
          </div>
        </template>

        <h3>4. Testing Workflow</h3>

        <p>
          The application's test suite was migrated from Jest to Vitest as part of the modernisation effort. Built
          specifically for Vite, Vitest provided a faster and more streamlined testing experience while maintaining a
          familiar API.
        </p>

        <p>
          The migration reduced feedback times during development, making it quicker to write, run and maintain frontend
          unit tests without requiring significant changes to existing test files.
        </p>

        <ul>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="bolt" />
            Faster test execution
          </li>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="rotate" />
            Minimal migration effort
          </li>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="code" />
            Improved developer workflow
          </li>
          <li>
            <font-awesome-icon class="bg-main-dark/20 p-[5px] rounded-full text-xs" icon="check-double" />
            Existing coverage preserved
          </li>
        </ul>
      </CaseStudySection>
    </CaseStudyContainer>
  </div>
</template>
