<script >


import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import getOrAddEventHandler from "@/store/StoreHelper";

export default {
  name: "ThreeResponsiveTransform",
  props: {
    threeTransformResponsivePropertyGroup:ResponsivePropertyGroup,
    currentObjTag:String,
    currentObjAddedEventKey:String,
  },
  mounted() {
    if(this.currentObjAddedEventKey !== undefined){
      this.$store.eventsManager.getters.getEventHandler(this.applyResponsiveTransform);
    }
    else this.applyResponsiveTransform();
  },
  methods:{
    applyResponsiveTransform(){
      this.$store.responsiveEventHandler.state.onWindowResizeHandler.addEventListener(this.resizeCurrentObject);

    },
    resizeCurrentObject(){

    }
  }
}
</script>

<template>

</template>

<style scoped>

</style>