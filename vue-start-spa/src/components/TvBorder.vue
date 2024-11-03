<script>


import {addCreateSceneHandlerListener, addEventListener} from "@/composables/StoreHelper";

export default ({
  name: "TvBorder",
  mounted() {



    console.log("fjkdmqs");
    if (this.slotContainerId === undefined) {
      console.log("test")
      let slots = this.$refs.slotContainer.children;
      console.log("test")
      for (let i = 0; i < slots.length; i++) {
        slots[i].classList.add("tv-frame-slot");
      }
    } else {
      let slots = document.getElementById(this.slotContainerId).children;


      for (let i = 0; i < slots.length; i++) {
        slots[i].classList.add("tv-frame-slot");
      }
    }
    if (this.keyEvent === "") {
      this.launchRevealAnimationTimer();
    } else {
      addEventListener(this.launchRevealAnimationTimer, this.keyEvent);
    }

  },
  props: {
    slotContainerId: String,
    keyEvent: String,
    delay: Number,
  },
  data() {
    return {
      timer: null,
    }
  },

  methods: {
    launchRevealAnimationTimer() {

      this.timer = setTimeout(this.launchRevealAnimation, this.delay);
      addCreateSceneHandlerListener(() => clearTimeout(this.timer));
    },
    launchRevealAnimation() {
      this.$refs.root.classList.add("tv-frame-root-reveal");
    },
  },
})
</script>

<template>
  <div class="tv-frame-root"  ref="root" >

    <div class="tv-frame-header">
      <div class="tv-frame-header-button"></div>
      <div class="tv-frame-header-button"></div>
      <div class="tv-frame-header-button"></div>
    </div>
    <div class="tv-frame-content" ref="slotContainer">
      <slot></slot>
    </div>


  </div>
</template>
<style>
.tv-frame-slot{





  width: 100%;
  max-height: 100%;

}
.tv-frame-root-reveal{
  display: block !important;
  animation-name: tv-frame-slot-reveal-animation;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes tv-frame-slot-reveal-animation {
  0%{
    opacity: 0;
    transform:scale(1);
  }
  50%{
    transform:scale(1.05);
  }
  70%{
    transform:scale(0.95);
  }
  100%{
    opacity: 1;
    transform:scale(1);
  }
}
</style>

<style scoped >
.tv-frame-root{

  display: none;
  border-radius: 10px;
  background: linear-gradient(90deg, rgba(58,68,138,1) 0%, rgba(33,40,89,1) 100%);
  height: 100%;
  width: 100%;
  padding-bottom: 0.6em;

}

.tv-frame-header{
  width: calc(100% - 0.6em);
  height: 20px;
  display: flex;
  padding-top: 0.5em;
  padding-left: 0.5em;
  flex-direction: row;
}


.tv-frame-header-button{
  background-color: white;
  height: 10px;
  width: 10px;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 50%;
}

.tv-frame-content{

  width: calc(100% - 1.2em);
  height: calc(100% );
  display: flex;
  background-color: #12173D;

  align-items: center;
  justify-content: center;
  margin-left: 0.6em;


}




</style>