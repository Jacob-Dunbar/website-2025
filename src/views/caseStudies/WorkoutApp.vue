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
import WorkoutVideo from "../../assets/workoutApp/workout1.mp4";
import WorkoutVideoClose from "../../assets/workoutApp/workout2.mp4";
import JournalEntry from "../../components/JournalEntry.vue";
import PhoneFrame from "../../components/PhoneFrame.vue";
import CodeSnippet from "../../components/CodeSnippet.vue";
import OrderToggle from "../../components/OrderToggle.vue";

export default {
  data() {
    return {
      searchVideo,
      WorkoutVideo,
      WorkoutVideoClose,
      before,
      after,
      reversed: false,
      OrderToggle,
      setBadgeCode: `
    const completedReps = Number(reps[setIndex] ?? 0);

    const badge =
      completedReps > targetReps ? "limit" :
      completedReps === targetReps ? "perfect" :
      null;

    return (
      <View className="flex-row items-center gap-2">
        <Text>Set {setIndex + 1}</Text>
        <Text>{completedReps} reps</Text>

        {badge && <SetBadge message={badge} />}
      </View>
    );`,
      recoveryCountdownCode: `import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";

export default function RecoveryCountdown({ progress }) {
  return (
    <View className="relative h-8 overflow-hidden">
      <View
        className="absolute h-full"
        style={{ width: \`\${progress * 100}%\` }}
      >
        <LinearGradient
          colors={["#41a715", "#bdb709"]}
          style={{ flex: 1 }}
        />

        <Image
          source={require("../../assets/UI/bar5.png")}
          className="absolute w-full h-full"
          resizeMode="stretch"
        />
      </View>
    </View>
  );
}`,
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
    JournalEntry,
    PhoneFrame,
    CodeSnippet,
    OrderToggle,
  },
  computed: {
    navigatorSections() {
      const journalSections = [
        { id: "w_visual_direction", label: "01 → Finding the visual direction" },
        { id: "w_progression", label: "02 → Making progression feel rewarding" },
        { id: "w_sliders", label: "03 → Games bars and sliders" },
        { id: "w_implementation", label: "04 → Making it real" },
        { id: "w_interface", label: "05 → Trying out the interface" },
        { id: "w_flow", label: "06 → Figuring out the flow" },
        { id: "w_concept", label: "07 → Figuring out what Squeeze could be" },
        { id: "w_research", label: "08 → Trying to understand the problem" },
        { id: "w_problem", label: "09 → A problem worth exploring" },
      ];

      return [{ id: "w_hero", label: "home" }, ...(this.reversed ? [...journalSections].reverse() : journalSections)];
    },
  },
};
</script>

<template>
  <ScrollNavigator ref="scrollNavigator" :darkLogo="darkLogo" :sections="navigatorSections" />

  <div class="flex flex-col items-center gap-10 md:gap-28 pb-26 bg-main-light">
    <CaseStudyHero
      @toFirst="$refs.scrollNavigator.scrollTo(navigatorSections[1].id)"
      id="w_hero"
      title="Gamified Workout App"
      :roles="['UX/UI Designer', 'Frontend Developer']"
      :tools="['Figma', 'React Native']"
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
        I’ve been exploring how gamification could make the fitness journey more engaging, motivating and rewarding, not
        just by tracking progress, but by making the process itself feel more like a game.
      </p>

      <p>
        I started noticing that a lot of workout apps are built around rigid programmes and tracking. They can be great
        for following a plan, but real life doesn’t always work that way. Your schedule changes, your energy changes,
        and different parts of your body recover at different rates.
      </p>

      <p>
        So I started with a simple question: what if a workout app could adapt to the user, rather than expecting the
        user to adapt to the programme?
      </p>
    </CaseStudyHero>

    <OrderToggle v-model:reversed="reversed" />
    <div class="flex gap-16" :class="reversed ? 'flex-col-reverse' : 'flex-col'">
      <JournalEntry :number="9" title="Finding the visual direction" date="August 2026" id="w_visual_direction" visual>
        <p>
          Starting to build out the screens made me realise that the visual direction wasn't quite there yet. I had a
          rough idea of what I wanted Squeeze to look like, but seeing it as an actual interface made it clear that I
          needed to define the aesthetic more deliberately.
        </p>

        <p>
          I knew I didn't want Squeeze to look like a typical fitness app. I wanted it to feel much more like something
          you'd find inside a game, so I started collecting references from retro games, pixel art and arcade
          interfaces.
        </p>

        <p>
          I wasn't trying to copy any one style. Instead, I was looking for elements I could bring into Squeeze, from
          chunky typography and bright colours to progress bars, sprites and decorative UI.
        </p>

        <template #visual>
          <img loading="lazy" src="../../assets/workoutApp/moodboard.png" alt="" class="relative w-full h-auto" />
        </template>
      </JournalEntry>

      <PageDivider class="my-16" />

      <JournalEntry :number="8" title="Making progression feel rewarding" date="August 2026" id="w_progression" visual>
        <p>
          I wanted completing a set to feel like an event rather than just another number changing on screen. I started
          experimenting with badges that appear when the user hits or exceeds their target, with more rewarding graphics
          for better performances.
        </p>

        <template #visual>
          <div class="flex flex-col md:flex-row w-full gap-8 md:gap-20">
            <div class="flex-1 flex flex-col p-6 md:p-12 border border-gray-300 gap-5 rounded-lg">
              <p>
                I wanted the badge to appear in the middle of the screen, then shink down towards the set that triggered
                it, which proved Challenging at first. I ended up using a modal as the starting point, giving the
                animation a consistent origin before transitioning into the UI.
              </p>

              <p>
                I also built the badge as a reusable component, so the same system can handle different badges, targets
                and positions without rebuilding each animation from scratch.
              </p>

              <video
                preload="metadata"
                :src="WorkoutVideoClose"
                autoplay
                loop
                muted
                playsinline
                class="w-full rounded-[1.5rem]"
              ></video>
            </div>

            <CodeSnippet class="!w-1/2" filename="SetBadge.tsx" lang="tsx" :code="setBadgeCode" />
          </div>
        </template>
      </JournalEntry>

      <PageDivider class="my-16" />

      <JournalEntry :number="7" title="Games bars and sliders" date="August 2026" id="w_sliders" visual>
        <p>
          I knew Squeeze was going to take a lot of inspiration from classic game UI, and progress bars felt like a good
          place to start. Workout tracking is naturally quite data-heavy, with lots of numbers, reps, weights and
          timers, so I didn't want the interface to become a wall of information.
        </p>

        <p>
          Instead, I started looking for ways to communicate some of that information visually. Progress bars, sliders
          and other game-like UI elements could make the data easier to understand while also giving the interface more
          of the character I was looking for.
        </p>

        <template #visual>
          <div class="flex flex-col md:flex-row w-full gap-8 md:gap-20">
            <div class="flex-1 flex flex-col p-6 md:p-12 border border-gray-300 gap-5 rounded-lg">
              <p>
                I wanted to combine custom graphics with CSS-controlled elements, rather than making every state a
                separate image. This would let me use graphics for the visual style while keeping things like progress
                and animation dynamic.
              </p>

              <div class="relative w-full overflow-hidden">
                <div class="relative flex flex-col">
                  <!-- Graphics -->
                  <h3>PNG Graphics:</h3>
                  <div class="relative overflow-hidden p-5 mb-3">
                    <img loading="lazy" src="../../assets/workoutApp/bar1.png" alt="" class="relative w-full h-auto" />
                    <img loading="lazy" src="../../assets/workoutApp/bar2.png" alt="" class="relative w-full h-auto" />
                  </div>

                  <h3>CSS Bars:</h3>
                  <!-- Bars -->
                  <div class="relative flex flex-col p-5 mb-3 gap-3 w-full">
                    <div
                      class="inset-0 bg-gradient-to-r from-green-500 to-yellow-400 h-8 opacity-75 animate-fill-bar animation-delay-1"
                    ></div>
                    <div
                      class="inset-0 bg-gradient-to-r from-[#254AE0] to-[#CF13E8] h-8 animate-fill-bar animation-delay-2"
                    ></div>
                  </div>

                  <h3>Layered together:</h3>

                  <div class="relative flex flex-col p-5 mb-3 gap-3 w-full">
                    <div class="relative overflow-hidden">
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-400 h-[90%] opacity-75 animate-fill-bar skewed animation-delay-1"
                      ></div>

                      <img
                        loading="lazy"
                        src="../../assets/workoutApp/bar1.png"
                        alt=""
                        class="relative w-full h-auto"
                      />
                    </div>

                    <div class="relative overflow-hidden -mt-[1px]">
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-[#254AE0] to-[#CF13E8] animate-fill-bar skewed animation-delay-2"
                      ></div>

                      <img
                        loading="lazy"
                        src="../../assets/workoutApp/bar2.png"
                        alt=""
                        class="relative w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CodeSnippet class="!w-1/2" filename="RecoveryCountdown.tsx" lang="tsx" :code="recoveryCountdownCode" />
          </div>

          <p class="mt-8 md:mt-20">
            This gave me a simple approach I can build on as the interface develops. I can create different graphic
            assets in Figma and layer them over dynamic React Native elements, giving me much more freedom to experiment
            with the UI without having to create every possible state as a separate asset.
          </p>

          <p>
            This is still something I'm experimenting with, but I like the idea of treating the interface more like a
            game HUD than a traditional fitness app.
          </p>
        </template>
      </JournalEntry>

      <PageDivider class="my-16" />

      <JournalEntry :number="6" title="Making it real" date="August 2026" id="w_implementation" visual>
        <p>
          Once I had a flow and layout I was reasonably happy with, I wanted to stop looking at static screens and
          actually use it.
        </p>

        <p>
          I built the first version in React Native and put together a simple working prototype covering the main user
          flow.
        </p>

        <p>
          This was also the first time I could give it to other people and watch them use it. That was useful pretty
          quickly, things that seemed obvious when looking at the screens weren't always as obvious once the app was in
          someone's hands. From here, I can start testing the experience properly and iterating.
        </p>

        <template #visual>
          <div class="flex flex-col md:flex-row w-full gap-8 md:gap-20">
            <PhoneFrame>
              <img src="../../assets/workoutApp/proto1.png" class="flex-1 min-w-0 h-auto" />
            </PhoneFrame>
            <PhoneFrame>
              <img src="../../assets/workoutApp/proto2.png" class="flex-1 min-w-0 h-auto" />
            </PhoneFrame>
            <PhoneFrame>
              <img src="../../assets/workoutApp/proto3.png" class="flex-1 min-w-0 h-auto" />
            </PhoneFrame>
          </div>
        </template>
      </JournalEntry>

      <PageDivider class="my-16" />

      <JournalEntry :number="5" title="Trying out the interface" id="w_interface" date="August 2026" visual>
        <p>Once I had a rough flow, I started sketching out what the individual screens could look like.</p>

        <p>
          I kept these deliberately rough at first. I wanted to concentrate on what information needed to be there and
          how the screens connected together, rather than getting distracted by the visual design. Although i did at
          this stage start to think about game UI elements and how they could be used creativly and playfully to
          visualise data.
        </p>

        <p>
          I went through a few different layouts, moving things around and simplifying where I could. At this stage I
          was mainly trying to answer a simple question: <strong>does this actually feel easy to use?</strong>
        </p>

        <template #visual>
          <div class="flex flex-col md:flex-row w-full gap-8 md:gap-20">
            <img src="../../assets/workoutApp/wireframe1.png" class="flex-1 min-w-0 h-auto" />
            <img src="../../assets/workoutApp/wireframe2.png" class="flex-1 min-w-0 h-auto" />
            <img src="../../assets/workoutApp/wireframe3.png" class="flex-1 min-w-0 h-auto" />
          </div>
        </template>
      </JournalEntry>

      <PageDivider class="my-16" />

      <JournalEntry :number="4" title="Figuring out the flow" id="w_flow" date="August 2026" visual>
        <p>
          With the basic idea starting to make sense, I wanted to figure out what the actual experience should look
          like. I mapped out the main flow from creating a workout through to completing it, trying to keep the number
          of decisions as low as possible.
        </p>

        <p>
          At the same time, I started thinking about how the game-like side of Squeeze could actually work. The basic
          idea was: <strong>choose → train → complete → get rewarded → come back and do it again.</strong>
          Completing sets and workouts could feed into things like XP, progression and rewards, giving the user
          something immediate to work towards while still keeping the actual training at the centre of the experience.
        </p>

        <template #visual>
          <img loading="lazy" src="../../assets/workoutApp/flow.png" alt="" class="relative w-full h-auto" />

          <p class="my-8 md:my-20">
            Mapping this out helped me see how the different parts of the idea needed to fit together. The workout flow
            couldn't just be a series of screens for logging exercises — it also needed to create a reason to come back.
            It also highlighted a few things I wasn't completely sure about yet, particularly how much control the user
            should have over their workout and how the recovery system should influence what they see.
          </p>
        </template>
      </JournalEntry>

      <PageDivider class="my-16" />

      <JournalEntry :number="3" title="Figuring out what Squeeze could be" id="w_concept" date="August 2026" visual>
        <p>
          After going through the interviews and looking at other apps, I started to get a clearer idea of where I
          wanted to take Squeeze.
        </p>

        <p>
          What stood out to me was that I probably didn't want to build another workout tracker. There are already
          plenty of those. The more interesting problem seemed to be helping people actually want to keep training,
          while making the app useful enough that they would still want it once the novelty wore off.
        </p>

        <template #visual>
          <h2 class="text-2xl opacity-80 font-bold mb-10">The idea started to take shape</h2>

          <p class="mb-10">
            At this point I started exploring the idea of a gamified workout app. The basic thought was pretty simple:
            make the small things people do in the gym feel more rewarding. Completing a set, finishing a workout or
            hitting a milestone could all give some kind of immediate feedback. The hope was that this would make
            training feel a little more like progressing through a game, while the underlying product still helped with
            things like recovery, progression and deciding what to train. I didn't have the exact product figured out
            yet, but this gave me something concrete to start designing around.
          </p>

          <h2 class="text-2xl opacity-80 font-bold mb-10">A few things I wanted to keep in mind</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-90">
            <div class="px-6 py-5 bg-gray-200 rounded-lg">
              <h3 class="font-bold text-lg">01 - Make progress feel rewarding</h3>
              <p>Give people a reason to feel good about completing a workout.</p>
            </div>

            <div class="px-6 py-5 bg-gray-200 rounded-lg">
              <h3 class="font-bold text-lg">02 - Reduce the thinking</h3>
              <p>Make it easier to work out what to train without having to plan everything.</p>
            </div>

            <div class="px-6 py-5 bg-gray-200 rounded-lg">
              <h3 class="font-bold text-lg">03 - Keep it flexible</h3>
              <p>Let training change depending on time, recovery and what's happening that day.</p>
            </div>

            <div class="px-6 py-5 bg-gray-200 rounded-lg">
              <h3 class="font-bold text-lg">04 - Don't let the game get in the way</h3>
              <p>The gamification should make the experience better, not turn the app into a gimmick.</p>
            </div>
          </div>
        </template>
      </JournalEntry>

      <PageDivider class="my-16" />

      <JournalEntry :number="2" title="Trying to understand the problem" id="w_research" date="July 2026" visual>
        <p>
          Before jumping into designs, I wanted to get a better understanding of how people actually decide what to
          train. I was particularly interested in what makes that decision difficult, how people change their plans, and
          whether existing fitness apps actually help.
        </p>

        <p>
          I approached this from a few different angles: speaking to people who train, looking at other fitness apps,
          and reading around workout adherence and planning. I wasn’t trying to prove a particular idea at this stage. I
          mostly wanted to see whether the problem I had in mind was actually something other people experienced too.
        </p>

        <template #visual>
          <h2 class="text-2xl opacity-80 font-bold mb-2">User interviews</h2>

          <p>
            I spoke to gym-goers with different levels of experience, from newer lifters to people who train regularly.
            I wanted to understand how they plan their workouts, how much they change them, and what role fitness apps
            play. A few things came up repeatedly:
          </p>

          <div class="grid md:grid-cols-3 gap-8 mt-6 opacity-90">
            <div class="px-6 py-4 bg-gray-200 rounded-lg">
              <h3 class="font-bold text-lg">Apps can feel like work</h3>
              <p>Logging workouts between sets was often described as clunky, awkward or just a bit tedious.</p>
            </div>

            <div class="px-6 py-4 bg-gray-200 rounded-lg">
              <h3 class="font-bold text-lg">Motivation doesn't last</h3>
              <p>
                Some people enjoyed using an app at first, but eventually stopped opening it or found it became another
                thing to keep up with.
              </p>
            </div>

            <div class="px-6 py-4 bg-gray-200 rounded-lg">
              <h3 class="font-bold text-lg">Workouts change all the time</h3>
              <p>
                What people trained depended on things like their available time, energy, gym conditions and what they
                had trained recently.
              </p>
            </div>
          </div>

          <div class="mt-8 mb-12">
            <p>
              This made me question whether the main problem was really a lack of workout information. People generally
              knew how to train. The harder part seemed to be deciding what made sense for them on a particular day,
              without the app getting in the way.
            </p>
          </div>

          <PageDivider class="scale-70 my-16 opacity-50" />

          <h2 class="text-2xl opacity-80 font-bold mb-2 mt-12">Looking at other apps</h2>

          <p class="my-8">
            I then spent some time looking at existing training apps to see how they approached workout selection,
            recovery, flexibility and keeping people engaged over time. I wasn’t looking for a single app to copy. I
            wanted to understand what seemed to work, where the experience felt frustrating, and whether there was
            anything missing from the way these products helped people decide what to do next.
          </p>

          <WorkoutCompetitiveTable />
        </template>
      </JournalEntry>

      <PageDivider class="my-16" />

      <JournalEntry :number="1" title="A problem worth exploring" id="w_problem" date="July 2026">
        <p>
          I started Squeeze (working title) because I wanted to explore a different way of approaching workout apps.
          I’ve always found that the hardest part of training consistently isn’t necessarily the workout itself, it’s
          deciding what to do when you get to the gym.
        </p>

        <p>
          Most apps either give you a fixed programme or leave you to plan everything yourself. I wanted to see if there
          was a middle ground: something that could take recovery, progression and the time available into account,
          while still making the next workout feel simple.
        </p>

        <p>
          That became the starting point for Squeeze. I didn’t have all the answers yet, but I had a few ideas I wanted
          to explore, particularly around making training feel more personal, more adaptable and, eventually, a little
          more rewarding.
        </p>
      </JournalEntry>
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

.skewed {
  transform: skewX(-30deg);
  transform-origin: left;
}
</style>
