<script>
import ThreeText from "@/components/Three/Text/ThreeText.vue";
import ThreeEdges from "@/components/Three/ThreeEdges.vue";
import ThreeLevitatedObject from "@/components/Three/ThreeLevitatedObject.vue";
import ThreeJsGroupObject from "@/components/Three/ThreeJsGroupObject.vue";
import ThreeParent from "@/components/Three/ThreeParent.vue";

export default {
  name: "ThreeTextContainer",
  components: {ThreeParent,ThreeText, ThreeEdges},
  props: {
    textUsed: String,
    threeTextResponsivePropertyGroup: Object,
    textObjectTag:String,
    levitatedMovementFrequency:Number,
    levitatedMovementLength:Number,
    isDebugRatio:Boolean,
    macroContainerResizeEventKey:String,
  },
}
</script>

<template>

  <three-parent  :three-transform-responsive-property-group="this.threeTextResponsivePropertyGroup" :has-ratio-obj-created-event="false" :tag="this.textObjectTag" :macro-container-resize-event-key="this.macroContainerResizeEventKey" :movement-length="0.05" :movement-frequency="1.5"></three-parent>
  <three-text :is-debug-ratio="this.isDebugRatio" :three-text-responsive-property-group="this.threeTextResponsivePropertyGroup" :text-used="this.textUsed" :parent-text-tag="this.textObjectTag+'Parent'" :text-tag="this.textObjectTag"
                 > </three-text>
  <three-edges  :parent-object-tag="this.textObjectTag"  :edges-width-thickness=0.2  :edges-z-thickness=0.2  ></three-edges>
</template>

<style scoped>

</style>