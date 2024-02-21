<script>

import {
  VideoTexture,
  PlaneGeometry,
  Mesh,
  FrontSide,
  MeshBasicMaterial
} from 'three';
import {addThreeTagObject, getThreeTagObject, raiseAndRemoveEvent} from "@/composables/StoreHelper";
import {activateScroll, deactivateScroll} from "@/composables/Scroll";
import MainButton from "@/components/MainButton.vue";


export default{
  name: "ThreeVideo",
  components: {MainButton},
  data()
  {
    return{
      video : null,
      videoButton:null,
      videoSource:null,
    }
  },
  mounted() {
    this.video = this.$refs.video;
    this.videoSource = this.$refs.videoSource;
    this.video.style.display = "none";
    this.$refs.videoBackgroundFullScreen.style.display = "none";
    this.$refs.videoQuitButton.style.display = "none";
    this.videoButton = document.getElementById(this.videoButtonId);
    this.video.onloadeddata = () =>{
      this.video.play()
        this.videoButton.addEventListener('click', this.activateFullscreen);
    const videoTexture= new VideoTexture(this.video);
    if(navigator.userAgent.indexOf("Firefox") <= -1 ){
      videoTexture.colorSpace = "srgb" ;
    }
    const videoMaterial= new MeshBasicMaterial(
        { map: videoTexture, side: FrontSide, toneMapped: false, fog: false});
    const screen = new PlaneGeometry(this.video.videoWidth/this.video.videoHeight,1);
    const videoScreen = new Mesh(screen, videoMaterial);
      getThreeTagObject(this.parentVideoTag).add(videoScreen);
      addThreeTagObject(videoScreen, this.videoTag);
      raiseAndRemoveEvent(this.onCreateKey);
    };
  },
  props: {
    srcVideo: String,
    videoButtonId:String,
    parentVideoTag:String,
    onCreateKey:String,
    videoTag:String,
  },
  methods: {
deactivateFullScreen(){
  this.video.play();
  this.video.muted = true;
  this.video.style.display = "none";
  this.$refs.videoQuitButton.style.display = "none";
  this.$refs.videoBackgroundFullScreen.style.display = "none";
  activateScroll();
},
  activateFullscreen() {
   deactivateScroll();
    this.video.style.display = "";
    this.$refs.videoQuitButton.style.display = "";
    this.$refs.videoBackgroundFullScreen.style.display = "";
  }
  },

}

</script>
<template>
  <div ref="videoBackgroundFullScreen" class="video-background-fullscreen"></div>
  <video  class="three-video" ref="video"  playsinline autoplay muted loop controls type="video/mp4">
<source ref="videoSource" :src="require('@/assets/'+this.srcVideo)">
  </video>

  <div class="video-button" ref="videoQuitButton">
    <main-button class="video-button"   key-event="" :delay="0" @click="deactivateFullScreen" >Quit</main-button>
  </div>
</template>

<style scoped>

.video-background-fullscreen{
  top: 0%;
  left: 0%;
  background-color: #12173D;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 5;
}
.three-video{
  top: 0%;
  left: 0%;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 5;

}
.video-button{

  position: fixed;
  z-index: 6;
  top: 0%;
  left: 0%;
}
</style>

