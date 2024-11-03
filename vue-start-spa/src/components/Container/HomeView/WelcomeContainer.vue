<script>
import MacroContainer from "@/components/Container/MacroContainer.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
import {Vector3} from "@/composables/Vector3";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";
import LettersAnimation from "@/components/Text/Animation/LettersAnimation.vue";
import {ThreeJsHtmlPositionLinkerProperty} from "@/composables/ResponsiveProperty/ThreeJsHtmlPositionLinkerProperty";
import TvBorder from "@/components/TvBorder.vue";

export default {
  name: "WelcomeContainer",
  components: {

    LettersAnimation,
    RevealAnimationTrigger,
     MacroContainer, TvBorder},

  mounted() {
    console.log("test");

  }
}
</script>

<template>

  <macro-container ref="macroContainer"  resize-event-key="welcomeMacroContainer" :height-desktop="1" :height-mobile="1" :height-large-desktop="1" :height-tablet="1">
  <div class="overview-video">
    <tv-border :delay="2500" key-event="FirstReveal">

    <video :src="require('@/assets/'+'ProjectsOverview.mp4')" playsinline autoplay muted loop controls type="video/mp4"></video>
  </tv-border>
  </div>
    <!--
     <div class="Tasse">



         <video :src="require('@/assets/'+'ProjectsOverview.mp4')" playsinline autoplay muted loop controls type="video/mp4" class="videoTest">
         </video>
    </div>

      <div class="Bol">
        <tv-border>
          <video :src="require('@/assets/'+'ProjectsOverview.mp4')" playsinline autoplay muted loop controls> </video>

        </tv-border>
      </div>

      <tv-gallery class="Tasse" tv-gallery-id="test">
    <video :src="require('@/assets/'+'ProjectsOverview.mp4')" playsinline autoplay muted loop controls> </video>
  <img :src="require('@/assets/'+'PaulSerenRossoPhoto2.jpg')">
</tv-gallery>
    -->

 <div class="panel-container" >
   <!-- Write your comments here
 <slide-in-animation delay="500" :is-right-direction="false"  key-event="TestAnimationEvent"><p> fj fdjk j lj jl j l kj lkj lk jlk jl kj lk jl kj lkj lkj lkj </p> </slide-in-animation>-->
   <div id="bigTitle"> <letters-animation  key-event="FirstReveal" text-content="Welcome! I am Paul, a Junior Gameplay Programmer!"> </letters-animation></div>

  </div>


   <reveal-animation-trigger :is-debug="false" :top-desktop="50" :top-large-desktop="50" :top-mobile="50" :top-tablet="50" reveal-animation-trigger-event-key="FirstReveal"></reveal-animation-trigger>
 </macro-container>

 </template>

 <style scoped>


.overview-video{
  position: absolute;

  transform: translate(-50%,-50%);
  top: 70%;
  left:50%;
  width: 90%;
  height: auto;
}


#bigTitle{

  font-size: 3rem;
  text-align: center;
  margin-left: 0.5em;
  margin-right: 0.5em;
}
.panel-container{
  position: absolute;
  display: flex;
  flex-direction: column;
  top:35%;
  left:0%;
  width:100%;
  transform: translate(0, -50%);



}

@media (min-width: 768px) {
  .panel-container{
    position: absolute;
    display: flex;
    flex-direction: column;
    top:20%;
    left:0%;
    width:100%;
  }
  .overview-video{
    top: 60%;
    left:50%;
    width: 100%;
    height: auto;
  }

}

@media (min-width: 1024px) {
  .panel-container{
    top:55%;
    left:0%;
    width:43%;
  }
  .overview-video{
    top: 55%;
    left:72%;
    width: 55%;
    height: auto;
  }
}

@media (min-width: 1280px) {
  .panel-container{
    top:55%;
    left:0%;
    width:43%;
  }
  .overview-video{
    top: 55%;
    left:72%;
    width: 55%;
    height: auto;
  }
}
 </style>