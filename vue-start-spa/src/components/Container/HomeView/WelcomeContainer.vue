<script>
import MacroContainer from "@/components/Container/MacroContainer.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
import {Vector3} from "@/composables/Vector3";
import ThreeVideoContainer from "@/components/Three/Video/ThreeVideoContainer.vue";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";
import LettersAnimation from "@/components/Text/Animation/LettersAnimation.vue";
import {ThreeJsHtmlPositionLinkerProperty} from "@/composables/ResponsiveProperty/ThreeJsHtmlPositionLinkerProperty";

export default {
  name: "WelcomeContainer",
  components: {
    LettersAnimation,
    RevealAnimationTrigger,
    ThreeVideoContainer,  MacroContainer},
  data(){
    return{

      threeVideoContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeBasicResponsiveProperty(
              // position
              new Vector3(0.5,0.65,0.5),
              // rotation
              20,
              //scale
              new Vector3(0.95,0.3,0.5)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.5,0.55,0.5),
              30,
              new Vector3(0.95,0.4,0.5)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.28,0.52,0.5),
              30,
              new Vector3(0.45,0.50,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.28,0.50,0.5),
              30,
              new Vector3(0.45,0.50,1)),
      ),
      threeJsHtmlPositionLinkerPropertyGroup:new ResponsivePropertyGroup(
          new ThreeJsHtmlPositionLinkerProperty(undefined,5),
          new ThreeJsHtmlPositionLinkerProperty(undefined,5),
          new ThreeJsHtmlPositionLinkerProperty(undefined,5),
          new ThreeJsHtmlPositionLinkerProperty(undefined,5),
      )
    }

  }
}
</script>

<template>
<macro-container ref="macroContainer"  resize-event-key="welcomeMacroContainer" :height-desktop="1" :height-mobile="1" :height-large-desktop="1" :height-tablet="1">

  <div class="panel-container" >
    <!-- Write your comments here
  <slide-in-animation delay="500" :is-right-direction="false"  key-event="TestAnimationEvent"><p> fj fdjk j lj jl j l kj lkj lk jlk jl kj lk jl kj lkj lkj lkj </p> </slide-in-animation>-->
   <div id="bigTitle"> <letters-animation key-event="FirstReveal" text-content="Welcome! I'am Paul, a Junior Gameplay Programmer!"> </letters-animation></div>
  </div>

   <three-video-container macro-container-resize-event-key="welcomeMacroContainer" :delay-animation-reveal="2000"  key-event-trigger-animation="FirstReveal" :three-basic-responsive-property-group=this.threeVideoContainerResponsivePropertyGroup video-object-tag="TestVideo" srcVideo="ProjectsOverview.mp4"
                           :three-js-html-position-linker-property-group="this.threeJsHtmlPositionLinkerPropertyGroup"
   > </three-video-container>
   <reveal-animation-trigger :is-debug="false" :top-desktop="50" :top-large-desktop="50" :top-mobile="50" :top-tablet="50" reveal-animation-trigger-event-key="FirstReveal"></reveal-animation-trigger>
 </macro-container>

 </template>

 <style scoped>
#bigTitle{

  font-size: 3rem;
  text-align: center;
}
.panel-container{
  position: absolute;
  display: flex;
  flex-direction: column;
  top:12%;
  left:5%;
  width:90%;


}

@media (min-width: 768px) {
  .panel-container{
    position: absolute;
    display: flex;
    flex-direction: column;
    top:12%;
    left:5%;
    width:90%;
  }
}

@media (min-width: 1024px) {
  .panel-container{
    top:35%;
    left:55%;
    width:40%;
  }
}

@media (min-width: 1280px) {
  .panel-container{
    top:35%;
    left:55%;
    width:40%;
  }
}
 </style>