<script >

import ThreeTextContainer from "@/components/Three/Text/ThreeTextContainer.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
import {Vector3} from "three";

export default {
  name: "ThreeTextGrid",
  components: {ThreeTextContainer,},
  props:{
    texts:Array,
    baseTag:String,
    threeGridResponsivePropertyGroup:Object,
    macroContainerResizeEventKey:String,
    levitatedMovementFrequency:Number,
    levitatedMovementLength:Number,
  },
  data(){
    return{
      textsResponsivePropertyGroups:[]
    }
  },
  created() {

    for (let j = 0; j < this.threeGridResponsivePropertyGroup.responsivePropertyGroup.length; j++) {
      this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].setElementCountByLine(this.texts.length);

    }

    for (let i = 0; i < this.texts.length; i++) {
      var currentResponsiveProperties = [];
      for (let j = 0; j < this.threeGridResponsivePropertyGroup.responsivePropertyGroup.length; j++) {
        const position = this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].placeElement(i);
        const rotation = this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].rotation;
        const scale = new Vector3(this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.x,
            this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.y,
            this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.z);
          currentResponsiveProperties.push(new ThreeBasicResponsiveProperty(position,rotation,scale));

      }
      this.textsResponsivePropertyGroups.push(new ResponsivePropertyGroup(currentResponsiveProperties[0], currentResponsiveProperties[1],
          currentResponsiveProperties[2], currentResponsiveProperties[3]));
    }
  }

}
</script>

<template>
  <div v-for="(text, index) in this.texts" :key="index">

  <three-text-container :macro-container-resize-event-key="this.macroContainerResizeEventKey"  :three-text-responsive-property-group="this.textsResponsivePropertyGroups[index]"
                   :levitated-movement-length="this.levitatedMovementLength" :levitated-movement-frequency="this.levitatedMovementFrequency"     :text-object-tag="this.baseTag+index" :text-used="text" ></three-text-container>
  </div>

</template>

<style scoped>

</style>