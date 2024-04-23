<script >
import MacroContainer from "@/components/Container/MacroContainer.vue";
import {ContactLinkData} from "@/composables/ContactLinkData";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {ThreeGridProperty} from "@/composables/ResponsiveProperty/ThreeGridProperty";
import {Vector3} from "@/composables/Vector3";
import {Vector2} from "three";
import {ThreeJsHtmlPositionLinkerProperty} from "@/composables/ResponsiveProperty/ThreeJsHtmlPositionLinkerProperty";
import MainButton from "@/components/MainButton.vue";
import {ThreeContentType} from "@/composables/ThreeContentType";
import ThreeContentGrid from "@/components/Three/Grid/ThreeContentGrid.vue";

export default {
  name: "SocialNetworkContainer",
  computed: {
    ThreeContentType() {
      return ThreeContentType
    }
  },
  components: {ThreeContentGrid, MainButton, MacroContainer},
  data(){
    return{
      contactContainerLinks:[new ContactLinkData("https://www.linkedin.com/in/paul-seren-rosso/", "LinkedIn", 'contactLogo/linkedinLogo.jpg' ),
        new ContactLinkData("https://github.com/PaulSerenRosso","Github", "contactLogo/githubLogo.png"),new ContactLinkData("https://twitter.com/tiondel_", "X",'contactLogo/XLogo.jpg')],
      threeGridResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.5,0.5),20,new Vector2(0.4,0.07), new Vector3(0.3,0.15 ,0.5),new Vector2(0.1,0.1)),
          new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.5,0.5,0.5),20,new Vector2(0.4,0.07), new Vector3(0.3,0.15,0.5),new Vector2(0.1,0.1)),
          new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.4,0.7,0.5),20,new Vector2(0.4,0.2), new Vector3(0.15,0.2,0.5),new Vector2(0.1,0.1)),
          new ThreeGridProperty(new Vector3(1,1,1), new Vector3(0.4,0.7,0.5),20,new Vector2(0.4,0.2), new Vector3(0.15,0.2,0.5),new Vector2(0.1,0.1))
      ),
      threeJsHtmlPositionLinkerPropertyGroup:new ResponsivePropertyGroup(
          new ThreeJsHtmlPositionLinkerProperty(undefined,2),
          new ThreeJsHtmlPositionLinkerProperty(undefined,2),
          new ThreeJsHtmlPositionLinkerProperty(5,undefined),
          new ThreeJsHtmlPositionLinkerProperty(5,undefined),
      ),
      clipBoardAnimationTimer:undefined,
    }
  },
  methods:{
    copyPasteMail(){
      const content = 'serenrossopaul'+'@'+'gmail'+'.com';
      navigator.clipboard.writeText(content);
      if(this.clipBoardAnimationTimer === undefined) {
        this.launchClipBoardAnimationPopup()
      }
      else{
        clearTimeout(this.clipBoardAnimationTimer);
        this.clipBoardAnimationTimer = undefined;
        this.$refs.mailPopUp.classList.remove("mail-copy-pop-up-animation");
        void this.$refs.mailPopUp.offsetWidth;
        this.launchClipBoardAnimationPopup();
      }

    },
    launchClipBoardAnimationPopup(){
      this.$refs.mailPopUp.classList.add("mail-copy-pop-up-animation")
      this.clipBoardAnimationTimer = setTimeout(() => {
        this.$refs.mailPopUp.classList.remove("mail-copy-pop-up-animation");
        this.clipBoardAnimationTimer = undefined;
      }, 2500);
    }
  }
}
</script>

<template>
  <macro-container resize-event-key="ContactMacroContainer" :height-desktop="1" :height-mobile="2" :height-large-desktop="1" :height-tablet="2">

    <div >
      <div v-for="(contactLinkData, index) in this.contactContainerLinks" :key="index">
        <a class="contact-button" target="_blank" :id="'contact-text'+(index+1)" :href="contactLinkData.link">
        <main-button  :delay="500" :key-event="'contact-text'+(index+1)+'AnimationTrigger'">
          {{contactLinkData.text}}
        </main-button>
        </a>
      </div>
      <div id="contact-text0"  @click="this.copyPasteMail">
        <main-button class="mail-button" delay="500" :key-event="'contact-text0'+'AnimationTrigger'">
          <div class="mail" data-name="serenrossopaul" data-domain="gmail" data-tld="com" ></div>
        </main-button>
        <div ref="mailPopUp" class="mail-copy-pop-up"> Copy To Clipboard !</div>
      </div>
    </div>
    <three-content-grid macro-container-id="ContactMacroContainer" :content-types="[ThreeContentType.Picture,ThreeContentType.Picture,ThreeContentType.Picture,ThreeContentType.Picture]" :has-html-linker-grid="true" :base-id="'contact-text'" :three-js-html-position-linker-property-group="this.threeJsHtmlPositionLinkerPropertyGroup"  :three-grid-responsive-property-group="this.threeGridResponsivePropertyGroup"
                        :content-srcs="['contactLogo/GmailLogo.jpg', this.contactContainerLinks[0].linkPicture,this.contactContainerLinks[1].linkPicture,this.contactContainerLinks[2].linkPicture]"
                        macro-container-resize-event-key="ContactMacroContainer"
                        base-tag="ContactLogo"></three-content-grid>

  </macro-container>
</template>

<style scoped>

.mail-button{
  cursor: pointer;
}

.contact-button{
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
.mail-copy-pop-up{
background-color : #12173D;
  border-color: white;
  border-width: 0.2rem;
  border-radius: 0.1rem;
  border-style: dotted;
  padding: 1rem;
  color: white;
 text-align: center;
  opacity: 0;
  width: 50%;

  position: absolute;
left: 50%;
  top: -100%;
  transform: translateX(-50%) scale(0.7);
}

@keyframes reveal-animation {
  0%{
    opacity: 0;
    transform:  translateX(-50%) scale(0.7);
  }
  10%{
    transform: translateX(-50%) scale(1.1);
  }
  20%{
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
  80%{
    opacity: 1;
  }
  100%{
    transform: translateX(-50%) scale(1);
    opacity: 0;
}
}

.mail-copy-pop-up-animation{

  animation-name: reveal-animation;
  animation-duration: 2.5s;
}



</style>