<script>
import ThreeText from "@/components/Three/Text/ThreeText.vue";
import ThreeEdges from "@/components/Three/ThreeEdges.vue";
import ThreeLevitatedObject from "@/components/Three/ThreeLevitatedObject.vue";
import ThreeJsGroupObject from "@/components/Three/ThreeJsGroupObject.vue";

export default {
  name: "ThreeTextContainer",
  components: {ThreeJsGroupObject, ThreeLevitatedObject, ThreeText, ThreeEdges},
  props: {
    textUsed: String,
    textObjectName: String,
    threeTextResponsivePropertyGroup: Object,
    textObjectTag:String,
    levitatedMovementFrequency:Number,
    levitatedMovementLength:Number,
  }
}
</script>

<template>

  <three-js-group-object :obj-tag="this.textObjectTag+'Parent'" :parent-obj-tag="this.textObjectTag+'Root'"></three-js-group-object>
  <three-levitated-object :current-obj-tag="this.textObjectTag+'Parent'" :movement-length="this.levitatedMovementLength" :movement-frequency="this.levitatedMovementFrequency"></three-levitated-object>
  <three-text  :three-text-responsive-property-group="this.threeTextResponsivePropertyGroup" :text-used="this.textUsed" :parent-text-tag="this.textObjectTag+'Parent'" :text-tag="this.textObjectTag"
                 > </three-text>
  <three-edges  :parent-object-tag="this.textObjectTag"  :edges-width-thickness=0.2  :edges-z-thickness=0.2  ></three-edges>
</template>

<style scoped>

</style>