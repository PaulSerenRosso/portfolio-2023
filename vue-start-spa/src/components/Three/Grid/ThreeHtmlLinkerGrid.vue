<script>
import ThreeJsHtmlPositionLinker from "@/components/Three/ThreeJsHtmlPositionLinker.vue";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";

export default {
  name: "ThreeHtmlLinkerGrid",
  components: {RevealAnimationTrigger, ThreeJsHtmlPositionLinker},
  props:{
    baseId:String,
    threePropertyGroups:Array,
    threeJsHtmlPositionLinkerPropertyGroup:Object,
    macroContainerId:String,
    isOutsideMacroContainer:Boolean

  },
  created() {
    console.log("testa",this.threePropertyGroups)
    console.log(this.threePropertyGroups)
  },



}
</script>

<template>
<div v-for="(item,index) in this.threePropertyGroups" :key="index">
  <three-js-html-position-linker :macro-container-id="this.macroContainerId" :is-outside-macro-container="isOutsideMacroContainer" :three-js-html-position-linker-property-group="this.threeJsHtmlPositionLinkerPropertyGroup" :three-basic-responsive-property-group="item" :html-element-id-name="this.baseId+index" :offset-html-position-x="this.offsetX" :offset-html-position-y="this.offsetY">

  </three-js-html-position-linker>
  <reveal-animation-trigger :is-debug="false" :top-mobile="item.responsivePropertyGroup[0].initialPosition.y*100" :top-large-desktop="item.responsivePropertyGroup[3].initialPosition.y*100" :top-desktop="item.responsivePropertyGroup[2].initialPosition.y*100" :top-tablet="item.responsivePropertyGroup[1].initialPosition.y*100" :reveal-animation-trigger-event-key="this.baseId+index+'AnimationTrigger'">

  </reveal-animation-trigger>
</div>
</template>

<style scoped>

</style>