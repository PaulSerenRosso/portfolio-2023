<script >
import {addCreateSceneHandlerListener, addEventListener} from "@/composables/StoreHelper";

export default {
  name: "SlideInAnimation",
  props:{
    isRightDirection:Boolean,
    keyEvent:String,
    delay:Number,

  },
  data(){
    return{
      timer:null,
    }
  },
  mounted() {
    addEventListener(this.launchSlideInAnimationTimer,this.keyEvent);
  },
  methods:{
    launchSlideInAnimationTimer(){


      this.timer = setTimeout(this.launchSlideInAnimation, this.delay);
      addCreateSceneHandlerListener(()=>clearTimeout(this.timer));
    },
    launchSlideInAnimation(){
      if(this.isRightDirection){
        this.$refs.slotContainer.classList.add("slide-in-animation-right");
      }
      else{
        this.$refs.slotContainer.classList.add("slide-in-animation-top");

      }
    }
  }

}
</script>

<template>
  <div class="slot-container" ref="slotContainer">
    <slot></slot>
  </div>

</template>

<style scoped>

.slot-container{
  opacity: 0;
}
.slide-in-animation-right{
  animation-name: reveal-animation-right;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
}
.slide-in-animation-top{
  animation-name: reveal-animation-top;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes reveal-animation-right {
  0% {
    transform: translateX(-2rem);
  }
  50%{
    opacity: 1;
  }
  75%{
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes reveal-animation-top {
  0% {
    transform: translateY(2rem);

  }
  50%{
    opacity: 1;
  }
  75%{
    transform: translateY(-0.25rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>