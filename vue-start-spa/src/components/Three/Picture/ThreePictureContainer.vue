<script>
import ThreePicture from "@/components/Three/Picture/ThreePicture.vue";
import ThreeEdges from "@/components/Three/ThreeEdges.vue";
import ThreeParent from "@/components/Three/ThreeParent.vue";

export default {
  name: "ThreePictureContainer",
  components: {ThreeParent, ThreePicture, ThreeEdges},
  props: {
    srcPicture: String,
    pictureObjectTag:String,
    isDebugRatio:Boolean,
    threeBasicResponsivePropertyGroup:Object,
    macroContainerResizeEventKey:String,
  },
}
</script>

<template>

  <three-parent  :three-transform-responsive-property-group="this.threeBasicResponsivePropertyGroup" :has-ratio-obj-created-event="true" :tag="this.pictureObjectTag" :macro-container-resize-event-key="this.macroContainerResizeEventKey" :movement-length="0.05" :movement-frequency="1.5"></three-parent>
  <three-picture :is-debug-ratio="this.isDebugRatio" :picture-tag="this.pictureObjectTag" :on-create-key="this.pictureObjectTag+'OnCreated'"   :src-picture="this.srcPicture"
                  :parent-picture-tag="this.pictureObjectTag+'Parent'"> </three-picture>
  <three-edges :parent-object-tag="this.pictureObjectTag" :on-parent-created-key="this.pictureObjectTag+'OnCreated'"  :edges-width-thickness=0.1  :edges-z-thickness=0.2></three-edges>
</template>

<style scoped>

</style>