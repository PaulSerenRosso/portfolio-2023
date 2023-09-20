<script >

import * as THREE from 'three';
import {EffectComposer} from "three/addons/postprocessing/EffectComposer.js";

import {RenderPass} from "three/addons/postprocessing/RenderPass.js";
import {Scene} from "three";
export default{
  name: "ThreeScene",
  props:{ containerId:String},

  beforeCreate() {
    this.$store.commit('createNewScene');
  },
  methods: {
    addToScene: function (obj) {
      this.scene.add(obj);

    }
  },

  mounted() {

    this.$store.commit('initNewScene', {sceneContainer: document.getElementById(this.containerId)});
  },


}
</script>

<template>
  <div class="canvas-container" :id="this.containerId"></div>
</template>

<style scoped >

.canvas-container
{
  top: 0%;
  left: 0%;
  position: absolute;
  width: 100%;
  height: 200%;
}
</style>