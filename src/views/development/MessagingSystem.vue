<script>
import CaseStudySection from "../../components/CaseStudySection.vue";
import BrowserFrame from "../../components/BrowserFrame.vue";
import PageDivider from "../../components/PageDivider.vue";
import ChallengeSection from "../../components/ChallengeSection.vue";
import CaseStudyHero from "../../components/CaseStudyHero.vue";
import CaseStudyContainer from "../../components/CaseStudyContainer.vue";
import CodeSnippet from "../../components/CodeSnippet.vue";
import realtimeVideo from "../../assets/messaging_real_time.mp4";
import translationVideo from "../../assets/translation.mp4";
import dataLoadingVideo from "../../assets/data_loading.mp4";
import quickMessageVideo from "../../assets/quick_message.mp4";

export default {
  data() {
    return {
      realtimeVideo,
      translationVideo,
      dataLoadingVideo,
      quickMessageVideo,
    };
  },
  components: {
    CaseStudyHero,
    CaseStudySection,
    BrowserFrame,
    PageDivider,
    ChallengeSection,
    CaseStudyContainer,
    CodeSnippet,
  },
};
</script>

<template>
  <div class="flex flex-col items-center gap-10 md:gap-28 pb-26">
    <CaseStudyHero
      title="Real-Time Messaging System"
      :roles="['Frontend Developer', 'UX/UI Designer']"
      :tools="['Vue 3', 'Tailwind', 'Typescript', 'AWS Appsync']"
      timeline="~1 month"
    >
      <p>
        Real-time messaging is one of the platform's most interactive features, requiring a fast, reliable, and
        responsive user experience.
      </p>
      <p>
        This case study explores the frontend architecture and implementation behind real-time updates, message threads,
        attachments, translations, and reusable Vue components.
      </p>
    </CaseStudyHero>

    <BrowserFrame class="mx-5" url="anytask.com/my_messages">
      <img src="../../assets/messaging_system.png" alt="" />
    </BrowserFrame>

    <PageDivider />

    <ChallengeSection>
      <p>
        Building a real-time messaging system involved much more than creating a chat interface. The feature needed to
        support live communication across multiple areas of the platform while remaining responsive, reliable, and easy
        to maintain.
      </p>

      <p>
        Messages had to appear instantly without page refreshes, conversations needed to stay synchronised across
        different clients, and shared functionality such as translation, attachments, and reusable message components
        had to behave consistently wherever messaging was available. At the same time, the implementation needed to
        integrate cleanly with the existing Vue application without introducing unnecessary complexity or performance
        issues.
      </p>
    </ChallengeSection>

    <CaseStudyContainer>
      <CaseStudySection>
        <template #media>
          <BrowserFrame url="anytask.com/my_messages">
            <div class="p-5 md:p-12 bg-[#f5f6f7]">
              <video preload="metadata" :src="realtimeVideo" autoplay loop muted playsinline></video>
            </div>
          </BrowserFrame>
        </template>

        <h3>1. Real-Time Updates</h3>

        <p>
          The messaging system used AWS AppSync GraphQL subscriptions to deliver real-time updates without polling or
          manual refreshes. Incoming events were merged into the existing conversation state, allowing new messages to
          appear instantly while maintaining message order and UI consistency.
        </p>

        <p>
          The same subscription architecture also powered features such as read receipts, ensuring message status
          updates were reflected immediately between users. This event-driven approach kept the frontend synchronised
          with backend changes while providing a smooth, responsive chat experience.
        </p>

        <CodeSnippet
          filename="MyMessages.vue"
          lang="javascript"
          :code="`subscription.onMessage((message) => {
  this.addMessageToConversation(message)
  this.updateThread(message)
})
`"
        />
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection reverse>
        <template #media>
          <BrowserFrame url="anytask.com/my_messages">
            <div class="p-2 md:p-12 bg-white">
              <video preload="metadata" :src="translationVideo" autoplay loop muted playsinline></video>
            </div>
          </BrowserFrame>
        </template>

        <h3>2. Message Translations</h3>

        <p>
          To support communication between users across different languages, each message was given an individual
          translation control.
        </p>

        <p>
          When a user requests a translation, the message is sent to Google Translate and the translated response is
          stored directly on the message object. This avoids unnecessary repeat requests, allowing users to toggle
          between the original and translated versions instantly.
        </p>

        <CodeSnippet
          class=""
          filename="MyMessages.vue"
          lang="javascript"
          :code="`if (this.message.translation) {
  this.message.showTranslation = true
} else {
  translateMessage(this.message)
}
`"
        />
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection>
        <template #media>
          <BrowserFrame url="anytask.com/my_messages">
            <div class="p-5 md:p-10 bg-white">
              <video preload="metadata" :src="dataLoadingVideo" autoplay loop muted playsinline></video>
            </div>
          </BrowserFrame>
        </template>

        <h3>3. Scalable data loading</h3>

        <p>
          To keep the messaging experience responsive, conversations and inbox threads were loaded incrementally rather
          than all at once.
        </p>

        <p>
          Only the most recent messages and thread previews were requested initially. As users scrolled, older content
          was seamlessly fetched and appended to the existing list, allowing the interface to scale efficiently even for
          users with extensive message histories.
        </p>

        <CodeSnippet
          class=""
          filename="MyMessages.vue"
          lang="javascript"
          :code="`handleScroll() {
  ApiService.getMessages(
    this.threadHash,
    this.lastLoadedMessageHash
  ).then((response) => {
    this.messages.unshift(...response.messages)

    this.lastLoadedMessageHash =
      response.lastLoadedMessageHash
  })
}
`"
        />
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection reverse>
        <template #media>
          <BrowserFrame url="anytask.com/seller/example_task_page">
            <div class="md:p-12 bg-white">
              <video preload="metadata" :src="quickMessageVideo" autoplay loop muted playsinline></video>
            </div>
          </BrowserFrame>
        </template>

        <h3>4. Reusable Messaging Components</h3>

        <p>
          Shortly after launching the main messaging system, a lightweight quick chat feature was introduced on product
          and profile pages, allowing buyers to contact sellers without leaving the page.
        </p>

        <p>
          Because the messaging system was built from reusable Vue components and shared conversation logic, the
          existing UI and state management could be repurposed with minimal additional development. This reduced code
          duplication, accelerated delivery, and maintained a consistent user experience across the platform.
        </p>

        <CodeSnippet
          class=""
          filename="QuickMessageBox.vue"
          lang="vue-html"
          :code="`<MessageItem :message=&quot;message&quot;  />

<LastActive
  :lastActive=&quot;thread.recipient.last_active&quot;
  :compact=&quot;true&quot;
/>

<MessageInput
  :loading=&quot;sending&quot;
  :compact=&quot;true&quot;
  @inputUpdated=&quot;updateInput&quot;
  @send=&quot;sendMessage&quot;
/>
`"
        />
      </CaseStudySection>
    </CaseStudyContainer>
  </div>
</template>
