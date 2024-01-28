<script >


import EndRedirector from "@/components/Container/EndRedirector.vue";
import ProjectDescriptionContainer from "@/components/Container/ProjectPage/ProjectSummaryContainer.vue";
import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";
import ThreeScene from "@/components/Three/ThreeScene.vue";
import ProjectSummaryContainer from "@/components/Container/ProjectPage/ProjectSummaryContainer.vue";
import AdditionalContentContainer from "@/components/Container/ProjectPage/AdditionalInformatioContainer.vue";

export default {
  name: "ProjectPageContainer",
  components: {
    AdditionalContentContainer,
    ProjectSummaryContainer, ThreeScene, ThreeBackgroundParticles,  EndRedirector},
  props:{
    projectVideoSrc:String,
    projectName:String,
    projectTimeline:String,
    projectTeam:String,
    projectTags:Array,
    projectKeyPoints:Array,
    projectAdditionalPictureSrc:Array,
  }
}
</script>

<template>
  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-background-particles></three-background-particles>
  <project-summary-container :tags="this.projectTags" :key-points="this.projectKeyPoints" :project-name="this.projectTeam" :video-src="this.projectVideoSrc" :project-timeline="this.projectTimeline" :project-team="this.projectTeam" :project-description="this.projectDescription">

  </project-summary-container>
  <additional-content-container >
    <slot></slot>
  </additional-content-container>
<end-redirector  link="keyProjects" text-content="Want to se more ? Take a look at the others Projects"></end-redirector>
</template>

<style scoped>

</style>