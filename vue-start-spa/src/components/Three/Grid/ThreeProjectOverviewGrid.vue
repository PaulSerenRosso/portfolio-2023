<script >
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
import {Vector2, Vector3} from "three";
import ThreePictureGrid from "@/components/Three/Grid/ThreePictureGrid.vue";
import ThreeTextGrid from "@/components/Three/Grid/ThreeTextGrid.vue";
import MainButton from "@/components/MainButton.vue";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";
import LettersAnimation from "@/components/Text/Animation/LettersAnimation.vue";
import SlideInAnimation from "@/components/Text/Animation/SlideInAnimation.vue";
import {ThreeGridProperty} from "@/composables/ResponsiveProperty/ThreeGridProperty";
import ThreeJsHtmlPositionLinker from "@/components/Three/ThreeJsHtmlPositionLinker.vue";

export default {
  name: "ThreeProjectOverviewGrid",
  components: {
    ThreeJsHtmlPositionLinker, ThreePictureGrid,
    SlideInAnimation,
    LettersAnimation,
    RevealAnimationTrigger, MainButton,
    ThreeTextGrid,
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
    threeGridTextResponsivePropertyGroup:Object,


  },
  data(){
    return{
      textsResponsivePropertyGroups:[],
      animationTriggerPositionList:[],
      htmlLinkerResponsivePropertyGroups:[],
    }
  },
  created() {


    for (let j = 0; j < this.threeGridResponsivePropertyGroup.responsivePropertyGroup.length; j++) {
      this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].setElementCountByLine(this.pictureSrcs.length);

    }

    for (let i = 0; i < this.pictureSrcs.length; i++) {
      var currentResponsiveProperties = [];
      var currentResponsivePropertiesForHtmlLinker = [];
      this.animationTriggerPositionList.push([]);

      for (let j = 0; j < this.threeGridResponsivePropertyGroup.responsivePropertyGroup.length; j++) {

        const position = this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].placeElement(i);

        position.y += this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].position.y;
        this.animationTriggerPositionList[i].push(position.y*100);
        const rotation =this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].rotation;
        const scale = new Vector3(this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.x+this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].scale.x,
            this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].scale.y,
            this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].scale.z);
        const spacings = this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].spacings;
        const paddings = this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].paddings;
        const elementScale = this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].elementScale;
        currentResponsiveProperties.push(new ThreeGridProperty(scale, position, rotation, spacings, elementScale, paddings));
        currentResponsivePropertiesForHtmlLinker.push(new ThreeBasicResponsiveProperty(new Vector3(position.x, position.y, position.z),
            rotation, new Vector3(scale.x,scale.y, scale.z)));
      }
      this.htmlLinkerResponsivePropertyGroups.push(new ResponsivePropertyGroup(currentResponsivePropertiesForHtmlLinker[0], currentResponsivePropertiesForHtmlLinker[1],
          currentResponsivePropertiesForHtmlLinker[2], currentResponsivePropertiesForHtmlLinker[3]));
      this.textsResponsivePropertyGroups.push(new ResponsivePropertyGroup(currentResponsiveProperties[0], currentResponsiveProperties[1],
          currentResponsiveProperties[2], currentResponsiveProperties[3]));

    }
  }

}
</script>

<template>
  <three-picture-grid :base-tag="this.baseTag" :macro-container-resize-event-key="this.macroContainerResizeEventKey" :three-grid-responsive-property-group="this.threeGridResponsivePropertyGroup" :picture-srcs="this.pictureSrcs"></three-picture-grid>

  <div v-for="(src, index) in this.pictureSrcs" :key="index">
      <three-text-grid :three-grid-responsive-property-group="this.textsResponsivePropertyGroups[index]" :base-tag="this.baseTag+'tag'+index" :levitated-movement-length="0.2" :levitated-movement-frequency="2" :texts="this.tagTextsLists[index]" :macro-container-resize-event-key="this.macroContainerResizeEventKey"></three-text-grid>

  <div class="container" :id="this.baseTag+'TextContainer'+index">
    <router-link class="text-link"  :to="'/'+this.pageLinks[index]">
    <div class="title">
      <letters-animation  :key-event="this.baseTag+'AnimationTrigger'+index" :text-content="this.titleTexts[index]" ></letters-animation>
    </div>
    </router-link>
  <slide-in-animation :delay="1000" :is-right-direction="false" :key-event="this.baseTag+'AnimationTrigger'+index">
    <div class="description">{{this.descriptionTexts[index]}} </div> </slide-in-animation>
    <div class="button">
    <router-link class="text-link"  :to="'/'+this.pageLinks[index]">
      <main-button :key-event="this.baseTag+'AnimationTrigger'+index"  :delay="1000" >Jump it !</main-button>
    </router-link>
    </div>
  </div>
    <reveal-animation-trigger :top-desktop="this.animationTriggerPositionList[index][2]" :top-large-desktop="this.animationTriggerPositionList[index][3]" :top-mobile="this.animationTriggerPositionList[index][0]" :top-tablet="this.animationTriggerPositionList[index][1]"  :reveal-animation-trigger-event-key="this.baseTag+'AnimationTrigger'+index"></reveal-animation-trigger>
    <three-js-html-position-linker :three-basic-responsive-property-group="this.htmlLinkerResponsivePropertyGroups[index]" :html-element-id-name="this.baseTag+'TextContainer'+index" :offset-html-position-y="this.titleOffsetY"></three-js-html-position-linker>
</div>

</template>

<style scoped>

.container{
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 768px) {
  .container
  {
    width: 80%;
  }
}

@media (min-width: 1024px) {
  .container
  {
    width: 40%;
  }
}

.button{
  width: 40%;
}
.title{
  font-size: 2rem;
  font-family: MyBold;
  padding-bottom: 0.25rem;
}

.description{

  font-size: 1.5rem;
  padding-bottom: 0.5rem;
}

.text-link{
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
}
</style>