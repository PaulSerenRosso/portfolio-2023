<script >

import ThreeTextContainer from "@/components/Three/Text/ThreeTextContainer.vue";

export default {
  name: "ThreeGrid",
  components: {ThreeTextContainer,},
  props:{
    texts:Array,
    baseTag:String,
    threeGridResponsivePropertyGroup:Object,
    macroContainerResizeEventKey:String,
  },
  data(){
    return{
      textsResponsivePropertyGroups:[]
    }
  },
  created() {
    for (let i = 0; i < this.texts.length; i++) {

    }
  }

}
</script>

<template>
  <div v-for="(text, index) in this.texts" :key="index">

  <three-text-container :macro-container-resize-event-key="this.macroContainerResizeEventKey"  :three-text-responsive-property-group="this.textsResponsivePropertyGroups[index]" :parent-text-tag="this.baseTag+'Root'+index"   threeTextResponsivePropertyGroup: Object,

                 :textTag="this.baseTag+index" :text-tag="text"></three-text-container>
  </div>

</template>

<style scoped>

</style>