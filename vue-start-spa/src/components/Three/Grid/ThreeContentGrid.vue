<script >

import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
import {Vector3} from "three";
import ThreePictureContainer from "@/components/Three/Picture/ThreePictureContainer.vue";
import ThreeHtmlLinkerGrid from "@/components/Three/Grid/ThreeHtmlLinkerGrid.vue";
import ThreeVideoContainer from "@/components/Three/Video/ThreeVideoContainer.vue";
import {ThreeContentType} from "@/composables/ThreeContentType";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";

export default {
  name: "ThreeContentGrid",
  computed: {
    ThreeContentType() {
      return ThreeContentType
    }
  },
  components: { ThreeVideoContainer, ThreeHtmlLinkerGrid, ThreePictureContainer,},
  props:{
    contentTypes:Array,
    contentSrcs:Array,
    baseTag:String,
    threeGridResponsivePropertyGroup:Object,
    macroContainerResizeEventKey:String,
    hasHtmlLinkerGrid:Boolean,
    baseId:String,
    threeJsHtmlPositionLinkerPropertyGroup:Object,
    threeJsHtmlVideoPositionLinkerPropertyGroup:Object,
    animationRevealVideoButtonKey:String,
    macroContainerId:String,
    isOutsideMacroContainer:Boolean,

  },
  data(){
    return{
      contentsResponsivePropertyGroups:[]
    }
  },

  created() {
    for (let j = 0; j < this.threeGridResponsivePropertyGroup.responsivePropertyGroup.length; j++) {
      this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].setElementCountByLine(this.contentSrcs.length);
    }
    for (let i = 0; i < this.contentSrcs.length; i++) {
      var currentResponsiveProperties = [];
      for (let j = 0; j < this.threeGridResponsivePropertyGroup.responsivePropertyGroup.length; j++) {
        const position = this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].placeElement(i);
        const rotation = this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].rotation;
        const scale = new Vector3(this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.x,
            this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.y,
            this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.z);
        currentResponsiveProperties.push(new ThreeBasicResponsiveProperty(position,rotation,scale));
      }
      this.contentsResponsivePropertyGroups.push(new ResponsivePropertyGroup(currentResponsiveProperties[0], currentResponsiveProperties[1],
          currentResponsiveProperties[2], currentResponsiveProperties[3]));
    }

  }

}
</script>

<template>
  <div v-for="(content, index) in this.contentSrcs" :key="index">

    <three-picture-container v-if="contentTypes[index] === ThreeContentType.Picture" :macro-container-resize-event-key="this.macroContainerResizeEventKey" :three-basic-responsive-property-group="this.contentsResponsivePropertyGroups[index]" ,
                            :picture-object-tag="this.baseTag+index" :src-picture="content" ></three-picture-container>
    <three-video-container  :is-outside-macro-container="true"  v-if="contentTypes[index] === ThreeContentType.Video" :key-event-trigger-animation="this.animationRevealVideoButtonKey" :delay-animation-reveal="1000"  :three-js-html-position-linker-property-group="this.threeJsHtmlVideoPositionLinkerPropertyGroup" :macro-container-resize-event-key="this.macroContainerResizeEventKey" :three-basic-responsive-property-group="this.contentsResponsivePropertyGroups[index]" ,
                             :video-object-tag="this.baseTag+index" :src-video="content" ></three-video-container>
  </div>
<three-html-linker-grid :is-outside-macro-container="isOutsideMacroContainer" :macro-container-id="this.macroContainerId"  :three-js-html-position-linker-property-group="this.threeJsHtmlPositionLinkerPropertyGroup" v-if="this.hasHtmlLinkerGrid" :three-property-groups="contentsResponsivePropertyGroups" :base-id="this.baseId"  ></three-html-linker-grid>
</template>

<style scoped>

</style>