<script >


import {Group, Vector3} from "three";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";

export default {
  name: "ThreeBackgroundParticles",
  mounted() {
    const particleTopParent = new Group();
    particleTopParent.scale.set(2,2,1);
    const subParticleContainer = new Group();
    const threeBasicResponsiveProperty = new ThreeBasicResponsiveProperty(new Vector3(-1,0.5,-5), 0,new Vector3(2,1,5));
    const threeBasicResponsivePropertyGroup = new ResponsivePropertyGroup(
        threeBasicResponsiveProperty,
    threeBasicResponsiveProperty,
    threeBasicResponsiveProperty,
    threeBasicResponsiveProperty);
    threeBasicResponsivePropertyGroup.setOnMediaQueryMatches((property)=> property.set)
    this.$store.commit("addResponsivePropertyGroup", threeBasicResponsivePropertyGroup);

  }

}
</script>

<template>

</template>

<style scoped>

</style>