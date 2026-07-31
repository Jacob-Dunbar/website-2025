<script>
import ImageCompare from "../../components/ImageCompare.vue";
import before from "../../assets/dashboard_before.png";
import after from "../../assets/dashboard_after.png";
import dashboardVideo from "../../assets/dashboard_demo.mp4";
import CaseStudyHero from "../../components/CaseStudyHero.vue";
import CaseStudySection from "../../components/CaseStudySection.vue";
import BrowserFrame from "../../components/BrowserFrame.vue";
import PageDivider from "../../components/PageDivider.vue";
import ChallengeSection from "../../components/ChallengeSection.vue";
import CaseStudyContainer from "../../components/CaseStudyContainer.vue";

export default {
  data() {
    return {
      dashboardVideo,
      before,
      after,
    };
  },
  components: {
    ImageCompare,
    CaseStudyHero,
    CaseStudySection,
    BrowserFrame,
    PageDivider,
    ChallengeSection,
    CaseStudyContainer,
  },
};
</script>

<template>
  <div class="flex flex-col items-center gap-10 md:gap-28 pb-26 bg-main-light">
    <CaseStudyHero
      title="Dashboard Redesign and Expansion"
      :roles="['UX/UI Design', 'Frontend Development']"
      :tools="['Figma']"
      timeline="~1 month"
    >
      <p>
        The existing dashboard provided limited visibility into platform activity and did not scale alongside the growth
        of the marketplace.
      </p>
      <p>
        This project transformed the dashboard into a personalised workspace, allowing users to surface, organise, and
        prioritise the information most relevant to them.
      </p>
    </CaseStudyHero>

    <ImageCompare :before="before" :after="after" />

    <PageDivider />

    <ChallengeSection visual>
      <p>
        As the platform grew, key information became scattered across multiple pages, making it difficult for users to
        keep track of messages, sales, purchases and other day-to-day activity.
      </p>

      <ul>
        <li><font-awesome-icon icon="circle-check" />Centralise important platform activity</li>
        <li><font-awesome-icon icon="circle-check" />Reduce unnecessary navigation</li>
        <li><font-awesome-icon icon="circle-check" />Support both buyer and seller workflows</li>
        <li><font-awesome-icon icon="circle-check" />Allow users to personalise their workspace</li>
      </ul>

      <p>
        Rather than designing a fixed dashboard, the solution was built around a flexible widget system that users could
        customise to match their individual workflow, with layouts persisting across sessions.
      </p>

      <template #visual>
        <img loading="lazy" class="hidden md:block" src="../../assets/dashboard_flow.svg" alt="" />
        <img loading="lazy" class="md:hidden" src="../../assets/dashboard_flow_mobile.svg" alt="" />
      </template>
    </ChallengeSection>

    <CaseStudyContainer>
      <CaseStudySection>
        <template #media>
          <img loading="lazy" class="mx-auto" src="../../assets/dashboard_dropdown.png" alt="" />
        </template>

        <h3>1. Widget-Based Architecture</h3>

        <p>
          Rather than a fixed dashboard, the experience was built around modular widgets, allowing buyers and sellers to
          personalise their workspace around the features most relevant to them.
        </p>

        <p>
          Each widget provided an at-a-glance summary with a direct route into the full feature, reducing navigation
          while keeping the interface focused.
        </p>

        <ul>
          <li><font-awesome-icon icon="circle-check" />Modular, reusable widgets</li>
          <li><font-awesome-icon icon="circle-check" />Personalised buyer & seller dashboards</li>
          <li><font-awesome-icon icon="circle-check" />At-a-glance information</li>
          <li><font-awesome-icon icon="circle-check" />Quick access to key features</li>
          <li><font-awesome-icon icon="circle-check" />Scalable foundation for future widgets</li>
        </ul>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection reverse>
        <template #media>
          <BrowserFrame url="anytask.com/buyer/my_dashboard">
            <div class="p-2 md:p-8 md:pt-6">
              <video preload="metadata" :src="dashboardVideo" autoplay loop muted playsinline class="w-full"></video>
            </div>
          </BrowserFrame>
        </template>

        <h3>2. Customisable Layouts</h3>

        <p>
          Users could tailor the dashboard to match their workflow by adding, removing, reordering and minimising
          widgets.
        </p>

        <ul>
          <li><font-awesome-icon icon="circle-check" />Add and remove widgets</li>
          <li><font-awesome-icon icon="circle-check" />Drag-and-drop reordering</li>
          <li><font-awesome-icon icon="circle-check" />Minimise infrequently used widgets</li>
          <li><font-awesome-icon icon="circle-check" />Layouts persisted across sessions</li>
        </ul>

        <p>
          This allowed the dashboard to evolve with each user's priorities while remaining familiar every time they
          returned.
        </p>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection>
        <template #media>
          <img loading="lazy" class="mx-auto" src="../../assets/workfows.png" alt="" />
        </template>

        <h3>3. Supporting Different User Workflows</h3>

        <p>
          Buyers and sellers interacted with the platform differently, meaning a single dashboard layout could not
          effectively serve every user.
        </p>

        <p>
          Shared widgets provided consistent platform access, while role-specific widgets allowed users to prioritise
          the information most relevant to their workflow.
        </p>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection reverse>
        <template #media>
          <div class="w-full flex flex-col md:flex-row gap-5">
            <img
              loading="lazy"
              src="../../assets/dashboard_tablet.png"
              class="flex-2 h-auto object-contain min-w-0"
              alt=""
            />

            <img
              loading="lazy"
              src="../../assets/dashboard_mobile.png"
              class="flex-1 h-auto object-contain min-w-0"
              alt=""
            />
          </div>
        </template>

        <h3>4. Responsive Dashboard System</h3>

        <p>
          The dashboard was designed to adapt from three columns on desktop to two on tablet and a single column on
          mobile, ensuring widgets remained readable and easy to interact with.
        </p>

        <p>
          Preserving a personalised layout across different screen sizes introduced additional design challenges,
          requiring the responsive system to balance flexibility with consistency.
        </p>
      </CaseStudySection>
    </CaseStudyContainer>
  </div>
</template>
