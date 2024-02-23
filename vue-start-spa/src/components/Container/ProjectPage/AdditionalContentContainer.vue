<script>
import MacroContainer from "@/components/Container/MacroContainer.vue";
import ThreePictureGrid from "@/components/Three/Grid/ThreeContentGrid.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeGridProperty} from "@/composables/ResponsiveProperty/ThreeGridProperty";
import {Vector3} from "@/composables/Vector3";
import {Vector2} from "three";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";
import SlideInAnimation from "@/components/Text/Animation/SlideInAnimation.vue";
import ThreeContentGrid from "@/components/Three/Grid/ThreeContentGrid.vue";
import {ThreeJsHtmlPositionLinkerProperty} from "@/composables/ResponsiveProperty/ThreeJsHtmlPositionLinkerProperty";
import {callWithErrorHandling} from "vue";
import ProjectsContainer from "@/components/Container/ProjectOverview/ProjectsContainer.vue";

export default {
  name: "AdditionalContentContainer",
  methods: {callWithErrorHandling},
  components: { ThreeContentGrid, SlideInAnimation, RevealAnimationTrigger, MacroContainer},
  props:{
    contentSrcList :Array,
    contentTypeList:Array,
    withoutParagraph:Boolean,
    hasTwoColumnOfAdditionalVisualContent:Boolean
  },
  data(){
    return{
      threeJsHtmlVideoPositionLinkerPropertyGroup: new ResponsivePropertyGroup(
          new ThreeJsHtmlPositionLinkerProperty(undefined,5),
          new ThreeJsHtmlPositionLinkerProperty(undefined,5),
          new ThreeJsHtmlPositionLinkerProperty(undefined,5),
          new ThreeJsHtmlPositionLinkerProperty(undefined,5)),
      threeGridResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,1.2,0.5),10,new Vector2(0.05,0.2), new Vector3(0.75,0.25,0.5),new Vector2(0.05,0.1)),
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,1.1,0.5),10,new Vector2(0.05,0.2), new Vector3(0.75,0.25,0.5),new Vector2(0.05,0.1)),
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.8,0.5),10,new Vector2(0.05,0.2), new Vector3(0.4,0.35,1),new Vector2(0.05,0.1)),
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.8,0.5),10,new Vector2(0.1,0.2), new Vector3(0.35,0.35,1),new Vector2(0.05,0.1))
      ),
      threeWithoutParagraphGridResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.3,0.5),10,new Vector2(0.05,0.2), new Vector3(0.75,0.3,0.5),new Vector2(0.05,0.1)),
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.3,0.5),10,new Vector2(0.05,0.2), new Vector3(0.75,0.3,0.5),new Vector2(0.05,0.1)),
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.4,0.5),10,new Vector2(0.05,0.3), new Vector3(0.4,0.45,1),new Vector2(0.05,0.1)),
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.4,0.5),10,new Vector2(0.1,0.3), new Vector3(0.35,0.45,1),new Vector2(0.05,0.1))
      ),
    }
  },
}
</script>

<template>
  <macro-container
      resize-event-key="AdditionalContentContainer" :height-desktop="1" :height-large-desktop="1" :height-mobile="1" :height-tablet="1">
    <slide-in-animation v-if="!this.withoutParagraph" class="paragraph-container" key-event="SecondReveal" :delay="0" :is-right-direction="false">
      <slot></slot>
    </slide-in-animation>
    <three-content-grid macro-container-id="AdditionalContentContainer" animation-reveal-video-button-key="SecondReveal" :three-js-html-video-position-linker-property-group="this.threeJsHtmlVideoPositionLinkerPropertyGroup" :content-types="this.contentTypeList" base-tag="AdditionalPicture" :content-srcs="this.contentSrcList" :three-grid-responsive-property-group="this.withoutParagraph? this.threeWithoutParagraphGridResponsivePropertyGroup:this.threeGridResponsivePropertyGroup" macro-container-resize-event-key="AdditionalContentContainer"></three-content-grid>
    <reveal-animation-trigger :is-debug="false" :top-desktop="30" :top-large-desktop="30" :top-mobile="30" :top-tablet="30" reveal-animation-trigger-event-key="SecondReveal"></reveal-animation-trigger>
  </macro-container>
  <div v-if="withoutParagraph" class="additional-container-without-paragraph"></div>
  <div v-if="!withoutParagraph" class="additional-container"></div>


</template>

<style scoped>

.additional-container{
  position: relative;
  height: 170%;
}
.additional-container-without-paragraph{
  position: relative;
  height: 100%;
}
.paragraph-container{
  display: flex;
  flex-direction: column;
  width: 90%;
  left: 5%;
  align-items: center;
  text-align: center;
  gap: 2rem;
  position: absolute;
}


@media (min-width: 768px) {

  .additional-container
  {
    height: 170%;
  }
  .additional-container-without-paragraph{
    height: 120%;
  }
}

@media (min-width: 1024px) {

  .additional-container
  {
    height: 80%;
  }
  .additional-container-without-paragraph{
    height: 70%;
  }
}

@media (min-width: 1280px) {

  .additional-container
  {
    height: 80%;
  }
  .additional-container-without-paragraph{
    height: 70%;
  }
}
</style>