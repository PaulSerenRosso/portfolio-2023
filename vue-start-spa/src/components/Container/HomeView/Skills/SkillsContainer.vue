<script>


import MacroContainer from "@/components/Container/MacroContainer.vue";
import ThreeTextGrid from "@/components/Three/ThreeTextGrid.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeTextGridProperty} from "@/composables/ResponsiveProperty/ThreeTextGridProperty";
import {Vector2, Vector3} from "three";

export default {
  name: "SkillsContainer",
  components: {ThreeTextGrid, MacroContainer},
  data(){
    return{
      threeTextGridResponsiveGroup:new ResponsivePropertyGroup(
          new ThreeTextGridProperty(new Vector3(1,1,1),new Vector3(0.5,0.5,0.9), 10,250,  new Vector2(0.1,0.1), new Vector3(0.1,0.1,1)),
          new ThreeTextGridProperty(new Vector3(1,1,1),new Vector3(0.5,0.5,0.9), 10,250, new Vector2(0.1,0.1), new Vector3(0.1,0.1,1)),
          new ThreeTextGridProperty(new Vector3(1,1,1),new Vector3(0.5,0.5,0.9), 10,250, new Vector2(0.1,0.1), new Vector3(0.1,0.1,1)),
          new ThreeTextGridProperty(new Vector3(1,1,1),new Vector3(0.5,0.5,0.9), 10,250, new Vector2(0.1,0.1), new Vector3(0.1,0.1,1))
      )
    }
  }

}
</script>

<template>
  <macro-container ref="macroContainer"  resize-event-key="skillsMacroContainer" :height-desktop="1" :height-mobile="1" :height-large-desktop="1" :height-tablet="1">
  <three-text-grid :levitated-movement-frequency="1.5" :levitated-movement-length="0.01" :three-grid-responsive-property-group="this.threeTextGridResponsiveGroup" macro-container-resize-event-key="skillsMacroContainer" base-tag="skillText" :texts="['C#', 'Unity', 'UE5','Network']"></three-text-grid>
  </macro-container>
</template>

<style scoped>

</style>