<script>
import MacroContainer from "@/components/Container/MacroContainer.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import ProfilePillar from "@/components/Container/HomeView/AboutMe/ProfilePillar.vue";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";
import ThreePictureContainer from "@/components/Three/Picture/ThreePictureContainer.vue";
import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
import {Vector3} from "@/composables/Vector3";

export default {
  name: "AboutMeContainer",
  components: {
    ThreePictureContainer,
   RevealAnimationTrigger, ProfilePillar, MacroContainer},
  data(){
    return{
      threePictureContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeBasicResponsiveProperty(
              new Vector3(0.5,0.15,0.9),
              -30,
              new Vector3(0.5,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.5,0.15,0.9),
              -30,
              new Vector3(0.3,0.3,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.80,0.5,0.9),
              -30,
              new Vector3(0.3,0.6,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.80,0.5,0.9),
              -30,
              new Vector3(0.3,0.6,1)),
      ),
    }
  },
}
</script>

<template>
  <macro-container  ref="macroContainer"  resize-event-key="aboutMeMacroContainer" :height-desktop="1" :height-mobile="1.2" :height-large-desktop="1.2" :height-tablet="1">
    <div class="panel-container">
  <profile-pillar text-title="Programming"  :delay="500" trigger-animation-key-event="SecondReveal">
    <div>  I'am a student in my <span class="bold-content">four years</span> of Gameplay Programming at Rubika, I'am always ready to learn <span class="bold-content">various things</span> in programming for project requirements. Thus, I've learning theoretical concepts in <span class="bold-content">physics and mathematics</span>, as well as practical aspects in <span class="bold-content">optimization, network, algorithm development, clean code and architecture</span>. Finally I experienced game development using <span class="bold-content">Unity, Unreal, C++, and web-based technologies.</span></div></profile-pillar>
  <profile-pillar text-title="Teamwork" :delay="750" trigger-animation-key-event="SecondReveal">
    <div>  I have completed <span class="bold-content">two years of Game Design</span> at Rubika, I gained an understanding of <span class="bold-content">game designers roles and needs</span>. I endeavour to align my <span class="bold-content">code and tools with their requirements</span>. I put my skills in <span class="bold-content">project management and collaborative programming</span> into practice, leading teams of up to 10 people and <span class="bold-content">working closely with designers and artists</span>. Finally, I regularly use version control systems like <span class="bold-content">Git or Perforce and even pair programming</span>.</div>
  </profile-pillar>
  <profile-pillar text-title="About me" :delay="1000" trigger-animation-key-event="SecondReveal">
    <div> I prioritize a <span class="bold-content">healthy lifestyle</span> through proper nutrition and regular exercise. Cherish quality time with family, engaging in board games and video games. <span class="bold-content">Balancing personal and professional</span> aspects is crucial for me, <span class="bold-content">enhancing my effectiveness at work</span>. Fondness for atypical socks and enduring my dogs."</div>
  </profile-pillar>
</div>

    <reveal-animation-trigger  :top-desktop="60" :top-large-desktop="60" :top-mobile="60" :top-tablet="60" reveal-animation-trigger-event-key="SecondReveal"></reveal-animation-trigger>
    <three-picture-container    macro-container-resize-event-key="aboutMeMacroContainer" :is-debug-ratio="true" :three-basic-responsive-property-group=this.threePictureContainerResponsivePropertyGroup
                             src-picture="PaulSerenRossoPhoto.jpg"  picture-object-tag="TestPicture"
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
.bold-content{
  font-family: MyBold;
  background-color: rgba(178,28,27,1) ;

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