<script >
export default{
  name: "ThreeScene",
  props:{ containerId:String},

  beforeCreate() {

    this.$store.dispatch('createNewScene');
  },

  mounted() {

    this.$store.dispatch('initNewScene', document.getElementById(this.containerId));

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
  position: fixed;
  width: 100%;
  height: 100%;
  animation-name: reveal-animation;
  animation-fill-mode: forwards;
  animation-duration: 2s;
  animation-timing-function:  linear;
}
@keyframes reveal-animation {
  from
  {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>