<script >


import {
  addRemoveAtSceneChangedEvent,
  addRemoveAtSceneChangedResponsiveListener, raiseEvent
} from "@/composables/StoreHelper";


export default {
  name: "MacroContainer",
  props:{
    heightMobile:Number,
    heightTablet:Number,
    heightDesktop:Number,
    heightLargeDesktop:Number,
    resizeEventKey:String,
  },
  data(){
    return{
      currentContainerInfo:{top:0, height:0}
    }
  },
  created() {
    addRemoveAtSceneChangedEvent(this.resizeEventKey);
    console.log("created event");
  },
  mounted() {
    addRemoveAtSceneChangedResponsiveListener(this.tryUpdateCurrentContainerInfo);
    this.updateCurrentContainerInfo();
    raiseEvent(this.resizeEventKey, this.currentContainerInfo);
  },
  methods:{
    tryUpdateCurrentContainerInfo(){
      if(this.$store.state.responsiveEventHandler.deviceHasChanged) {
        this.updateCurrentContainerInfo();
      }
      raiseEvent(this.resizeEventKey, this.currentContainerInfo);
    },
    updateCurrentContainerInfo(){
        switch (this.$store.state.responsiveEventHandler.devicePlateformId) {
          case 0 : {
            this.currentContainerInfo.height = this.heightMobile;
            break;
          }
          case 1 : {
            this.currentContainerInfo.height = this.heightTablet;
            break;
          }
          case 2 : {
            this.currentContainerInfo.height = this.heightDesktop;
            break;
          }
          case 3 : {
            this.currentContainerInfo.height = this.heightLargeDesktop;
            break;
          }
        }
        this.currentContainerInfo.top = (this.$refs.container.getBoundingClientRect().top + window.scrollY) / window.innerHeight;
        this.$refs.container.style.height = (this.currentContainerInfo.height * 100) + "%";

    },

  }
}
</script>

<template>
<div class="macro-container" ref="container" >
  <slot></slot>
</div>
</template>

<style scoped>
.macro-container{
  position: relative;
width: 100%;
}
</style>