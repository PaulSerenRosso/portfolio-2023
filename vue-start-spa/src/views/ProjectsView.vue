<script>

import ThreeScene from "@/components/Three/ThreeScene.vue";
import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";
import KeyProjectsContainer from "@/components/Container/ProjectOverview/KeyProjectsContainer.vue";
import EndRedirector from "@/components/Container/EndRedirector.vue";

export default {
  name: "ProjectsView",
  components: {EndRedirector, KeyProjectsContainer, ThreeBackgroundParticles, ThreeScene}
}
</script>

<template>
  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-background-particles></three-background-particles>
  <key-projects-container></key-projects-container>
  <div class="container"></div>
  <end-redirector text-content="If you like my projects get my contacts ! !" link="Contact"></end-redirector>
</template>

<style scoped>
.container{
  position: relative;
  height: 230%;
  z-index: -10;
}

@media (min-width: 768px) {
  .container
  {
    height: 200%;
  }
}

@media (min-width: 1024px) {
  .container
  {
    height: 150%;
  }
}
</style>