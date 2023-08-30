<script>

import {VideoTexture, MeshPhongMaterial, PlaneGeometry, Mesh, FrontSide, MeshBasicMaterial, Vector3} from 'three';
import {AnimatedObject} from "@/store/StoreClasses";
import * as THREE from "three";

export default{
  name: "TabletVideo",
  data()
  {
    return{
      video : null,
      videoButton:null,
      videoButtonId:null,
    }

  },
  created() {
    this.videoButtonId = this.idVideo+"Button";
  },
  mounted() {


    this.video = document.getElementById(this.idVideo);
    this.videoButton = document.getElementById(this.videoButtonId);
    this.video.onloadeddata = () =>{
      this.video.play()

    };
    this.video.style.display = "none";
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
            new THREE.Vector3(0,0,0.5), (animatedObject)=>
            {
              var width = window.innerWidth, height = window.innerHeight;
              var widthHalf = width / 2, heightHalf = height / 2;
              var pos = new Vector3(animatedObject.startPosition.x,animatedObject.startPosition.y,animatedObject.startPosition.z) ;
              pos.project(this.$store.state.camera);
              pos.x = ( pos.x * widthHalf ) + widthHalf;
              pos.y = - ( pos.y * heightHalf ) + heightHalf;
              this.videoButton.style.top = pos.y+"px";
              this.videoButton.style.left = pos.x+"px";

            }));

    // il faut que la fucntin responsive update une variable avec la position actuelle dans l'espace 3d et qui la donne au animated. De plus il prendra en in put la camera position
    videoScreen.name = "Video";

  },
  props: {
    srcVideo: String,
    idVideo: String,

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
  <div :id="this.videoButtonId" class="video-button" v-on:click="this.activateFullscreen" > test </div>
</template>

<style scoped>
.video-button
{
position: absolute;

}
</style>