<script>
import ThreePicture from "@/components/Three/Picture/ThreePicture.vue";
import ThreeEdges from "@/components/Three/ThreeEdges.vue";

export default {
  name: "ThreePictureContainer",
  components: { ThreePicture, ThreeEdges},
  props: {
    srcPicture: String,
    idPicture: String,
    pictureObjectName:String,
    edgesWidthThickness:Number,
    edgesZThickness:Number,
    edgesColor:String,
    movementLength:Number,
    movementFrequency:Number,
    threeBasicResponsivePropertyGroup:Object,

  },
  data()
  {
    return{
      pictureIsLoaded:false,
    }
  },
  computed: {

    checkPictureIsLoaded() {

      return this.pictureIsLoaded;
    }
  },
  methods:
      {
        raiseOnPictureLoaded() {
          this.pictureIsLoaded = true;
          console.log("raise")

        }
      }

}
</script>

<template>

  <three-picture :movement-length="this.movementLength" :movement-frequency="this.movementFrequency" v-on:onPictureLoaded="raiseOnPictureLoaded" :three-basic-responsive-property-group="this.threeBasicResponsivePropertyGroup" :src-picture="this.srcPicture" :id-picture="this.idPicture"
                  :picture-object-name=this.pictureObjectName> </three-picture>
  <keep-alive><three-edges :three-basic-responsive-property-group="this.threeBasicResponsivePropertyGroup" :need-to-be-activated="true" v-if="this.checkPictureIsLoaded" :dynamic-parent-object-name=this.pictureObjectName :edges-color=this.edgesColor :edges-width-thickness=this.edgesWidthThickness  :edges-z-thickness=this.edgesZThickness  ></three-edges> </keep-alive>
</template>

<style scoped>

</style>