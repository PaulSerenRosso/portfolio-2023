<script >


import SlideInAnimation from "@/components/Text/Animation/SlideInAnimation.vue";

export default {
  name: "ProfilePillar",
  components: {SlideInAnimation},
  props:{

    textTitle:String,
    triggerAnimationKeyEvent:String,
    delay:Number,
  },

}
</script>

<template>
  <div class="panel">
   <slide-in-animation :delay="this.delay" :key-event="this.triggerAnimationKeyEvent"><div class="title">{{this.textTitle}}</div> </slide-in-animation>
    <slide-in-animation :delay="this.delay+250" :key-event="this.triggerAnimationKeyEvent"> <div class="content">
      <slot></slot></div></slide-in-animation>
  </div>
  <p></p>
</template>

<style scoped>

.panel{
  display: flex;
  flex-direction: column;

  justify-content: center;
}

.title{
  font-family: MyBlack;
  font-size: 2rem;

}

.content{
  font-family: MyRegular;
  font-size: 1rem;
  padding-left: 1rem;

}


</style>