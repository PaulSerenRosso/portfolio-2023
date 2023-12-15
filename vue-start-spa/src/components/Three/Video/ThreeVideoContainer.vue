<script>

import ThreeJsHtmlPositionLinker from "@/components/Three/ThreeJsHtmlPositionLinker.vue";
import ThreeVideo from "@/components/Three/Video/ThreeVideo.vue";
import ThreeEdges from "@/components/Three/ThreeEdges.vue";
import ThreeJsGroupObject from "@/components/Three/ThreeJsGroupObject.vue";
import ThreeLevitatedObject from "@/components/Three/ThreeLevitatedObject.vue";

export default {

  name: "ThreeVideoContainer",
  components: {ThreeLevitatedObject, ThreeJsGroupObject, ThreeJsHtmlPositionLinker, ThreeVideo, ThreeEdges},
  props: {
    srcVideo: String,
    videoObjectTag:String,
    offsetHtmlPositionY:Number,
    levitatedMovementFrequency:Number,
    levitatedMovementLength:Number,
    threeBasicResponsivePropertyGroup:Object,
  },

}
</script>

<template>

  <three-js-group-object :obj-tag="this.videoObjectTag+'Parent'" :parent-obj-tag="this.videoObjectTag+'Root'"></three-js-group-object>
  <three-levitated-object :current-obj-tag="this.videoObjectTag+'Parent'" :movement-length="this.levitatedMovementLength" :movement-frequency="this.levitatedMovementFrequency"></three-levitated-object>
  <three-video :video-tag="this.videoObjectTag" :parent-video-tag="this.videoObjectTag+'Parent'" :on-create-key="this.videoObjectTag+'OnCreated'" :video-height="9.0" :video-width="16.0"  :video-button-id="this.videoObjectTag+'Button'" :srcVideo="this.srcVideo" :idVideo="this.videoObjectTag+'Id'"> </three-video>
  <div :id="this.videoObjectTag+'Button'" class="video-button"> test </div>
  <three-js-html-position-linker  :three-basic-responsive-property-group="this.threeBasicResponsivePropertyGroup"
                                  :html-element-id-name="this.videoObjectTag+'Button'"
                                  :offset-html-position-y="this.offsetHtmlPositionY" ></three-js-html-position-linker>
 <three-edges  :parent-object-tag="this.videoObjectTag" :on-parent-created-key="this.videoObjectTag+'OnCreated'"  :edges-width-thickness=0.2  :edges-z-thickness=0.2></three-edges>
</template>

<style scoped>
.video-button
{
  position: absolute;
  color : white;



}
</style>