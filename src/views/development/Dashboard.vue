<script>
import dashboardVideo from "../../assets/dashboard_demo.mp4";
import dragVideo from "../../assets/drag.mp4";
import CodeSnippet from "../../components/CodeSnippet.vue";
import CaseStudySection from "../../components/CaseStudySection.vue";
import PageDivider from "../../components/PageDivider.vue";
import ChallengeSection from "../../components/ChallengeSection.vue";
import CaseStudyHero from "../../components/CaseStudyHero.vue";
import CaseStudyContainer from "../../components/CaseStudyContainer.vue";
import BrowserFrame from "../../components/BrowserFrame.vue";
import ScrollNavigator from "../../components/ScrollNavigator.vue";

export default {
  data() {
    return {
      dashboardVideo,
      dragVideo,
    };
  },
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
    CodeSnippet,
    BrowserFrame,
    ScrollNavigator,
  },
};
</script>

<template>
  <ScrollNavigator
    ref="scrollNavigator"
    :darkLogo="darkLogo"
    :sections="[
      { id: 'cd_hero', label: 'home' },
      { id: 'cd_challenge', label: 'The Challenge' },
      { id: 'template', label: 'Widget Template' },
      { id: 'interaction', label: 'Widget Repositioning' },
      { id: 'persistance', label: 'Persistant Layouts' },
      { id: 'responsive_c', label: 'Responsive Collumns' },
    ]"
  />

  <div class="flex flex-col items-center gap-10 md:gap-28 pb-26 bg-main-light">
    <CaseStudyHero
      @toFirst="$refs.scrollNavigator.scrollTo('cd_challenge')"
      id="cd_hero"
      title="Customisable Dashboard Experience"
      :roles="['Frontend Developer', 'UX/UI Designer']"
      :tools="['Vue 3', 'Tailwind', 'Draggable.js']"
      timeline="~1 month"
    >
      <p>
        The platform required different dashboard experiences for buyers and sellers, with each user type needing access
        to different information and workflow
      </p>
      <p>
        Rather than building separate static dashboards, I created a configurable widget-based system that allowed
        layouts and components to be dynamically composed, reordered and persisted.
      </p>
    </CaseStudyHero>

    <BrowserFrame class="mx-5" url="anytask.com/my_dashboard">
      <video :src="dashboardVideo" autoplay loop muted playsinline></video>
    </BrowserFrame>

    <PageDivider />

    <ChallengeSection id="cd_challenge">
      <p>
        The platform's dashboard needed to bring together a growing collection of independent features—including sales,
        messaging, tasks, purchases and account management—into a single, cohesive interface. As new widgets were
        introduced, the implementation needed to remain scalable, maintainable and easy to extend.
      </p>

      <p>
        The challenge was to design a modular frontend architecture where each widget could be developed, tested and
        maintained independently while integrating seamlessly into a shared dashboard. This approach reduced coupling
        between features, encouraged component reuse, and provided a flexible foundation for future expansion.
      </p>
    </ChallengeSection>

    <CaseStudyContainer>
      <CaseStudySection id="template">
        <template #media>
          <div class="shadow-lg rounded-lg">
            <div class="bg-[#1a2e3c] rounded-t-lg text-gray-50 w-full py-3 px-5 flex gap-4 items-center">
              <font-awesome-icon icon="grip-vertical" />
              Widget template
              <div class="ml-auto flex gap-2">
                <font-awesome-icon icon="window-minimize" />
                <font-awesome-icon icon="xmark" />
              </div>
            </div>
            <div
              class="w-full h-full md:min-h-[500px] min-h-[200px] flex flex-col border-x-2 border-gray-200 bg-white"
            ></div>
            <div class="mt-auto w-full rounded-b-lg bg-white flex py-5 border-2 border-gray-200">
              <button class="bg-gray-200 text-gray-600 py-3 px-8 mx-auto rounded-full">Optional button slot</button>
            </div>
          </div>
        </template>

        <h3>1. Reusable Widget Template</h3>

        <p>
          Every dashboard widget shared a common wrapper component that handled the structure, styling and functionality
          used throughout the dashboard, including the title, drag handle, minimise control and close button. This
          ensured every widget looked and behaved consistently.
        </p>

        <p>
          The widget title was passed as a prop, while the unique widget content was rendered through a slot. By
          separating the shared layout from the widget content, new widgets could be created quickly with minimal
          duplicated code, while maintaining a consistent user experience.
        </p>

        <CodeSnippet
          class=""
          filename="Dashboard.vue"
          lang="vue-html"
          :code="`<DashboardWidget :title='widget.title'>
    <component :is='widget.component' />
</DashboardWidget>
`"
        />
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="interaction" reverse>
        <template #media>
          <BrowserFrame url="anytask.com/dashboard">
            <div class="p-6 bg-white">
              <video preload="metadata" :src="dragVideo" autoplay loop muted playsinline></video>
            </div>
          </BrowserFrame>
        </template>

        <h3>2. Widget Repositioning & Interaction</h3>

        <p>
          The dashboard featured a three-column drag-and-drop layout built with draggable.js, allowing users to
          customise their workspace. Widget positions were persisted using the existing saveConfig function, ensuring
          layouts were retained across sessions.
        </p>

        <p>
          To improve usability on touch devices, dragging was restricted to a dedicated handle to prevent accidental
          movement while scrolling. Users could also minimise widgets to reduce screen clutter, with these preferences
          saved as part of the dashboard configuration.
        </p>

        <CodeSnippet
          class=""
          filename="Dashboard.vue"
          lang="javascript"
          :code="`onDragEnd() {
  this.saveConfig()
}
`"
        />
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="persistance">
        <template #media>
          <div class="w-full relative hidden md:block">
            <div class="overflow-x-scroll w-full flex flex-col md:flex-row gap-4 px-10 pb-5">
              <CodeSnippet
                class="md:w-[75%] md:flex-shrink-0"
                filename="Dashboard.vue"
                lang="javascript"
                :code="`            
    saveConfig() {
      const layout = this.widgets.columns.map(column =>
        column.map(widget => ({
          id: widget.id,
          minimised: widget.minimised
        }))
      )

      apiService.updateWidgets({
        widget_name: layout
      })
    }
            `"
              />
              <CodeSnippet
                class="flex-shrink-0"
                filename="SavedDashboardLayout.js"
                lang="javascript"
                :code="`
    [
      [
        { id: 'inbox', minimised: false },
        { id: 'sales', minimised: true }
      ],
      [
        { id: 'saved', minimised: false }
      ],
      [
        { id: 'help', minimised: false }
      ]
    ]
    `"
              />
            </div>

            <div
              class="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-main-light to-transparent"
            ></div>

            <div
              class="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-main-light to-transparent"
            ></div>
          </div>

          <CodeSnippet
            class="md:hidden"
            filename="Dashboard.vue"
            lang="javascript"
            :code="`            
    saveConfig() {
      const layout = this.widgets.columns.map(column =>
        column.map(widget => ({
          id: widget.id,
          minimised: widget.minimised
        }))
      )

      apiService.updateWidgets({
        widget_name: layout
      })
    }
            `"
          />
        </template>

        <h3>3. Persistent User Layouts</h3>

        <p>
          Users could customise their dashboard by selecting the widgets they wanted to display and arranging them
          within the available columns. Each change to the layout was automatically saved through the API and linked to
          the user's profile, allowing their personalised dashboard to persist across sessions.
        </p>

        <p>
          The dashboard layout was stored as a lightweight configuration rather than separate dashboard views. When
          loaded, this configuration was fetched and used to dynamically rebuild the user's preferred arrangement, while
          keeping each widget independent from its position within the dashboard.
        </p>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="responsive_c" reverse>
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

        <h3>4. Responsive Column System</h3>

        <p>
          The dashboard used a responsive column system to adapt the widget layout across different screen sizes. On
          smaller screens, the second and third columns would collapse into the remaining available columns, while
          mobile layouts would stack all widgets into a single column to maintain usability on smaller displays.
        </p>

        <p>
          One consideration with a persisted user-defined layout is that the ideal arrangement can vary depending on the
          device being used. While the current implementation maintained a single saved layout across devices, a future
          improvement would be to store separate configurations based on device type, allowing users to have optimised
          layouts for desktop, tablet and mobile.
        </p>

        <CodeSnippet
          class=""
          filename="Dashboard.vue"
          lang="javascript"
          :code="`onDragEnd() {
  this.saveConfig()
}
`"
        />
      </CaseStudySection>
    </CaseStudyContainer>
  </div>
</template>
