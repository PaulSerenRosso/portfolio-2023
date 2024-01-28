<script>
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
import {Vector3} from "@/composables/Vector3";
import ThreeVideoContainer from "@/components/Three/Video/ThreeVideoContainer.vue";
import MacroContainer from "@/components/Container/MacroContainer.vue";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";
import LettersAnimation from "@/components/Text/Animation/LettersAnimation.vue";
import SlideInAnimation from "@/components/Text/Animation/SlideInAnimation.vue";
import ThreeTextGrid from "@/components/Three/Grid/ThreeTextGrid.vue";
import {ThreeGridProperty} from "@/composables/ResponsiveProperty/ThreeGridProperty";
import {Vector2} from "three";

export default {
  name: "ProjectSummaryContainer",
  components: {
    ThreeTextGrid,
    SlideInAnimation, LettersAnimation, RevealAnimationTrigger, MacroContainer, ThreeVideoContainer},
  props:{
    videoSrc:String,
    projectName:String,
    projectTimeline:String,
    projectTeam:String,
    keyPoints:Array,
    tags:Array,
  },
  data(){
    return{
      threeVideoContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeBasicResponsiveProperty(
              new Vector3(0.5,0.77,0.9),
              -30,
              new Vector3(0.8,0.17,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.5,0.77,0.9),
              -30,
              new Vector3(0.8,0.25,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.7,0.50,0.9),
              -30,
              new Vector3(0.45,0.60,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.7,0.50,0.9),
              -30,
              new Vector3(0.45,0.60,1)),
      ),
      threeGridTextResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeGridProperty(
              new Vector3(1,0.3,0),
              new Vector3(0.5,0.27,0.9),
              40,
              new Vector2(0.01,0.05),
              new Vector3(0.25,0.03,0.2),
              new Vector2(0.1,0.1)) ,
          new ThreeGridProperty(
              new Vector3(1,0.3,0),
              new Vector3(0.5,0.27,0.9),
              40,
              new Vector2(0.1,0.05),
              new Vector3(0.2,0.03,0.2),
              new Vector2(0.1,0.1)) ,
          new ThreeGridProperty(
              new Vector3(0.6,0.5,0.1),
              new Vector3(0.22,0.45,0.9),
              30,
              new Vector2(0.08,0.08),
              new Vector3(0.06,0.06,0.5),
              new Vector2(0.1,0.1)),
          new ThreeGridProperty(
              new Vector3(0.6,0.5,0.1),
              new Vector3(0.22,0.45,0.9),
              40,
              new Vector2(0.08,0.08),
              new Vector3(0.06,0.06,0.5),
              new Vector2(0.1,0.1))
      )
    }
  }
}
</script>

<template>
  <macro-container resize-event-key="ProjectSummaryMacroContainer" :height-desktop="1" :height-mobile="1.5" :height-large-desktop="1" :height-tablet="1.5">
   <div id="bigTitleContainer">
     <div id="bigTitle">
       <letters-animation key-event="FirstReveal" text-content="`Esquirel`"> </letters-animation>
     </div>
   </div>

    <three-text-grid :levitated-movement-length="0.3" :levitated-movement-frequency="1" :three-grid-responsive-property-group="this.threeGridTextResponsivePropertyGroup" base-tag="Tag" :texts="this.tags" macro-container-resize-event-key="ProjectSummaryMacroContainer" ></three-text-grid>
    <div class="panel-container">
      <div class="secondary-information-container">
        <div class="timeline">
          <slide-in-animation key-event="FirstReveal" :is-right-direction="false" :delay="500">
        <span class="secondary-information-title">Timeline: </span>
          <span>{{this.projectTimeline}}</span>
          </slide-in-animation>
        </div>
        <div class="group-staff">
          <slide-in-animation key-event="FirstReveal" :is-right-direction="false" :delay="750">
          <span class="secondary-information-title">Staff:</span>
          <span>{{this.projectTeam}}</span>
          </slide-in-animation>
        </div>
      </div>
        <slide-in-animation v-for="(keypoint, index) in this.keyPoints" :key="index" class="keypoints-container" key-event="FirstReveal" :is-right-direction="true" :delay="1000">
        <div>
      <svg  width="1rem" height="1rem" >

            <circle  cx="0.5rem" cy="0.6rem" r="0.3rem" stroke="rgba(58,68,138,1)" stroke-width="0.1rem" fill="transparent"/>
        <circle   cx="0.5rem" cy="0.6rem" r="0.15rem" stroke="transparent"  fill="white"/>
          </svg>
          <span  style="padding-left: 0.5rem">{{keypoint}}</span>
        </div>

        </slide-in-animation>
    </div>
  <three-video-container macro-container-resize-event-key="ProjectSummaryMacroContainer" :delay-animation-reveal="2000"  key-event-trigger-animation="FirstReveal" :three-basic-responsive-property-group=this.threeVideoContainerResponsivePropertyGroup video-object-tag="TestVideo" :srcVideo="this.videoSrc"
                         :offset-html-position-y=0
  > </three-video-container>
    <reveal-animation-trigger :is-debug="false" :top-desktop="50" :top-large-desktop="50" :top-mobile="50" :top-tablet="50" reveal-animation-trigger-event-key="FirstReveal"></reveal-animation-trigger>
  </macro-container>
<slot></slot>
</template>



<style scoped>


#bigTitleContainer{
position: absolute;
  top: 7%;
  left: 0%;

  width:100%;
  font-size: 3rem;
  text-align: center;
  font-family: MyBlack;

  display: flex;
  justify-content: center;
}
#bigTitle{
  border: solid white;
  padding: 0.2rem;
}
.panel-container{
  position: absolute;
  display: flex;
  flex-direction: column;
  top:30%;
  left:0%;
  width:100%;
  height: 35%;

}
.secondary-information-container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 0.5rem;
}
.secondary-information-title{
  font-family: MyBoldItalic;
  text-decoration: underline;
  text-decoration-color: white;
  text-decoration-thickness: 2px;
}

.timeline {
 width: 40%;
  height: 20%;
}

.group-staff{
  width: 40%;
  height: 20%;
}
.keypoints-container{
  display: flex;
  flex-direction: column;
  margin-left: 0%;
  height: 100%;
  width: 100%;

  align-items: center;
}


@media (min-width: 768px) {

  #bigTitleContainer{
    top: 7%;
    width:100%;

  }

  .panel-container{

    top:30%;
    left:0%;
    width:100%;
    height: 35%;
  }
  .keypoints-container{
    align-items: center;
    margin-left: 0%;
  }
}

@media (min-width: 1024px) {

  #bigTitleContainer{
    top: 7%;

    width:45%;

  }
  .panel-container{
    top:50%;
    left:2%;
    width:45%;
    height: 45%;
  }
  .keypoints-container{
    align-items: flex-start;
    margin-left: 10%;
  }
}

@media (min-width: 1280px) {

  #bigTitleContainer{
    top: 7%;
    width:45%;

  }
  .panel-container{
    top:50%;
    left:2%;
    width:45%;
    height: 45%;
  }
  .keypoints-container{
    align-items: flex-start;
    margin-left: 10%;
  }
}

</style>