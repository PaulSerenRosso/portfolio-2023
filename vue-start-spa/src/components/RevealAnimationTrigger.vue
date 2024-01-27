<script >
import {
  addCreateSceneHandlerListener,
  addRemoveAtSceneChangedEvent,
  addRemoveAtSceneChangedResponsiveListener,
  raiseAndRemoveEvent
} from "@/composables/StoreHelper";

export default {
  name: "RevealAnimationTrigger",
  data(){
    return{
      currentTopValue:0
    }
  },
  props:{
    topMobile:Number,
    topTablet:Number,
    topDesktop:Number,
    topLargeDesktop:Number,
    revealAnimationTriggerEventKey:String,
    isDebug:Boolean,

  },
  created() {
    addRemoveAtSceneChangedEvent(this.revealAnimationTriggerEventKey);

    },
  mounted() {
    addCreateSceneHandlerListener(()=>{ window.removeEventListener("scroll", this.checkNeedToTrigger);})
    addRemoveAtSceneChangedResponsiveListener(this.tryReplaceTrigger);
    window.addEventListener('scroll', this.checkNeedToTrigger);
    this.tryReplaceTrigger();
    this.checkNeedToTrigger();
    if(this.isDebug){
      this.$refs.revealAnimationTrigger.style.backgroundColor = "red";
    }
    else {
      this.$refs.revealAnimationTrigger.style.display = "transparent";
    }
  },
  methods:{
    tryReplaceTrigger(){
      if(this.$store.state.responsiveEventHandler.deviceHasChanged){

        switch (this.$store.state.responsiveEventHandler.devicePlateformId){
          case 0 :{
            this.currentTopValue = this.topMobile;
            break;
          }
          case 1 :{
            this.currentTopValue = this.topTablet;
            break;
          }
          case 2 :{
            this.currentTopValue = this.topDesktop;
            break;
          }
          case 3 :{
            this.currentTopValue = this.topLargeDesktop;
            break;
          }
        }

        this.$refs.revealAnimationTrigger.style.top = this.currentTopValue+"%";
      }
    },
    checkNeedToTrigger(){

      if(window.innerHeight> this.$refs.revealAnimationTrigger.getBoundingClientRect().top){
        raiseAndRemoveEvent(this.revealAnimationTriggerEventKey);
        window.removeEventListener("scroll", this.checkNeedToTrigger);
      }

    }
  }
}
</script>

<template>
<div ref="revealAnimationTrigger" class="reveal-animation-trigger"></div>
</template>

<style scoped>
.reveal-animation-trigger{
  position: absolute;
  width: 10px;
  height: 10px;
  background-size: cover;

}
</style>