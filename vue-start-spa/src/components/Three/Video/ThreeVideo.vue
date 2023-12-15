<script>

import {
  VideoTexture,
  PlaneGeometry,
  Mesh,
  FrontSide,
  MeshBasicMaterial,
} from 'three';
import {addEvent, addThreeTagObject, getThreeTagObject, raiseAndRemoveEvent} from "@/composables/StoreHelper";




export default{
  name: "ThreeVideo",
  data()
  {
    return{
      video : null,
      videoButton:null,

    }

  },

  mounted() {

    this.video = document.getElementById(this.idVideo);
    this.video.style.display = "none";
    this.videoButton = document.getElementById(this.videoButtonId);
    addEvent(this.onCreateKey);
    this.video.onloadeddata = () =>{
      this.video.play()

    this.videoButton.addEventListener('click', this.activateFullscreen);
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        this.video.style.display = "none";
      }
    });
    const videoTexture= new VideoTexture(this.video);
    const videoMaterial= new MeshBasicMaterial(
        {map: videoTexture, side: FrontSide, toneMapped: false, fog: false});
    const screen = new PlaneGeometry(this.video.videoWidth/this.video.videoHeight,1);

    const videoScreen = new Mesh(screen, videoMaterial);
      getThreeTagObject(this.parentVideoTag).add(videoScreen);
      addThreeTagObject(videoScreen, this.videoTag);
      raiseAndRemoveEvent(this.onCreateKey);
    };




  },
  props: {
    srcVideo: String,
    idVideo: String,
    videoButtonId:String,
    parentVideoTag:String,
    onCreateKey:String,
    videoTag:String,

  },
  methods: {
  activateFullscreen() {
    if (this.video.requestFullscreen) {
      this.video.requestFullscreen();
    } else if (this.video.mozRequestFullScreen) { // Firefox
      this.video.mozRequestFullScreen();
    } else if (this.video.webkitRequestFullscreen) { // Chrome, Safari and Opera
      this.video.webkitRequestFullscreen();
    } else if (this.video.msRequestFullscreen) { // IE/Edge
      this.video.msRequestFullscreen();
    }
    this.video.style.display = "flex";
  }
  },



}

</script>
<template>
  <video :id="this.idVideo" playsinline webkit-playsinline muted loop autoplay
         :src="require('@/assets/'+this.srcVideo)" ></video>
</template>

