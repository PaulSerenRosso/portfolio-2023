<script >

import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
import {Vector3} from "three";
import ThreePictureContainer from "@/components/Three/Picture/ThreePictureContainer.vue";

export default {
  name: "ThreePictureGrid",
  components: { ThreePictureContainer,},
  props:{
    pictureSrcs:Array,
    baseTag:String,
    threeGridResponsivePropertyGroup:Object,
    macroContainerResizeEventKey:String,

  },
  data(){
    return{
      picturesResponsivePropertyGroups:[]
    }
  },
  created() {

    for (let j = 0; j < this.threeGridResponsivePropertyGroup.responsivePropertyGroup.length; j++) {
      this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].setElementCountByLine(this.pictureSrcs.length);
    }
    for (let i = 0; i < this.pictureSrcs.length; i++) {
      var currentResponsiveProperties = [];
      for (let j = 0; j < this.threeGridResponsivePropertyGroup.responsivePropertyGroup.length; j++) {
        const position = this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].placeElement(i);
        const rotation = this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].rotation;
        const scale = new Vector3(this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.x,
            this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.y,
            this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.z);
        currentResponsiveProperties.push(new ThreeBasicResponsiveProperty(position,rotation,scale));
      }
      this.picturesResponsivePropertyGroups.push(new ResponsivePropertyGroup(currentResponsiveProperties[0], currentResponsiveProperties[1],
          currentResponsiveProperties[2], currentResponsiveProperties[3]));
    }
  }

}
</script>

<template>
  <div v-for="(picture, index) in this.pictureSrcs" :key="index">

    <three-picture-container :macro-container-resize-event-key="this.macroContainerResizeEventKey" :three-basic-responsive-property-group="this.picturesResponsivePropertyGroups[index]" ,
                            :picture-object-tag="this.baseTag+index" :src-picture="picture" ></three-picture-container>
  </div>

</template>

<style scoped>

</style>