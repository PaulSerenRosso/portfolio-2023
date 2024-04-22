<script >


import EndRedirector from "@/components/Container/EndRedirector.vue";
import ProjectDescriptionContainer from "@/components/Container/ProjectPage/ProjectSummaryContainer.vue";
import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";
import ThreeScene from "@/components/Three/ThreeScene.vue";
import ProjectSummaryContainer from "@/components/Container/ProjectPage/ProjectSummaryContainer.vue";
import AdditionalContentContainer from "@/components/Container/ProjectPage/AdditionalContentContainer.vue";
import SlideInAnimation from "@/components/Text/Animation/SlideInAnimation.vue";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";

export default {
  name: "ProjectPageContainer",
  components: {
    RevealAnimationTrigger,
    SlideInAnimation,
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
    projectIsSoloProject:Boolean,
    withoutParagraph:Boolean,
    hasTwoColumnOfAdditionalVisualContent:Boolean,
  }
}
</script>

<template>
  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-background-particles></three-background-particles>
  <project-summary-container :first-content-is-picture="this.projectFirstContentIsPicture" :tags="this.projectTags" :key-points="this.projectKeyPoints" :project-name="this.projectName" :content-src="this.projectVideoSrc" :project-timeline="this.projectTimeline" :project-team="this.projectTeam" >
  </project-summary-container>
  <div>
    <slide-in-animation   class="paragraph-container"  key-event="ThirdReveal" :delay="500" :is-right-direction="false">
      <slot></slot>
    </slide-in-animation>
    <reveal-animation-trigger :is-relative-position="false" :is-debug="false" :top-desktop="0" :top-large-desktop="0" :top-mobile="0" :top-tablet="0" reveal-animation-trigger-event-key="ThirdReveal"></reveal-animation-trigger>
  </div>
  <additional-content-container :has-two-column-of-additional-visual-content="hasTwoColumnOfAdditionalVisualContent" :without-paragraph="this.withoutParagraph"  :content-type-list="this.projectAdditionalContentTypes"  :content-src-list="projectAdditionalContentSrcs">

  </additional-content-container>
<end-redirector  :link="this.projectIsSoloProject? 'soloProjects':'keyProjects'" text-content="Want to see more ? Take a look at the others Projects"></end-redirector>
</template>

<style scoped>
.paragraph-container{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  left: 5%;
  align-items: center;
  text-align: center;
  gap: 2rem;
  height: fit-content;

}
</style>