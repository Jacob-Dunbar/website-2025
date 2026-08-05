<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useLoop } from "@tresjs/core";

export default {
  name: "SpinningCube",

  props: {
    design: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    const cube = ref();

    const mouse = {
      x: 0,
      y: 0,
    };

    const rotation = {
      x: 0,
      y: 0,
    };

    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 3 - 1;
      mouse.y = (event.clientY / window.innerHeight) * 3 - 1;
    };

    const { onBeforeRender } = useLoop();

    onBeforeRender(({ elapsed }) => {
      if (cube.value) {
        const idleX = elapsed * 0.25;
        const idleY = elapsed * 0.35;

        const mouseY = mouse.x * -0.8;
        const mouseX = mouse.y * -0.8;

        rotation.y += (idleY + mouseY - rotation.y) * 0.05;
        rotation.x += (idleX + mouseX - rotation.x) * 0.05;

        cube.value.rotation.y = rotation.y;
        cube.value.rotation.x = rotation.x;
      }
    });

    onMounted(() => {
      window.addEventListener("mousemove", handleMouseMove);
    });

    onUnmounted(() => {
      window.removeEventListener("mousemove", handleMouseMove);
    });

    return {
      cube,
    };
  },
};
</script>

<template>
  <TresMesh v-if="design" ref="cube">
    <TresTorusKnotGeometry :args="[0.4, 0.25, 128, 16]" />
    <TresMeshStandardMaterial color="#111" />
  </TresMesh>

  <TresMesh v-else ref="cube">
    <TresIcosahedronGeometry :args="[0.8, 0]" />
    <!-- <TresMeshBasicMaterial wireframe /> -->
    <TresMeshStandardMaterial color="#111" />
  </TresMesh>
</template>
