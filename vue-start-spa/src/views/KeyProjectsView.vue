<script>

import ThreeScene from "@/components/Three/ThreeScene.vue";
import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";
import ProjectsContainer from "@/components/Container/ProjectOverview/ProjectsContainer.vue";
import EndRedirector from "@/components/Container/EndRedirector.vue";

export default {
  name: 'KeyProjectsView',
  components: {EndRedirector, ProjectsContainer, ThreeBackgroundParticles, ThreeScene}
}
</script>

<template>
  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-background-particles></three-background-particles>
  <projects-container


      :picture-srcs="[
      'Projects/INRS/INRSSplash.jpg',
  'Projects/Esquirel/EsquirelSplash.jpg',
   'Projects/Boby/BobySplash.jpg',
    'Projects/Jab/JabSplash.jpg',
      'Projects/MemoryOfHope/MemoryOfHopeSplash.jpg']"
                      :page-links="['INRS','Esquirel','Boby','Jab', 'MemoryOfHope']"
                      :tag-texts-lists="[
                          ['Steam','UE5', 'Blueprints', 'Physics','Perforce','C++']
                      ,['Unity', 'C#', 'Network', 'Lead', 'Architecture', 'Tools' ]
                      ,['Internship', 'Web', 'Game Design', 'Agile', 'Javascript'],
                      ['Mobile','Unity', 'Tools', 'AI', 'Lead', 'C#' ],
                       ['Unity', 'C#','Physics', '3C', 'Tools', 'Lead']]"
                      :description-texts="[
                     'Physic-based 2v2 party game with collaboration and sabotage',
                      'Capture the point MOBA with ambushes and squirrels',
                      'Integrated casual arcade game to web application for gamification',
                      'Fight-Taunt-Action mobile game with iconic boss',
                       'Zelda-like exploring the grief through wonderful world']"
                      :title-texts="['It not a Rocket Science!','Esquirel','Boby','Jab','Memory Of Hope']" ></projects-container>
<div class="container"></div>
  <end-redirector text-content="Want to see more? Watch my solo projects!" link="SoloProjects"></end-redirector>
</template>

<style scoped>
.container{
  position: relative;
  height: 150%;


}

@media (min-width: 768px) {
  .container
  {
    height: 150%;
  }
}

@media (min-width: 1024px) {
  .container
  {
    height: 50%;
  }
}

</style>