<script>
import {defineComponent} from 'vue'
import ThreeJsHtmlPositionLinker from "@/components/Three/ThreeJsHtmlPositionLinker.vue";
import ThreeVideo from "@/components/Three/ThreeVideo.vue";

export default {
  name: "ThreeVideoContainer",
  components: {ThreeJsHtmlPositionLinker, ThreeVideo},
  props: {
    srcVideo: String,
    idVideo: String,
    videoObjectName:String,
    offsetHtmlPositionX:Number,
    offsetHtmlPositionY:Number,
    htmlElementIdName: String,

  },
  created() {

      this.videoButtonId = this.idVideo+"Button";

  },
  data()
  {
    return{
      videoButtonId:String
    }
  }
}
</script>

<template>

  <three-video :video-button-id="this.videoButtonId" :srcVideo="this.srcVideo" :idVideo="this.idVideo" :video-object-name=this.videoObjectName> </three-video>
  <div :id="this.videoButtonId" class="video-button"  > test </div>
  <three-js-html-position-linker :dynamic-object-name=this.videoObjectName
                                 :html-element-id-name=this.videoButtonId
                                 :offset-html-position-x=this.offsetHtmlPositionX
                                 :offset-html-position-y=this.offsetHtmlPositionY></three-js-html-position-linker>
</template>

<style scoped>

</style>