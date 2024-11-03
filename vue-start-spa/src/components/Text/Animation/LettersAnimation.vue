<script>
import {addCreateSceneHandlerListener, addEventListener} from "@/composables/StoreHelper";

export default {
  name: "lettersAnimation",
  props:{
    textContent:String,
    keyEvent:String,

  },
  data(){
    return{
      letters:[],
      delayBetweenLettersCreation:40,
      intervalTimer:null,
    }
  },
  mounted() {
      addEventListener(this.launchLettersAnimation,this.keyEvent);
  },
  methods:{
    launchLettersAnimation(){

     this.letters= this.textContent.split("");

      this.intervalTimer = setInterval(this.animateLetter,this.delayBetweenLettersCreation);
      addCreateSceneHandlerListener(()=>clearInterval(this.intervalTimer));
    },
    animateLetter(){
      const currentLetterElement = this.letters.shift();
      if(currentLetterElement === undefined){
        clearInterval(this.intervalTimer);
      }
     
      else{
        this.$refs.lettersContainer.textContent = this.$refs.lettersContainer.textContent+currentLetterElement;
      }
    }
  }
}
</script>
<template>
  <div class="letters-container" ref="lettersContainer" >

  </div>
</template>
<style>

.letters-container {
color: white;
  text-shadow: 5px 2px #12173DFF, 2px 4px #12173DFF, 3px 5px #12173DFF;
}
.letter-hidden{
 opacity: 0;
  display:inline;
  color: #424242;
}



</style>