<template>
  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-background-particles></three-background-particles>
 <welcome-container></welcome-container>
  <about-me-container></about-me-container>
  <end-redirector  link="keyProjects" text-content="See my projects for discovering more "></end-redirector>
  </template>
  <script >

  import ThreeScene from '../components/Three/ThreeScene.vue'


  import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";
 import WelcomeContainer from "@/components/Container/HomeView/WelcomeContainer.vue";
 import AboutMeContainer from "@/components/Container/HomeView/AboutMe/AboutMeContainer.vue";
  import EndRedirector from "@/components/Container/EndRedirector.vue";


    export default {


      // eslint-disable-next-line vue/no-unused-components
  components:{
    EndRedirector,
    AboutMeContainer,
    ThreeBackgroundParticles,
    WelcomeContainer,
    ThreeScene,
  },
      data(){
    return{
    }
      },
  }
  </script>

  <style>






  </style>


