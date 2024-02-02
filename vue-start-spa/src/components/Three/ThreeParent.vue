<script>
import ThreeResponsiveTransform from "@/components/Three/ThreeResponsiveTransform.vue";
import ThreeJsGroupObject from "@/components/Three/ThreeJsGroupObject.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import ThreeLevitatedObject from "@/components/Three/ThreeLevitatedObject.vue";

export default {
  name: "ThreeParent",
  components: {ThreeLevitatedObject, ThreeJsGroupObject, ThreeResponsiveTransform},
  props:{
    tag:String,
    macroContainerResizeEventKey:String,
    threeTransformResponsivePropertyGroup:ResponsivePropertyGroup,
    movementLength:Number,
    movementFrequency:Number,
    hasRatioObjCreatedEvent:Boolean,
    isHeightPriority:Boolean

  }
}
</script>

<template>
  <three-js-group-object :obj-tag="this.tag+'Root'" parent-obj-tag="currentScene" ></three-js-group-object>
  <three-responsive-transform :is-height-priority="this.isHeightPriority" :ratio-obj-tag="this.tag" :event-key-for-get-ratio-obj-tag="this.hasRatioObjCreatedEvent?this.tag+'OnCreated':''" :macro-container-resize-event-key="this.macroContainerResizeEventKey" :current-obj-tag="this.tag+'Root'" :three-transform-responsive-property-group="this.threeTransformResponsivePropertyGroup"  ></three-responsive-transform>
  <three-js-group-object :obj-tag="this.tag+'Parent'" :parent-obj-tag="this.tag+'Root'"></three-js-group-object>
  <three-levitated-object :current-obj-tag="this.tag+'Parent'" :movement-length="this.movementLength" :movement-frequency="movementFrequency"></three-levitated-object>
</template>

<style scoped>

</style>