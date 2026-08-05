<script>
import ImageCompare from "../../components/ImageCompare.vue";
import before from "../../assets/search_before.png";
import after from "../../assets/search_after.png";
import searchVideo from "../../assets/search_suggestions.mp4";
import CaseStudyHero from "../../components/CaseStudyHero.vue";
import CaseStudySection from "../../components/CaseStudySection.vue";
import BrowserFrame from "../../components/BrowserFrame.vue";
import PageDivider from "../../components/PageDivider.vue";
import ChallengeSection from "../../components/ChallengeSection.vue";
import CaseStudyContainer from "../../components/CaseStudyContainer.vue";
import ScrollNavigator from "../../components/ScrollNavigator.vue";

export default {
  data() {
    return {
      searchVideo,
      before,
      after,
    };
  },
  props: {
    darkLogo: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ImageCompare,
    CaseStudyHero,
    CaseStudySection,
    BrowserFrame,
    PageDivider,
    ChallengeSection,
    CaseStudyContainer,
    ScrollNavigator,
  },
};
</script>

<template>
  <ScrollNavigator
    :darkLogo="darkLogo"
    :sections="[
      { id: 'se_hero', label: 'home' },
      { id: 'se_challenge', label: 'The Challenge' },
      { id: 'suggestions', label: 'Query Suggestions' },
      { id: 'refinement', label: 'Quick Refinement' },
      { id: 'category', label: 'Category Pages' },
      { id: 'mobile', label: 'Mobile Design' },
    ]"
  />

  <div class="flex flex-col items-center gap-10 md:gap-28 pb-26 bg-main-light">
    <CaseStudyHero
      id="se_hero"
      title="Intelligent Search Experience"
      :roles="['UX/UI Designer', 'Frontend Developer']"
      :tools="['Figma']"
      timeline="~1 month"
    >
      <p>
        Search is a core discovery tool in a marketplace, helping users find relevant services among thousands of
        listings.
      </p>

      <p>
        This redesign focused on improving discoverability, refinement, and mobile usability to create a faster and more
        intuitive search experience.
      </p>
    </CaseStudyHero>

    <ImageCompare :before="before" :after="after" />

    <PageDivider />

    <ChallengeSection id="se_challenge" visual>
      <p>
        The existing search experience made it difficult for users to efficiently browse and refine results,
        particularly on mobile. Filtering occupied valuable screen space, available options lacked visibility, and
        sorting behaviour wasn't always intuitive.
      </p>

      <ul>
        <li><font-awesome-icon icon="circle-xmark" /> Limited filtering that occupied too much screen space</li>
        <li><font-awesome-icon icon="circle-xmark" /> Poor visibility of available filters</li>
        <li><font-awesome-icon icon="circle-xmark" /> Confusing sorting behaviour</li>
      </ul>

      <p>
        Rather than treating search as a single query, the redesign focused on supporting exploration and refinement,
        helping users discover relevant services through clearer filtering, intuitive interactions, and a mobile-first
        browsing experience.
      </p>

      <template #visual>
        <img loading="lazy" class="hidden md:block" src="../../assets/search_flow.svg" alt="" />
        <img loading="lazy" class="md:hidden" src="../../assets/search_flow_mobile.svg" alt="" />
      </template>
    </ChallengeSection>

    <CaseStudyContainer>
      <CaseStudySection id="suggestions">
        <template #media>
          <BrowserFrame url="search_suggestions.mp4">
            <div class="md:p-8 md:pt-6">
              <video preload="metadata" :src="searchVideo" autoplay loop muted playsinline class="w-full"></video>
            </div>
          </BrowserFrame>
        </template>

        <h3>1. Real Time Query Suggestions</h3>

        <p>
          Users often knew roughly what they wanted, but not always the exact phrasing. Real-time suggestions were
          introduced to reduce typing effort and guide users toward common search patterns, powered by Algolia.
        </p>

        <ul>
          <li><font-awesome-icon icon="circle-check" />Faster search initiation</li>
          <li><font-awesome-icon icon="circle-check" />Reduced typing effort</li>
          <li><font-awesome-icon icon="circle-check" />Improved query accuracy</li>
          <li><font-awesome-icon icon="circle-check" />Guidance toward common services</li>
        </ul>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="refinement" reverse>
        <template #media>
          <div class="relative overflow-hidden">
            <img loading="lazy" class="w-[200%] max-w-none" src="../../assets/search_filters.svg" alt="" />
            <div class="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-main-light to-transparent"></div>
          </div>
        </template>

        <h3>2. Enabling Quick Refinement</h3>

        <p>
          Users often refine searches iteratively rather than finding the ideal result immediately. Filtering and
          sorting were designed to support rapid refinement without disrupting the browsing flow.
        </p>

        <ul>
          <li><font-awesome-icon icon="circle-check" />Narrow results by category or attributes</li>
          <li><font-awesome-icon icon="circle-check" />Sort results based on relevance or other factors</li>
          <li><font-awesome-icon icon="circle-check" />Adjust filters without losing context</li>
        </ul>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="category">
        <template #media>
          <BrowserFrame url="anytask.com/?query=Logo%20Design">
            <img loading="lazy" class="w-full" src="../../assets/category_ui.png" alt="" />
          </BrowserFrame>
        </template>

        <h3>3. Category Pages</h3>

        <p>
          Category pages were designed as specialised search states that automatically applied relevant filters while
          remaining part of the core search experience.
        </p>

        <p>
          Because seller categorisation was often inconsistent, fuzzy matching helped surface relevant services even
          when tasks were incorrectly tagged, improving discoverability.
        </p>

        <ul>
          <li><font-awesome-icon icon="circle-check" />More resilient search results</li>
          <li><font-awesome-icon icon="circle-check" />Improved task discoverability</li>
          <li><font-awesome-icon icon="circle-check" />Improved matching across inconsistent categories</li>
          <li><font-awesome-icon icon="circle-check" />Stronger SEO landing pages</li>
        </ul>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="mobile" reverse>
        <template #media>
          <div class="w-full relative">
            <div class="overflow-x-scroll flex gap-2 md:gap-8 px-10 pb-5">
              <img
                loading="lazy"
                class="w-2/3 md:w-2/5 flex-shrink-0"
                src="../../assets/mobile_search_overview.png"
                alt=""
              />
              <img
                loading="lazy"
                class="w-2/3 md:w-2/5 flex-shrink-0"
                src="../../assets/mobile_search_suggestions.png"
                alt=""
              />
              <img
                loading="lazy"
                class="w-2/3 md:w-2/5 flex-shrink-0"
                src="../../assets/mobile_search_filters.png"
                alt=""
              />
            </div>

            <div
              class="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-main-light to-transparent"
            ></div>

            <div
              class="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-main-light to-transparent"
            ></div>
          </div>
        </template>

        <h3>4. Designing for Efficiency on Mobile</h3>

        <p>
          Because search traffic was heavily mobile-driven, the experience was redesigned to make browsing and
          refinement faster on smaller screens.
        </p>

        <ul>
          <li><font-awesome-icon icon="circle-check" />Mobile-friendly interactions</li>
          <li><font-awesome-icon icon="circle-check" />Improved scrolling behaviour</li>
          <li><font-awesome-icon icon="circle-check" />Clearer card layout</li>
          <li>
            <font-awesome-icon icon="circle-check" />
            Filters moved into a side panel to maximise screen space.
          </li>
          <li><font-awesome-icon icon="circle-check" />Touch-friendly controls</li>
        </ul>
      </CaseStudySection>
    </CaseStudyContainer>
  </div>
</template>
