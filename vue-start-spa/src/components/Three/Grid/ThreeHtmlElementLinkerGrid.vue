<script >

import ThreeJsHtmlPositionLinker from "@/components/Three/ThreeJsHtmlPositionLinker.vue";

export default {
  name: "ThreeHtmlElementLinkerGrid",
  components: {ThreeJsHtmlPositionLinker},
  props:{
    textsCount:Number,
    htmlElementIdBaseName:String,
    threeResponsivePropertyGroups:Array,
    offsetHtmlPositionX:Number,
    offsetHtmlPositionY:Number,
  },
}
</script>

<template>
  <div v-for="( index) in this.textsCount" :key="index">
  <three-js-html-position-linker :offset-html-position-y="this.offsetHtmlPositionY" :offset-html-position-x="this.offsetHtmlPositionX" :three-basic-responsive-property-group="this.threeResponsivePropertyGroups[index]" :html-element-id-name="this.htmlElementIdBaseName+index"></three-js-html-position-linker>
  </div>

</template>

<style scoped>

</style>