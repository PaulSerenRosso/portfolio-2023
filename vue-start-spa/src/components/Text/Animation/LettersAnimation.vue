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
      lettersElements:[],
      delayBetweenLettersCreation:20,
      intervalTimer:null,
    }
  },
  mounted() {
      addEventListener(this.launchLettersAnimation,this.keyEvent);
  },
  methods:{
    launchLettersAnimation(){
      let isRegular = true;
     const letters= this.textContent.split("");
      for (let i = 0; i <letters.length; i++) {
        if(letters[i] === "`"){
          isRegular = !isRegular;
          continue;
        }
       const currentLetterElement = document.createElement("div");
        currentLetterElement.textContent =  letters[i]+"";
        if(!isRegular){
          currentLetterElement.style.fontFamily = "MyBlack";
          currentLetterElement.style.backgroundColor ="rgba(178,28,27,0.4)";

        }
    
    
        this.$refs.lettersContainer.appendChild(currentLetterElement);

        this.lettersElements.push({letterElement:currentLetterElement, isBlack:isRegular});
        currentLetterElement.classList.add("letter-hidden");
      }
      this.intervalTimer = setInterval(this.animateLetter,this.delayBetweenLettersCreation);
      addCreateSceneHandlerListener(()=>clearInterval(this.intervalTimer));
    },
    animateLetter(){
      const currentLetterElement = this.lettersElements.shift();
      if(currentLetterElement === undefined){
        clearInterval(this.intervalTimer);
      }
     
      else{ 
        currentLetterElement.letterElement.classList.add("letter-animation");
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

}
.letter-hidden{
 opacity: 0;
  display:inline;
  color: #424242;


}
.letter-animation{
  animation-name: reveal-animation-letter;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
 
}

@keyframes reveal-animation-letter{
0%{
  opacity: 0;
 clip-path: circle(0);
  color: #12173D;

}
  50%{
    opacity: 1;
}
  70%{
    clip-path: circle(100%);
  }
100%{
opacity: 1;
  color: #FFFFFFFF;


}
}



</style>