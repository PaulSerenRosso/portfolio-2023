<script >


import {
  addRemoveAtSceneChangedEvent,
  addRemoveAtSceneChangedResponsiveListener, getApp, raiseAndRemoveEvent, raiseEvent
} from "@/composables/StoreHelper";
import {store} from "@/store/Store";


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
      currentContainerInfo:{top:0, height:0},
      app:{},
    }
  },
  created() {
    addRemoveAtSceneChangedEvent(this.resizeEventKey);
  },
  mounted() {
    addRemoveAtSceneChangedResponsiveListener(this.tryUpdateCurrentContainerInfo);
    this.app = getApp();
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


        this.currentContainerInfo.top = (this.$refs.container.getBoundingClientRect().top + this.app.scrollTop) / this.app.clientHeight;
        this.$refs.container.style.height = ((this.currentContainerInfo.height) * 100) + "%";

    },

  }
}
</script>

<template>
<div class="macro-container" :id="resizeEventKey" ref="container" >
  <slot></slot>
</div>
</template>

<style scoped>
.macro-container{
  position: relative;
width: 100%;
}
</style>