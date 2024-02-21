<script >
import {addCreateSceneHandlerListener, addEventListener} from "@/composables/StoreHelper";

export default{
  name: "MainButton",
  props:{
    keyEvent:String,
    delay:Number,
  },
  data(){
    return{
      timer:null,
    }
  },
  mounted() {
    console.log(this.keyEvent)
    if(this.keyEvent ===""){
      this.launchRevealAnimationTimer();
    }
    else{
      addEventListener(this.launchRevealAnimationTimer,this.keyEvent);
    }

  },
  methods: {
    launchRevealAnimationTimer() {

      this.timer = setTimeout(this.launchRevealAnimation, this.delay);
      addCreateSceneHandlerListener(() => clearTimeout(this.timer));
    },
    launchRevealAnimation() {
      this.$refs.button.classList.add("main-button-reveal-animation");
      this.$refs.button.addEventListener("animationend", this.addHoverClass);
    },
    addHoverClass(){
      this.$refs.button.classList.add("main-button-hover");
      this.$refs.button.classList.remove("main-button-reveal-animation");
    }
  }

}
</script>

<template>
   <div ref="button" class="main-button">
      <slot></slot>
  </div>


</template>

<style scoped>
.main-button{
  opacity: 0;
  background: rgb(33,40,89);
  background: linear-gradient(90deg, rgba(33,40,89,1) 0%, rgba(58,68,138,1) 100%);
  color: rgba(245,252,255,1) ;
  border-radius: 40px;
  border-color: rgba(245,252,255,1) ;
  border-style : double;
  border-width: 10px;
  padding-top: 1.1em;
  padding-bottom: 1.1em;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
  transition: all .2s ease-in-out;
  font-family: MyBold;
  font-size: 1.2em;

}
.main-button-reveal-animation{
    animation-name: reveal-animation;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;

  }
@keyframes reveal-animation {
  0%{
    opacity: 0;
    transform:scale(0);
  }
  50%{
    transform:scale(1.1);
  }
  70%{
    transform:scale(0.9);
  }
  100%{
    opacity: 1;
    transform:scale(1);
  }
}

.main-button-hover{
 transition: all .2s ease-in-out;
  opacity: 1;
}
.main-button-hover:hover { transform: scale(1.1); }

</style>