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
                      :page-links="['Contact','Esquirel','','Contact']"
                      :tag-texts-lists="[['Unity', 'UE5', 'Git'],['Unity', 'UE5', 'Git','Unity', 'UE5', 'Git'],['Unity', 'UE5'], ['Unity', 'UE5','C++']]"
                      :description-texts="['1A project f ds  fdjskq m ldkjf qs lkjd fdslq l','2A project f ds  fdjskq m ldkjf qs lkjd fdslq l','3A project f ds  fdjskq m ldkjf qs lkjd fdslq l','4A project f ds  fdjskq m ldkjf qs lkjd fdslq l']"
                      :title-texts="['It not a Rocket Science','Esquirel','Memory Of Hope','Jab']" ></projects-container>
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