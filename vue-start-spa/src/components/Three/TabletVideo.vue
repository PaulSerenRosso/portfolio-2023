<script>

import {VideoTexture, MeshPhongMaterial, PlaneGeometry, Mesh, FrontSide, MeshBasicMaterial} from 'three';
import {AnimatedObject} from "@/store/StoreClasses";
import * as THREE from "three";


export default{
  name: "TabletVideo",
  mounted() {

    console.log('three video mounted')
    const videoId = this.idVideo;
    let video = document.getElementById(videoId);
    video = document.getElementById(this.idVideo);
    video.onloadeddata = function () {
      video.play()
    };
    const videoTexture= new VideoTexture(video);
    const videoMaterial= new MeshPhongMaterial(
        {map: videoTexture, side: FrontSide, toneMapped: false, fog: false});
    const screen = new PlaneGeometry(1, 1);
    const videoScreen = new Mesh(screen, videoMaterial);
    this.$store.commit('addScene',videoScreen);
    this.$store.commit('addDynamicObject',
        new AnimatedObject(videoScreen, 2,3,
            new THREE.Vector3(0.5,0.5,0.5)));
    // il faut que la fucntin responsive update une variable avec la position actuelle dans l'espace 3d et qui la donne au animated. De plus il prendra en in put la camera position
    videoScreen.name = "Video";

  },
  props: {
    srcVideo: String,
    idVideo: String,
  },




}

</script>

<template>
  <video :id="this.idVideo" playsinline webkit-playsinline muted loop autoplay
         :src="require('@/assets/'+this.srcVideo)" style="display: none;"></video>
</template>

<style scoped>

</style>