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
import WorkoutVideo from "../../assets/workoutApp/workout3.mp4";
import WorkoutVideoClose from "../../assets/workoutApp/workout2.mp4";
import GameVideo from "../../assets/workoutApp/game.mp4";
import JournalEntry from "../../components/JournalEntry.vue";
import PhoneFrame from "../../components/PhoneFrame.vue";
import CodeSnippet from "../../components/CodeSnippet.vue";
import OrderToggle from "../../components/OrderToggle.vue";
import SlideVideo from "../../assets/workoutApp/slide_interaction.mp4";
import slideCloseupVideo from "../../assets/workoutApp/rep_slider_closeup.mp4";
import originalRepInputVideo from "../../assets/workoutApp/original_rep_input.mp4";
import currentSlider from "../../assets/workoutApp/current_slider.mp4";
import badgeAnimationVideo from "../../assets/workoutApp/badge_animation.mp4";

export default {
  data() {
    return {
      searchVideo,
      badgeAnimationVideo,
      slideCloseupVideo,
      WorkoutVideo,
      GameVideo,
      WorkoutVideoClose,
      SlideVideo,
      originalRepInputVideo,
      currentSlider,
      before,
      after,
      reversed: false,
      OrderToggle,
      gameCode: `setCharacterX((current) => {

  let next = current;

  if (keys.current.left) { next -= MOVE_SPEED }

  if (keys.current.right) { next += MOVE_SPEED }

  next = Math.max( 0, Math.min(gameWidth.current, next )
);

  return next;
});
`,
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
      repSliderGestureCode: `const updateFromPosition = (x: number) => {
  if (!containerWidth) return

  const percentage = Math.max(0, Math.min(1, x / containerWidth))
  const value = Math.round(percentage * maxReps)

  onUpdateReps(Math.max(1, value))
}
`,
      clickVsDragCode: `const handleTouchEnd = () => {
  if (!hasMoved.current) {
    onSubmitSet()
    ...
    return
  }

  tapHintTimeout.current = setTimeout(() => {
    setShowTapToLog(true)
    ...
  }, 2000)
}`,
      touchInputCode: `{editing ? (
  <TextInput ... />
) : (
  <Pressable onPress={() => setEditing(true)}>
    <Text>{value}</Text>
  </Pressable>
)}
`,
      typographyCode: `  theme: {
    extend: {
      fontFamily: {
        grotesk: ["SpaceGrotesk_400Regular"],
        "grotesk-medium": ["SpaceGrotesk_500Medium"],
        "grotesk-semibold": ["SpaceGrotesk_600SemiBold"],
        "grotesk-bold": ["SpaceGrotesk_700Bold"],
        liberation: ["LiberationMono"],
        "liberation-bold": ["LiberationMonoBold"],
      },
    },
  }
`,
      colourCode: `export const colors = {
  primary: "#C3F400",
  secondary: "#A855F7",
  tertiary: "#EF4444",
  background: "#181B25",
  lightText: "#C4C9AC",
};
`,
      spacingCode: `// placeholder: Tailwind spacing implementation
export const spacing = {
  sm: "p-2",
  md: "p-4",
  lg: "p-8",
};
`,
      buttonComponentCode: `<ActionButton
  label="Save changes"
  type="primary"
  state={canSave ? "active" : "disabled"}
  onPress={handleCreateWorkout}
  className="flex-1"
/>
`,
      tagComponentCode: `<Tag
  label={isReady ? "Ready" : "Recovering"}
  type={isReady ? "primary" : "secondary"}
  size="small"
/>
`,
      progressComponentCode: `<RecoveryCountdown 
  progress={getProgress(workout)} 
/>
`,
      badgeAnimationCode1: `targetRef.current?.measureInWindow((x, y, width, height) => {
  const targetCenterX = x + width / 2 
  const targetCenterY = y + height / 2 
  translateX.setValue(SCREEN_WIDTH / 2 - targetCenterX) 
  translateY.setValue(SCREEN_HEIGHT / 2 - targetCenterY) 
})

Animated.parallel([
  Animated.timing(scale, {
    toValue: FINAL_SCALE,
    duration: 500,
    useNativeDriver: true,
  }),

  Animated.timing(translateX, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  }),

  Animated.timing(translateY, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  }),
])
`,
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
        { id: "w_badge_animation", label: "15 → Making progress feel physical" },
        { id: "w_design_system", label: "14 → Building Squeeze's design system" },
        { id: "w_rep_slider", label: "13 → Rep slider interaction" },
        { id: "w_fighting_game", label: "12 → Building a mini fighting game" },
        { id: "w_character_progression", label: "11 → Building character progression" },
        { id: "w_set_logging", label: "10 → Developing style and interaction" },
        { id: "w_visual_direction", label: "09 → Finding the visual direction" },
        { id: "w_progression", label: "08 → Making progression feel rewarding" },
        { id: "w_sliders", label: "07 → Games bars and sliders" },
        { id: "w_implementation", label: "06 → Making it real" },
        { id: "w_interface", label: "05 → Trying out the interface" },
        { id: "w_flow", label: "04 → Figuring out the flow" },
        { id: "w_concept", label: "03 → Figuring out what Squeeze could be" },
        { id: "w_research", label: "02 → Trying to understand the problem" },
        { id: "w_problem", label: "01 → A problem worth exploring" },
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
      title="Designing & Building a Workout App"
      :roles="['UX/UI Designer', 'Frontend Developer']"
      :tools="['Figma', 'React Native', 'Co-pilot', 'Tailwind CSS']"
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
        Squeeze is an ongoing exploration of interaction design and design engineering, built from the ground up in
        Figma and React Native.
      </p>

      <p>
        I originally started the project by exploring how gamification could make workouts feel more engaging and
        rewarding. As it developed, the focus expanded into a broader exploration of interaction, animation, visual
        design and how these ideas translate into polished, working interfaces.
      </p>

      <p>
        I’ve been designing interactions in Figma, implementing them myself and refining them through testing, while
        building a small design system and using AI throughout the process to accelerate concept development, visual
        exploration and implementation.
      </p>

      <div class="flex flex-col items-start gap-2 mt-8">
        <a
          href="https://squeeze.expo.app"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-gray-900 font-medium transition-transform hover:scale-[1.02]"
        >
          View WIP app online
          <font-awesome-icon icon="arrow-up-right-from-square" />
        </a>

        <p class="text-sm opacity-60">Best viewed on mobile · Feedback welcome</p>
      </div>
    </CaseStudyHero>

    <div class="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
      <PhoneFrame>
        <img src="../../assets/workoutApp/home_Screen.png" alt="Squeeze home screen" class="block w-full h-auto" />
      </PhoneFrame>

      <PhoneFrame>
        <img
          src="../../assets/workoutApp/details_Screen.png"
          alt="Squeeze exercise details screen"
          class="block w-full h-auto"
        />
      </PhoneFrame>

      <PhoneFrame>
        <img
          src="../../assets/workoutApp/new_workout_screen.png"
          alt="Squeeze new workout screen"
          class="block w-full h-auto"
        />
      </PhoneFrame>
    </div>

    <OrderToggle v-model:reversed="reversed" />

    <div class="flex gap-16" :class="reversed ? 'flex-col-reverse' : 'flex-col'">
      <JournalEntry
        :number="15"
        title="Making Progress Feel Physical"
        date="September 2026"
        id="w_badge_animation"
        visual
      >
        <p>
          I wanted hitting your target to feel special and exciting, rather than simply changing a number on screen.
          When a target is hit, a large reward badge appears, then shrinks and travels into its final position within
          the workout interface.
        </p>

        <p>
          The challenge was that the destination isn't fixed. Its position can change depending on the surrounding
          content and screen layout, so I couldn't simply animate the badge to a hard-coded coordinate.
        </p>

        <p>
          Instead, I measure the destination view at runtime with React Native's measureInWindow(), calculate its centre
          point, and use that position as the animation's destination. The badge can then scale and translate
          simultaneously, allowing the same animation to work regardless of where the destination appears on screen.
        </p>

        <template #visual>
          <div class="w-full flex flex-col gap-12">
            <div class="w-full flex justify-center">
              <PhoneFrame>
                <div class="relative md:min-h-[597px] bg-gray-900">
                  <video
                    preload="metadata"
                    :src="badgeAnimationVideo"
                    autoplay
                    loop
                    muted
                    playsinline
                    class="block w-full object-contain"
                  ></video>
                </div>
              </PhoneFrame>
            </div>

            <div class="w-full flex flex-col gap-6 p-6 md:p-12 border border-gray-300 bg-black/5 rounded-lg">
              <h3 class="text-2xl font-bold">Measuring the destination at runtime</h3>

              <p>
                Rather than animating to a fixed coordinate, the badge measures the destination view in real time and
                travels to its centre point, so the same animation works no matter where the destination sits on screen.
              </p>

              <CodeSnippet filename="SetBadge.tsx" lang="tsx" :code="badgeAnimationCode1" />
            </div>
          </div>
        </template>
      </JournalEntry>

      <PageDivider class="my-2 md:my-16" />

      <JournalEntry
        :number="14"
        title="Building Squeeze's Design System"
        date="September 2026"
        id="w_design_system"
        visual
      >
        <p>
          As Squeeze grew, I found myself repeatedly making the same visual decisions. I used Google Stitch to explore
          initial directions, then refined them in Figma and formalised them into a small design system.
        </p>

        <p>
          The system covers typography, colour, spacing, components, icons and interaction states, which I translated
          into reusable React Native components and Tailwind styles.
        </p>

        <template #visual>
          <div class="w-full flex flex-col gap-24">
            <div class="flex flex-col gap-8">
              <h3 class="text-2xl font-bold">The design system</h3>

              <p>
                I keep the core visual decisions together in a single reference, making it easier to maintain
                consistency as the product develops.
              </p>

              <div class="p-5 bg-black/75 rounded-xl">
                <img
                  loading="lazy"
                  src="../../assets/workoutApp/design_system.png"
                  alt="Full Figma design system sheet"
                  class="w-full h-auto"
                />
              </div>
            </div>

            <div class="flex flex-col gap-5">
              <h3 class="text-2xl font-bold">From Figma to Code</h3>

              <div class="w-full flex flex-col md:flex-row gap-12 mt-5">
                <div class="md:w-1/2 flex flex-col gap-6">
                  <h3 class="text-xl font-bold">Typography</h3>

                  <p>
                    Typography was one of the first parts of the visual language I formalised. Squeeze uses a
                    combination of display and supporting typefaces, with defined sizes and roles for headings,
                    numerical values, labels and supporting text. These were added to the Tailwind configuration so they
                    could be applied consistently through utility classes.
                  </p>

                  <CodeSnippet filename="tailwind.config.js" lang="js" :code="typographyCode" />
                </div>

                <div class="md:w-1/2 flex flex-col gap-6">
                  <h3 class="text-xl font-bold">Colour</h3>

                  <p>
                    I centralised the application's core colours so they could be changed globally rather than repeated
                    throughout the codebase. The same colour tokens are used for UI elements, typography and interaction
                    states, with a dedicated colours file also allowing them to be used where Tailwind classes aren't
                    suitable.
                  </p>

                  <CodeSnippet filename="colors.ts" lang="ts" :code="colourCode" />
                </div>
              </div>

              <div class="w-full flex flex-col gap-6 mt-5">
                <h3 class="text-xl font-bold">Reusable Components</h3>

                <p>
                  The system became more useful when I started applying these rules to reusable components. Instead of
                  recreating the same patterns on each screen, components encapsulate their visual structure while
                  receiving their content and state through props.
                </p>

                <div class="w-full flex flex-col md:flex-row gap-8">
                  <CodeSnippet class="md:!w-1/3" filename="Tag Implimentation" lang="tsx" :code="tagComponentCode" />
                  <CodeSnippet
                    class="md:!w-1/3"
                    filename="Button Implimentation"
                    lang="tsx"
                    :code="buttonComponentCode"
                  />
                  <CodeSnippet
                    class="md:!w-1/3"
                    filename="Recovery Countdown Implementation"
                    lang="tsx"
                    :code="progressComponentCode"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
      </JournalEntry>

      <PageDivider class="my-2 md:my-16" />

      <JournalEntry :number="13" title="Rep Slider Interaction" date="September 2026" id="w_rep_slider" visual reversed>
        <p>
          After testing an early version of Squeeze with users, I decided to temporarily reduce the emphasis on game
          mechanics and focus on making the core workout experience feel fast, intuitive and well-crafted.
        </p>
        <p>
          Logging reps is one of the most frequently repeated interactions in the app, so even small improvements to the
          interaction can have a significant impact over an entire workout.
        </p>

        <!-- <BrowserFrame class="mx-auto">
          <video
            preload="metadata"
            :src="slideCloseupVideo"
            autoplay
            loop
            muted
            playsinline
            class="relative z-10 block max-w-[300px] object-contain"
          ></video>
        </BrowserFrame> -->

        <template #visual>
          <div class="w-full flex flex-col gap-20">
            <div class="w-full flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/2 flex flex-col items-start gap-8">
                <h3 class="text-2xl font-bold">The original interaction</h3>
                <p>
                  The original interaction required users to tap a field, enter a number using the keyboard and submit
                  it. This could take up to five taps for a single value and caused the keyboard to repeatedly interrupt
                  the workout layout.
                </p>

                <p>
                  I wanted to replace this with a direct manipulation interaction that could be completed with a single
                  gesture.
                </p>
              </div>

              <div class="md:w-1/2 mx-auto">
                <div class="md:w-full flex items-center justify-center">
                  <PhoneFrame>
                    <div class="relative md:min-h-[597px] bg-gray-900">
                      <video
                        preload="metadata"
                        :src="originalRepInputVideo"
                        autoplay
                        loop
                        muted
                        playsinline
                        class="block w-full object-contain"
                      ></video>
                    </div>
                  </PhoneFrame>
                </div>
              </div>
            </div>

            <div class="w-full flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/2 mx-auto">
                <div class="md:w-full flex items-center justify-center">
                  <PhoneFrame>
                    <div class="relative md:min-h-[597px] bg-gray-900">
                      <video
                        preload="metadata"
                        :src="WorkoutVideo"
                        autoplay
                        loop
                        muted
                        playsinline
                        class="block w-full h-full object-contain"
                      ></video>
                    </div>
                  </PhoneFrame>
                </div>
              </div>

              <div class="md:w-1/2 flex flex-col items-start gap-8">
                <h3 class="text-2xl font-bold">Initial test</h3>

                <p>
                  I built an early version of a segmented rep slider and put it in front of testers quickly rather than
                  trying to perfect it first.
                </p>

                <p>
                  The interaction felt significantly faster, but testing exposed an important problem: the gesture
                  wasn't immediately obvious. The active area felt too narrow and there wasn't enough visual indication
                  that the slider could be dragged.
                </p>

                <p>This feedback shaped the next iteration.</p>
              </div>
            </div>

            <div class="w-full flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/2 flex flex-col items-start gap-8">
                <h3 class="text-2xl font-bold">Current slider</h3>

                <p>
                  The current version makes the interaction itself more visually prominent, giving the slider a tactile,
                  trackpad-like quality.
                </p>

                <p>
                  I also introduced lightweight guidance for first-time or uncertain users. An animated arrow
                  demonstrates the initial gesture, while the larger rep counter makes the relationship between the
                  gesture and the result immediately visible. Once the user starts interacting, these prompts get out of
                  the way.
                </p>

                <p>
                  After a user finishes sliding, the app waits briefly before showing a "Tap to log" prompt. This avoids
                  permanently occupying the interface with instructions while still providing a fallback for users who
                  aren't sure what to do next.
                </p>

                <p>
                  The goal was to accept a small learning curve in exchange for making a repeated interaction
                  substantially faster.
                </p>
              </div>

              <div class="md:w-1/2 mx-auto">
                <div class="md:w-full flex items-center justify-center">
                  <PhoneFrame>
                    <div class="relative md:min-h-[597px] bg-gray-900">
                      <video
                        preload="metadata"
                        :src="currentSlider"
                        autoplay
                        loop
                        muted
                        playsinline
                        class="block w-full h-full object-contain"
                      ></video>
                    </div>
                  </PhoneFrame>
                </div>
              </div>
            </div>
            <!-- code snippets  -->
            <div class="w-full flex flex-col gap-8 p-6 md:p-12 border border-gray-300 bg-black/5 rounded-lg">
              <h3 class="text-2xl font-bold">Building the Interaction</h3>

              <p>
                The final interaction was built directly in React Native, allowing me to iterate on the behaviour and
                visual feedback together rather than treating implementation as a separate stage. I used Expo to run the
                app in the browser, making it easy to share a URL with testers and quickly iterate between testing,
                feedback and implementation.
              </p>

              <div class="flex flex-col gap-8">
                <div class="flex flex-row gap-10">
                  <div class="flex flex-col gap-2 md:w-1/3">
                    <h4 class="text-lg font-semibold">Mapping Touch to Reps</h4>
                    <p>
                      The slider converts the user's touch position into a percentage of the available track, which is
                      then mapped to the maximum number of reps. This keeps the interaction responsive across different
                      screen sizes.
                    </p>
                  </div>

                  <CodeSnippet class="md:!w-2/3" filename="RepSlider.tsx" lang="tsx" :code="repSliderGestureCode" />
                </div>

                <div class="flex flex-row gap-10">
                  <div class="flex flex-col gap-2 md:w-1/3">
                    <h4 class="text-lg font-semibold">Tap vs Drag Decision</h4>
                    <p>
                      I wanted the same control to handle both adjusting and submitting a set, without adding another
                      button to the interface.
                    </p>

                    <p>
                      A small movement threshold distinguishes between a tap and a drag. Dragging adjusts the rep count,
                      while releasing without moving submits the set.
                    </p>
                  </div>

                  <CodeSnippet class="md:!w-2/3" filename="RepSlider.tsx" lang="tsx" :code="clickVsDragCode" />
                </div>

                <div class="flex flex-row gap-10">
                  <div class="flex flex-col gap-2 md:w-1/3">
                    <h4 class="text-lg font-semibold">Accessibility / Alternative Input</h4>
                    <p>
                      The slider is optimised for speed, but the numerical value remains directly editable, providing an
                      alternative input method for users who prefer precise keyboard entry or find the gesture
                      difficult.
                    </p>
                  </div>

                  <CodeSnippet class="md:!w-2/3" filename="RepSlider.tsx" lang="tsx" :code="touchInputCode" />
                </div>
              </div>
            </div>
          </div>
        </template>
      </JournalEntry>

      <PageDivider class="my-2 md:my-16" />

      <JournalEntry
        :number="12"
        title="Building a Mini Fighting Game"
        date="September 2026"
        id="w_fighting_game"
        visual
      >
        <p>
          I wanted to add something unexpected to Squeeze: a small, optional fighting game that gives consistent
          training another way to reward progression. The fights are designed to be quick enough to pick up between sets
          or while waiting for equipment.
        </p>

        <p>
          Users can take their trained character through a series of short one-on-one battles against increasingly
          stronger opponents, unlocking optional badges and accessories along the way.
        </p>

        <template #visual>
          <div class="w-full flex flex-col gap-20">
            <div class="w-full flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/2 flex flex-col items-start gap-8">
                <h3 class="text-2xl font-bold">A battle between sets</h3>

                <p>
                  The game is designed as an optional extra rather than part of the core workout experience. Battles are
                  intentionally short, giving users something they can play between sets without interrupting their
                  workout.
                </p>

                <div class="flex flex-col md:flex-row w-full gap-5 justify-center flex-1">
                  <img
                    src="../../assets/workoutApp/kick.png"
                    alt="Pixel art kick animation sprite sheet"
                    class="flex-1 mx-auto max-w-md pixel-art"
                  />
                  <img
                    src="../../assets/workoutApp/battle-idle.png"
                    alt="Pixel art kick animation sprite sheet"
                    class="flex-1 mx-auto max-w-md pixel-art"
                  />
                </div>

                <p>
                  I created the character animations as pixel-art sprite sheets and built the basic movement
                  foundations, including directional movement, jumping with gravity and a kick animation.
                </p>
              </div>

              <div class="md:w-1/2 mx-auto">
                <div class="md:w-full flex items-center justify-center">
                  <PhoneFrame>
                    <div class="relative md:min-h-[597px] bg-gray-900">
                      <video
                        preload="metadata"
                        :src="GameVideo"
                        autoplay
                        loop
                        muted
                        playsinline
                        class="block w-full h-full object-contain"
                      ></video>
                    </div>
                  </PhoneFrame>
                </div>
              </div>
            </div>

            <div class="w-full flex flex-col md:flex-row gap-8 items-center">
              <div class="w-full md:w-1/2 md:p-15">
                <CodeSnippet filename="Game.tsx" lang="tsx" :code="gameCode" />
              </div>

              <div class="md:w-1/2 flex flex-col items-start gap-8">
                <h3 class="text-2xl font-bold">From movement to combat</h3>

                <p>
                  One challenge was allowing the character to move naturally around the arena while keeping the original
                  sprite dimensions and transparent padding intact. I solved this by separating the character's movement
                  position from the sprite viewport.
                </p>

                <p>
                  The prototype is being built one mechanic at a time. With movement, jumping and the first attack
                  working, the next step is to introduce an opponent, hit detection, health and more attacks before
                  connecting the combat system back into Squeeze's progression and training stats.
                </p>
              </div>
            </div>
          </div>
        </template>
      </JournalEntry>

      <PageDivider class="my-2 md:my-16" />

      <JournalEntry
        :number="11"
        title="Building character progression and animation"
        date="September 2026"
        id="w_character_progression"
        visual
      >
        <p>
          I used PixelLab's AI tools to create and iterate on Squeeze's character and animation assets, with my
          background in animation and illustration helping me direct movement, maintain consistency and refine the
          results.
        </p>

        <p>
          I chose a deliberately low-resolution pixel-art style to reinforce the retro game aesthetic while creating a
          flexible visual system. The limited resolution makes it possible to evolve the character significantly through
          silhouette, proportions and key details, without losing their identity.
        </p>

        <template #visual>
          <div class="w-full flex flex-col gap-16">
            <div class="w-full flex flex-col md:flex-row gap-5 items-start">
              <div class="md:w-1/2 flex flex-col items-start gap-10">
                <h3 class="text-2xl font-bold">Progression you can see</h3>

                <p>
                  Progression is a core part of the gamification in Squeeze, so I wanted it to be something users could
                  actually see rather than just a number increasing on a screen. The character evolves alongside the
                  user's training, giving their progress a more tangible, game-like reward.
                </p>
              </div>

              <div class="md:w-1/2 mx-auto">
                <div class="w-full flex md:items-end justify-center gap-5 flex-wrap">
                  <img src="../../assets/workoutApp/character_1.png" class="h-24 md:h-48 w-auto pixel-art" />
                  <img src="../../assets/workoutApp/character_2.png" class="h-24 md:h-48 w-auto pixel-art" />
                  <img src="../../assets/workoutApp/character_3.png" class="h-24 md:h-48 w-auto pixel-art" />
                  <img src="../../assets/workoutApp/character_5.png" class="h-24 md:h-48 w-auto pixel-art" />
                  <img src="../../assets/workoutApp/character_6.png" class="h-24 md:h-48 w-auto pixel-art" />
                </div>
              </div>
            </div>

            <div class="w-full flex flex-col md:flex-row gap-5 items-start">
              <div class="md:w-1/2 mx-auto">
                <div class="w-full flex items-end justify-center gap-5">
                  <img src="../../assets/workoutApp/character_evolve.gif" class="h-48 w-auto pixel-art" />
                </div>
              </div>

              <div class="md:w-1/2 flex flex-col items-start gap-10">
                <h3 class="text-2xl font-bold">Epic transformations</h3>

                <p>
                  Each stage of progression is brought to life through a transformation animation, turning a simple
                  level-up into a more rewarding game-like moment. The character physically changes from one form to the
                  next, making progression feel earned rather than purely numerical.
                </p>
              </div>
            </div>

            <div class="w-full flex flex-col-reverse md:flex-row gap-5 items-start">
              <div class="md:w-1/2 flex flex-col items-start gap-10">
                <h3 class="text-2xl font-bold">Making the characters feel alive</h3>

                <p>
                  I also wanted the characters to feel like part of the interface, rather than static illustrations
                  placed on top of it. Subtle idle animations give them a small amount of life while the user is
                  navigating the app, helping reinforce the feeling that Squeeze is behaving more like a game than a
                  traditional fitness tracker.
                </p>
              </div>

              <div class="md:w-1/2 mx-auto">
                <div class="w-full flex items-end justify-center gap-5">
                  <img src="../../assets/workoutApp/character_idle.gif" class="h-48 w-auto pixel-art" />
                </div>
              </div>
            </div>

            <div class="w-full flex flex-col md:flex-row gap-5 items-start">
              <div class="md:w-1/2 mx-auto">
                <div class="w-full flex items-end justify-center gap-5">
                  <img src="../../assets/workoutApp/character_celebrate.gif" class="h-48 w-auto pixel-art" />
                  <img src="../../assets/workoutApp/character_wave.gif" class="h-48 w-auto pixel-art" />
                </div>
              </div>

              <div class="md:w-1/2 flex flex-col items-start gap-10">
                <h3 class="text-2xl font-bold">Small moments of personality</h3>

                <p>
                  I created smaller character animations that respond to user actions, such as a wave or celebration,
                  making interactions feel more playful and rewarding.
                </p>

                <p>
                  These moments are used sparingly so completing a workout, reaching a milestone or unlocking something
                  feels like a small game moment.
                </p>
              </div>
            </div>
          </div>
        </template>
      </JournalEntry>

      <PageDivider class="my-2 md:my-16" />

      <JournalEntry
        title="Developing style and playful interaction"
        :number="10"
        date="September 2026"
        id="w_set_logging"
        visual
      >
        <template #visual>
          <div class="w-full flex flex-col md:flex-row gap-10 md:gap-5">
            <PhoneFrame>
              <div class="relative min-h-[510px] md:min-h-[597px] bg-gray-900">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
                </div>

                <video
                  preload="metadata"
                  :src="WorkoutVideo"
                  autoplay
                  loop
                  muted
                  playsinline
                  class="relative z-10 block w-full h-full object-contain"
                ></video>
              </div>
            </PhoneFrame>
            <div class="md:w-1/2 flex flex-col items-start gap-10">
              <p>
                I decided to take the visual direction in a more low-fi, old-school tech direction, inspired by retro
                game consoles, monochrome colour schemes and pixel fonts. I think this is an improvement, while leaving
                room to reintroduce more playfulness in future iterations.
              </p>

              <BrowserFrame class="mx-auto">
                <video
                  preload="metadata"
                  :src="SlideVideo"
                  autoplay
                  loop
                  muted
                  playsinline
                  class="relative z-10 block max-w-[300px] object-contain"
                ></video>
              </BrowserFrame>

              <p>
                I also introduced a new rep-logging interaction, allowing users to slide across the rep blocks to
                quickly set their reps, while still being able to enter a value directly. My hypothesis is that, because
                logging reps is the main action users repeat throughout every workout, optimising it for speed and
                minimal effort could make the overall experience feel much more frictionless.
              </p>

              <p>
                There may be a small learning curve initially, but I expect the interaction to become second nature
                through repetition, ultimately saving users time across every workout (Although user testing is needed
                to support this). I've also added an automatic rest timer that starts as soon as a set is logged, again
                reducing clicks.
              </p>
            </div>
          </div>
        </template>
      </JournalEntry>

      <PageDivider class="my-2 md:my-16" />

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

      <PageDivider class="my-2 md:my-16" />

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

            <CodeSnippet class="md:!w-1/2" filename="SetBadge.tsx" lang="tsx" :code="setBadgeCode" />
          </div>
        </template>
      </JournalEntry>

      <PageDivider class="my-2 md:my-16" />

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
                  <h3>PNG Graphics:</h3>
                  <div class="relative overflow-hidden p-5 mb-3">
                    <img loading="lazy" src="../../assets/workoutApp/bar1.png" alt="" class="relative w-full h-auto" />
                    <img loading="lazy" src="../../assets/workoutApp/bar2.png" alt="" class="relative w-full h-auto" />
                  </div>

                  <h3>CSS Bars:</h3>
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

            <CodeSnippet class="md:!w-1/2" filename="RecoveryCountdown.tsx" lang="tsx" :code="recoveryCountdownCode" />
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

      <PageDivider class="my-2 md:my-16" />

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

      <PageDivider class="my-2 md:my-16" />

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
          <div class="flex md:flex-row w-full gap-8 md:gap-20">
            <img src="../../assets/workoutApp/wireframe1.png" class="flex-1 min-w-0 h-auto" />
            <img src="../../assets/workoutApp/wireframe2.png" class="flex-1 min-w-0 h-auto" />
            <img src="../../assets/workoutApp/wireframe3.png" class="flex-1 min-w-0 h-auto" />
          </div>
        </template>
      </JournalEntry>

      <PageDivider class="my-2 md:my-16" />

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

      <PageDivider class="my-2 md:my-16" />

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

      <PageDivider class="my-2 md:my-16" />

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

      <PageDivider class="my-2 md:my-16" />

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
