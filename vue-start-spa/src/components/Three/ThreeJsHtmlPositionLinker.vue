<script>
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {addRemoveAtSceneChangedResponsiveListener} from "@/composables/StoreHelper";
import {Vector2} from "@/composables/Vector2";
import {remap} from "@/composables/Math";

export default {
  name: "ThreeJsHtmlPositionLinker",
  data()
  {
    return{
      htmlElement:{},
    }
  },
    mounted() {
    this.htmlElement = document.getElementById(this.htmlElementIdName);
    this.htmlElement.style.position="absolute";
    this.htmlElement.style.transform ="translateX(-50%)"
      addRemoveAtSceneChangedResponsiveListener(this.placeHtmlElement);
    this.placeHtmlElement();
  },
  props: {
    offsetHtmlPositionY:Number,
    offsetHtmlPositionX:Number,
    htmlElementIdName: String,
    threeBasicResponsivePropertyGroup:ResponsivePropertyGroup
  },
  methods:{
    placeHtmlElement (){
      const currentProperty = this.threeBasicResponsivePropertyGroup.responsivePropertyGroup[this.$store.state.responsiveEventHandler.devicePlateformId];

      var width = window.innerWidth, height = window.innerHeight;
      var pos = new Vector2(currentProperty.position.x,currentProperty.position.y) ;
      if(this.offsetHtmlPositionX !== undefined){
        pos.x += currentProperty.scale.x/2;
      }
      if(this.offsetHtmlPositionY !== undefined){
        pos.y -= currentProperty.scale.y/2;
      }
      pos.x = remap(pos.x, -1,1,0,1) * width;
      pos.y =  remap(pos.y, -1,1,1,0 ) * height ;

      if(this.offsetHtmlPositionX !== undefined){
        pos.x =  pos.x+this.offsetHtmlPositionX;
      }
      if(this.offsetHtmlPositionY !== undefined){
        pos.y =  pos.y+this.offsetHtmlPositionY;
      }

      this.htmlElement.style.top = pos.y+"px";
      this.htmlElement.style.left = pos.x+"px";

    }
  }
}
</script>

<template>
<p></p>
</template>

<style scoped>

</style>