<script>


import ProjectPageContainer from "@/components/Container/ProjectPage/ProjectPageContainer.vue";

export default {
  name: "EsquirelView",
  components: {ProjectPageContainer},

}
</script>

<template>
<project-page-container project-name="Esquirel"
                        project-team="4 Game Designers, 2 Game Programmers, 4 Game Artists / 10 Game Programmers"
                        project-timeline="November 2022 to January 2023"
                        project-video-src="testVideo.mp4">

  <div>
    I have completed <span class="bold-content">two years of Game Design</span> at Rubika,
    I gained an understanding of <span class="bold-content">game designers roles and needs</span>.
  </div>
    I endeavour to align my <span class="bold-content">code and tools with their requirements</span>.
  <div>
    I put my skills in <span class="bold-content">project management and collaborative programming</span>
    into practice, leading teams of up to 10 people and <span class="bold-content">working closely with designers
    and artists</span>.
  </div>
    <div>
    Finally, I regularly use version control systems like <span class="bold-content">Git or
    Perforce and even pair programming</span>.
  </div>

</project-page-container>
</template>

<style scoped>

</style>