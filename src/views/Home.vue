<script>
import PortfolioHero from "../components/PortfolioHero.vue";
import PortfolioItem from "../components/PortfolioItem.vue";
import PageDivider from "../components/PageDivider.vue";
import ModernisationRoadmap from "../components/ModernisationRoadmap.vue";
import ScrollNavigator from "../components/ScrollNavigator.vue";
import WorkoutVideo from "../assets/workoutApp/workout1.mp4";

export default {
  data() {
    return {
      WorkoutVideo,
    };
  },
  components: {
    PortfolioHero,
    PortfolioItem,
    PageDivider,
    ModernisationRoadmap,
    ScrollNavigator,
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
      { id: 'messaging', label: 'Real-Time Messaging' },
      { id: 'modernisation', label: 'Frontend Modernisation' },
      { id: 'dashboard', label: 'Customisable Dashboard' },
      { id: 'search', label: 'Search Experience' },
      { id: 'description', label: 'Description Assistant' },
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
        id="workout"
        title="Workout App"
        description="A self direct project from research throough design all the way to development and deployment of a new kind of gamified gym companion app."
        :tags="['Front-End Development', 'UX/UI Design']"
        to="/workout-app"
      >
        <div class="flex flex-col md:flex-row-reverse gap-10 items-center">
          <div class="relative mx-auto max-w-[300px] p-2 bg-black border-4 border-gray-700 rounded-[2rem] shadow-xl">
            <div class="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full z-10"></div>

            <div class="absolute -left-[6px] top-20 w-[3px] h-8 bg-gray-700 rounded-l"></div>
            <div class="absolute -left-[6px] top-32 w-[3px] h-12 bg-gray-700 rounded-l"></div>
            <div class="absolute -right-[6px] top-24 w-[3px] h-16 bg-gray-700 rounded-r"></div>

            <video
              preload="metadata"
              :src="WorkoutVideo"
              autoplay
              loop
              muted
              playsinline
              class="w-full rounded-[1.5rem]"
            ></video>
          </div>
          <div class="hidden md:flex flex-col items-center">
            <div class="relative flex gap-12 my-10">
              <img loading="lazy" src="../assets/workoutApp/Character.png" alt="" class="relative size-[200px] -mx-8" />
              <img
                loading="lazy"
                src="../assets/workoutApp/Character2.png"
                alt=""
                class="relative -mx-8 w-[200px] h-auto"
              />
            </div>
            <div class="relative flex gap-12 my-10">
              <img
                loading="lazy"
                src="../assets/workoutApp/Character3.png"
                alt=""
                class="relative -mx-8 w-[200px] h-auto"
              />
              <img
                loading="lazy"
                src="../assets/workoutApp/Character4.png"
                alt=""
                class="relative -mx-8 w-[200px] h-auto"
              />
            </div>
          </div>
        </div>
      </PortfolioItem>

      <PageDivider />

      <PortfolioItem
        id="messaging"
        reverse
        title="Real-Time Messaging System"
        description="Built a real-time messaging experience with live updates, reusable components, and enhanced workflows including translation and contextual messaging."
        :tags="['Front-End Development']"
        to="/messaging-system"
      >
        <img loading="lazy" class="w-full" src="../assets/messaging_ui.svg" />
      </PortfolioItem>

      <PageDivider />

      <PortfolioItem
        id="modernisation"
        title="Frontend Modernisation Project"
        description="Modernised a legacy Vue application by upgrading the frontend stack, improving maintainability, and creating a more scalable foundation for future development."
        :tags="['Front-End Development']"
        to="/frontend-modernisation"
      >
        <ModernisationRoadmap />
      </PortfolioItem>

      <PageDivider />

      <PortfolioItem
        id="dashboard"
        reverse
        title="Customisable Dashboard Experience"
        description="Built a modular dashboard system allowing users to personalise their workspace through configurable widgets, responsive layouts, and scalable component architecture."
        :tags="['Front-End Development', 'UX/UI Design']"
        to="/dev-dashboard"
        to2="/dev-dashboard"
      >
        <img loading="lazy" class="w-full" src="../assets/dashboard_ui.png" />
      </PortfolioItem>

      <PageDivider />

      <PortfolioItem
        id="search"
        title="Intelligent Search Experience"
        description="Redesigned search and filtering to improve discoverability and reduce friction when browsing services."
        :tags="['UX/UI Design']"
        to="/search-experience"
      >
        <img class="w-full" loading="lazy" src="../assets/search_ui.svg" />
      </PortfolioItem>

      <PageDivider />

      <PortfolioItem
        id="description"
        reverse
        title="AI Description Assistant"
        description="Designed an AI-powered writing assistant that helped sellers create clearer, higher-quality service descriptions with minimal effort."
        :tags="['UX/UI Design']"
        to="/description-assistant"
      >
        <img class="w-full" loading="lazy" src="../assets/ai_ui.svg" />
      </PortfolioItem>
    </div>
  </div>
</template>
