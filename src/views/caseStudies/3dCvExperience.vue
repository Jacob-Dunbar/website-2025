<script>
import CaseStudyHero from "../../components/CaseStudyHero.vue";
import CaseStudySection from "../../components/CaseStudySection.vue";
import BrowserFrame from "../../components/BrowserFrame.vue";
import PageDivider from "../../components/PageDivider.vue";
import CaseStudyContainer from "../../components/CaseStudyContainer.vue";
import ScrollNavigator from "../../components/ScrollNavigator.vue";
import CodeSnippet from "../../components/CodeSnippet.vue";
import cvVideo from "../../assets/3dcv/3dcv.mp4";
import skullVideo from "../../assets/3dcv/skull.mp4";
import lightingVideo from "../../assets/3dcv/lighting.mp4";
import characterVideo from "../../assets/3dcv/character-anim.mp4";
import BaseButton from "../../components/BaseButton.vue";

export default {
  data() {
    return {
      cvVideo,
      skullVideo,
      lightingVideo,
      characterVideo,
      interactionCode: `<group
  onClick={() => {
     props.setEvilMode(!props.evilMode)}
  }
>
  ...
</group>
`,
      cameraCode: `const length = Math.sqrt(x * x + z * z)

x = (x / length) * speed
z = (z / length) * speed

controls.target.x += x
controls.target.z += z
controls.object.position.x += x
controls.object.position.z += z

controls.update()
`,
      characterCode: `const { nodes, materials } = useGLTF('/head.gltf')

useFrame(() => {
  headRef.current.rotation.y += turnRight ? 0.015 : -0.015

  if (headRef.current.rotation.y > 5.5) {
    setTurnRight(false)
  }

  if (headRef.current.rotation.y < 4.5) {
    setTurnRight(true)
  }
})
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
    CaseStudyHero,
    CaseStudySection,
    BrowserFrame,
    PageDivider,
    CaseStudyContainer,
    ScrollNavigator,
    CodeSnippet,
    BaseButton,
  },
};
</script>

<template>
  <ScrollNavigator
    ref="scrollNavigator"
    :darkLogo="darkLogo"
    :sections="[
      { id: 'cv_hero', label: 'home' },
      { id: 'cv_experience', label: '01. Camera & Scene Control' },
      { id: 'cv_interaction', label: '02. Pointer Interaction & Reactive State' },
      { id: 'cv_atmosphere', label: '03. Asset Optimisation' },
      { id: 'cv_animation', label: '04. Bringing the Scene to Life' },
    ]"
  />

  <div class="flex flex-col items-center gap-10 md:gap-28 pb-26 bg-main-light">
    <CaseStudyHero
      @toFirst="$refs.scrollNavigator.scrollTo('cv_experience')"
      id="cv_hero"
      title="Interactive 3D CV Experience"
      :roles="['UX/UI Design', 'Frontend Development']"
      :tools="['Three.js', 'React Three Fiber', 'Blender', 'React']"
      timeline="~1 month"
    >
      <p>
        Before moving into my previous role, I experimented with presenting a CV as an interactive 3D environment rather
        than a conventional document. I created a small jungle ruin in Blender, then built an explorable experience
        using React Three Fiber, with my CV information embedded into the environment.
      </p>

      <p>
        The aim was to make the information feel like something the user could discover, rather than simply read. The
        scene was designed around a dark archaeological setting, with carved monoliths, atmospheric lighting and small
        interactive details that encouraged exploration.
      </p>

      <BaseButton
        class="!bg-main-light !text-main-dark"
        href="https://jacob-dunbar-3d-cv.netlify.app/"
        icon="arrow-up-right-from-square"
      >
        Visit Live Experience
      </BaseButton>
    </CaseStudyHero>

    <CaseStudyContainer>
      <CaseStudySection id="cv_experience">
        <template #media>
          <BrowserFrame url="https://jacob-dunbar-3d-cv.netlify.app/">
            <video
              preload="metadata"
              :src="cvVideo"
              autoplay
              loop
              muted
              playsinline
              class="block w-full h-full object-contain"
            ></video>
          </BrowserFrame>
        </template>

        <h3>01. Camera & Scene Control</h3>

        <p>
          I built the scene around free-form exploration, using Three.js camera controls to let users move through the
          environment and discover the different CV sections embedded within it. Clicking and dragging provides the
          primary navigation, while keyboard controls allow continuous movement through the scene.
        </p>

        <p>
          The keyboard movement works by updating both the camera position and its target together, allowing the camera
          to translate through the environment while maintaining its current viewing direction. I also normalised the
          movement vector so diagonal movement remains consistent with horizontal and vertical movement.
        </p>

        <CodeSnippet filename="CvExperience.js" lang="js" :code="cameraCode" />
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="cv_interaction" reverse>
        <template #media>
          <BrowserFrame url="https://jacob-dunbar-3d-cv.netlify.app/">
            <video
              preload="metadata"
              :src="skullVideo"
              autoplay
              loop
              muted
              playsinline
              class="block w-full h-full object-contain"
            ></video>
          </BrowserFrame>
        </template>

        <h3>02. Pointer Interaction & Reactive State</h3>

        <p>
          I also wanted the 3D objects themselves to become part of the interaction. The skull is an example of a
          clickable Three.js object, with pointer input handled directly on the rendered mesh rather than through
          traditional DOM controls.
        </p>

        <p>
          Clicking the skull toggles a React state value, which then drives changes to the scene lighting and
          atmosphere. I used <code>react-spring</code> to interpolate the lighting properties, creating a smooth
          transition between the normal and darker states rather than an immediate change.
        </p>

        <CodeSnippet filename="Skull.js" lang="js" :code="interactionCode" />
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="cv_atmosphere">
        <template #media>
          <div class="space-y-4">
            <BrowserFrame url="https://jacob-dunbar-3d-cv.netlify.app/">
              <video
                preload="metadata"
                :src="lightingVideo"
                autoplay
                loop
                muted
                playsinline
                class="block w-full h-full object-contain"
              ></video>
            </BrowserFrame>

            <div class="grid grid-cols-2 gap-4">
              <img src="../../assets/3dcv/skull-blend.png" alt="skull blend file" class="flex-1" />
              <img src="../../assets/3dcv/monolith-blend.png" alt="monolith blend file" class="flex-1" />
            </div>
          </div>
        </template>

        <h3>03. Asset Optimisation & Real-Time Rendering</h3>

        <p>
          Because the environment was intended to run in real time in the browser, I created and optimised the 3D assets
          with performance in mind. I modelled the environment myself in Blender and reduced polygon counts where
          possible to keep the geometry lightweight without losing the visual detail needed for the scene.
        </p>

        <p>
          The finished assets were exported as <code>.glb</code> files and loaded into the React Three Fiber scene,
          giving me a workflow from modelling and optimisation in Blender through to real-time rendering in Three.js. I
          also used Suspense and preloading when loading assets to help manage the experience while the scene was being
          prepared. I also used React Suspense and GLTF preloading to manage asset loading and avoid rendering the scene
          before its models were ready.
        </p>
      </CaseStudySection>

      <PageDivider />

      <CaseStudySection id="cv_animation" reverse>
        <template #media>
          <BrowserFrame url="https://jacob-dunbar-3d-cv.netlify.app/">
            <video
              preload="metadata"
              :src="characterVideo"
              autoplay
              loop
              muted
              playsinline
              class="block w-full h-full object-contain"
            ></video>
          </BrowserFrame>
        </template>

        <h3>04. Bringing the Scene to Life</h3>

        <p>
          I also created an animated character modelled after myself, adding a small amount of character animation to
          make the environment feel more alive.
        </p>

        <p>
          The character was imported as a GLTF asset and animated within the React Three Fiber scene using
          <code>useFrame</code>, allowing its movement to be updated continuously at render time. The nervous, shaking
          animation helped reinforce the atmosphere while giving me an opportunity to experiment with integrating and
          controlling a custom 3D character.
        </p>

        <CodeSnippet filename="head.js" lang="js" :code="characterCode" />
      </CaseStudySection>
    </CaseStudyContainer>
  </div>
</template>
