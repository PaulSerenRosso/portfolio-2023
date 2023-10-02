<script>

import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";
import ThreeBackgroundSubParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundSubParticles.vue";

export default {
  name: "ThreeBackgroundParticlesContainer",
  props:{
    threeBackgroundParticlesResponsiveGroup:Object,
    allThreeBackgroundSubParticlesResponsiveGroup:Array,
    allTextureSrc:Array,
    backgroundParticleSystemObjectName:String,
  },
  components:ThreeBackgroundParticles, ThreeBackgroundSubParticles,
}
</script>

<template>
  <three-background-particles  ></three-background-particles>
  <three-background-sub-particles :sub-particle-index=0 :three-background-sub-particles-responsive-group="allThreeBackgroundSubParticlesResponsiveGroup[0]"  :texture-src="this.allTextureSrc[0]" ></three-background-sub-particles>
  <three-background-sub-particles :sub-particle-index=1 :three-background-sub-particles-responsive-group="allThreeBackgroundSubParticlesResponsiveGroup[1]" :texture-src="this.allTextureSrc[1]" ></three-background-sub-particles>
   <three-background-sub-particles :sub-particle-index=2 :three-background-sub-particles-responsive-group="allThreeBackgroundSubParticlesResponsiveGroup[2]" :texture-src="this.allTextureSrc[2]" ></three-background-sub-particles>
  <three-background-sub-particles :sub-particle-index=3 :three-background-sub-particles-responsive-group="allThreeBackgroundSubParticlesResponsiveGroup[3]" :texture-src="this.allTextureSrc[3]" ></three-background-sub-particles>
  <three-background-sub-particles :sub-particle-index=4 :three-background-sub-particles-responsive-group="allThreeBackgroundSubParticlesResponsiveGroup[4]" :texture-src="this.allTextureSrc[4]" ></three-background-sub-particles>
   <three-background-sub-particles :sub-particle-index=5 :three-background-sub-particles-responsive-group="allThreeBackgroundSubParticlesResponsiveGroup[5]" :texture-src="this.allTextureSrc[5]" ></three-background-sub-particles>

</template>

<style scoped>

</style>