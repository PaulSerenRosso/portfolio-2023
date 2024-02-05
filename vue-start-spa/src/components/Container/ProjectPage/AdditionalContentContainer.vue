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

export default {
  name: "AdditionalContentContainer",
  components: {ThreeContentGrid, SlideInAnimation, RevealAnimationTrigger, MacroContainer},
  props:{
    contentSrcList :Array,
    contentTypeList:Array,
  },
  data(){
    return{
      threeJsHtmlVideoPositionLinkerPropertyGroup: new ResponsivePropertyGroup(
          new ThreeJsHtmlPositionLinkerProperty(undefined,5),
          new ThreeJsHtmlPositionLinkerProperty(undefined,5),
          new ThreeJsHtmlPositionLinkerProperty(undefined,5),
          new ThreeJsHtmlPositionLinkerProperty(undefined,5)),
      threeGridResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.55,0.5),20,new Vector2(0.05,0.1), new Vector3(0.8,0.2,1),new Vector2(0.05,0.1)),
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.55,0.5),20,new Vector2(0.05,0.1), new Vector3(0.8,0.2,1),new Vector2(0.05,0.1)),
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.6,0.5),20,new Vector2(0.05,0.1), new Vector3(0.4,0.45,1),new Vector2(0.05,0.1)),
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.6,0.5),20,new Vector2(0.05,0.1), new Vector3(0.4,0.45,1),new Vector2(0.05,0.1))
      ),
    }
  }
}
</script>

<template>
  <macro-container resize-event-key="AdditionalContentContainer" height-desktop="1.3" height-large-desktop="1.3" height-mobile="1.8" height-tablet="1.8">
    <slide-in-animation class="paragraph-container" key-event="SecondReveal" :delay="0" :is-right-direction="false">
      <slot></slot>
    </slide-in-animation>
    <three-content-grid animation-reveal-video-button-key="SecondReveal" :three-js-html-video-position-linker-property-group="this.threeJsHtmlVideoPositionLinkerPropertyGroup" :content-types="this.contentTypeList" base-tag="AdditionalPicture" :content-srcs="this.contentSrcList" :three-grid-responsive-property-group="this.threeGridResponsivePropertyGroup" macro-container-resize-event-key="AdditionalContentContainer"></three-content-grid>
    <reveal-animation-trigger :is-debug="false" :top-desktop="30" :top-large-desktop="30" :top-mobile="30" :top-tablet="30" reveal-animation-trigger-event-key="SecondReveal"></reveal-animation-trigger>
  </macro-container>

</template>

<style scoped>
.paragraph-container{
  display: flex;
  flex-direction: column;
  width: 90%;
  left: 5%;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 30%;
  position: absolute;
}


@media (min-width: 768px) {
 .paragraph-container
  {
   height: 30%;
  }
}

@media (min-width: 1024px) {
  .paragraph-container
  {
    height: 30%;
  }
}

@media (min-width: 1280px) {
  .paragraph-container
  {
    height: 30%;
  }
}
</style>