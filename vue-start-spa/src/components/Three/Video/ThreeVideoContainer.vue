<script>

import ThreeJsHtmlPositionLinker from "@/components/Three/ThreeJsHtmlPositionLinker.vue";
import ThreeVideo from "@/components/Three/Video/ThreeVideo.vue";
import ThreeEdges from "@/components/Three/ThreeEdges.vue";
import MainButton from "@/components/MainButton.vue";
import ThreeParent from "@/components/Three/ThreeParent.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeJsHtmlPositionLinkerProperty} from "@/composables/ResponsiveProperty/ThreeJsHtmlPositionLinkerProperty";

export default {

  name: "ThreeVideoContainer",
  components: {
    ThreeParent,
    MainButton,ThreeJsHtmlPositionLinker, ThreeVideo, ThreeEdges},
  props: {
    srcVideo: String,
    videoObjectTag:String,
    threeJsHtmlPositionLinkerPropertyGroup:Object,
    keyEventTriggerAnimation:String,
    threeBasicResponsivePropertyGroup:Object,
    delayAnimationReveal:Number,
    macroContainerResizeEventKey:String,
  },

}
</script>

<template>
  <three-parent :three-transform-responsive-property-group="this.threeBasicResponsivePropertyGroup" :has-ratio-obj-created-event="true" :tag="this.videoObjectTag" :macro-container-resize-event-key="this.macroContainerResizeEventKey" :movement-length="0.05" :movement-frequency="1"></three-parent>
  <three-video :video-tag="this.videoObjectTag" :parent-video-tag="this.videoObjectTag+'Parent'" :on-create-key="this.videoObjectTag+'OnCreated'" :video-height="9.0" :video-width="16.0"  :video-button-id="this.videoObjectTag+'Button'" :srcVideo="this.srcVideo" > </three-video>
 <div :id="this.videoObjectTag+'Button'" class="video-button"><main-button :delay="this.delayAnimationReveal" :key-event="this.keyEventTriggerAnimation"> <div > Show it in fullscreen!  </div></main-button> </div>
  <three-js-html-position-linker  :three-basic-responsive-property-group="this.threeBasicResponsivePropertyGroup"
                                  :html-element-id-name="this.videoObjectTag+'Button'"
                                  :three-js-html-position-linker-property-group="this.threeJsHtmlPositionLinkerPropertyGroup" ></three-js-html-position-linker>
  <three-edges  :parent-object-tag="this.videoObjectTag" :on-parent-created-key="this.videoObjectTag+'OnCreated'"  :edges-width-thickness=0.03  :edges-z-thickness=0.15></three-edges>
</template>

<style scoped>

</style>