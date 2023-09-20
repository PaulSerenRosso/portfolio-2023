<script>

import {VideoTexture, MeshPhongMaterial, PlaneGeometry, Mesh, FrontSide, MeshBasicMaterial, Vector3} from 'three';
import {AnimatedObject} from "@/store/StoreClasses";
import * as THREE from "three";
import ThreeJsHtmlPositionLinker from "@/components/Three/ThreeJsHtmlPositionLinker.vue";

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
    console.log("a")
    this.video = document.getElementById(this.idVideo);
    this.videoButton = document.getElementById(this.videoButtonId);
    this.video.onloadeddata = () =>{
      this.video.play()

    };
    this.video.style.display = "none";
    console.log(this.videoButton)
    this.videoButton.addEventListener('click', this.activateFullscreen);
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        this.video.style.display = "none";
      }
    });
    const videoTexture= new VideoTexture(this.video);
    const videoMaterial= new MeshPhongMaterial(
        {map: videoTexture, side: FrontSide, toneMapped: false, fog: false});
    const screen = new PlaneGeometry(1, 1);
    const videoScreen = new Mesh(screen, videoMaterial);
    this.$store.commit('addScene',videoScreen);
    this.$store.commit('addDynamicObject',
        new AnimatedObject(videoScreen, 2,3,
            new THREE.Vector3(0,0,0.5), this.videoObjectName, undefined));

    // il faut que la fucntin responsive update une variable avec la position actuelle dans l'espace 3d et qui la donne au animated. De plus il prendra en in put la camera position
    videoScreen.name = "Video";

  },
  props: {
    srcVideo: String,
    idVideo: String,
    videoObjectName:String,
    videoButtonId:String,

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

<style scoped>
.video-button
{
position: absolute;

}
</style>