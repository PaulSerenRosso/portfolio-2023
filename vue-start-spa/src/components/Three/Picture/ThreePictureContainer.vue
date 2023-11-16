<script>
import ThreePicture from "@/components/Three/Picture/ThreePicture.vue";
import ThreeEdges from "@/components/Three/ThreeEdges.vue";
import ThreeJsGroupObject from "@/components/Three/ThreeJsGroupObject.vue";
import ThreeLevitatedObject from "@/components/Three/ThreeLevitatedObject.vue";

export default {
  name: "ThreePictureContainer",
  components: {ThreeLevitatedObject, ThreeJsGroupObject, ThreePicture, ThreeEdges},
  props: {
    srcPicture: String,
    edgesWidthThickness:Number,
    edgesZThickness:Number,
    pictureObjectTag:String,
    edgesColor:String,
    threeBasicResponsivePropertyGroup:Object,
    levitatedMovementFrequency:Number,
    levitatedMovementLength:Number,

  },
}
</script>

<template>

  <three-js-group-object :obj-tag="this.pictureObjectTag+'Parent'" :parent-obj-tag="this.pictureObjectTag+'Root'"></three-js-group-object>
  <three-levitated-object :current-obj-tag="this.pictureObjectTag+'Parent'" :movement-length="this.levitatedMovementLength" :movement-frequency="this.levitatedMovementFrequency"></three-levitated-object>
  <three-picture :on-create-key="this.pictureObjectTag+'OnCreated'"   :src-picture="this.srcPicture" :id-picture="this.pictureObjectTag+'Id'"
                  :parent-picture-tag="this.pictureObjectTag+'Parent'"> </three-picture>
  <three-edges :parent-object-tag="this.pictureObjectTag" :on-parent-created-key="this.pictureObjectTag+'OnCreated'" :three-basic-responsive-property-group="this.threeBasicResponsivePropertyGroup"  :edges-color=this.edgesColor :edges-width-thickness=this.edgesWidthThickness  :edges-z-thickness=this.edgesZThickness></three-edges>
</template>

<style scoped>

</style>