<script>
import { Vector3} from "three";


export default {
  name: "ThreeJsHtmlPositionLinker",
  data()
  {
    return{
      htmlElement:{},

    }

  },
  activated() {
    console.log("activated");
    this.htmlElement = document.getElementById(this.htmlElementIdName);
    this.htmlElement.style.position="absolute"
     this.$store.commit('addEventToDynamicObject',{dynamicObjectName:this.dynamicObjectName,
      onStartPositionChanged:(animatedObject)=>{

        var width = window.innerWidth, height = window.innerHeight;
        var widthHalf = width / 2, heightHalf = height / 2;
        var pos = new Vector3(animatedObject.startPosition.x,animatedObject.startPosition.y,animatedObject.startPosition.z) ;
        pos.project(this.$store.state.camera);
        pos.x = ( pos.x * widthHalf ) + widthHalf;
        pos.y = - ( pos.y * heightHalf ) + heightHalf;
        pos.x = pos.x+ this.offsetHtmlPositionX;
        pos.y =  pos.y+this.offsetHtmlPositionY;
        this.htmlElement.style.top = pos.y+"px";
        this.htmlElement.style.left = pos.x+"px";

    }});

  },
  props: {
    offsetHtmlPositionX:Number,
    offsetHtmlPositionY:Number,
    dynamicObjectName:String,
    htmlElementIdName: String,
  },
}
</script>

<template>
<p></p>
</template>

<style scoped>

</style>