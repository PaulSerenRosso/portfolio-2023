<script >


import ThreeScene from "@/components/Three/ThreeScene.vue";
import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";
import ProjectsContainer from "@/components/Container/ProjectOverview/ProjectsContainer.vue";
import EndRedirector from "@/components/Container/EndRedirector.vue";

export default {
  name: "SoloProjectsView",
  components: {EndRedirector, ProjectsContainer, ThreeBackgroundParticles, ThreeScene}
}
</script>

<template>
  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-background-particles></three-background-particles>
  <projects-container :picture-srcs="['testPicture.jpg','testPicture.jpg','testPicture.jpg','testPicture.jpg']"
                      :page-links="['Portfolio','DeepLearning','Boids','Bubbles']"
                      :tag-texts-lists="[
                          ['Web', 'Javascript', 'Vue.js', 'Three.js','UI/UX']
                          ,['Unity', 'AI', 'C#']
                          ,['Unity', 'Optimization','AI', 'C#'],
                           ['UE5', 'HLSL','Tech-Art']]"
                      :description-texts="['A 3D reusable responsive website','Race of cars that learn and remember','Simulation of RTS units with multi-threading','Shader using RayMarching and SDF']"
                      :title-texts="['Portfolio','Deep Learning','Boids','Bubbles']" ></projects-container>
  <div class="container"></div>
  <end-redirector text-content="If you like my projects get my contacts ! !" link="Contact"></end-redirector>
</template>

<style scoped>
.container{
  position: relative;
  height: 100%;
  z-index: -10;
}

@media (min-width: 768px) {
  .container
  {
    height: 100%;
  }
}

@media (min-width: 1024px) {
  .container
  {
    height: 0%;
  }
}
</style>