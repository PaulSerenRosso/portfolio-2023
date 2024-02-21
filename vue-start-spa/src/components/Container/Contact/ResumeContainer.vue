<script>

import MainButton from "@/components/MainButton.vue";
import RevealAnimationTrigger from "@/components/RevealAnimationTrigger.vue";
import LettersAnimation from "@/components/Text/Animation/LettersAnimation.vue";

export default {
  name: "ResumeContainer",
  components: {LettersAnimation, RevealAnimationTrigger, MainButton}
}
</script>
<template>
  <div class="resume-container">
    <div class="resume-title-container">
      <letters-animation text-content="Look at my resume, download it !" key-event="FinalReveal"></letters-animation>
    </div>
    <a class="resume-button" :href="require('@/assets/'+'pdf/Paul_SEREN_ROSSO_Resume.pdf')" download="Paul_SEREN_ROSSO_Resume.pdf">
      <main-button  key-event="FinalReveal" :delay="2000">
        Get English Resume !
      </main-button>
    </a>
    <a class="resume-button" :href="require('@/assets/'+'pdf/Paul_SEREN_ROSSO_CV.pdf')" download="Paul_SEREN_ROSSO_CV.pdf">
      <main-button  key-event="FinalReveal" :delay="2000">
        Get French Resume !
      </main-button>
    </a>
    <reveal-animation-trigger reveal-animation-trigger-event-key="FinalReveal" :top-tablet="0" :top-mobile="0" :top-large-desktop="0" :top-desktop="0"></reveal-animation-trigger>
  </div>
</template>

<style scoped>
.resume-container{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 50%;
  justify-content: space-around;
}
.resume-button{
  width: 60%;
  display: block;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
}
.resume-title-container{
  width: 95%;
  font-size: 2rem;
  text-align: center;
  font-family: MyBold;
}


@media (min-width: 768px) {
  .resume-button{
    width: 40%;
  }
  .resume-container{

    height: 30%;

  }
}

@media (min-width: 1024px) {
  .resume-button{
    width: 25%;
  }
  .resume-container{

    height: 50%;

  }
}
</style>