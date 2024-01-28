<script>
import MacroContainer from "@/components/Container/MacroContainer.vue";
import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";
import ThreeScene from "@/components/Three/ThreeScene.vue";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";
import ThreePictureGrid from "@/components/Three/Grid/ThreePictureGrid.vue";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeGridProperty} from "@/composables/ResponsiveProperty/ThreeGridProperty";
import {Vector3} from "@/composables/Vector3";
import {Vector2} from "three";
import ResumeContainer from "@/components/Container/ResumeContainer.vue";
import {ContactLinkData} from "@/composables/ContactLinkData";
import ThreeJsHtmlPositionLinker from "@/components/Three/ThreeJsHtmlPositionLinker.vue";
export default {
  name: "ContactView",
  components: {
    ResumeContainer,
    RevealAnimationTrigger,
    ThreeScene, ThreeBackgroundParticles, //ThreeJsHtmlPositionLinker,
    ThreePictureGrid,
     MacroContainer},
  data(){
    return{
      contactContainerLinks:[new ContactLinkData("https://www.linkedin.com/in/paul-seren-rosso/", "LinkedIn"),
        new ContactLinkData("https://github.com/PaulSerenRosso","Github"),new ContactLinkData("https://twitter.com/tiondel_", "X")],
      threeGridResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.7,0.9),20,new Vector2(0.2,0.5), new Vector3(0.5,0.3,1),new Vector2(0.1,0.1)),
          new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.7,0.9),20,new Vector2(0.2,0.4), new Vector3(0.5,0.3,1),new Vector2(0.1,0.1)),
          new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.7,0.9),20,new Vector2(0.2,0.7), new Vector3(0.3,0.4,1),new Vector2(0.1,0.1)),
          new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.35,0.7,0.9),20,new Vector2(0.3,0.2), new Vector3(0.15,0.2,1),new Vector2(0.1,0.1))
      ),
    }
  },
  methods:{
    copyPasteMail(){
      const content = "kidufaren@gmail.com";
      // loading the content into our clipboard
      navigator.clipboard.writeText(content);
    }
  }

}
</script>

<template>

  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-background-particles></three-background-particles>
  <macro-container resize-event-key="ContactMacroContainer" :height-desktop="1" :height-mobile="2" :height-large-desktop="1" :height-tablet="2">
    <three-picture-grid :three-grid-responsive-property-group="this.threeGridResponsivePropertyGroup"
    :picture-srcs="['contactLogo/githubLogo.png','contactLogo/GmailLogo.jpg','contactLogo/linkedinLogo.png','contactLogo/XLogo.jpg']"
    macro-container-resize-event-key="ContactMacroContainer"
    base-tag="ContactLogo"></three-picture-grid>
    <div class="contact-text-container">
      <div v-for="(contactLinkData, index) in this.contactContainerLinks" :key="index">
        <a :id="'contact-text'+(index+1)" :href="contactLinkData.link">{{contactLinkData.text}}</a>
      </div>
      <div id="contact-text0" class="mail" data-name="serenrossopaul" data-domain="gmail" data-tld="com" @click="this.copyPasteMail"></div>
    </div>

    <div>
     <!-- <three-js-html-position-linker :offset-html-position-x="10" html-element-id-name="contact-text" ></three-js-html-position-linker> -->
    </div>

    <reveal-animation-trigger reveal-animation-trigger-event-key="FirstReveal" :top-tablet="0" :top-mobile="0" :top-large-desktop="0" :top-desktop="0"></reveal-animation-trigger>
  </macro-container>
<resume-container></resume-container>


</template>

<style scoped>
.contact-text-container{
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
  color: white;
}

.mail{

}

.mail:after{
  content: attr(data-name) "@" attr(data-domain) "." attr(data-tld);
}
</style>