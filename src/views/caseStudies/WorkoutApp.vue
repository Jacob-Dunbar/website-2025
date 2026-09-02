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
import WorkoutCompetitiveTable from "../../components/WorkoutCompetitiveTable.vue";

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
    WorkoutCompetitiveTable,
  },
};
</script>

<template>
  <ScrollNavigator
    ref="scrollNavigator"
    :darkLogo="darkLogo"
    :sections="[
      { id: 'se_hero', label: 'home' },
      { id: 'w_problem', label: '01 → The problem' },
      { id: 'w_research', label: '02 → Research' },
      { id: 'w_synthesis', label: '03 → Synthesis' },
      { id: 'w_exploration', label: '04 → UX Exploration' },
      { id: 'w_ui', label: '05 → UI Design' },
    ]"
  />

  <div class="flex flex-col items-center gap-10 md:gap-28 pb-26 bg-main-light">
    <CaseStudyHero
      @toFirst="$refs.scrollNavigator.scrollTo('se_challenge')"
      id="se_hero"
      title="Workout App"
      :roles="['UX/UI Designer', 'Frontend Developer']"
      :tools="['Figma', 'React']"
      timeline="Ongoing"
    >
      <span
        class="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-white text-gray-800 align-middle ml-2"
      >
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full rounded-full bg-gray-800 opacity-80 animate-ping"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-gray-800"></span>
        </span>

        In progress
      </span>
      <p>
        Most existing workout app help you create and track progress within a rigit programme that leaves little
        flexiblity and doesnt allow for real life complications.
      </p>

      <p>
        I also noticed that most train reqiems put far too little focus on recovery, or allow for each muscle group to
        recovery at their own pace.
      </p>

      <p>
        So i started with the question: 'Could an app adapt the session to the user, instead of tasking the user to
        adapt themselves to the programme?'
      </p>
    </CaseStudyHero>

    <div class="relative flex gap-12 my-10 mx-5 overflow-clip">
      <img
        loading="lazy"
        src="../../assets/workoutApp/Character.png"
        alt=""
        class="relative md:w-[200px] -mx-8 h-auto"
      />
      <img
        loading="lazy"
        src="../../assets/workoutApp/Character2.png"
        alt=""
        class="relative -mx-8 md:w-[200px] h-auto"
      />
      <img
        loading="lazy"
        src="../../assets/workoutApp/Character3.png"
        alt=""
        class="relative -mx-8 md:w-[200px] h-auto"
      />
      <img
        loading="lazy"
        src="../../assets/workoutApp/Character4.png"
        alt=""
        class="relative -mx-8 md:w-[200px] h-auto"
      />
    </div>

    <ChallengeSection title="01 → The problem" id="w_problem">
      <p>
        People who want to train consistently can struggle to know what they should do each time they go to the gym.
        Existing training apps often rely on rigid programmes or leave users to plan their own workouts, making it
        difficult to balance progression, recovery and the time available to train.
      </p>
      <h2>Initial hypothesis</h2>
      <p>I began the project with three assumptions about how this problem could be addressed.:</p>

      <ul>
        <li class="flex !gap-4">
          <font-awesome-icon class="mb-auto mt-1" icon="circle-check" />
          <div>
            <h3 class="font-bold">Training should be governed by recovery</h3>
            <p>
              The app should understand what the user has trained recently rather than treating every workout as an
              isolated event.
            </p>
          </div>
        </li>
        <li class="flex !gap-4">
          <font-awesome-icon class="mb-auto mt-1" icon="circle-check" />
          <div>
            <h3 class="font-bold">Training should adapt to the user</h3>
            <p>
              Workouts should flex around the user's available time and preferences, while still providing enough
              guidance to make deciding what to do effortless.
            </p>
          </div>
        </li>
        <li class="flex !gap-4">
          <font-awesome-icon class="mb-auto mt-1" icon="circle-check" />
          <div>
            <h3 class="font-bold">The experience should make training rewarding</h3>
            <p>
              A satisfying and engaging experience should encourage users to return regularly, helping turn training
              from something they have to do into a habit they want to maintain.
            </p>
          </div>
        </li>
      </ul>

      <p>These were assumptions, not conclusions. I wanted to test them before designing the product.</p>
    </ChallengeSection>

    <ChallengeSection title="02 → Research" id="w_research" visual>
      <p>
        Before designing anything, I wanted to understand how people actually decide what to train, what gets in the
        way, and how existing fitness apps fit into their routines. I broke the research into three areas:
      </p>

      <ul>
        <li class="flex-col !items-start !gap-0 mb-2">
          <h3 class="font-bold text-lg">User research</h3>
          <p>How do people actually plan and modify their workouts, and what problems do they encounter?</p>
        </li>
        <li class="flex-col !items-start !gap-0 mb-2">
          <h3 class="font-bold text-lg">Competitive research</h3>
          <p>How do existing fitness products approach workout selection, recovery, flexibility and motivation?</p>
        </li>
        <li class="flex-col !items-start !gap-0 mb-2">
          <h3 class="font-bold text-lg">Secondary research</h3>
          <p>What existing evidence exists around workout adherence, planning and fitness-app behaviour?</p>
        </li>
      </ul>

      <template #visual>
        <h2 class="text-2xl opacity-80 font-bold mb-2">User interviews</h2>
        <p class="">
          I interviewed gym-goers with different levels of experience, from newer lifters to more experienced regulars,
          to understand how they plan their training and what role (if any) fitness apps play in their routines. My
          findings were:
        </p>

        <div class="grid md:grid-cols-3 gap-8 mt-6 opacity-90">
          <div class="px-6 py-4 bg-gray-200 rounded-lg">
            <h3 class="font-bold text-lg">Apps feel like work</h3>
            <p>
              Participants often described fitness apps as clunky, awkward or tedious to use, particularly when logging
              workouts between sets.
            </p>
          </div>

          <div class="px-6 py-4 bg-gray-200 rounded-lg">
            <h3 class="font-bold text-lg">Motivation fades</h3>
            <p>
              Even when people initially enjoyed using an app, engagement often dropped over time and the app eventually
              became something they stopped opening.
            </p>
          </div>

          <div class="px-6 py-4 bg-gray-200 rounded-lg">
            <h3 class="font-bold text-lg">Training isn't predictable</h3>
            <p>
              People frequently changed their workouts depending on their available time, energy, gym conditions or what
              they had trained recently.
            </p>
          </div>
        </div>

        <div class="mt-8 mb-12">
          <p>
            This suggested the problem wasn't simply a lack of workout information. People already knew how to train,
            but existing tools often added friction rather than making the decision easier.
          </p>
        </div>

        <PageDivider class="scale-70 my-20 opacity-50" />

        <h2 class="text-2xl opacity-80 font-bold mb-2 mt-12">Competitive research</h2>

        <p class="my-8">
          With these themes in mind, I analysed a range of directly competing training apps to understand how existing
          products approach workout selection, recovery, flexibility and long-term engagement.
        </p>

        <WorkoutCompetitiveTable />
      </template>
    </ChallengeSection>

    <ChallengeSection title="03 → Synthesis" id="w_synthesis" visual>
      <h2 class="text-2xl opacity-80 font-bold mb-2">From findings to opportunity</h2>

      <p>
        The research highlighted an opportunity beyond simply building a better workout tracker. People needed something
        useful enough to keep using, flexible enough to fit around real life, and engaging enough to help build a habit.
      </p>

      <div class="flex flex-col gap-6 mt-6 opacity-90">
        <div>
          <h3 class="font-bold text-lg">Make fitness engaging</h3>
          <p>Use game-like interactions, visual feedback and rewards to make progress feel immediately satisfying.</p>
        </div>

        <div>
          <h3 class="font-bold text-lg">Adapt to real life</h3>
          <p>Training isn't always predictable, so workouts need to adapt to time, recovery and circumstances.</p>
        </div>

        <div>
          <h3 class="font-bold text-lg">Stay useful over time</h3>
          <p>Experienced gym-goers still need a practical tool for tracking workouts, progression and performance.</p>
        </div>
      </div>

      <template #visual>
        <h2 class="text-2xl opacity-80 font-bold mb-2">The concept</h2>

        <p class="mb-10">
          I explored a gamified workout app designed to make fitness feel rewarding from the very beginning. By turning
          everyday actions like completing sets, finishing workouts and hitting milestones into opportunities for
          immediate visual feedback and rewards, the app can help bridge the gap between starting a fitness journey and
          seeing the longer-term benefits of training. At the same time, the experience needs to remain flexible and
          useful enough to support users as their goals and training become more advanced.
        </p>

        <h2 class="text-2xl opacity-80 font-bold mb-2">Product principles</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 opacity-90">
          <div class="px-6 py-5 bg-gray-200 rounded-lg">
            <div class="text-sm opacity-50 font-bold mb-2">01</div>
            <h3 class="font-bold text-lg">Make progress feel rewarding</h3>
            <p>Every session should feel like an achievement.</p>
          </div>

          <div class="px-6 py-5 bg-gray-200 rounded-lg">
            <div class="text-sm opacity-50 font-bold mb-2">02</div>
            <h3 class="font-bold text-lg">Reduce decision-making</h3>
            <p>Help users know what to train without rigid planning.</p>
          </div>

          <div class="px-6 py-5 bg-gray-200 rounded-lg">
            <div class="text-sm opacity-50 font-bold mb-2">03</div>
            <h3 class="font-bold text-lg">Stay flexible</h3>
            <p>Adapt workouts to available time, recovery and circumstances.</p>
          </div>

          <div class="px-6 py-5 bg-gray-200 rounded-lg">
            <div class="text-sm opacity-50 font-bold mb-2">04</div>
            <h3 class="font-bold text-lg">Remain useful beyond the honeymoon</h3>
            <p>Let the product evolve from motivation into a genuinely useful training tool.</p>
          </div>
        </div>
      </template>
    </ChallengeSection>

    <ChallengeSection title="04 → UX Exploration" id="w_exploration" visual>
      <span
        class="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-black text-gray-100 align-middle ml-2"
      >
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full rounded-full bg-white opacity-80 animate-ping"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
        </span>

        In progress
      </span>
      <h2 class="text-2xl opacity-80 font-bold mb-2">Exploring possible solutions</h2>

      <p>
        I turned the research findings into prototypes, exploring different ways to make workout selection, logging and
        progression feel simple, flexible and rewarding.
      </p>

      <div class="flex flex-col items-stretch gap-6 md:gap-4 opacity-90">
        <div class="">
          <h3 class="font-bold text-xl mb-1">01 - Explore</h3>
          <p>Prototype different solutions and flows.</p>
        </div>

        <div class="">
          <h3 class="font-bold text-xl mb-1">02 - Test</h3>
          <p>Put the prototypes in front of users.</p>
        </div>

        <div class="">
          <h3 class="font-bold text-xl mb-1">03 - Iterate</h3>
          <p>Use feedback to refine the experience.</p>
        </div>
      </div>

      <template #visual>
        <img loading="lazy" src="../../assets/workoutApp/flow.png" alt="" class="relative w-full h-auto" />

        <p class="my-8 md:my-20">
          After outlining the flow, I explored different ideas through wireframes and built a low-fidelity prototype in
          React Native. Hosting the prototype online allowed real users to test the core flow and functionality, helping
          me gather early feedback before investing heavily in the visual design.
        </p>

        <div class="flex flex-col md:flex-row w-full gap-8 md:gap-20">
          <div class="w-full md:w-1/2 flex gap-5">
            <img src="../../assets/workoutApp/wireframe1.png" class="flex-1 min-w-0 h-auto" />
            <img src="../../assets/workoutApp/wireframe2.png" class="flex-1 min-w-0 h-auto" />
            <img src="../../assets/workoutApp/wireframe3.png" class="flex-1 min-w-0 h-auto" />
          </div>

          <div class="w-full md:w-1/2 flex gap-5">
            <img src="../../assets/workoutApp/proto1.png" class="flex-1 min-w-0 h-auto" />
            <img src="../../assets/workoutApp/proto2.png" class="flex-1 min-w-0 h-auto" />
            <img src="../../assets/workoutApp/proto3.png" class="flex-1 min-w-0 h-auto" />
          </div>
        </div>
      </template>
    </ChallengeSection>

    <ChallengeSection title="05 → UI Design" id="w_ui" visual>
      <span
        class="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-black text-gray-100 align-middle ml-2"
      >
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full rounded-full bg-white opacity-80 animate-ping"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
        </span>

        In progress
      </span>

      <p>
        With the core UX established, I developed the visual language and interactions around the idea of making
        progress feel immediate, rewarding and tangible. I created a bold, playful interface inspired by retro games,
        using pixel fonts, progress bars and nostalgic data visualisation to make progress feel fun and tangible. I also
        experimented with layered transparent PNGs and CSS-controlled fills to create more expressive UI elements.
      </p>

      <template #visual>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-18 mt-10">
          <div class="flex-1 p-6 md:p-12 border border-gray-300 rounded-lg">
            <h2 class="text-xl opacity-80 font-bold mb-2">Bars and Sliders</h2>

            <p>
              I knew that data visualisation would be key for this project so I played around with different progress
              bars
            </p>

            <div class="relative w-full overflow-hidden">
              <div class="relative flex flex-col gap-5">
                <!-- Bar 3 -->
                <div class="relative overflow-hidden">
                  <div class="absolute inset-0 bg-gray-900 opacity-40"></div>
                  <div class="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 animate-fill-bar"></div>

                  <img loading="lazy" src="../../assets/workoutApp/bar3.png" alt="" class="relative w-full h-auto" />
                </div>

                <!-- Bar 1 -->
                <div class="relative overflow-hidden">
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-green-300 to-yellow-400 h-[90%] opacity-75 animate-fill-bar animation-delay-1"
                  ></div>

                  <img loading="lazy" src="../../assets/workoutApp/bar1.png" alt="" class="relative w-full h-auto" />
                </div>

                <!-- Bar 2 -->
                <div class="relative overflow-hidden -mt-[1px]">
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-[#254AE0] to-[#CF13E8] animate-fill-bar animation-delay-2"
                  ></div>

                  <img loading="lazy" src="../../assets/workoutApp/bar2.png" alt="" class="relative w-full h-auto" />
                </div>
              </div>
            </div>
          </div>

          <div class="flex-1 p-6 md:p-12 border border-gray-300 rounded-lg">
            <h2 class="text-xl opacity-80 font-bold mb-2">Character</h2>

            <p>
              A game-inspired character that reacts to interactions and visibly powers up as users complete workouts.
            </p>

            <div class="relative flex -gap-5 mt-10">
              <img
                loading="lazy"
                src="../../assets/workoutApp/Character.png"
                alt=""
                class="relative w-full -mx-8 h-auto"
              />
              <img
                loading="lazy"
                src="../../assets/workoutApp/Character2.png"
                alt=""
                class="relative -mx-8 w-full h-auto"
              />
              <img
                loading="lazy"
                src="../../assets/workoutApp/Character3.png"
                alt=""
                class="relative -mx-8 w-full h-auto"
              />
              <img
                loading="lazy"
                src="../../assets/workoutApp/Character4.png"
                alt=""
                class="relative -mx-8 w-full h-auto"
              />
            </div>
          </div>

          <div class="flex-1 p-6 md:p-12 border border-gray-300 rounded-lg">
            <h2 class="text-xl opacity-80 font-bold mb-2">Badges and Medals</h2>

            <p>
              I also explored medals and achievements as a way to reward users for completing workouts and maintaining
              training streaks.
            </p>

            <div class="relative flex gap-5 mt-10">
              <img loading="lazy" src="../../assets/workoutApp/5kg.png" alt="" class="relative w-full h-auto" />
              <img loading="lazy" src="../../assets/workoutApp/10kg.png" alt="" class="relative w-full h-auto" />
              <img loading="lazy" src="../../assets/workoutApp/20kg.png" alt="" class="relative w-full h-auto" />
              <img loading="lazy" src="../../assets/workoutApp/25kg.png" alt="" class="relative w-full h-auto" />
            </div>
            <div class="relative flex gap-5">
              <img loading="lazy" src="../../assets/workoutApp/1st.png" alt="" class="relative w-full h-auto" />
              <img loading="lazy" src="../../assets/workoutApp/2nd.png" alt="" class="relative w-full h-auto" />
              <img loading="lazy" src="../../assets/workoutApp/3rd.png" alt="" class="relative w-full h-auto" />
            </div>
          </div>

          <div class="flex-1 p-6 md:p-12 border border-gray-300 rounded-lg">
            <h2 class="text-xl opacity-80 font-bold mb-2">Text and Fonts</h2>

            <p>
              Inspired by games like Tekken and Street Fighter, I explored two contrasting font styles: energetic
              Asian-inspired brush scripts and nostalgic pixel fonts, balancing an analogue feel with a digital gaming
              aesthetic.
            </p>

            <div class="relative flex flex-col gap-5 mt-10">
              <img
                loading="lazy"
                src="../../assets/workoutApp/fox-font.png"
                alt=""
                class="relative max-w-[200px] h-auto"
              />
              <h1 class="!font-jersey text-5xl">WORKOUT</h1>

              <h2 class="!font-press-start text-3xl">LEVEL UP</h2>

              <h2 class="!font-bungee-inline text-4xl">ACHIEVEMENT</h2>

              <p class="!font-audiowide text-2xl">Complete your workout to earn XP.</p>
            </div>
          </div>
        </div>
      </template>
    </ChallengeSection>

    <div>
      <h1 class="mx-auto text-7xl text-gray-800 !font-jersey">To be continued...</h1>
    </div>
  </div>
</template>

<style scoped>
@keyframes animate-fill-bar {
  0% {
    width: 0%;
  }

  40% {
    width: 100%;
  }

  60% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
}

.animate-fill-bar {
  animation: animate-fill-bar 10s ease-in-out infinite;
}

.animation-delay-1 {
  animation-delay: 0.5s;
}

.animation-delay-2 {
  animation-delay: 1s;
}

.animate-fill-bar {
  transform: skewX(-30deg);
  transform-origin: left;
}
</style>
