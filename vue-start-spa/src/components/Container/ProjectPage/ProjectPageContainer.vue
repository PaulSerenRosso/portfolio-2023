<script >


import EndRedirector from "@/components/Container/EndRedirector.vue";
import ProjectDescriptionContainer from "@/components/Container/ProjectPage/ProjectSummaryContainer.vue";
import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";
import ThreeScene from "@/components/Three/ThreeScene.vue";
import ProjectSummaryContainer from "@/components/Container/ProjectPage/ProjectSummaryContainer.vue";
import AdditionalContentContainer from "@/components/Container/ProjectPage/AdditionalContentContainer.vue";

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
    projectAdditionalContentSrcs:Array,
    projectAdditionalContentTypes:Array,
    projectFirstContentIsPicture:Boolean,
  }
}
</script>

<template>
  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-background-particles></three-background-particles>
  <project-summary-container :first-content-is-picture="this.projectFirstContentIsPicture" :tags="this.projectTags" :key-points="this.projectKeyPoints" :project-name="this.projectTeam" :content-src="this.projectVideoSrc" :project-timeline="this.projectTimeline" :project-team="this.projectTeam" >

  </project-summary-container>
  <additional-content-container :content-type-list="this.projectAdditionalContentTypes"  :content-src-list="projectAdditionalContentSrcs">
    <slot>
    </slot>
  </additional-content-container>
<end-redirector  link="keyProjects" text-content="Want to se more ? Take a look at the others Projects"></end-redirector>
</template>

<style scoped>

</style>