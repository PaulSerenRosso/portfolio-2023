<script>

import ThreeJsHtmlPositionLinker from "@/components/Three/ThreeJsHtmlPositionLinker.vue";
import ThreeVideo from "@/components/Three/Video/ThreeVideo.vue";
import ThreeEdges from "@/components/Three/ThreeEdges.vue";

export default {
  name: "ThreeVideoContainer",
  components: {ThreeJsHtmlPositionLinker, ThreeVideo, ThreeEdges},
  props: {
    srcVideo: String,
    idVideo: String,
    videoObjectName:String,
    offsetHtmlPositionX:Number,
    offsetHtmlPositionY:Number,
    htmlElementIdName: String,
    edgesWidthThickness:Number,
    edgesZThickness:Number,
    movementLength:Number,
    movementFrequency:Number,
    edgesColor:String,
    threeBasicResponsivePropertyGroup:Object,



  },
  created() {
      this.videoButtonId = this.idVideo+"Button";
  },
  data()
  {
    return{
      videoButtonId:String,
      videoIsLoaded:false,
    }
  },
  computed: {

    checkVideoIsLoaded() {

      return this.videoIsLoaded;
    }
  },
  methods:
  {
    raiseOnVideoLoaded() {
      this.videoIsLoaded = true;
      console.log("raise")

    }
  }
}
</script>

<template>

  <three-video  :movement-frequency="this.movementFrequency" :movement-length="this.movementLength" @on-video-loaded="raiseOnVideoLoaded" :video-height="this.videoHeight" :video-width="this.videoWidth" :three-basic-responsive-property-group="this.threeBasicResponsivePropertyGroup" :video-button-id="this.videoButtonId" :srcVideo="this.srcVideo" :idVideo="this.idVideo" :video-object-name=this.videoObjectName> </three-video>
  <div :id="this.videoButtonId" class="video-button"  > test </div>
 <keep-alive>
  <three-js-html-position-linker v-if="this.checkVideoIsLoaded" :dynamic-object-name=this.videoObjectName
                                 :html-element-id-name=this.videoButtonId
                                 :offset-html-position-x=this.offsetHtmlPositionX
                                 :offset-html-position-y=this.offsetHtmlPositionY></three-js-html-position-linker></keep-alive>
  <keep-alive><three-edges :three-basic-responsive-property-group="threeBasicResponsivePropertyGroup" :need-to-be-activated="true" v-if="this.checkVideoIsLoaded" :dynamic-parent-object-name=this.videoObjectName :edges-color=this.edgesColor :edges-width-thickness=this.edgesWidthThickness  :edges-z-thickness=this.edgesZThickness  ></three-edges> </keep-alive>
</template>

<style scoped>

</style>