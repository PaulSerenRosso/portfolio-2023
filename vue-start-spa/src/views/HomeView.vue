<template>
  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-js-group-object obj-tag="TestPictureRoot" parent-obj-tag="currentScene" ></three-js-group-object>
  <three-responsive-transform current-obj-tag="TestPictureRoot" :three-transform-responsive-property-group="this.threePictureContainerResponsivePropertyGroup" :original-size-obj-x="1.89" :original-size-obj-y="1"></three-responsive-transform>
    <three-picture-container :levitated-movement-length="0" :levitated-movement-frequency="0.5"
                             :three-basic-responsive-property-group=this.threePictureContainerResponsivePropertyGroup
                             src-picture="logo.png"  picture-object-tag="TestPicture"
                               ></three-picture-container>
  <three-js-group-object obj-tag="TestSecondPictureRoot" parent-obj-tag="currentScene" ></three-js-group-object>
  <three-responsive-transform current-obj-tag="TestSecondPictureRoot" :three-transform-responsive-property-group="this.threeSecondPictureContainerResponsivePropertyGroup" :original-size-obj-x="1" :original-size-obj-y="1"></three-responsive-transform>
  <three-picture-container :is-debug-ratio="true" :levitated-movement-length="0" :levitated-movement-frequency="0.5"
                           :three-basic-responsive-property-group=this.threeSecondPictureContainerResponsivePropertyGroup
                           src-picture="logo.png"  picture-object-tag="TestSecondPicture"
                             ></three-picture-container>

  <div id="_testContainerText">
    <div id="_testTitle"> test text </div>
    <div id="_testText">blablabla fdqsfd qsfdqsfqsdfq fhdlsqhf qdsjfhdqskfl h fhdljkqshf lkjqsdhf hlqdsf</div>
  </div>
  <div id="_testouille">hihi</div>
  <three-js-html-position-linker   :three-basic-responsive-property-group=this.threeSecondPictureContainerResponsivePropertyGroup
                                   html-element-id-name="_testouille"
                                   :offset-html-position-y=10 ></three-js-html-position-linker>
  <three-js-group-object obj-tag="TestVideoRoot" parent-obj-tag="currentScene" ></three-js-group-object>
  <three-responsive-transform current-obj-tag="TestVideoRoot" :three-transform-responsive-property-group="this.threeVideoContainerResponsivePropertyGroup" :original-size-obj-x="1.89" :original-size-obj-y="1"></three-responsive-transform>
  <three-video-container  :levitated-movement-length="0.4" :levitated-movement-frequency="0.4 " :three-basic-responsive-property-group=this.threeVideoContainerResponsivePropertyGroup video-object-tag="TestVideo" srcVideo="testVideo.mp4"
                          :offset-html-position-y=0
  > </three-video-container>


  <three-js-group-object obj-tag="C# logoRoot" parent-obj-tag="currentScene" ></three-js-group-object>
  <three-responsive-transform current-obj-tag="C# logoRoot" :three-transform-responsive-property-group="this.threeTextContainerResponsivePropertyGroup" :original-size-obj-x="1.89" :original-size-obj-y="1"></three-responsive-transform>
  <three-text-container :is-debug-ratio="true" background-color="green"  text-used="C#" text-object-tag="C# logo"
                         :three-text-responsive-property-group="this.threeTextContainerResponsivePropertyGroup"
                       :levitated-movement-frequency="0.4" :levitated-movement-length="0.4"
  ></three-text-container>
  <three-background-particles></three-background-particles>



  <p id="_titleVideo"> je suis le titre de la video </p>






  </template>

  <script >

  import ThreeScene from '../components/Three/ThreeScene.vue'
  import ThreeJsHtmlPositionLinker from "@/components/Three/ThreeJsHtmlPositionLinker.vue";
  import ThreeVideoContainer from "@/components/Three/Video/ThreeVideoContainer.vue";
  import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
  import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
  import {Vector3} from "@/composables/Vector3";
  import ThreePictureContainer from "@/components/Three/Picture/ThreePictureContainer.vue";
  import ThreeTextContainer from "@/components/Three/Text/ThreeTextContainer.vue";
  import {ThreeTextResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeTextResponsiveProperty";
  import ThreeJsGroupObject from "@/components/Three/ThreeJsGroupObject.vue";
  import ThreeResponsiveTransform from "@/components/Three/ThreeResponsiveTransform.vue";
  import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";

    export default {


      // eslint-disable-next-line vue/no-unused-components
  components:{
    ThreeBackgroundParticles,
    ThreeTextContainer,
    ThreeResponsiveTransform,
    ThreeJsGroupObject,
    ThreePictureContainer,
    ThreeVideoContainer,
    ThreeScene,
    ThreeJsHtmlPositionLinker
  },
      data(){
    return{
      threeVideoContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0.5,0.5),
              0,
              new Vector3(0.5,0.5,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.25,0.25,0.9),
              60,
              new Vector3(0.2,0.2,1)),
      ),
      threePictureContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0.5,0.5),
              0,
              new Vector3(0.5,0.5,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(1,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
      ),
      threeSecondPictureContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0.5,0.5),
              0,
              new Vector3(0.5,0.5,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.25,0.5,0.5),
              60,
              new Vector3(0.2,0.2,1)),
      ),
      threeTextContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeTextResponsiveProperty(
              new Vector3(0.25,0.5,0.5),
              60,
              new Vector3(0.2,0.2,1), 50),
          new ThreeTextResponsiveProperty(
              new Vector3(0.25,0.5,0.5),
              60,
              new Vector3(0.2,0.2,1), 250),
          new ThreeTextResponsiveProperty(
              new Vector3(0.25,0.5,0.5),
              60,
              new Vector3(0.25,0.5,0.5), 50),
          new ThreeTextResponsiveProperty(
              new Vector3(0.75,0.5,0.5),
              10,
              new Vector3(0.2,0.2,1), 250)),
    }
      },
  }
  </script>

  <style>



  #_testContainerText
  {
  position: absolute;
  top: 50%;
  width: 20%;
  height: 90%;
  left: 60%;
  background-size: cover;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    align-items: stretch;

    background-color:rgba(245,252,255,1) ;
  border-radius: 10px;
  }

  #_testText
  {

  text-align: center;
  color:#424242;
  font-size: 2em;
  font-family: MyRegular;
    flex-grow: 1;
  }

  #_testTitle
  {

    text-align: center;
    color:  #b21c1b;
    font-size: 3em;
    font-family: MyBold;
  }


  </style>


