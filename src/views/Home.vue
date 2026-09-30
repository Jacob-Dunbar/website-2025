<script>
import PortfolioHero from "../components/PortfolioHero.vue";
import PortfolioItem from "../components/PortfolioItem.vue";
import PageDivider from "../components/PageDivider.vue";
import ModernisationRoadmap from "../components/ModernisationRoadmap.vue";
import ScrollNavigator from "../components/ScrollNavigator.vue";
import PhoneFrame from "../components/PhoneFrame.vue";
import PhoneFrameVue from "../components/PhoneFrame.vue";
import BaseButton from "../components/BaseButton.vue";
import BrowserFrame from "../components/BrowserFrame.vue";
import cvVideo from "../assets/3dcv/3dcv.mp4";

export default {
  data() {
    return {
      cvVideo,
    };
  },
  components: {
    PortfolioHero,
    PortfolioItem,
    PageDivider,
    ModernisationRoadmap,
    ScrollNavigator,
    PhoneFrame,
    BaseButton,
    BrowserFrame,
  },
  props: {
    darkLogo: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <ScrollNavigator
    ref="scrollNavigator"
    :darkLogo="darkLogo"
    :sections="[
      { id: 'hero', label: 'Home' },
      { id: 'workout', label: 'Workout App' },
      { id: 'tillson', label: 'Milly Tillson Portfolio' },
      { id: 'messaging', label: 'Real-Time Messaging' },
      { id: 'modernisation', label: 'Frontend Modernisation' },
      { id: 'dashboard', label: 'Customisable Dashboard' },
      { id: '3dexperience', label: '3D CV Experience' },
      { id: 'search', label: 'Search Experience' },
    ]"
  />
  <PortfolioHero @toFirst="$refs.scrollNavigator.scrollTo('messaging')" title="Frontend Development & UX/UI Design">
    <h2>
      I build <span>scalable</span> frontend experiences with both <span>performance</span> and <span>vibe</span>.
    </h2>
  </PortfolioHero>

  <div class="flex w-full flex-col items-center bg-main-light">
    <div class="max-w-7xl mx-5 py-18 flex flex-col gap-16 md:gap-22">
      <PortfolioItem
        journal
        reverse
        inProgress
        id="workout"
        title="Workout App — Design & Development"
        description="An ongoing self-directed project exploring interaction design, visual systems and front-end development through a gamified fitness experience. A journal documenting the design process, interaction experiments and implementation as the app takes shape."
        :tags="['Figma', 'React Native', 'Zustand', 'TypeScript', 'AI Assisted Development']"
        to="/workout-app"
      >
        <div class="flex flex-col md:flex-row gap-8 md:gap-6 items-center justify-center">
          <PhoneFrame>
            <img src="../assets/workoutApp/home_Screen.png" alt="Squeeze home screen" class="block w-full h-auto" />
          </PhoneFrame>

          <PhoneFrame>
            <img
              src="../assets/workoutApp/details_Screen.png"
              alt="Squeeze exercise details screen"
              class="block w-full h-auto"
            />
          </PhoneFrame>

          <PhoneFrame>
            <img
              src="../assets/workoutApp/new_workout_screen.png"
              alt="Squeeze new workout screen"
              class="block w-full h-auto"
            />
          </PhoneFrame>
        </div>

        <template #extra-button>
          <BaseButton
            class="!bg-main-dark !text-main-light"
            href="https://squeeze.expo.app"
            icon="arrow-up-right-from-square"
          >
            View WIP App Online
          </BaseButton>

          <p class="text-sm opacity-60">Best viewed on mobile · Feedback welcome</p>
        </template>
      </PortfolioItem>

      <PageDivider class="my-2 md:my-16" />

      <PortfolioItem
        journal
        id="tillson"
        title="Milly Tillson — Portfolio Site"
        description="A Portfolio site I designed and built for a fashion photographer, translating a visual design into a responsive production experience. Integrated with Contentful CMS so the client could manage portfolio content without touching the code."
        :tags="['Next.js', 'Contentful CMS', 'Styled Components']"
      >
        <BrowserFrame url="https://www.millytillson.com/">
          <img loading="lazy" class="w-full" src="../assets/tillson.png" alt="Milly Tillson portfolio website" />
        </BrowserFrame>

        <template #extra-button>
          <BaseButton
            class="!bg-main-dark !text-main-light"
            href="https://www.millytillson.com/"
            icon="arrow-up-right-from-square"
          >
            View Live Site
          </BaseButton>
        </template>
      </PortfolioItem>

      <PageDivider class="my-2 md:my-16" />

      <PortfolioItem
        reverse
        id="messaging"
        title="Real-Time Messaging System"
        description="Built a real-time messaging experience with live updates, reusable components, and enhanced workflows including translation and contextual messaging."
        :tags="['Vue.js', 'AWS AppSync', 'Pinia', 'Tailwind CSS']"
        to="/messaging-system"
      >
        <img loading="lazy" class="w-full" src="../assets/messaging_ui.svg" />
      </PortfolioItem>

      <PageDivider class="my-2 md:my-16" />

      <PortfolioItem
        id="modernisation"
        title="Frontend Modernisation Project"
        description="Modernised a legacy Vue application by upgrading the frontend stack, improving maintainability, and creating a more scalable foundation for future development."
        :tags="['Pinia', 'Vitest', 'Vue 3', 'Tailwind CSS', 'PrimeVue']"
        to="/frontend-modernisation"
      >
        <ModernisationRoadmap />
      </PortfolioItem>

      <PageDivider class="my-2 md:my-16" />

      <PortfolioItem
        reverse
        id="dashboard"
        title="Customisable Dashboard Experience"
        description="Built a modular dashboard system allowing users to personalise their workspace through configurable widgets, responsive layouts, and scalable component architecture."
        :tags="['Figma', 'Rest APIs', 'Pinia']"
        to="/dev-dashboard"
        to2="/dev-dashboard"
      >
        <img loading="lazy" class="w-full" src="../assets/dashboard_ui.png" />
      </PortfolioItem>

      <PageDivider class="my-2 md:my-16" />

      <PortfolioItem
        id="3dexperience"
        title="3D CV Experience"
        description="An interactive 3D CV built with React Three Fiber, featuring a custom jungle environment, atmospheric lighting, interactive objects, and animated characters."
        :tags="['React', 'Three.js', 'React Three Fiber']"
        to="/3d-experience"
      >
        <BrowserFrame url="https://jacob-dunbar-3d-cv.netlify.app/">
          <video
            preload="metadata"
            :src="cvVideo"
            autoplay
            loop
            muted
            playsinline
            class="block w-full h-full object-contain"
          ></video>
        </BrowserFrame>
        <template #extra-button>
          <BaseButton
            class="!bg-main-dark !text-main-light"
            href="https://jacob-dunbar-3d-cv.netlify.app/"
            icon="arrow-up-right-from-square"
          >
            Visit Live Experience
          </BaseButton>
        </template>
      </PortfolioItem>

      <PageDivider class="my-2 md:my-16" />

      <PortfolioItem
        id="search"
        reverse
        title="Intelligent Search Experience"
        description="Redesigned search and filtering to improve discoverability and reduce friction when browsing services."
        :tags="['Figma', 'Vue.js', 'TypeScript', 'Algolia']"
        to="/search-experience"
      >
        <img class="w-full" loading="lazy" src="../assets/search_ui.svg" />
      </PortfolioItem>

      <!-- <PageDivider class="my-2 md:my-16" />

      <PortfolioItem
        id="description"
        title="AI Description Assistant"
        description="Designed an AI-powered writing assistant that helped sellers create clearer, higher-quality service descriptions with minimal effort."
        :tags="['UX/UI Design']"
        to="/description-assistant"
      >
        <img class="w-full" loading="lazy" src="../assets/ai_ui.svg" />
      </PortfolioItem> -->
    </div>
  </div>
</template>
