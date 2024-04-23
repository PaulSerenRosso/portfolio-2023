<script>
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {
  addCreateSceneHandlerListener,
  addRemoveAtSceneChangedResponsiveListener,
  getApp
} from "@/composables/StoreHelper";
import {Vector2} from "@/composables/Vector2";
import {remap} from "@/composables/Math";

export default {
  name: "ThreeJsHtmlPositionLinker",
  data()
  {
    return{
      htmlElement:{},
      macroContainer:{},
      app : {},
    }
  },
    mounted() {
    this.app = getApp();
      this.htmlElement = document.getElementById(this.htmlElementIdName);
      this.htmlElement.style.position="absolute";
    if(this.isOutsideMacroContainer)
    {
      this.macroContainer = document.getElementById(this.macroContainerId);
      this.htmlElement.remove();
      document.getElementById("app").appendChild(this.htmlElement);
      addCreateSceneHandlerListener(()=>{this.htmlElement.remove()});
    }
      addRemoveAtSceneChangedResponsiveListener(this.placeHtmlElement);

    this.placeHtmlElement();
  },
  props: {
    threeJsHtmlPositionLinkerPropertyGroup:Object,
    htmlElementIdName: String,
    threeBasicResponsivePropertyGroup:ResponsivePropertyGroup,
    macroContainerId:String,
    isOutsideMacroContainer : Boolean
  },
  methods:{
    placeHtmlElement (){

      const currentProperty = this.threeBasicResponsivePropertyGroup.responsivePropertyGroup[this.$store.state.responsiveEventHandler.devicePlateformId];
      const currentPropertyForHtmlLinker = this.threeJsHtmlPositionLinkerPropertyGroup.responsivePropertyGroup[this.$store.state.responsiveEventHandler.devicePlateformId];
      var width = window.innerWidth, height = window.innerHeight;

      var pos = new Vector2(currentProperty.initialPosition.x,currentProperty.initialPosition.y);

      var scale = new Vector2(0,0);
      if(currentPropertyForHtmlLinker.offsetX !== undefined){
        scale.x += currentProperty.initialScale.x/2;
      }
      if(currentPropertyForHtmlLinker.offsetY !== undefined){
        scale.y += currentProperty.initialScale.y/2;
      }

      pos.x += scale.x ;
      pos.y +=  scale.y;
      pos.x *=100;
      pos.y *=100;

      if(currentPropertyForHtmlLinker.offsetX !== undefined){
        pos.x =  pos.x+currentPropertyForHtmlLinker.offsetX;
        this.htmlElement.style.transform ="translateY(-50%)"
      }
      if(currentPropertyForHtmlLinker.offsetY !== undefined){
        pos.y =  pos.y+currentPropertyForHtmlLinker.offsetY;
        this.htmlElement.style.transform ="translateX(-50%)"
      }
      if(this.isOutsideMacroContainer){

        pos.y += ((this.macroContainer.getBoundingClientRect().top+this.app.scrollTop)/this.app.clientHeight)*100;

      }

      this.htmlElement.style.top = pos.y+"%";
      this.htmlElement.style.left = pos.x+"%";


    }
  }
}
</script>

<template>
<p></p>
</template>

<style scoped>

</style>