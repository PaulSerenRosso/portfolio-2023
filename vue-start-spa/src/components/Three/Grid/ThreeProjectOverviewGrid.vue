<script >
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {Vector2, Vector3} from "three";
import ThreeTextGrid from "@/components/Three/Grid/ThreeTextGrid.vue";
import MainButton from "@/components/MainButton.vue";
import LettersAnimation from "@/components/Text/Animation/LettersAnimation.vue";
import SlideInAnimation from "@/components/Text/Animation/SlideInAnimation.vue";
import {ThreeGridProperty} from "@/composables/ResponsiveProperty/ThreeGridProperty";
import {addRemoveAtSceneChangedEvent} from "@/composables/StoreHelper";
import ThreeContentGrid from "@/components/Three/Grid/ThreeContentGrid.vue";
import {ThreeContentType} from "@/composables/ThreeContentType";

export default {
  name: "ThreeProjectOverviewGrid",
  components: {
    ThreeContentGrid,

    SlideInAnimation,
    LettersAnimation
    , MainButton,
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
    threeJsHtmlPositionLinkerPropertyGroup:Object,
    pictureSrcs:Array,
    tagTextsLists:Array,
    pageLinks:Array,
    threeGridTextResponsivePropertyGroup:Object,


  },
  beforeCreate() {
    addRemoveAtSceneChangedEvent("ProjectPictureResponsiveGroupCreated");
    console.log("before create parent")
  },
  data(){
    return{
      textsResponsivePropertyGroups:[],
      picturesTypes:[]
    }
  },
  methods:{

  },
  created() {

    for (let j = 0; j < this.threeGridResponsivePropertyGroup.responsivePropertyGroup.length; j++) {
      this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].setElementCountByLine(this.pictureSrcs.length);
    }

    for (let i = 0; i < this.pictureSrcs.length; i++) {
      var currentResponsiveProperties = [];


      for (let j = 0; j < this.threeGridResponsivePropertyGroup.responsivePropertyGroup.length; j++) {

        const position = this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].placeElement(i);

        position.y += this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].position.y;
        position.x +=this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].position.x;
        const rotation =this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].rotation;
        const scale = new Vector3(this.threeGridResponsivePropertyGroup.responsivePropertyGroup[j].elementScale.x+this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].scale.x,
            this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].scale.y,
            this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].scale.z);
        const spacings = this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].spacings;
        const paddings = this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].paddings;
        const elementScale = this.threeGridTextResponsivePropertyGroup.responsivePropertyGroup[j].elementScale;
        currentResponsiveProperties.push(new ThreeGridProperty(scale, position, rotation, spacings, elementScale, paddings));
        this.picturesTypes.push((ThreeContentType.Picture));
      }
      this.textsResponsivePropertyGroups.push(new ResponsivePropertyGroup(currentResponsiveProperties[0], currentResponsiveProperties[1],
          currentResponsiveProperties[2], currentResponsiveProperties[3]));
    }

  }

}
</script>

<template>


  <div v-for="(src, index) in this.pictureSrcs" :key="index">
      <three-text-grid :three-grid-responsive-property-group="this.textsResponsivePropertyGroups[index]" :base-tag="this.baseTag+'tag'+index" :levitated-movement-length="0.2" :levitated-movement-frequency="2" :texts="this.tagTextsLists[index]" :macro-container-resize-event-key="this.macroContainerResizeEventKey"></three-text-grid>

  <div class="container" :id="this.baseTag+'TextContainer'+index">
    <router-link class="text-link"  :to="'/'+this.pageLinks[index]">
    <div class="title">
      <letters-animation  :key-event="this.baseTag+'TextContainer'+index+'AnimationTrigger'" :text-content="this.titleTexts[index]" ></letters-animation>
    </div>
    </router-link>
  <slide-in-animation :delay="1000" :is-right-direction="false" :key-event="this.baseTag+'TextContainer'+index+'AnimationTrigger'">
    <div class="description">{{this.descriptionTexts[index]}} </div> </slide-in-animation>
    <div class="button">
    <router-link class="text-link"  :to="'/'+this.pageLinks[index]">
      <main-button :key-event="this.baseTag+'TextContainer'+index+'AnimationTrigger'"  :delay="1000" >Jump it !</main-button>
    </router-link>
    </div>
  </div>
</div>
  <three-content-grid :content-types="picturesTypes"  :three-js-html-position-linker-property-group="this.threeJsHtmlPositionLinkerPropertyGroup"  :has-html-linker-grid="true"
                      :base-id="this.baseTag+'TextContainer'" :base-tag="this.baseTag"
                      :macro-container-resize-event-key="this.macroContainerResizeEventKey"
                      :three-grid-responsive-property-group="this.threeGridResponsivePropertyGroup"
                      :content-srcs="this.pictureSrcs"></three-content-grid>

</template>

<style scoped>

.container{

  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}



.button{

    width: 40%;

}
.title{
  font-size: 1.5rem;
  font-family: MyBold;
  padding-bottom: 0.25rem;
}


.description{

  font-size: 1rem;
  padding-bottom: 0.5rem;
}

.text-link{
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
  font-size: 8px;
}

@media (min-width: 768px) {
  .container
  {
    width: 80%;
  }

  .text-link{
    font-size: 12px;
  }
  .button{
    width: 40%;
  }

}

@media (min-width: 1024px) {
  .container
  {
    width: 20%;
  }

  .text-link{
    font-size: 12px;
  }
  .button{
    width: 90%;
  }

}

@media (min-width: 1280px) {
  .text-link{
    font-size: 12px;
  }
  .button{
    width: 90%;
  }
}
</style>