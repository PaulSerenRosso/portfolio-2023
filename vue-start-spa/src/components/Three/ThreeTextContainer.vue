<script>
import ThreeText from "@/components/Three/ThreeText.vue";
import ThreeEdges from "@/components/Three/ThreeEdges.vue";

export default {
  name: "ThreeTextContainer",
  components: {ThreeText, ThreeEdges},
  props: {
    textUsed: String,
    textObjectName: String,
    threeTextResponsivePropertyGroup: Object,
    edgesWidthThickness: Number,
    edgesZThickness: Number,
    edgesColor: String,
    movementLength:Number,
    movementFrequency:Number,

  }
}
</script>

<template>

  <three-Text :movement-frequency="this.movementFrequency" :movement-length="this.movementLength"  :three-text-responsive-property-group="this.threeTextResponsivePropertyGroup" :text-used="this.textUsed"
                 :text-object-name=this.textObjectName> </three-Text>
  <three-edges :need-to-be-activated="false" :dynamic-parent-object-name=this.textObjectName :edges-color=this.edgesColor :edges-width-thickness=this.edgesWidthThickness  :edges-z-thickness=this.edgesZThickness  ></three-edges>
</template>

<style scoped>

</style>