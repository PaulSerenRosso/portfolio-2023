<script>
import MacroContainer from "@/components/Container/MacroContainer.vue";
import ThreePictureGrid from "@/components/Three/Grid/ThreePictureGrid.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeGridProperty} from "@/composables/ResponsiveProperty/ThreeGridProperty";
import {Vector3} from "@/composables/Vector3";
import {Vector2} from "three";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";
import SlideInAnimation from "@/components/Text/Animation/SlideInAnimation.vue";

export default {
  name: "AdditionalContentContainer",
  components: {SlideInAnimation, RevealAnimationTrigger, ThreePictureGrid, MacroContainer},
  props:{
    pictureSrcList :Array,
  },
  data(){
    return{
      threeGridResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.55,0.9),20,new Vector2(0.05,0.1), new Vector3(0.8,0.2,1),new Vector2(0.05,0.1)),
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.55,0.9),20,new Vector2(0.05,0.1), new Vector3(0.8,0.2,1),new Vector2(0.05,0.1)),
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.6,0.9),20,new Vector2(0.05,0.1), new Vector3(0.4,0.45,1),new Vector2(0.05,0.1)),
          new ThreeGridProperty(new Vector3(1,0.45,1), new Vector3(0.5,0.6,0.9),20,new Vector2(0.05,0.1), new Vector3(0.4,0.45,1),new Vector2(0.05,0.1))
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
    <three-picture-grid  base-tag="AdditionalPicture" :picture-srcs="this.pictureSrcList" :three-grid-responsive-property-group="this.threeGridResponsivePropertyGroup" macro-container-resize-event-key="AdditionalContentContainer"></three-picture-grid>
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