<script >


import MainButton from "@/components/MainButton.vue";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";
import SlideInAnimation from "@/components/Text/Animation/SlideInAnimation.vue";

export default {
  name: "EndRedirector",
  components: {SlideInAnimation, RevealAnimationTrigger, MainButton},
  props:{
      textContent:String,
      link:String,


  },

}
</script>

<template>
<div class="end-redirector-container">
  <span class="end-redirector-panel">
<slide-in-animation :is-right-direction="false" :delay="0" key-event="endRedirectorReveal">

  <div class="end-redirector-panel-content">
<div class="end-redirector-panel-text"> {{this.textContent}}</div>
<router-link    class="text-content" :to="'/'+this.link">
  <main-button  key-event="endRedirectorReveal" :delay="1000">
  Show it !</main-button></router-link>
  </div>
</slide-in-animation>
  </span>
  <reveal-animation-trigger  :is-debug="false" :top-desktop="100" :top-large-desktop="100" :top-mobile="100" :top-tablet="100" reveal-animation-trigger-event-key="endRedirectorReveal"></reveal-animation-trigger>
</div>
  <div class=""></div>
</template>
<style>
.text-content{
  width: 40%;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
}
</style>

<style scoped>
.end-redirector-container{
  position: relative;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.end-redirector-panel{

  position: relative;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem ;
  background-color: rgba(33,40,89,0.5) ;
  border-radius: 10px;
  width: 80%;

}
.text-content{
  width: 40%;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
  font-size: 11px;
}

.end-redirector-panel-text{
  width: 60%;
}

@media (min-width: 768px) {
  .text-content
  {
    font-size: 20px;
    width: 30%;
  }
  .end-redirector-panel-text{
    width: 70%;
  }
}

@media (min-width: 1024px) {
  .text-content
  {
    width:20%;
    font-size: 17px;
  }
  .end-redirector-panel-text{
    width: 80%;
  }
}



.end-redirector-panel-content{
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  align-items: center;
  justify-content: space-around;
}

@media (min-width: 768px) {
  .end-redirector-panel-content
  {
    font-size: 1.1rem;
  }
}

@media (min-width: 1024px) {
  .end-redirector-panel-content
  {
    font-size: 2rem;
  }
}




</style>