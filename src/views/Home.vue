<script>
import PortfolioHero from "../components/PortfolioHero.vue";
import PortfolioItem from "../components/PortfolioItem.vue";
import PageDivider from "../components/PageDivider.vue";
import ModernisationRoadmap from "../components/ModernisationRoadmap.vue";
import ScrollNavigator from "../components/ScrollNavigator.vue";
import WorkoutVideo from "../assets/workoutApp/workout1.mp4";
import PhoneFrame from "../components/PhoneFrame.vue";
import PhoneFrameVue from "../components/PhoneFrame.vue";

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
    PhoneFrame,
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
        journal
        inProgress
        id="workout"
        title="Gamified Workout App"
        description="An ongoing self-directed project exploring how gamification can make fitness more engaging and rewarding. 
        A journal documenting the ideas, experiments, design and development behind the app as it takes shape."
        :tags="['Front-End Development', 'UX/UI Design']"
        to="/workout-app"
      >
        <div class="flex flex-col md:flex-row-reverse gap-10 items-center">
          <PhoneFrame>
            <div class="relative min-h-[597px] bg-gray-900">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
              </div>

              <video
                preload="metadata"
                :src="WorkoutVideo"
                autoplay
                loop
                muted
                playsinline
                class="relative z-10 block w-full h-full object-contain"
              ></video>
            </div>
          </PhoneFrame>
          <div class="hidden md:flex flex-col items-center">
            <div class="relative flex gap-12 my-10">
              <img loading="lazy" src="../assets/workoutApp/character.png" alt="" class="relative size-[200px] -mx-8" />
              <img
                loading="lazy"
                src="../assets/workoutApp/character2.png"
                alt=""
                class="relative -mx-8 w-[200px] h-auto"
              />
            </div>
            <div class="relative flex gap-12 my-10">
              <img
                loading="lazy"
                src="../assets/workoutApp/character3.png"
                alt=""
                class="relative -mx-8 w-[200px] h-auto"
              />
              <img
                loading="lazy"
                src="../assets/workoutApp/character4.png"
                alt=""
                class="relative -mx-8 w-[200px] h-auto"
              />
            </div>
          </div>
        </div>
      </PortfolioItem>

      <PageDivider class="my-2 md:my-16" />

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

      <PageDivider class="my-2 md:my-16" />

      <PortfolioItem
        id="modernisation"
        title="Frontend Modernisation Project"
        description="Modernised a legacy Vue application by upgrading the frontend stack, improving maintainability, and creating a more scalable foundation for future development."
        :tags="['Front-End Development']"
        to="/frontend-modernisation"
      >
        <ModernisationRoadmap />
      </PortfolioItem>

      <PageDivider class="my-2 md:my-16" />

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

      <PageDivider class="my-2 md:my-16" />

      <PortfolioItem
        id="search"
        title="Intelligent Search Experience"
        description="Redesigned search and filtering to improve discoverability and reduce friction when browsing services."
        :tags="['UX/UI Design']"
        to="/search-experience"
      >
        <img class="w-full" loading="lazy" src="../assets/search_ui.svg" />
      </PortfolioItem>

      <PageDivider class="my-2 md:my-16" />

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
