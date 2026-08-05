<script>
import ImageCompare from "../../components/ImageCompare.vue";
import ChallengeSection from "../../components/ChallengeSection.vue";
import before from "../../assets/dashboard_before.png";
import after from "../../assets/dashboard_after.png";
import dashboardVideo from "../../assets/dashboard_demo.mp4";
import CaseStudyHero from "../../components/CaseStudyHero.vue";
import CaseStudyContainer from "../../components/CaseStudyContainer.vue";
import CaseStudySection from "../../components/CaseStudySection.vue";
import BrowserFrame from "../../components/BrowserFrame.vue";
import PageDivider from "../../components/PageDivider.vue";
import SegmentedToggle from "../../components/SegmentedToggle.vue";
import ScrollNavigator from "../../components/ScrollNavigator.vue";

export default {
  data() {
    return {
      dashboardVideo,
      before,
      after,
      modeStructure: "Original",
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
    SegmentedToggle,
    ScrollNavigator,
  },
};
</script>

<template>
  <ScrollNavigator
    ref="scrollNavigator"
    :darkLogo="darkLogo"
    :sections="[
      { id: 'da_hero', label: 'home' },
      { id: 'da_challenge', label: 'The Challenge' },
      { id: 'controlled', label: 'User Cntrolled' },
      { id: 'structured', label: 'Structured Breakdown' },
      { id: 'translation', label: 'AI Translations' },
    ]"
  />
  <div class="flex flex-col items-center gap-10 md:gap-28 pb-26 bg-main-light">
    <CaseStudyHero
      @toFirst="$refs.scrollNavigator.scrollTo('da_challenge')"
      id="da_hero"
      title="AI Powered Description Assistant"
      :roles="['UX/UI Design', 'Frontend Development']"
      :tools="['Figma']"
      timeline="~1 month"
    >
      <p>
        The AI Task Description Assistant introduces a lightweight, in-flow writing aid that helps users transform rough
        ideas into well-structured, actionable task descriptions - without removing user control.
      </p>
    </CaseStudyHero>
    <BrowserFrame class="mx-5" url="anytask.com/create_task">
      <img src="../../assets/description_assist_overview.jpg" alt="" />
    </BrowserFrame>

    <PageDivider />

    <ChallengeSection id="da_challenge" visual>
      <p>
        As the platform grew, key information became scattered across multiple pages, making it difficult for users to
        keep track of messages, sales, purchases and other day-to-day activity.
      </p>

      <ul>
        <li><font-awesome-icon icon="circle-check" />Centralise important platform activity</li>
        <li><font-awesome-icon icon="circle-check" />Reduce unnecessary navigation</li>
        <li><font-awesome-icon icon="circle-check" />Support both buyer and seller workflows</li>
      </ul>

      <p>
        The solution was built around a flexible widget system that allowed users to customise their workspace, with
        layouts persisting across sessions.
      </p>

      <template #visual>
        <img loading="lazy" class="hidden md:block" src="../../assets/dashboard_flow.svg" alt="" />
        <img loading="lazy" class="md:hidden" src="../../assets/dashboard_flow_mobile.svg" alt="" />
      </template>
    </ChallengeSection>

    <CaseStudyContainer>
      <CaseStudySection id="controlled">
        <template #media>
          <img loading="lazy" class="w-full" src="/src/assets/AI_anim.png" alt="" />
        </template>

        <h3>1. User-Controlled AI Assistance</h3>

        <p>
          AI assistance was designed as an optional enhancement, not an automatic replacement. Users can write their own
          task description and decide whether to keep it as-is or use AI to improve structure and clarity.
        </p>

        <p>If AI Assist is selected, users can:</p>

        <ul>
          <li><font-awesome-icon icon="circle-check" />Preview the AI-generated task before applying changes</li>
          <li><font-awesome-icon icon="circle-check" />Edit the generated content before accepting</li>
          <li><font-awesome-icon icon="circle-check" />Accept or reject changes without losing the original input</li>
        </ul>

        <p>
          This creates a human-in-the-loop experience that improves trust, reduces friction, and ensures users remain in
          control of the final task description.
        </p>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="structured" reverse>
        <template #media>
          <SegmentedToggle v-model="modeStructure" :options="['Original', 'AI Asisted']">
            <template #option0>
              <p>
                Hello, I need help with my website. It is a website for a small bakery business, and I would like its
                design to look better. If possible, I would also like to add an online ordering feature. My current
                website is outdated, does not work properly on mobile devices, and some of its pages are not functioning
                correctly. I'm also unsure which platform would be the most suitable, but I want a website that I can
                easily update myself in the future. In addition, I would like help improving the photos and, if
                possible, making some refinements to the logo. I would like this project completed as soon as possible,
                although I have some flexibility with the timeline. If you're interested, please send me a message.
              </p>
            </template>
            <template #option1>
              <div class="text-main-dark/80 flex flex-col gap-5 [&>h4]:text-lg [&>h4]:font-semibold">
                <h4>Requirements</h4>
                <ul>
                  <li>Redesign the existing website layout and styling</li>
                  <li>Ensure the website is fully mobile responsive</li>
                  <li>Fix broken pages and improve navigation</li>
                  <li>Recommend a suitable platform or CMS that I can easily update</li>
                </ul>

                <h4>Deliverables</h4>
                <ul>
                  <li>Updated website design and layout</li>
                  <li>Functional mobile-responsive site</li>
                  <li>Guidance on how to manage and update the site</li>
                </ul>

                <h4>Additional Details</h4>
                <ul>
                  <li>The website belongs to a small local bakery</li>
                  <li>I may also need help improving images and the logo if required</li>
                  <li>Open to suggestions for improving the overall site experience</li>
                </ul>

                <h4>Timeline</h4>

                <p>Looking to start soon, but timing is flexible depending on availability.</p>
              </div>
            </template>
          </SegmentedToggle>
        </template>

        <h3>2. Structured Task Breakdown</h3>

        <p>Instead of a single block of text, AI-generated content is organised into clear sections:</p>

        <ul>
          <li><font-awesome-icon icon="circle-check" />Overview</li>
          <li><font-awesome-icon icon="circle-check" />Requirements</li>
          <li><font-awesome-icon icon="circle-check" />Deliverables</li>
          <li><font-awesome-icon icon="circle-check" />Additional details</li>
        </ul>

        <p>
          This improves readability for freelancers and increases the likelihood of relevant responses. It also
          encourages users to think in terms of structured requirements rather than vague descriptions.
        </p>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="translation">
        <template #media>
          <SegmentedToggle v-model="modeStructure" :options="['Original', 'AI Asisted']">
            <template #option0>
              <p>
                नमस्ते, मुझे अपनी वेबसाइट के लिए किसी की मदद चाहिए। यह एक छोटे व्यवसाय की बेकरी वेबसाइट है और मैं
                चाहता/चाहती हूँ कि इसका डिज़ाइन बेहतर लगे तथा यदि संभव हो तो इसमें ऑनलाइन ऑर्डर करने की सुविधा भी जोड़
                दी जाए। मेरी वर्तमान वेबसाइट पुरानी है, मोबाइल पर सही तरह से काम नहीं करती और इसके कुछ पेज भी ठीक से काम
                नहीं कर रहे हैं। मुझे यह भी समझ नहीं आ रहा कि कौन-सा प्लेटफ़ॉर्म सबसे उपयुक्त रहेगा, लेकिन मैं ऐसी
                वेबसाइट चाहता/चाहती हूँ जिसे भविष्य में मैं स्वयं आसानी से अपडेट कर सकूँ। इसके अलावा, मुझे तस्वीरों को
                बेहतर बनाने और यदि संभव हो तो लोगो में कुछ सुधार करने में भी मदद चाहिए। मुझे यह काम जल्द पूरा करवाना है,
                लेकिन समय को लेकर थोड़ी लचीलापन है। यदि आपकी रुचि हो, तो कृपया मुझे संदेश भेजें।
              </p>
            </template>
            <template #option1>
              <div class="text-main-dark/80 flex flex-col gap-5 [&>h4]:text-lg [&>h4]:font-semibold">
                <h4>Requirements</h4>
                <ul>
                  <li>Redesign the existing website layout and styling</li>
                  <li>Ensure the website is fully mobile responsive</li>
                  <li>Fix broken pages and improve navigation</li>
                  <li>Recommend a suitable platform or CMS that I can easily update</li>
                </ul>

                <h4>Deliverables</h4>
                <ul>
                  <li>Updated website design and layout</li>
                  <li>Functional mobile-responsive site</li>
                  <li>Guidance on how to manage and update the site</li>
                </ul>

                <h4>Additional Details</h4>
                <ul>
                  <li>The website belongs to a small local bakery</li>
                  <li>I may also need help improving images and the logo if required</li>
                  <li>Open to suggestions for improving the overall site experience</li>
                </ul>

                <h4>Timeline</h4>

                <p>Looking to start soon, but timing is flexible depending on availability.</p>
              </div>
            </template>
          </SegmentedToggle>
        </template>

        <h3>3. AI-Powered Translation</h3>

        <p>
          Users can write task descriptions in their native language and have them translated into clear, structured
          English. This removes language barriers and allows global users to fully participate in the marketplace
          without external tools. The AI doesn’t just translate — it rewrites content into a clearer, more structured
          task brief to improve readability and freelancer understanding.
        </p>

        <p>To maintain trust and control, users can:</p>

        <ul>
          <li><font-awesome-icon icon="circle-check" />View original and translated versions</li>
          <li><font-awesome-icon icon="circle-check" />Edit either version at any time</li>
          <li><font-awesome-icon icon="circle-check" />Preview final English task before publishing</li>
        </ul>
      </CaseStudySection>
    </CaseStudyContainer>
  </div>
</template>
