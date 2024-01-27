<script >


import EndRedirector from "@/components/Container/EndRedirector.vue";
import ProjectDescriptionContainer from "@/components/Container/ProjectPage/ProjectDescriptionContainer.vue";

export default {
  name: "ProjectPageContainer",
  components: {ProjectDescriptionContainer, EndRedirector},
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
  <project-description-container :project-name="this.projectTeam" :video-src="this.projectVideoSrc" :project-timeline="this.projectTimeline" :project-team="this.projectTeam" :project-description="this.projectDescription">
    <slot></slot>
  </project-description-container>
<end-redirector link="keyProjects" text-content="Want to se more ? Take a look at the others Projects"></end-redirector>
</template>

<style scoped>

</style>