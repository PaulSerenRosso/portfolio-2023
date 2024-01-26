<script >
import MacroContainer from "@/components/Container/MacroContainer.vue";
import ThreeProjectOverviewGrid from "@/components/Three/Grid/ThreeProjectOverviewGrid.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeGridProperty} from "@/composables/ResponsiveProperty/ThreeGridProperty";
import {Vector2} from "three";
import {Vector3} from "@/composables/Vector3";

export default {
  name: "KeyProjectsContainer",
  components: {ThreeProjectOverviewGrid, MacroContainer},
  data(){
    return{
        threeGridResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.5,0.9),0,new Vector2(0.1,0.1), new Vector2(0.2,0.2), new Vector2(0.1,0.1)),
            new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.5,0.9),0,new Vector2(0.1,0.1), new Vector2(0.2,0.2),new Vector2(0.1,0.1)),
            new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.5,0.9),0,new Vector2(0.2,0.2), new Vector2(0.2,0.2),new Vector2(0.1,0.1)),
            new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.5,0.9),0,new Vector2(0.2,0.2), new Vector2(0.2,0.2),new Vector2(0.1,0.1))
        ),
    }
  }
}
</script>

<template>
  <macro-container ref="macroContainer"  resize-event-key="keyProjectsMacroContainer" :height-desktop="1" :height-mobile="1" :height-large-desktop="1" :height-tablet="1"></macro-container>
  <three-project-overview-grid  :three-grid-responsive-property-group="this.threeGridResponsivePropertyGroup"
                                :picture-srcs="['snowflake1.png','PaulSerenRossoPhoto.jpg','logo.png','logo.png']"
                                :title-texts="['It not a Rocket Science','Esquirel','Memory Of Hope','Jab']"
                                base-tag="Project"
                                :description-texts="['A project f ds  fdjskq m ldkjf qs lkjd fdslq l','A project f ds  fdjskq m ldkjf qs lkjd fdslq l','A project f ds  fdjskq m ldkjf qs lkjd fdslq l','A project f ds  fdjskq m ldkjf qs lkjd fdslq l']"
                                macro-container-resize-event-key="keyProjectsMacroContainer"
                                :description-offset-y="0.2"
                                :title-offset-y="0.2"
                                :tag-texts-lists="[['Unity', 'UE5', 'Git'],['Unity', 'UE5', 'Git','Unity', 'UE5', 'Git'],['Unity', 'UE5'], ['Unity', 'UE5','C++']]"
                                :levitated-movement-frequency="0.1"
                                :levitated-movement-length="0.1"
                                :text-grid-offset-y="0.1"></three-project-overview-grid>
</template>

<style scoped>

</style>