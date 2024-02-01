<script >
import MacroContainer from "@/components/Container/MacroContainer.vue";
import ThreeProjectOverviewGrid from "@/components/Three/Grid/ThreeProjectOverviewGrid.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeGridProperty} from "@/composables/ResponsiveProperty/ThreeGridProperty";
import {Vector2} from "three";
import {Vector3} from "@/composables/Vector3";
import {ThreeJsHtmlPositionLinkerProperty} from "@/composables/ResponsiveProperty/ThreeJsHtmlPositionLinkerProperty";

export default {
  name: "KeyProjectsContainer",
  components: {ThreeProjectOverviewGrid, MacroContainer},
  data(){
    return{
        threeGridResponsivePropertyGroup:new ResponsivePropertyGroup(
            new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.7,0.9),20,new Vector2(0.2,0.5), new Vector3(0.5,0.3,1),new Vector2(0.1,0.1)),
            new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.7,0.9),20,new Vector2(0.2,0.4), new Vector3(0.5,0.3,1),new Vector2(0.1,0.1)),
            new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.7,0.9),20,new Vector2(0.2,0.7), new Vector3(0.3,0.4,1),new Vector2(0.1,0.1)),
            new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.7,0.9),20,new Vector2(0.2,0.7), new Vector3(0.3,0.4,1),new Vector2(0.1,0.1))
        ),
      threeGridTextResponsivePropertyGroupTemplate:new ResponsivePropertyGroup(
          new ThreeGridProperty(new Vector3(0.6,0.1,0), new Vector3(0,0.2,0),20,new Vector2(0.05,0.05), new Vector3(0.10,0.10,0.5),new Vector2(0.1,0.1)),
          new ThreeGridProperty(new Vector3(0.6,0.1,0), new Vector3(0,0.2,0),20,new Vector2(0.05,0.05), new Vector3(0.10,0.10,0.5),new Vector2(0.1,0.1)) ,
          new ThreeGridProperty(new Vector3(0.4,0.1,0), new Vector3(0,0.31,0),20,new Vector2(0.02,0.1), new Vector3(0.05,0.05,0.5),new Vector2(0.1,0.1)),
          new ThreeGridProperty(new Vector3(0.4,0.1,0), new Vector3(0,0.31,0),20,new Vector2(0.02,0.1), new Vector3(0.05,0.05,0.5),new Vector2(0.1,0.1))
      ),
      threeJsHtmlPositionLinkerPropertyGroup:new ResponsivePropertyGroup(
          new ThreeJsHtmlPositionLinkerProperty(undefined,15),
          new ThreeJsHtmlPositionLinkerProperty(undefined,15),
          new ThreeJsHtmlPositionLinkerProperty(undefined,20),
          new ThreeJsHtmlPositionLinkerProperty(undefined,20),
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
                                :picture-srcs="['snowflake1.png','PaulSerenRossoPhoto.jpg','logo.png','logo.png']"
                                :title-texts="['It not a Rocket Science','Esquirel','Memory Of Hope','Jab']"
                                base-tag="Project"
                                :description-texts="['1A project f ds  fdjskq m ldkjf qs lkjd fdslq l','2A project f ds  fdjskq m ldkjf qs lkjd fdslq l','3A project f ds  fdjskq m ldkjf qs lkjd fdslq l','4A project f ds  fdjskq m ldkjf qs lkjd fdslq l']"
                                macro-container-resize-event-key="keyProjectsMacroContainer"

                                :title-offset-y="20"
                                :tag-texts-lists="[['Unity', 'UE5', 'Git'],['Unity', 'UE5', 'Git','Unity', 'UE5', 'Git'],['Unity', 'UE5'], ['Unity', 'UE5','C++']]"
                                :levitated-movement-frequency="0.1"
                                :levitated-movement-length="0.1"
                                :page-links="['Contact','Esquirel','','Contact']"
                                :three-grid-text-responsive-property-group="this.threeGridTextResponsivePropertyGroupTemplate"
                                ></three-project-overview-grid>
</template>

<style scoped>

</style>