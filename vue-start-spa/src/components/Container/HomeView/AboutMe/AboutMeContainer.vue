<script>
import MacroContainer from "@/components/Container/MacroContainer.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import ProfilePillar from "@/components/Container/HomeView/AboutMe/ProfilePillar.vue";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";
import ThreePictureContainer from "@/components/Three/Picture/ThreePictureContainer.vue";
import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
import {Vector3} from "@/composables/Vector3";
import {store} from "@/store/Store";
import {raiseAndRemoveEvent} from "@/composables/StoreHelper";

export default {
  name: "AboutMeContainer",
  components: {
    ThreePictureContainer,
   RevealAnimationTrigger, ProfilePillar, MacroContainer},
  data(){
    return{
      threePictureContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeBasicResponsiveProperty(
              new Vector3(0.5,0.15,0.5),
              -30,
              new Vector3(0.5,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.5,0.15,0.5),
              -30,
              new Vector3(0.3,0.3,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.80,0.5,0.5),
              -30,
              new Vector3(0.3,0.6,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.80,0.5,0.5),
              -30,
              new Vector3(0.3,0.6,1)),
      ),
    }
  },
  mounted() {
    if(store.getters.getEventHandler("GoToAboutMeContainer") !== undefined)
      raiseAndRemoveEvent("GoToAboutMeContainer");
  }
}
</script>

<template>

  <macro-container id="AboutMeContainer" ref="macroContainer"  resize-event-key="aboutMeMacroContainer" :height-desktop="1" :height-mobile="1.2" :height-large-desktop="1.2" :height-tablet="1">
    <div class="panel-container">
  <profile-pillar text-title="Programming"  :delay="500" trigger-animation-key-event="SecondReveal">
    <div>
      I am <span class="bold-content">a fourth student</span> in Gameplay Programming at Rubika,
      I am always eager <span class="bold-content">to learn and acquire new competencies</span> in programming in order to fulfill a project’s requirements.
      For instance, I have been studying <span class="bold-content">theoretical</span> concepts in physics and mathematics,
      as well as <span class="bold-content">practical</span> aspects in optimization, network, algorithm development,
      clean code and architecture. Finally I <span class="bold-content">have gained experience</span> in game development using
      Unity, Unreal, C++, and web-based technologies.</div>
  </profile-pillar>
  <profile-pillar text-title="Teamwork" :delay="750" trigger-animation-key-event="SecondReveal">
    <div>  I have done two years of<span class="bold-content"> Game Design</span> at Rubika,
      I gained an understanding of the game designers’ <span class="bold-content">roles and needs</span>.
      Today, I endeavour to align my code and tools with <span class="bold-content">their requirements</span>.
      I have worked on <span class="bold-content">several collaborative programming projects</span>.
      I also have had the opportunity <span class="bold-content">to lead </span>  teams up to 10 programmers and working closely with <span class="bold-content">designers and artists</span>.
      Eventually, I have used daily <span class="bold-content">source control</span> systems like Git or Perforce and even pair programming during these projects.</div>


  </profile-pillar>
  <profile-pillar text-title="About me" :delay="1000" trigger-animation-key-event="SecondReveal">
    <div> I prioritize a <span class="bold-content">healthy lifestyle</span>
      through a proper nutrition and regular exercise. Then, I cherish quality time with family and friends
      engaging in board games and video games. <span class="bold-content">Balancing</span> personal and professional
      aspects is crucial for me, it’s enhancing my<span class="bold-content"> effectiveness</span> at work
      .I also like atypical socks and taking my dogs on a stroll."</div>

  </profile-pillar>
</div>

    <reveal-animation-trigger  :top-desktop="60" :top-large-desktop="60" :top-mobile="60" :top-tablet="60" reveal-animation-trigger-event-key="SecondReveal"></reveal-animation-trigger>
    <three-picture-container    macro-container-resize-event-key="aboutMeMacroContainer" :is-debug-ratio="true" :three-basic-responsive-property-group=this.threePictureContainerResponsivePropertyGroup
                             src-picture="PaulSerenRossoPhoto2.jpg"  picture-object-tag="TestPicture"
    ></three-picture-container>
  </macro-container>
</template>

<style scoped>
.panel-container{
  position: absolute;
  display: flex;
  flex-direction: column;
  top:30%;
  left:5%;
  width:90%;
  height: 70%;
  justify-content: center;
  align-items: center;
}


@media (min-width: 768px) {
  .panel-container{
    position: absolute;
    display: flex;
    flex-direction: column;
    top:40%;
    left:5%;
    width:90%;
    height: 70%;

  }
}

@media (min-width: 1024px) {
  .panel-container{
    top:0%;
    left:2%;
    width:60%;
    height: 100%;
  }
}

@media (min-width: 1280px) {
  .panel-container{
    top:0%;
    left:2%;
    width:60%;
  height: 100%;
  }
}
</style>