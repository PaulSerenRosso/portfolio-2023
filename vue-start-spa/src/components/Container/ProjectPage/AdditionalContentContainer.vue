<script>
import MacroContainer from "@/components/Container/MacroContainer.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeGridProperty} from "@/composables/ResponsiveProperty/ThreeGridProperty";
import {Vector3} from "@/composables/Vector3";
import {Vector2} from "three";
import ThreeContentGrid from "@/components/Three/Grid/ThreeContentGrid.vue";
import {ThreeJsHtmlPositionLinkerProperty} from "@/composables/ResponsiveProperty/ThreeJsHtmlPositionLinkerProperty";
import {callWithErrorHandling} from "vue";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";


export default {
  name: "AdditionalContentContainer",
  methods: {callWithErrorHandling},
  components: {RevealAnimationTrigger, ThreeContentGrid,  MacroContainer},
  props:{
    contentSrcList :Array,
    contentTypeList:Array,
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
    <three-content-grid macro-container-id="AdditionalContentContainer" animation-reveal-video-button-key="SecondReveal"
                        :three-js-html-video-position-linker-property-group="this.threeJsHtmlVideoPositionLinkerPropertyGroup"
                        :content-types="this.contentTypeList"
                        base-tag="AdditionalPicture"
                        :content-srcs="this.contentSrcList"
                        :three-grid-responsive-property-group="this.threeGridResponsivePropertyGroup"
                        macro-container-resize-event-key="AdditionalContentContainer"></three-content-grid>
    <reveal-animation-trigger :is-debug="false" :top-desktop="30" :top-large-desktop="30" :top-mobile="30" :top-tablet="30" reveal-animation-trigger-event-key="SecondReveal"></reveal-animation-trigger>
  </macro-container>
    <div  class="additional-container"></div>


</template>

<style scoped>

.additional-container{
  position: relative;
  height: 120%;
}


@media (min-width: 768px) {


  .additional-container{
    height: 120%;
  }
}

@media (min-width: 1024px) {

  .additional-container{
    height: 70%;
  }
}

@media (min-width: 1280px) {


  .additional-container{
    height: 70%;
  }
}
</style>