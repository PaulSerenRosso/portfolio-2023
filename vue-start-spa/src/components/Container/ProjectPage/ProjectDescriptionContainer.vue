<script>
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
import {Vector3} from "@/composables/Vector3";
import ThreeVideoContainer from "@/components/Three/Video/ThreeVideoContainer.vue";
import MacroContainer from "@/components/Container/MacroContainer.vue";

export default {
  name: "ProjectDescriptionContainer",
  components: {MacroContainer, ThreeVideoContainer},
  props:{
    videoSrc:String,
    projectName:String,
    projectTimeline:String,
    projectTeam:String,
  },
  data(){
    return{
      threeVideoContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeBasicResponsiveProperty(
              new Vector3(0.5,0.65,0.9),
              20,
              new Vector3(0.75,0.35,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.5,0.55,0.9),
              30,
              new Vector3(0.8,0.5,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.28,0.52,0.9),
              30,
              new Vector3(0.45,0.70,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.28,0.50,0.9),
              30,
              new Vector3(0.45,0.70,1)),
      ),
    }
  }
}
</script>

<template>
  <macro-container ref="macroContainer"  resize-event-key="ProjectDescriptionMacroContainer" :height-desktop="1" :height-mobile="1" :height-large-desktop="1" :height-tablet="1">
  <three-video-container macro-container-resize-event-key="ProjectDescriptionMacroContainer" :delay-animation-reveal="2000"  key-event-trigger-animation="FirstReveal" :three-basic-responsive-property-group=this.threeVideoContainerResponsivePropertyGroup video-object-tag="TestVideo" :srcVideo="this.videoSrc"
                         :offset-html-position-y=0
  > </three-video-container>
  </macro-container>
<slot></slot>
</template>



<style scoped>
.project-description-paragraph{

}

</style>