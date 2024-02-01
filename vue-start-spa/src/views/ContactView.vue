<script>
import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";
import ThreeScene from "@/components/Three/ThreeScene.vue";
import ResumeContainer from "@/components/Container/Contact/ResumeContainer.vue";
import SocialNetworkContainer from "@/components/Container/Contact/SocialNetworkContainer.vue";
export default {
  name: "ContactView",
  components: {
    SocialNetworkContainer,
    ResumeContainer,
    ThreeScene, ThreeBackgroundParticles, //ThreeJsHtmlPositionLinker,
    },


}
</script>

<template>

  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-background-particles></three-background-particles>
<social-network-container></social-network-container>
<resume-container></resume-container>


</template>

<style scoped>
</style>