<script >
import MacroContainer from "@/components/Container/MacroContainer.vue";
import ThreeProjectOverviewGrid from "@/components/Three/Grid/ThreeProjectOverviewGrid.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeGridProperty} from "@/composables/ResponsiveProperty/ThreeGridProperty";
import {Vector2} from "three";
import {Vector3} from "@/composables/Vector3";
import {ThreeJsHtmlPositionLinkerProperty} from "@/composables/ResponsiveProperty/ThreeJsHtmlPositionLinkerProperty";

export default {
  name: "ProjectsContainer",
  components: {ThreeProjectOverviewGrid, MacroContainer},
  props:{
pictureSrcs:Array,
titleTexts:Array,
descriptionTexts:Array,
tagTextsLists:Array,
pageLinks:Array,
  },
  data(){
    return{
        threeGridResponsivePropertyGroup:new ResponsivePropertyGroup(
            new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.56,0.9),20,new Vector2(0.2,0.35), new Vector3(0.5,0.12,1),new Vector2(0.1,0.1)),
            new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.56,0.9),20,new Vector2(0.2,0.35), new Vector3(0.5,0.12,1),new Vector2(0.1,0.1)),
            new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.4,0.6,0.9),20,new Vector2(0.3,0.25), new Vector3(0.2,0.2,1),new Vector2(0.1,0.1)),
            new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.4,0.6,0.9),20,new Vector2(0.3,0.25), new Vector3(0.2,0.2,1),new Vector2(0.1,0.1))
        ),
      threeGridTextResponsivePropertyGroupTemplate:new ResponsivePropertyGroup(
          new ThreeGridProperty(new Vector3(0.6,0.1,0), new Vector3(0,0.10,0),20,new Vector2(0.15,0.03), new Vector3(0.05,0.025,0.5),new Vector2(0.15,0.1)),
          new ThreeGridProperty(new Vector3(0.6,0.1,0), new Vector3(0,0.10,0),20,new Vector2(0.15,0.03), new Vector3(0.05,0.025,0.5),new Vector2(0.15,0.1)),
          new ThreeGridProperty(new Vector3(0.5,0.2,0), new Vector3(0.1,0.22,0),20,new Vector2(0.04,0.05), new Vector3(0.027,0.027,0.5),new Vector2(0.1,0.1)),
          new ThreeGridProperty(new Vector3(0.5,0.2,0), new Vector3(0.1,0.22,0),20,new Vector2(0.04,0.05), new Vector3(0.04,0.04,0.5),new Vector2(0.1,0.1))
      ),
      threeJsHtmlPositionLinkerPropertyGroup:new ResponsivePropertyGroup(
          new ThreeJsHtmlPositionLinkerProperty(undefined,14),
          new ThreeJsHtmlPositionLinkerProperty(undefined,14),
          new ThreeJsHtmlPositionLinkerProperty(2,undefined,),
          new ThreeJsHtmlPositionLinkerProperty(2,undefined,),
      )
    }
  }
}
</script>

<template>
  <macro-container ref="macroContainer"  resize-event-key="keyProjectsMacroContainer" :height-desktop="1" :height-mobile="1" :height-large-desktop="1" :height-tablet="1"></macro-container>
  <three-project-overview-grid
      :three-js-html-position-linker-property-group="this.threeJsHtmlPositionLinkerPropertyGroup"
      :three-grid-responsive-property-group="this.threeGridResponsivePropertyGroup"
                                :picture-srcs="this.pictureSrcs"
                                :title-texts="this.titleTexts"
                                base-tag="Project"
                                :description-texts="this.descriptionTexts"
                                macro-container-resize-event-key="keyProjectsMacroContainer"

                                :title-offset-y="20"
                                :tag-texts-lists="this.tagTextsLists"
                                :levitated-movement-frequency="0.1"
                                :levitated-movement-length="0.1"
                                :page-links="this.pageLinks"
                                :three-grid-text-responsive-property-group="this.threeGridTextResponsivePropertyGroupTemplate"
                                ></three-project-overview-grid>
</template>

<style scoped>

</style>