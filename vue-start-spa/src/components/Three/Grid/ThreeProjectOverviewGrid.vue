<script >
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
import {Vector3} from "three";
import ThreePictureGrid from "@/components/Three/Grid/ThreePictureGrid.vue";
import ThreeTextGrid from "@/components/Three/Grid/ThreeTextGrid.vue";
import ThreeHtmlElementLinkerGrid from "@/components/Three/Grid/ThreeHtmlElementLinkerGrid.vue";
import MainButton from "@/components/MainButton.vue";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";
import LettersAnimation from "@/components/Text/Animation/LettersAnimation.vue";
import SlideInAnimation from "@/components/Text/Animation/SlideInAnimation.vue";

export default {
  name: "ThreeProjectOverviewGrid",
  components: {ThreePictureGrid,
  //  SlideInAnimation,
   // LettersAnimation,
    //RevealAnimationTrigger, MainButton, ThreeHtmlElementLinkerGrid, ThreeTextGrid,
    },
  props:{
    titleTexts:Array,
    descriptionTexts:Array,
    baseTag:String,
    threeGridResponsivePropertyGroup:Object,
    macroContainerResizeEventKey:String,
    levitatedMovementFrequency:Number,
    levitatedMovementLength:Number,
    titleOffsetY:Number,
    descriptionOffsetY:Number,
    pictureSrcs:Array,
    tagTextsLists:Array,
    pageLinks:Array,
    textGridOffsetY:Number,

  },
  data(){
    return{
      textsResponsivePropertyGroups:[]
    }
  },
  created() {

    for (let j = 0; j < this.threeGridResponsivePropertyGroup.responsivePropertyGroup.length; j++) {
      this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].setElementCountByLine(this.pictureSrcs.length);

    }

    for (let i = 0; i < this.pictureSrcs.length; i++) {
      var currentResponsiveProperties = [];
      for (let j = 0; j < this.threeGridResponsivePropertyGroup.responsivePropertyGroup.length; j++) {
        const position = this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].placeElement(i);
        const rotation = this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].rotation;
        const scale = new Vector3(this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.x,
            this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.y,
            this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.z);

        currentResponsiveProperties.push(new ThreeBasicResponsiveProperty(position,rotation,scale));

      }
      this.textsResponsivePropertyGroups.push(new ResponsivePropertyGroup(currentResponsiveProperties[0], currentResponsiveProperties[1],
          currentResponsiveProperties[2], currentResponsiveProperties[3]));
    }
  }

}
</script>

<template>
  <three-picture-grid :base-tag="this.baseTag" :macro-container-resize-event-key="this.macroContainerResizeEventKey" :three-grid-responsive-property-group="this.threeGridResponsivePropertyGroup" :picture-srcs="this.pictureSrcs"></three-picture-grid>
  <!--This is a comment. Comments are not displayed in the browser
  <div v-for="(index) in this.pictureSrcs" :key="index">
      <three-text-grid :base-tag="this.baseTag+'tag'+index" :levitated-movement-length="0.01" :levitated-movement-frequency="2" :texts="this.tagTextsLists[index]" :macro-container-resize-event-key="this.macroContainerResizeEventKey"></three-text-grid>
    <div class="container" :id="this.baseTag+'id'+index">
      <div class="title">
        <letters-animation :text-content="this.titleTexts[index]" ></letters-animation>
      </div>
    <slide-in-animation :is-right-direction="false" :key-event="this.baseTag+'AnimationTrigger'+index">
      <div class="description">{{this.descriptionTexts[index]}} </div> </slide-in-animation>
      <router-view :to="'/'+this.pageLinks[index]">
        <main-button :key-event="this.baseTag+'AnimationTrigger'+index" :delay="1000"></main-button></router-view>
      <reveal-animation-trigger  :reveal-animation-trigger-event-key="this.baseTag+'AnimationTrigger'+index"></reveal-animation-trigger>
    </div>
    <three-html-element-linker-grid :html-element-id-base-name="this.baseTag+'Title'" :offset-html-position-y="this.titleOffsetY"  ></three-html-element-linker-grid>
  </div>
  -->
</template>

<style scoped>

.container{
  width: 60%;
}

.title{
  color: green;
}

.description{
  color: chocolate;
}
</style>