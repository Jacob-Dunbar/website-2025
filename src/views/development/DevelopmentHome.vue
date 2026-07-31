<script>
import PortfolioHero from "../../components/PortfolioHero.vue";
import PortfolioItem from "../../components/PortfolioItem.vue";
import PageDivider from "../../components/PageDivider.vue";
import ModernisationRoadmap from "../../components/ModernisationRoadmap.vue";

export default {
  components: {
    PortfolioHero,
    PortfolioItem,
    PageDivider,
    ModernisationRoadmap,
  },
};
</script>

<template>
  <PortfolioHero title="Frontend Development Portfolio">
    <h2>
      I build <span>scalable</span> frontend experiences with both <span>performance</span> and <span>vibe</span>.
    </h2>
  </PortfolioHero>

  <div class="flex w-full flex-col items-center bg-main-light">
    <div class="max-w-7xl mx-5 py-18 flex flex-col gap-16 md:gap-22">
      <PortfolioItem
        reverse
        title="Real-Time Messaging System"
        description="Built a real-time messaging experience with live updates, reusable components, and enhanced workflows including translation and contextual messaging."
        :tags="['Vue 3', 'Typescript', 'Tailwind', 'AWS Appsync']"
        to="/development/messaging-system"
      >
        <img loading="lazy" class="w-full" src="../../assets/messaging_ui.svg" />
      </PortfolioItem>

      <PageDivider />

      <PortfolioItem
        title="Frontend Modernisation Project"
        description="Modernised a legacy Vue application by upgrading the frontend stack, improving maintainability, and creating a more scalable foundation for future development."
        :tags="['Vue 3', 'Typescript', 'Tailwind', 'AWS Appsync']"
        to="/development/frontend-modernisation"
      >
        <ModernisationRoadmap />
      </PortfolioItem>

      <PageDivider />

      <PortfolioItem
        reverse
        title="Customisable Dashboard Experience"
        description="Built a modular dashboard system allowing users to personalise their workspace through configurable widgets, responsive layouts, and scalable component architecture."
        :tags="['Vue 3', 'Typescript', 'Tailwind', 'Draggable.js']"
        to="/development/dashboard"
      >
        <img loading="lazy" class="w-full" src="../../assets/dashboard_ui.png" />
      </PortfolioItem>
    </div>
  </div>
</template>
