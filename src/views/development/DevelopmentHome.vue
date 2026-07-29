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
    <p>
      I specialise in building modern frontend experiences with a strong foundation in both engineering and design. My
      approach combines scalable component systems, clean implementation, and UX thinking to create interfaces that are
      intuitive for users and maintainable for teams.
    </p>
  </PortfolioHero>

  <div class="flex w-full flex-col items-center">
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
        title="Customisable Dashboard Experience"
        description="Built a modular dashboard system allowing users to personalise their workspace through configurable widgets, responsive layouts, and scalable component architecture."
        :tags="['Vue 3', 'Typescript', 'Tailwind', 'Draggable.js']"
        to="/development/dashboard"
      >
        <img loading="lazy" class="w-full" src="../../assets/dashboard_ui.png" />
      </PortfolioItem>

      <PageDivider />

      <PortfolioItem
        reverse
        title="Frontend Modernisation Project"
        description="Modernised a legacy Vue application by upgrading the frontend stack, improving maintainability, and creating a more scalable foundation for future development."
        :tags="['Vue 3', 'Typescript', 'Tailwind', 'AWS Appsync']"
        to="/development/frontend-modernisation"
      >
        <ModernisationRoadmap static />
      </PortfolioItem>
    </div>
  </div>
</template>
