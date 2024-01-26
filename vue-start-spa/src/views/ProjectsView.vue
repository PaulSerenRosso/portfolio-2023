<script>

import ThreeScene from "@/components/Three/ThreeScene.vue";
import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";
import KeyProjectsContainer from "@/components/Container/ProjectOverview/KeyProjectsContainer.vue";

export default {
  name: "ProjectsView",
  components: {KeyProjectsContainer, ThreeBackgroundParticles, ThreeScene}
}
</script>

<template>
  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-background-particles></three-background-particles>
  <key-projects-container></key-projects-container>
</template>

<style scoped>

</style>