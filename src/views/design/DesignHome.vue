<script>
import PortfolioHero from "../../components/PortfolioHero.vue";
import PortfolioItem from "../../components/PortfolioItem.vue";
import PageDivider from "../../components/PageDivider.vue";

export default {
  components: {
    PortfolioHero,
    PortfolioItem,
    PageDivider,
  },
};
</script>

<template>
  <PortfolioHero title="UX/UI Design Portfolio">
    <h2>I turn <span>complex</span> problems into <span>simple</span>, and <span>enjoyable</span> experiences.</h2>
  </PortfolioHero>

  <div class="flex w-full flex-col items-center bg-main-light">
    <div class="max-w-7xl mx-5 py-18 flex flex-col gap-16 md:gap-22">
      <PortfolioItem
        reverse
        title="Customisable User Dashboard"
        description="Designed a flexible dashboard that allowed users to personalise their workspace while maintaining a consistent and scalable interface."
        :tags="['Interaction Design', 'UX', 'Design Systems']"
        to="/design/dashboard"
      >
        <img class="w-full" src="../../assets/dashboard_ui.png" />
      </PortfolioItem>

      <PageDivider />

      <PortfolioItem
        title="Intelligent Search Experience"
        description="Redesigned search and filtering to improve discoverability and reduce friction when browsing services."
        :tags="['UX Research', 'Figma', 'Prototyping']"
        to="/design/search-experience"
      >
        <img class="w-full" loading="lazy" src="../../assets/search_ui.svg" />
      </PortfolioItem>

      <PageDivider />

      <PortfolioItem
        reverse
        title="AI Description Assistant"
        description="Designed an AI-powered writing assistant that helped sellers create clearer, higher-quality service descriptions with minimal effort."
        :tags="['AI UX', 'Figma', 'User Flows']"
        to="/design/description-assistant"
      >
        <img class="w-full" loading="lazy" src="../../assets/ai_ui.svg" />
      </PortfolioItem>
    </div>
  </div>
</template>
