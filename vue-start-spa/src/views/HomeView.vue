<template>
  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-background-particles></three-background-particles>
 <welcome-container></welcome-container>
  <about-me-container></about-me-container>
<skills-container></skills-container>
  <!-- Write your comments here

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

  <panel-container reveal-animation-trigger-event-key="TestAnimationEvent" :panel-container-responsive-property-group="this.panelContainerResponsivePropertyGroup">
    <panel-text :is-red="true" :is-title="true"  >"About me, What I am ?"</panel-text>
    <panel-text>"Lorem ipsum dolor
      <panel-text :is-in-line="true" :is-red="true"  >test</panel-text>
      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</panel-text>
    <panel-text>amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</panel-text>
  </panel-container>
  <reveal-animation-trigger :is-debug="true" :top-desktop="50" :top-large-desktop="150" :top-mobile="50" :top-tablet="50" reveal-animation-trigger-event-key="TestAnimationEvent"></reveal-animation-trigger>
  <div id="_testouille">hihi</div>
  <three-js-html-position-linker   :three-basic-responsive-property-group=this.threeSecondPictureContainerResponsivePropertyGroup
                                   html-element-id-name="_testouille"
                                   :offset-html-position-y=10 ></three-js-html-position-linker>



  <three-js-group-object obj-tag="C# logoRoot" parent-obj-tag="currentScene" ></three-js-group-object>
  <three-responsive-transform current-obj-tag="C# logoRoot" :three-transform-responsive-property-group="this.threeTextContainerResponsivePropertyGroup" :original-size-obj-x="1.89" :original-size-obj-y="1"></three-responsive-transform>
  <three-text-container :is-debug-ratio="true" background-color="green"  text-used="C#" text-object-tag="C# logo"
                         :three-text-responsive-property-group="this.threeTextContainerResponsivePropertyGroup"
                       :levitated-movement-frequency="0.4" :levitated-movement-length="0.4"
  ></three-text-container>




  <p id="_titleVideo"> je suis le titre de la video </p>



-->


  </template>

  <script >
 // 3 components background text 1 text 2 avec animation
 // 1 componsent de trigger d'animation responsive et scroll
 // 1 component background left, top, width, down
 // avoir un component section générique
 // avoir un component section spé qui contient le generique et avec tout le détail des data

  import ThreeScene from '../components/Three/ThreeScene.vue'
  import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
  import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
  import {Vector3} from "@/composables/Vector3";
  import {ThreeTextResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeTextResponsiveProperty";
  import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";
 import WelcomeContainer from "@/components/Container/HomeView/WelcomeContainer.vue";
 import AboutMeContainer from "@/components/Container/HomeView/AboutMe/AboutMeContainer.vue";
 import SkillsContainer from "@/components/Container/HomeView/Skills/SkillsContainer.vue";

    export default {


      // eslint-disable-next-line vue/no-unused-components
  components:{
    SkillsContainer,

    AboutMeContainer,
    ThreeBackgroundParticles,
    WelcomeContainer,
    ThreeScene,
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
              new Vector3(0.5,0.5,0.5),
              10,
              new Vector3(0.2,0.2,1), 250)),
    }
      },
  }
  </script>

  <style>






  </style>


