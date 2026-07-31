<script>
import cursorBlink from "../../assets/searchExperienceAnim.json";
import lottie from "lottie-web";

export default {
  data() {
    return {
      animations: [],
      summaryHeading: "text-xs uppercase tracking-wide text-gray-400 font-semibold",
    };
  },
  mounted() {
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      const anim = lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: cursorBlink,
      });

      this.animations.push(anim);
    },
  },
};
</script>

<template>
  <div class="flex flex-col gap-10 md:gap-26 pb-20 bg-main-light">
    <!-- Intro -->
    <div class="flex flex-col gap-5 lg:flex-row text-gray-800">
      <div class="lg:w-1/2">
        <h1 class="text-3xl md:text-6xl uppercase font-bold">Platform-Wide UI Redesign</h1>
      </div>
      <div class="lg:w-1/2 flex flex-col gap-5">
        <p>
          The platform had grown organically over time, leading to inconsistent UI patterns, unclear hierarchy, and
          fragmented user experience across key flows.
        </p>
        <p>This project focused on redesigning the UI system to improve consistency, usability, and scalability.</p>

        <div class="flex flex-col gap-2">
          <h2 :class="summaryHeading">Role</h2>
          <ul class="flex flex-col md:flex-row gap-1 text-sm md:text-base text-gray-800 font-medium">
            <li>UX/UI Design,</li>
            <li>Frontenend Developer</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h2 :class="summaryHeading">Team</h2>
          <ul class="flex flex-col md:flex-row gap-1 md:gap-2 text-sm md:text-base text-gray-800 font-medium">
            <li>Product Manager,</li>
            <li>UX/UI Designer (my role),</li>
            <li>Senior Developer</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h2 :class="summaryHeading">Platform</h2>
          <p class="flex flex-col md:flex-row gap-3 text-sm md:text-base text-gray-800 font-medium">Web Application</p>
        </div>

        <div class="flex flex-col gap-2 items-start">
          <h2 :class="summaryHeading">Tools</h2>
          <p class="px-2 text-sm font-bold text-gray-600 bg-gray-200 rounded-md">Figma</p>
        </div>

        <div class="flex flex-col gap-2 items-start">
          <h2 :class="summaryHeading">Timeline</h2>
          <p class="text-sm md:text-base text-gray-800 font-medium">~ 6 months</p>
        </div>
      </div>
    </div>

    <img class="rounded-lg border-2 border-gray-200" src="../../assets/homepage.jpg" alt="" />

    <!-- The Problem and Goals -->

    <div class="flex flex-col gap-5 lg:flex-row text-gray-800">
      <div class="lg:w-1/2">
        <h1 class="text-2xl md:text-5xl font-bold">THE PROBLEM & GOALS</h1>
      </div>
      <div class="lg:w-1/2 flex flex-col gap-5">
        <p>
          As the platform evolved through incremental feature releases, the UI became increasingly inconsistent across
          key workflows. Repeated patterns were implemented differently, visual hierarchy weakened in complex areas, and
          maintaining the interface became harder as the product scaled.
        </p>

        <p>The redesign focused on creating a more unified and scalable experience by:</p>

        <ul class="ml-5 *:flex *:gap-2 *:items-center">
          <li><font-awesome-icon icon="circle-check" />Establishing consistent design patterns across the platform</li>
          <li><font-awesome-icon icon="circle-check" />Improving visual hierarchy and readability</li>
          <li><font-awesome-icon icon="circle-check" />Creating reusable UI components and layouts</li>
          <li><font-awesome-icon icon="circle-check" />Supporting responsive behaviour across devices</li>
          <li><font-awesome-icon icon="circle-check" />Building a stronger foundation for a scalable design system</li>
        </ul>
      </div>
    </div>

    <div class="w-full h-[2px] bg-gray-200"></div>

    <!-- UX Approach -->

    <div class="flex flex-col gap-5 lg:flex-row text-gray-800">
      <div class="lg:w-1/2">
        <h1 class="text-2xl md:text-5xl font-bold">UX APPROACH</h1>
      </div>
      <div class="lg:w-1/2 flex flex-col gap-5">
        <p>
          Marketplace users rarely discover services through a single perfect query. Instead, search behaves more like a
          browsing and refinement process.
        </p>
        <p>The redesign therefore focused on reducing friction between intent, exploration, and relevant results.</p>
      </div>
    </div>

    <img class="hidden md:block" src="../../assets/search_flow.svg" alt="" />
    <img class="md:hidden p-10" src="../../assets/search_flow_mobile.svg" alt="" />

    <div class="w-full h-[2px] bg-gray-200"></div>

    <!-- Feature 1 Suggestions -->

    <h1 class="text-2xl md:text-5xl font-bold">KEY IMPROVEMENTS</h1>

    <div class="flex flex-col gap-8">
      <div class="flex flex-col lg:flex-row gap-6 text-gray-800">
        <div class="lg:w-1/2 flex flex-col gap-6 text-sm leading-6 text-gray-700">
          <div class="flex flex-col gap-2">
            <h2 class="text-xl md:text-3xl font-bold">1. Real Time Query Suggestions</h2>
            <h3 class="text-sm uppercase tracking-wide text-gray-400 font-semibold">
              Helping users move from intent to results faster.
            </h3>
          </div>
          <p>
            Users often knew roughly what they wanted, but not always the exact phrasing. Real-time suggestions were
            introduced to reduce typing effort and guide users toward common search patterns, powered by Algolia.
          </p>

          <ul class="ml-5 *:flex *:gap-2 *:items-center">
            <li><font-awesome-icon icon="circle-check" />Faster search initiation</li>
            <li><font-awesome-icon icon="circle-check" />Reduced typing effort</li>
            <li><font-awesome-icon icon="circle-check" />Improved query accuracy</li>
            <li><font-awesome-icon icon="circle-check" />Guidance toward common services</li>
          </ul>
        </div>

        <div class="md:w-1/2 md:pl-5 w-full overflow-clip flex flex-col gap-6">
          <div ref="lottieContainer" class="w-2/1 md:w-full"></div>
        </div>
      </div>
    </div>

    <div class="w-full h-[2px] bg-gray-200"></div>

    <!-- Feature 2 Filters -->

    <div class="flex w-full flex-col gap-8">
      <div class="flex flex-col gap-2">
        <h2 class="text-xl md:text-3xl font-bold">2. Enabling Quick Refinement</h2>
        <h3 class="text-sm uppercase tracking-wide text-gray-400 font-semibold">
          Supporting iterative search behaviour.
        </h3>
      </div>

      <div class="flex flex-col gap-6 text-gray-800">
        <div class="flex flex-col gap-6 text-sm leading-6 text-gray-700">
          <p>
            Users often refine searches iteratively rather than finding the ideal result immediately. Filtering and
            sorting were designed to support rapid refinement without disrupting the browsing flow.
          </p>

          <ul class="ml-5 *:flex *:gap-2 *:items-center">
            <li><font-awesome-icon icon="circle-check" />Narrow results by category or attributes</li>
            <li><font-awesome-icon icon="circle-check" />Reorder results based on relevance or other factors</li>
            <li><font-awesome-icon icon="circle-check" />Adjust filters without losing context</li>
          </ul>
        </div>
      </div>

      <div class="w-full overflow-hidden">
        <img class="w-[200%] max-w-none md:w-full md:max-w-full" src="../../assets/search_filters.svg" alt="" />
      </div>
    </div>

    <div class="w-full h-[2px] bg-gray-200"></div>

    <!-- Feature 3 Categories -->

    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-2">
        <h2 class="text-xl md:text-3xl font-bold">3. Category Pages</h2>
        <h3 class="text-sm uppercase tracking-wide text-gray-400 font-semibold">
          Improving discoverability despite inconsistent metadata.
        </h3>
      </div>

      <div class="flex flex-col gap-6 text-gray-800">
        <div class="flex flex-col gap-6 text-sm leading-6 text-gray-700">
          <p>
            Category pages were designed as specialised search states that automatically applied relevant filters while
            remaining part of the core search experience. Because seller categorisation was often inconsistent, fuzzy
            matching was introduced to surface relevant services even when tasks were incorrectly tagged, improving
            discoverability and search resilience.
          </p>

          <ul class="ml-5 *:flex *:gap-2 *:items-center">
            <li>
              <span><font-awesome-icon icon="circle-check" /></span>More resilient search results
            </li>
            <li>
              <span><font-awesome-icon icon="circle-check" /></span>Improved task discoverability
            </li>
            <li>
              <span><font-awesome-icon icon="circle-check" /></span>Better coverage across inconsistent seller
              categorisation
            </li>
            <li>
              <span><font-awesome-icon icon="circle-check" /></span>Stronger SEO landing pages for high-intent searches
            </li>
          </ul>
        </div>
      </div>

      <img
        class="w-full border border-gray-200 rounded-lg shadow-md mt-5"
        src="../../assets/category_page.jpg"
        alt=""
      />
    </div>

    <div class="w-full h-[2px] bg-gray-200"></div>

    <!-- Feature 4 Mobile -->

    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-2">
        <h2 class="text-xl md:text-3xl font-bold">4. Designing for Efficiency on Mobile</h2>
        <h3 class="text-sm uppercase tracking-wide text-gray-400 font-semibold">
          Preserving browsing flow on smaller screens.
        </h3>
      </div>

      <div class="flex flex-col gap-6 text-gray-800">
        <div class="flex flex-col gap-6 text-sm leading-6 text-gray-700">
          <p>
            Because search traffic was heavily mobile-driven, the experience was redesigned to make browsing and
            refinement faster on smaller screens.
          </p>

          <ul class="ml-5 *:flex *:gap-2 *:items-center">
            <li>
              <span><font-awesome-icon icon="circle-check" /></span>
              Mobile-friendly filter interactions
            </li>
            <li>
              <span><font-awesome-icon icon="circle-check" /></span>Improved scrolling behaviour
            </li>
            <li>
              <span><font-awesome-icon icon="circle-check" /></span>Clearer card layout
            </li>
            <li>
              <span><font-awesome-icon icon="circle-check" /></span>
              Filters were moved into a side panel to preserve screen space while keeping refinement easily accessible.
            </li>
            <li>
              <span><font-awesome-icon icon="circle-check" /></span>Touch-friendly controls
            </li>
          </ul>
        </div>
      </div>

      <div class="flex gap-4 overflow-x-auto md:overflow-visible md:gap-8 snap-x snap-mandatory pb-2">
        <img
          class="w-[85%] md:w-0 md:flex-1 shrink-0 object-cover border rounded-lg shadow-md border-gray-200 snap-start"
          src="../../assets/mobile_search_overview.jpg"
          alt=""
        />

        <img
          class="w-[85%] md:w-0 md:flex-1 shrink-0 object-cover border rounded-lg shadow-md border-gray-200 snap-start"
          src="../../assets/mobile_search_suggestions.jpg"
          alt=""
        />

        <img
          class="w-[85%] md:w-0 md:flex-1 shrink-0 object-cover border rounded-lg shadow-md border-gray-200 snap-start"
          src="../../assets/mobile_search_filters.jpg"
          alt=""
        />

        <img
          class="w-[85%] md:w-0 md:flex-1 shrink-0 object-cover border rounded-lg shadow-md border-gray-200 snap-start"
          src="../../assets/mobile_search_categories.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="w-full h-[2px] bg-gray-200"></div>

    <!-- Outcome and Reflection -->

    <div class="flex flex-col gap-5 lg:flex-row text-gray-800">
      <div class="lg:w-1/2">
        <h1 class="text-2xl md:text-5xl font-bold">OUTCOME AND REFLECTION</h1>
      </div>
      <div class="lg:w-1/2 flex flex-col gap-5">
        <p>
          The redesigned search experience made discovery faster, clearer, and more flexible across desktop and mobile.
          The project reinforced how small improvements to filtering, refinement, and interaction design can
          significantly improve how users explore large marketplaces.
        </p>
      </div>
    </div>
  </div>
</template>
