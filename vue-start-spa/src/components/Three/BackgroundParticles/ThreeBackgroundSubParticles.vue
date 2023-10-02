<script >


export default  {
  name: "ThreeBackgroundSubParticles",
  props:{
    textureSrc:String,
    subParticleIndex : Number,
    threeBackgroundSubParticlesResponsiveGroup:Object,
  },
}
</script>

<template>
  <img id="_textureParticle"
       :src="'@/assets/'+this.textureSrc" style="display: none;">
</template>

<style scoped>

</style>